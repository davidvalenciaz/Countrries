import express from "express";
import mongoose from "mongoose";
import router from "./routes/server";

// settings
const app = express();
const port = 9000;

// middlewares
app.use(express.json());
app.use("/country", router);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect("mongodb+srv://Paises:4910247Jr@cluster0.5ocwqrw.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));
