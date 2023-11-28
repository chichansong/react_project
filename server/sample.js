/* Router TEST */
const test = require("./Router/test");
app.use("/api", test);

/* 서버 기본 응답메세지 */
app.get("/", (req, res) => {
  res.send("Hellow World!! CSS!!\n");
});
