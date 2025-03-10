const newsRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./course");
const meRouter = require("./me");
const authRouter = require("./auth")
const accountRouter = require("./account");
const { requireAuth, checkUser } = require("../middlewares/UserMiddlewares");

function route(app) {
    app.get('*', checkUser);
    app.use("/account", accountRouter)
    app.use("/auth", authRouter)
    app.use("/news",requireAuth, newsRouter);
    app.use("/courses", courseRouter);
    app.use("/me", meRouter);
    app.use("/", siteRouter);
}

module.exports = route;
