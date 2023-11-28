const express = require("express");
const app = express();

//설정포트확인
const port = 5000;
app.listen(port, () => console.log(`${port}`));

const http = require("http");

//서버 호출시 로또 당첨번호 API 가져오기
//파라미터 숫자 당첨회차
app.get("/", (req, res) => {
  res.send("Hellow World!! CSS!!\n");
  /*
  http.get(
    {
      host: "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=903",
      port: 80,
      path: "/",
    },
    function (httpRes) {
      httpRes.on("data", function (result) {
        res.send(result);
      });
    },
  );
  */
});
