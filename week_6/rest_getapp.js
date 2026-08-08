const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    res.json({
        id: 101,
        name: "John",
        age: 20
    });
});
app.get("/",(req,res)=>{
    res.send("<h3>This is example for HTTP GET Request</h3>")
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});