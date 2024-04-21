const mongoose = require("mongoose");

const bookingModel = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now() },
  startDate: { type: Date },
  endDate: { type: Date },
  numNights: { type: Number },
  numGuests: { type: Number },
  CabinPrice: { type: Number },
  extraPrice: { type: Number },
  totalPrice: { type: Number },
  status: { type: String },
  hasBreakFast: { type: Boolean },
  isPaid: { type: Boolean },
  observation: { type: String },
  cabinId: { type: String },
  guestId: { type: String },
});

const Booking = mongoose.model("booking", bookingModel);

module.exports = Booking;
