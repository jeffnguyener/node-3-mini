require("dotenv").config();
const express = require("express");
const massive = require('massive');
const app = express();
const { SERVER_PORT } = process.env;

massive(CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.get("/api/planes", controller.getPlanes);



app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
