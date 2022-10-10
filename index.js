const express = require("express"),
    app = express();

//setting view engine to ejs
app.set("view engine", "ejs");

//route for index page
app.get("/", function (req, res) {

   res.render("index");
});

app.get("/home", function (req, res) {

   res.render("home");
});

app.get("/lecturer", function (req, res) {
   var characters = [
      {
         course: 'APT3040',
         title: "Java Programming"
      },
      {
         course: 'APP4035',
         title: "Framweorks"
      },
      {
         course: 'APT3060',
         title: "Mobile Programming"
      },
      {
         course: 'APT3020',
         title: "Artificial Intelligence"
      }
   ];
 const subheading = "The Courses you Teach";

   res.render("lecturer", {
      characters: characters,
      subheading: subheading
   });
});

//route for student page
app.get("/student", function (req, res) {
   res.render("student");
});

app.listen(3000, function () {
   console.log("Server is running on port 3000 ");
});