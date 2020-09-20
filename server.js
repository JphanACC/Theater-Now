/* external modules*/
const express = require("express");
const methodOverride = require("method-override");
const path = require("path");


/* internal modules*/
const db = require("./models");
const controllers = require("./controllers");

/*Instanced Modules */
const app = express();

/* Config */
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* middleware */
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

/* Routes */
// NOTE Home Page
app.get("/", (req, res) => {
    res.render("index", { title: 'Home Page Test' });
});


//Admin Home
app.use("/admin", controllers.admin);



/* Server Listener*/
app.listen(PORT, function() {
    console.log(`Server is listening to on http://localhost:${PORT}`);
});