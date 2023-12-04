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

//서버 기본 응답메세지
app.get("/", (req, res) => {
  console.log("default page request!!");
  res.send("Hellow World!! CSS server running!!\n");
});

//URL 경로주소 서버 호출시 로또 당첨번호 API 가져오기
//파라미터 숫자 당첨회차
app.get("/lotto/:round", (req, res) => {
  //https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=1
  console.log(">>>>>>>>>>>>>>> 1");
  const round = req.params.round;
  console.log(">>>>>>>>>>>>>>> 2");
  const options = {
    hostname: "http://dhlottery.co.kr",
    path: `/common.do?method=getLottoNumber&drwNo=${round}`,
    method: "GET",
  };
  console.log(">>>>>>>>>>>>>>> 3");
  console.log(">>>>>>>>>>>>>>> options : ");
  console.log(options);

  // HTTP 요청 생성
  const request = http.request(options, (httpRes) => {
    let data = "";
    let httpResCnt = 0;
    console.log(">>>>>>>>>>>>>>> httpRes : ");
    console.log(httpRes);
    // 응답 데이터를 수신할 때마다 호출
    httpRes.on("data", (chunk) => {
      console.log(">>>>>>>>>>>>>>> res chunk " + httpResCnt + " :");
      //console.log(chunk);
      data += chunk;
      httpResCnt++;
    });

    httpRes.on("end", () => {
      // 응답 데이터를 클라이언트에 전송
      console.log(">>>>>>>>>>>>>>> res end data :");
      console.log(data);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });
  });

  // 요청에 에러가 발생했을 때 호출
  request.on("error", (error) => {
    console.log("Error:", error.message);
    res.status(500).end(`Internal Server Error : ${error.message}`);
  });

  // 요청 전송
  request.end();
});
