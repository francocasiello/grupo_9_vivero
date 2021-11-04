const express = require("express")
const app = express();
const path = require("path")

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.set("view engine", "ejs");
app.set("views", "views");


app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});


const mainRouter = require("./src/routes/mainRouter");
app.use("/", mainRouter);
