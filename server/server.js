const express = require("express");
const app = express();
const port = 5000;
const http = require("http");
const offset = 1000 * 60 * 60 * 9;
const date = new Date(new Date().getTime() + offset);

//설정포트 및 서버실행 시간
app.listen(
  port,
  () =>
    console.log(
      `start port : ${port} | ${
        date.toISOString().replace("T", " ").split(".")[0]
      }`,
    ), //한국시각으로 출력
);

//URL 경로주소 서버 호출시 로또 당첨번호 API 가져오기
//파라미터 숫자 당첨회차
app.get("/lotto/:round", (req, res) => {
  //https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=1
  const round = req.params.round;
  const options = {
    hostname: "dhlottery.co.kr",
    path: `/common.do?method=getLottoNumber&drwNo=${round}`,
    method: "GET",
  };

  // HTTP 요청 생성
  const request = http.request(options, (externalRes) => {
    let data = "";

    // 응답 데이터를 수신할 때마다 호출
    externalRes.on("externalRes chunk", (chunk) => {
      console.log("externalRes chunk :");
      console.log(chunk);
      data += chunk;
    });

    // 전체 응답을 수신했을 때 호출
    externalRes.on("end", () => {
      // 응답 데이터를 클라이언트에 전송
      console.log("externalRes end data :");
      console.log(data);
      res.json(JSON.parse(data));
    });
  });

  // 요청에 에러가 발생했을 때 호출
  request.on("error", (error) => {
    console.error("Error:", error.message);
    res.status(500).send(`Internal Server Error : ${error.message}`);
  });

  // 요청 전송
  request.end();
});
