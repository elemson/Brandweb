const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-moongo-sanitize");
const errorHandler = require("./middleware/error");

const connectDB = require("./config/db");
//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

//Route Files
const auth = require("./routes/auth");

const app = express();

//Body Parser
app.use(express.json());

//Cookie parser
app.use(cookieParser());

// app.get("/api/v1/bootcamps", (req, res) => {
//   res.status(200).json({ success: true, msg: "show all" });
// });

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(mongoSanitize());

//Mount routers
app.use("/api/v1/auth", auth);

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
