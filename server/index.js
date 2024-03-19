const express = require("express");
const cors = require("cors");
require("./db/db");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
const uploadRouter = require("./routes/upload");
const deleteRouter = require("./routes/deleteFiles");
const userRouter = require("./routes/auth");
const subscriptionRouter = require("./routes/subscription");

app.use("/files", uploadRouter);
app.use("/file-delete", deleteRouter);
app.use("/user", userRouter);
app.use("/subscription", subscriptionRouter);

app.listen(port, () => {
  console.log("Server running on port " + port);
});
