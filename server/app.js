const express = require("express");
const cors = require("cors");
const { runConnection, getDatabase } = require("./config/mongoConnection");
const app = express();
const router = require("./routers/index");
const PORT = process.env.PORT || 4001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

runConnection()
  .then(() => {
    app.listen(PORT, function (err) {
      if (err) console.log("Error in server setup");
      console.log("Server listening on PORT", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
