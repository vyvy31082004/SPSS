const mongoose = require('mongoose');

const printHistorySchema = new mongoose.Schema({
    printerId: { type: String, required: true },
    printerName: { type: String, required: true },
    userName: { type: String, required: true },
    fileName: { type: String, required: true },
    pages: { type: Number, required: true },
    paperSize: { type: String, required: true },
    fileType: { type: String, required: true },
    printedAt: { type: Date, required: true },
}, {
    timestamps: false,
    versionKey: false,
});

module.exports = mongoose.model('PrintHistory', printHistorySchema);

