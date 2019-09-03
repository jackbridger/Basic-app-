const app = require("./app");
const { sign, verify } = require("jsonwebtoken");

const cookie = sign("test jwt", "testsecret");

app.listen(app.get("port"), () => {
  console.log("app is running on port ", app.get("port"));
  console.log("cookie is ", cookie);
});
