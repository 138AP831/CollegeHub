# TODO: Correct Backend Files to Match Frontend

## 1. Update Authentication
- [x] Update `authController.js` to accept `username` instead of `email` and handle `role` in login request

## 2. Update User Model
- [x] Update `User.js` model to ensure fields match frontend expectations (e.g., `collegeEmail` vs `username`, add missing fields if needed)

## 3. Create Dashboard Controller and Routes
- [x] Create `dashboardController.js` with endpoints for attendance, timetable, announcements, stats
- [x] Create `dashboardRoutes.js` for dashboard API routes

## 4. Create Chat Controller and Routes
- [x] Create `chatController.js` with endpoints for chat messages, rooms, etc.
- [x] Create `chatRoutes.js` for chat API routes

## 5. Create Issue Controller and Routes
- [x] Create `issueController.js` with CRUD operations for issues, audit logs, file uploads
- [x] Create `issueRoutes.js` for issue management API routes

## 6. Update Server Configuration
- [x] Update `server.js` to include new routes and ensure proper middleware

## 7. Testing and Verification
- [ ] Test all new API endpoints
- [ ] Verify frontend-backend integration
