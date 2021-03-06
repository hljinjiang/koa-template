const Router = require("koa-router");
const user = require("./user/index");
const fs = require("fs");
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "get访问成功";
});
router.post("/", (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = "post访问成功";
});
fs.readdirSync(__dirname).forEach((file) => {
  if (file !== "index.js") {
    let r = require("./" + file);
    router.use(r.routes());
  }
});
module.exports = router;
