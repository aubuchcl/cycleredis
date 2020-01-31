const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  host: "redis"
});
client.set("visits", 0);

//GLOBALS

PORT = 80;

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visits is " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(PORT, "::", () => {
  console.log(`listening ${PORT}`);
});
