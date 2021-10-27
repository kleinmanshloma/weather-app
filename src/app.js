const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT | 3000;

//define path
const publickDirectoryPath = path.join(__dirname, "../publick");
const viewPath = path.join(__dirname, "../templets/views");
const partialsPath = path.join(__dirname, "../templets/partials");

//set up handle bars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publickDirectoryPath));

app.get("", (req, res) => {
  res.render("indax", {
    title: "sk web developer Indax",
    me: "shloma kleinman!",
    footer: "shloma kleinman sk web dev",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "sk web developer About",
    me: "shloma kleinman!",
    footer: "shloma kleinman sk web dev",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "we can try to help you!",
    title: "sk web developer Help",
    me: "shloma kleinman",
    footer: "shloma kleinman sk web dev",
  });
});

app.get("/weather-app", (req, res) => {
  res.render("weather-app", {
    forcaset: 47 + "degrees",
    location: "antwerpen",
    title: "sk web developer Weather",
    me: "shloma kleinman",
    footer: "shloma kleinman sk web dev",
  });
});

app.get("/weather-app/help", (req, res) => {
  res.render("weather-app", {
    forcaset: 47 + "degrees",
    location: "antwerpen a new",
    title: "sk web developer Weather",
    me: "shloma kleinman",
    footer: "shloma kleinman sk web dev",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: 404,
    404: "My 404 not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: 404,
    404: "My 404 page",
  });
});

app.listen(port, () => {
  console.log("server is up on" + port + "port.");
});
