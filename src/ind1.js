const express = require("express");
const app = express();
const path = require("path");
const collection = require("./mong");


// Set up the view engine and views directory
const templatePath = path.join(__dirname, "templates");
app.use(express.json());

app.use(express.static('public'));
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
    res.render("hos");
  });



  app.post("/", async (req, res) => {
    const data = {
      name: req.body.name,
      contactNumber: req.body.contactNumber,
      MailId:req.body.MailId,
      BookingDate:req.body.BookingDate,
    };
  
   
      await collection.create(data);
    
    
    
  });




  const port = 4572;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

module.exports=app;