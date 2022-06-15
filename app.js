const express = require('express');

const {usersRouter} = require("./routes");
const {constants} = require("./config");

const app = express();

app.use(express.json());

app.use('/users', usersRouter);

app.use('*', (req, res) => {
    res.status(404).json('Page not found');
});

app.listen(constants.PORT,()=>{
    console.log(`Server work on port ${constants.PORT}`);
})

