exports.getAllDoc = (Model) => async (req, res) => {
  try {
    const docs = await Model.find();
    if (!docs) {
      throw new Error("No documents Found");
    }
    res.status(200).json({
      docs,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.createOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.create(req.body);
    if (!doc) {
      throw new Error("No document found for the given ID");
    }
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.getOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      throw new Error("No booking found for the given ID");
    }
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};
