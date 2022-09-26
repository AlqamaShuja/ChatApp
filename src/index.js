const http = require("http");
const { join } = require("path");
const express = require("express");
const socketio = require("socket.io");


const app = express();
const server = http.createServer(app);
const io = socketio(server);
const pathToPublic = join(__dirname, "../public");


// Middleware
app.use(express.static(pathToPublic));

io.on("connection", (socket) => {
    console.log("New User joined");
    socket.emit("message", "Welcome, User");
    socket.on("send-message", (msgValue) => {
        io.emit("message", msgValue);
    })
});




app.get("/", (req, res) => {
    res.render("index.html");
});



const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("Server is unning on port " + port);
})