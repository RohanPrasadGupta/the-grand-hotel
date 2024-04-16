const Cabin = require("../models/cabinModel");
const mergerController = require("./mergerController");

exports.getAllCabin = mergerController.getAllDoc(Cabin);
exports.createCabin = mergerController.createOne(Cabin);
exports.getCabin = mergerController.getOne(Cabin);
exports.deleteCabin = mergerController.deleteOne(Cabin);

// exports.getAllCabin = async (req, res) => {
//   try {
//     const cabins = await Cabin.find();
//     if (!cabins) throw new Error("No cabins Found");

//     res.status(200).json({
//       status: "success",
//       results: cabins.length,
//       data: cabins,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "failed",
//       message: err.message,
//     });
//   }
// };

// exports.createCabin = async (req, res) => {
//   try {
//     const cabin = await Cabin.create(req.body);
//     if (!cabin) {
//       throw new Error("No document found for the given ID");
//     }
//     res.status(200).json({
//       status: "success",
//       data: {
//         data: cabin,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "failed",
//       message: err.message,
//     });
//   }
// };
