const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true }, // sparse allows multiple null values
    mobile: { type: String, required: true, unique: true },
    source: { type: mongoose.Schema.Types.ObjectId, ref: 'Setting' },
    location: { type: String },
    interestedproduct: { type: String },
    leadvalue: { type: Number },
    whatsapp: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, default: 'new' }, // e.g., 'new', 'open', 'converted', 'rejected'
    priority: { type: String }, // e.g., 'hot', 'warm', 'cold'
    nextFollowUp: { type: Date },
    nextfollowupupdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userDetails: [{
        leadFormId: { type: mongoose.Schema.Types.ObjectId, ref: 'Leadform' },
        value: { type: String }
    }],
}, { timestamps: true });

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
