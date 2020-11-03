const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.listen(5000, () => {
    console.log("Listening for requests on port 5000")
})