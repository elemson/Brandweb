const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const hpp = require("hpp");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const errorHandler = require("./middleware/error");
const path = require("path");

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

//Sanitize data
app.use(mongoSanitize());

//set security headers
app.use(helmet());

// Prevent XSS attcks
app.use(xss());

//Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10mins
  max: 100,
});

app.use(limiter);

//Prevent http param poluution
app.use(hpp());

//Enable CORS
app.use(cors());

//Mount routers
app.use("/api/v1/auth", auth);

app.use(errorHandler);

//Serve static assets if in prpduction
if (process.env.NODE_ENV == "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

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
