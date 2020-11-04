const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

//allow cross-origin requests
app.use(cors());

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log("Connected to Database.")
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(5000, () => {
    console.log("Listening for requests on port 5000");
})