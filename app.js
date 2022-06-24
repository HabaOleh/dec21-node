const express = require('express');
const mongoose = require('mongoose')

const {usersRouter} = require("./routes");
const {constants} = require("./config");

mongoose.connect(constants.MONGO_URL);

const app = express();

app.use(express.json());

app.use('/users', usersRouter);

app.use('*', (req, res) => {
    res.status(404).json('Page not found');
});

app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            error: err.message || 'Unknown Error',
            code: err.status || 500
        });
});

app.listen(constants.PORT,()=>{
    console.log(`Server work on port ${constants.PORT}`);
})

