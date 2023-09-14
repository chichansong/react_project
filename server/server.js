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
//	console.log("매 10초마다 실행");
});




/* h2 db test */
/*
const JDBC = require('jdbc');
const jinst = require('jdbc/lib/jinst');

if (!jinst.isJvmCreated()) {
  jinst.addOption("-Xrs");
  jinst.setupClasspath(['../h2-1.4.200.jar']);
}

let h2 = new JDBC({
  url: 'jdbc:h2:~/test',
  drivername: 'org.h2.Driver',
  properties: {
    user : '',
    password: ''
  }
});

let h2Init = false;

function getH2(callback) {
  if (!h2Init)
    h2.initialize((err) => {
      h2Init = true;
      callback(err);
    });
  return callback(null);
};

function queryDB(sql, callback) {
  h2.reserve((err, connobj) => {
    connobj.conn.createStatement((err, statement) => {
      if (callback) {
        statement.executeQuery(sql, (err, result) => h2.release(connobj, (err) => callback(result)));
      } else {
        statement.executeUpdate(sql, (err) => h2.release(connobj, (err) => { if (err) console.log(err) }));
      }
    });
  });
};

module.exports = {
  initialize: function(callback) {
    getH2((err) => {
      queryDB("SELECT * FROM TB_LTWINNUM", (result)=> {
       result.toObjArray((err, results) => {
	        console.log("h2 db test");
		console.log(results);
       });
      });
    });
 
},*/
