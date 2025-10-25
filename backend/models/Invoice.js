const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true, unique: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  academicYear: { type: String, required: true },
  semester: { type: Number, required: true },
  items: [{
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    category: { type: String, enum: ['tuition', 'exam', 'library', 'lab', 'other'], default: 'other' }
  }],
  totalAmount: { type: Number, required: true },
  paidAmount: { type: Number, default: 0 },
  balance: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['unpaid', 'partially_paid', 'paid', 'overdue'], default: 'unpaid' },
  paymentHistory: [{
    amount: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now },
    paymentMethod: { type: String, enum: ['cash', 'card', 'bank_transfer', 'online'], required: true },
    transactionId: { type: String },
    receivedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }],
  generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);
