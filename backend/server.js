const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectdb = require("./Config/db")
const colors = require("colors");

const userRoutes = require("./routes/userRoutes");

const { errorHandler, notFound } = require("./middleware/errorMiddleware")

dotenv.config();
connectdb();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.end('runing dddcdd');
});

// app.get('/api/chat', (req, res) => {
//     res.send(chats);
// });

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`start ${PORT}`.yellow.bold));