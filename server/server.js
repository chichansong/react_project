const express = require("express");
const app = express();

//설정포트확인
const port = 5000;
app.listen(port, () => console.log(`${port}`));

const http = require("http");
const options = {
  host: "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=903",
  port: 80,
  path: "/",
};

//서버 호출시 로또 당첨번호 API 가져오기
//파라미터 숫자 당첨회차
app.get("/", (req, res) => {

  //res.send("Hellow World!! CSS!!\n");

  http.get(options, function (httpRes) {
    httpRes.on("data", function (result) {
        res.send(result);
    });

});

/******************************************* */
/******************************************* */
/******************************************* */
/******************************************* */
/* node-schedule 스케쥴 테스트 매 10초만 출력 */
const schedule = require("node-schedule");

const j = schedule.scheduleJob("10 * * * * *", function () {
  //console.log("10s");
});

/* JDBC 테스트 */
const JDBC = require("jdbc");
const jinst = require("jdbc/lib/jinst");

console.log(">>>>> jinst jinst >>>>>");

if (!jinst.isJvmCreated()) {
  console.log(">>>>> jinst.isJvmCreated true >>>>>");
  jinst.addOption("-Xrs");
  jinst.setupClasspath(["/home/ubuntu/db/h2/bin/h2-1.4.200.jar"]);
}

let h2 = new JDBC({
  //url: 'jdbc:h2:tcp://localhost:5234/exoplanets;database_to_lower=true',
  url: "jdbc:h2:~/test",
  drivername: "org.h2.Driver",
  properties: {
    user: "",
    password: "",
  },
});

//jdbc 설정값 초기화, 연결확인?
h2.initialize(function (err) {
  console.log(">>>>> h2.initialize");
  if (err) {
    console.log(">>>>> h2.initialize err true");
    console.log(err);
  }
});

//구현
h2.reserve(function (err, connObj) {
  console.log(">>>>> h2.reserve");
  var conn = connObj.conn;

  conn.createStatement(function (err, statement) {
    //statement.executeQuery("SELECT * FROM TB_LTWINNUM;",
    statement.executeQuery(
      "SHOW TABLES;",

      function (err, resultset) {
        if (err) {
          console.log(">>>>> err 1");
          console.log(err);
        } else {
          console.log(">>>>> resultset 1");
          console.log(resultset);
        }
      },
    );
  });
});
