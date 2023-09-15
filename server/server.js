const express = require("express");
const app = express();

/* Router TEST */
//const test = require("./Router/test");
//app.use("/api", test);


//설정포트확인
const port = 5000;
app.listen(port, () => console.log(`${port}`));

//서버 기본 응답메세지
app.get('/', (req, res) => {
	res.send('Hellow World!!!!! CSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n')
});

/* node-schedule 스케쥴 테스트 매 10초만 출력 */
const schedule = require('node-schedule');

const j = schedule.scheduleJob('10 * * * * *', function() {
	console.log("10s");
});



/* JDBC 테스트 */
const JDBC = require('jdbc');
const jinst = require('jdbc/lib/jinst');

console.log(">>>>> jinst jinst >>>>>");

if (!jinst.isJvmCreated()) {
  console.log(">>>>> jinst.isJvmCreated true >>>>>");
  jinst.addOption("-Xrs");
  jinst.setupClasspath(['/home/ubuntu/db/h2/bin/h2-1.4.200.jar']);
}

let h2 = new JDBC({
  //url: 'jdbc:h2:tcp://localhost:5234/exoplanets;database_to_lower=true',
  url: 'jdbc:h2:~/test',
  drivername: 'org.h2.Driver',
  properties: {
    user : '',
    password: ''
  }
});

//jdbc 설정값 초기화, 연결확인?
h2.initialize(function(err) {
  console.log(">>>>> h2.initialize");
  if (err) {
    console.log(">>>>> h2.initialize err true");
    console.log(err);
  }
});

//구현
h2.reserve(function(err, connObj) {
  console.log(">>>>> h2.reserve");
  var conn = connObj.conn;
               
  conn.createStatement(function(err, statement) {
  })

})




  // asyncjs.series([
  //   function(callback) {
  //     console.log(">>>>> asyncjs.series");
  //     // Select statement example.
  //     conn.createStatement(function(err, statement) {
  //       if (err) {
  //         callback(err);
  //       } else {
  //         // Adjust some statement options before use.  See statement.js for
  //         // a full listing of supported options.
  //         statement.setFetchSize(100, function(err) {
  //           if (err) {
  //             callback(err);
  //           } else {
  //             statement.executeQuery("SELECT * FROM TB_LTWINNUM;",
  //                                    function(err, resultset) {
  //               if (err) {
  //                 callback(err)
  //               } else {
  //                 resultset.toObjArray(function(err, results) {
  //                   if (results.length > 0) {
  //                     console.log("results: " + results[0]); //results[0].id

  //                   }
  //                   callback(null, resultset);
  //                 });
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  //   },
  // ], 
  // function(err, results) {
  //   // Results can also be processed here.
  //   // Release the connection back to the pool.
  //   console.log(">>>>> hsqldb.release");
  //   hsqldb.release(connObj, function(err) {
  //     if (err) {
  //       console.log(err.message);
  //     }
  //   });
  // })
});





/************************************************** */
/************************************************** */
/************************************************** */
// let h2Init = false;

// function getH2(callback) {
//   console.log(">>>>> getH2");
//   if (!h2Init)
//     h2.initialize((err) => {
//       h2Init = true;
//       callback(err);
//     });
//   return callback(null);
// };

// function queryDB(sql, callback) {
//   console.log(">>>>> queryDB");
//   h2.reserve((err, connobj) => {
//     console.log(">>>>> h2.reserve");
//     connobj.conn.createStatement((err, statement) => {
//       console.log(">>>>> connobj.conn.createStatement");
//       if (callback) {
//         statement.executeQuery(sql, (err, result) => h2.release(connobj, (err) => callback(result)));
//       } else {
//         statement.executeUpdate(sql, (err) => h2.release(connobj, (err) => { if (err) console.log(err) }));
//       }
//     });
//   });
// };

// module.exports = {
//   initialize: function(callback) {
//     getH2((err) => {
//       console.log(">>>>> module.exports");
//       queryDB("SHOW TABLES");
//     });
//   }
// };