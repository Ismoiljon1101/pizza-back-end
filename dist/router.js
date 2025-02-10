"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const member_controller_1 = __importDefault(require("./controllers/member.controller"));
const uploader_1 = __importDefault(require("./libs/utils/uploader"));
const product_controller_1 = __importDefault(require("./controllers/product.controller"));
const order_controller_1 = __importDefault(require("./controllers/order.controller"));
/*MEMBER*/
router.get("/member/restaurant", member_controller_1.default.getRestaurant);
router.post("/member/login", member_controller_1.default.login);
router.post("/member/signup", member_controller_1.default.signup);
router.post("/member/logout", member_controller_1.default.verifyAuth, member_controller_1.default.logout);
router.get("/member/detail", member_controller_1.default.verifyAuth, member_controller_1.default.getMemberDetail);
router.post("/member/update", member_controller_1.default.verifyAuth, (0, uploader_1.default)("members").single("memberImage"), member_controller_1.default.updateMember);
router.get("/member/top-users", member_controller_1.default.getTopUsers);
/* Product*/
router.get("/product/all", product_controller_1.default.getProducts);
router.get("/product/:id", member_controller_1.default.retrieveAuth, product_controller_1.default.getProduct);
/*Order*/
router.post("/order/create", member_controller_1.default.verifyAuth, order_controller_1.default.createOrder);
router.get("/order/all", member_controller_1.default.verifyAuth, order_controller_1.default.getMyOrders);
router.post("/order/update", member_controller_1.default.verifyAuth, order_controller_1.default.updateOrder);
exports.default = router;
