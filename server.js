const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

//Route Files
const app = express();

app.use(express.json());
// app.get("/api/v1/bootcamps", (req, res) => {
//   res.status(200).json({ success: true, msg: "show all" });
// });

//Dev logging middleware
if (process.env.NODE_ENV === "develoment") {
  app.use(morgan("dev"));
}

app.use(errorHandler);
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);

  //Close sever & exit proess
  server.close(() => process.exit(1));
});
