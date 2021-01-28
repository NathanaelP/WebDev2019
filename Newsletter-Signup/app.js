//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
// const client = require("@mailchimp/mailchimp_marketing"); //Added code

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
})

// client.setConfig({ //added code
//   apiKey: "d5a9465478c239fbe1a4fb4d935cf9d9-us7",
//   server: "https://us7.api.mailchimp.com/3.0/lists/4293427dde",
// });

app.post("/", function(req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merg_field: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us7.api.mailchimp.com/3.0/lists/4293427dde";
  const options = {
    method: "POST",
    auth: "Nathanael:d5a9465478c239fbe1a4fb4d935cf9d9-us7"
  };

  const request = https.request(url, options, function(response) {
    if (response.statusCode === 200){
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }


    response.on("data", function(data) {
      console.log(JSON.parse(data));
    })
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", function(req, res){
  res.redirect("/");
})


app.listen(process.env.PORT || 3000, function(req, res) {
  console.log("App started on port 3000");
});

// API apiKey
// d5a9465478c239fbe1a4fb4d935cf9d9-us7

// List idea
// 4293427dde
