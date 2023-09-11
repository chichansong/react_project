const express = require("express");
const app = express();
//const test = require("./Router/test");

//app.use("/api", test);

const port = 5000;
app.listen(port, () => console.log(`${port}`));

app.get('/', (req, res) => {
	res.send('Hellow World!!!!! CSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n')
});





/* node-schedule */
const schedule = require('node-schedule');

const j = schedule.scheduleJob('10 * * * * *', function() {
	console.log("매 10초마다 실행");
});

