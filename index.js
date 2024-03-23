require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");

const port = process.env.PORT || 5000;

// Connect to mongodb
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => console.log(err));

// Start express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
