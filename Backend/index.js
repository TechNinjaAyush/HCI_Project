const express = require("express");
const cors = require("cors");
const app = express();
require("./config.js");
const Product = require("./product.js");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credential: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("works");
});

app.post("/UT-records", async (req, resp) => {
  const { subject, marks } = req.body;

  console.log("Subject:", subject);
  console.log("Marks:", marks);

  // Create a new product instance with the request body
  let data = new Product({subject,marks});
  
  try {
    // Save the data and then send the response once
    let result = await data.save();
    console.log(result);
    
    // Responding after the save operation
    resp.json({
      message: "Data Received Successfully",
      subject: subject,
      marks: marks,
      result: result
    });
  } catch (error) {
    // Handle error if saving fails
    resp.status(500).json({
      message: "An error occurred while saving data",
      error: error.message
    });
  }
});

app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});
