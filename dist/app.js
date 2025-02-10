"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const router_1 = __importDefault(require("./router"));
const router_admin_1 = __importDefault(require("./router-admin"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = require("./libs/config");
const express_session_1 = __importDefault(require("express-session"));
const connect_mongodb_session_1 = __importDefault(require("connect-mongodb-session"));
const MongoDBStore = (0, connect_mongodb_session_1.default)(express_session_1.default);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: 'sessions'
});
/* 1-ENTRANCE */
const app = (0, express_1.default)();
console.log("__dirname", __dirname);
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use("/uploads", express_1.default.static("./uploads"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({ credentials: true, origin: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)(config_1.MORGAN_FORMAT));
/* 2-SESSIONS*/
app.use((0, express_session_1.default)({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
        maxAge: 1000 * 3600 * 6 // 3H
    },
    store: store,
    resave: true,
    saveUninitialized: true
}));
app.use(function (req, res, next) {
    const sessionInstance = req.session;
    res.locals.member = sessionInstance.member;
    next();
});
/* 2-VIEWS*/
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/* 2-ROUTERS*/
//BSSR ->backend server site rendering: EJS 
app.use('/admin', router_admin_1.default); //EJS->embeded javascript
app.use('/', router_1.default); //Middleware Design Pettern  //SPA: react 
exports.default = app; // module.exports => common.js
