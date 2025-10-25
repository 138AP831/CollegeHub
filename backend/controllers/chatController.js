const GeneralChat = require('../models/GeneralChat');
const IssueChat = require('../models/IssueChat');
const User = require('../models/User');

// Get chat rooms for a user based on role
exports.getChatRooms = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    let chatRooms = [];

    if (user.role === 'student') {
      chatRooms = [
        { id: 1, name: "Prof. Smith (DBMS)", lastMessage: "Assignment deadline extended", time: "10:30 AM", unread: 2 },
        { id: 2, name: "Dr. Johnson (Networks)", lastMessage: "Lab session tomorrow", time: "9:45 AM", unread: 0 },
        { id: 3, name: "Prof. Williams (AI)", lastMessage: "Project presentations next week", time: "Yesterday", unread: 1 },
        { id: 4, name: "Class Group - CS3A", lastMessage: "Alex: Study session at 4 PM?", time: "2 hours ago", unread: 8 },
      ];
    } else if (user.role === 'teacher') {
      chatRooms = [
        { id: 1, name: "CS3A - Database Systems", lastMessage: "Good morning class!", time: "8:30 AM", unread: 5 },
        { id: 2, name: "Alex Kumar (Student)", lastMessage: "Question about assignment 3", time: "10:15 AM", unread: 1 },
        { id: 3, name: "Sarah Chen (Student)", lastMessage: "Thank you professor!", time: "Yesterday", unread: 0 },
        { id: 4, name: "CS3B - Networks", lastMessage: "Lab materials uploaded", time: "2 days ago", unread: 2 },
      ];
    } else if (user.role === 'admin') {
      chatRooms = [
        { id: 1, name: "Issue #4103MO - Alex Kumar", lastMessage: "Backend issue resolved", time: "11:20 AM", unread: 1 },
        { id: 2, name: "Issue #9634MD - Sarah Chen", lastMessage: "Need update on library access", time: "10:15 AM", unread: 2 },
        { id: 3, name: "Prof. Smith", lastMessage: "Projector malfunction in Room 305", time: "Yesterday", unread: 0 },
        { id: 4, name: "Issue #7912HW - John Doe", lastMessage: "Facility issue update requested", time: "2 days ago", unread: 1 },
      ];
    }

    res.json(chatRooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get messages for a specific chat room
exports.getChatMessages = async (req, res) => {
  try {
    const { roomId } = req.params;
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    let messages = [];

    if (user.role === 'student') {
      const room = [
        { id: 1, name: "Prof. Smith (DBMS)", lastMessage: "Assignment deadline extended", time: "10:30 AM", unread: 2 },
        { id: 2, name: "Dr. Johnson (Networks)", lastMessage: "Lab session tomorrow", time: "9:45 AM", unread: 0 },
        { id: 3, name: "Prof. Williams (AI)", lastMessage: "Project presentations next week", time: "Yesterday", unread: 1 },
        { id: 4, name: "Class Group - CS3A", lastMessage: "Alex: Study session at 4 PM?", time: "2 hours ago", unread: 8 },
      ].find(r => r.id == roomId);

      if (roomId == 4) { // Class Group
        messages = [
          { id: 1, sender: "Alex Kumar", content: "Hey everyone! Study session at 4 PM today?", time: "2:00 PM", isOwn: false },
          { id: 2, sender: "You", content: "Count me in! Which topic?", time: "2:05 PM", isOwn: true },
          { id: 3, sender: "Sarah Chen", content: "I'm in too! Let's do Chapter 5", time: "2:10 PM", isOwn: false },
          { id: 4, sender: "You", content: "Perfect! See you at the library", time: "2:12 PM", isOwn: true },
        ];
      } else {
        messages = [
          { id: 1, sender: room?.name.split(" ")[0], content: "Good morning! Today's lecture will cover database normalization forms.", time: "9:00 AM", isOwn: false },
          { id: 2, sender: "You", content: "Good morning professor! Will we have a quiz?", time: "9:05 AM", isOwn: true },
          { id: 3, sender: room?.name.split(" ")[0], content: "Yes, there will be a short quiz next week. I'm also extending Assignment 3 deadline to Friday.", time: "9:15 AM", isOwn: false },
          { id: 4, sender: "You", content: "Thank you professor! That helps a lot.", time: "9:20 AM", isOwn: true },
        ];
      }
    } else if (user.role === 'teacher') {
      const room = [
        { id: 1, name: "CS3A - Database Systems", lastMessage: "Good morning class!", time: "8:30 AM", unread: 5 },
        { id: 2, name: "Alex Kumar (Student)", lastMessage: "Question about assignment 3", time: "10:15 AM", unread: 1 },
        { id: 3, name: "Sarah Chen (Student)", lastMessage: "Thank you professor!", time: "Yesterday", unread: 0 },
        { id: 4, name: "CS3B - Networks", lastMessage: "Lab materials uploaded", time: "2 days ago", unread: 2 },
      ].find(r => r.id == roomId);

      if (roomId == 1) { // Class group
        messages = [
          { id: 1, sender: "You", content: "Good morning class! Please review Chapter 4 before next session.", time: "8:30 AM", isOwn: true },
          { id: 2, sender: "Alex Kumar", content: "Good morning professor! Will do.", time: "8:35 AM", isOwn: false },
          { id: 3, sender: "Sarah Chen", content: "Professor, can you clarify the third example from yesterday's lecture?", time: "9:00 AM", isOwn: false },
          { id: 4, sender: "You", content: "Of course! Let me explain it again in simpler terms...", time: "9:05 AM", isOwn: true },
        ];
      } else {
        messages = [
          { id: 1, sender: room?.name.split(" ")[0], content: "Professor, I have a question about Assignment 3, Question 5.", time: "10:00 AM", isOwn: false },
          { id: 2, sender: "You", content: "Sure! What's your question?", time: "10:05 AM", isOwn: true },
          { id: 3, sender: room?.name.split(" ")[0], content: "I'm confused about the normalization process in that scenario.", time: "10:10 AM", isOwn: false },
          { id: 4, sender: "You", content: "Let me walk you through it step by step...", time: "10:15 AM", isOwn: true },
        ];
      }
    } else if (user.role === 'admin') {
      messages = [
        { id: 1, sender: "Alex Kumar", content: "Hello, I'd like to follow up on my issue regarding the backend editor.", time: "11:00 AM", isOwn: false },
        { id: 2, sender: "You", content: "Hi! I've reviewed your issue. We've assigned it to our development team.", time: "11:10 AM", isOwn: true },
        { id: 3, sender: "Sarah Chen", content: "Great! Do you have an estimated timeline for the fix?", time: "11:15 AM", isOwn: false },
        { id: 4, sender: "You", content: "We're targeting completion by end of this week. I'll keep you updated on progress.", time: "11:20 AM", isOwn: true },
      ];
    }

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Send a message to a chat room
exports.sendMessage = async (req, res) => {
  try {
    const { roomId } = req.params;
    const { content } = req.body;
    const userId = req.user.id;

    // In a real implementation, you would save this to the database
    // For now, we'll just return success
    console.log(`Message sent to room ${roomId} by user ${userId}: ${content}`);

    res.json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
