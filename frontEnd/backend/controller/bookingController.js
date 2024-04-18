const Booking = require("../models/bookingModel");
const mergeController = require("./mergerController");

exports.getAllBookings = mergeController.getAllDoc(Booking);
exports.createBooking = mergeController.createOne(Booking);
exports.getBooking = mergeController.getOne(Booking);

// exports.getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     if (!bookings) {
//       throw new Error("No bookings Found");
//     }

//     res.status(200).json({
//       status: "success",
//       results: bookings.length,
//       data: bookings,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "failed",
//       message: err.message,
//     });
//   }
// };

// exports.createBooking = async (req, res) => {
//   try {
//     const booking = await Booking.create(req.body);
//     if (!booking) {
//       throw new Error("No settings found for the given ID");
//     }
//     res.status(200).json({
//       status: "success",
//       data: {
//         booking,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "failed",
//       message: err.message,
//     });
//   }
// };

// exports.getBooking = async (req, res) => {
//   try {
//     const booking = await Booking.findById(req.params.id);
//     if (!booking) {
//       throw new Error("No booking found for the given ID");
//     }
//     res.status(200).json({
//       status: "success",
//       data: {
//         booking,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "failed",
//       message: err.message,
//     });
//   }
// };
