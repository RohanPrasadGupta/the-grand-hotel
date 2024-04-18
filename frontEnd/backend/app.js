const express = require("express");
const userRouter = require("./Routers/userRouter");
const cabinRouter = require("./Routers/cabinRouter");
const guestsRouter = require("./Routers/guestsRouter");
const settingRouter = require("./Routers/settingRouter");
const bookingRouter = require("./Routers/bookingRouter");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

// app.use(
//   cors({
//     origin: "http://127.0.0.1:3000", // Allow requests from this origin
//   })
// );

app.use((req, res, next) => {
  console.log("Hellow from middle ware");
  next();
});

app.use("/api/users/v1/", userRouter);
app.use("/api/cabin/v1/", cabinRouter);
app.use("/api/guests/v1/", guestsRouter);
app.use("/api/setting/v1/", settingRouter);
app.use("/api/booking/v1/", bookingRouter);

app.get("/", (req, res) => {
  res.send("hellow World!");
});

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `cannot find ${req.originalUrl} on this site`,
  });
  next();
});

module.exports = app;