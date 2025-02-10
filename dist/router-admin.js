"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerAdmin = express_1.default.Router();
const restaurant_controller_1 = __importDefault(require("./controllers/restaurant.controller"));
const product_controller_1 = __importDefault(require("./controllers/product.controller"));
const uploader_1 = __importDefault(require("./libs/utils/uploader"));
/* Restaurant*/
routerAdmin.get('/', restaurant_controller_1.default.goHome);
routerAdmin
    .get('/login', restaurant_controller_1.default.getLogin)
    .post('/login', restaurant_controller_1.default.processLogin);
routerAdmin
    .get('/signup', restaurant_controller_1.default.getSignup)
    .post("/signup", (0, uploader_1.default)("members").single("memberImage"), restaurant_controller_1.default.processSignup);
routerAdmin.get('/logout', restaurant_controller_1.default.logout);
routerAdmin.get('/check-me', restaurant_controller_1.default.checkAuthSession);
/* Product */
routerAdmin.get('/product/all', restaurant_controller_1.default.verifyRestaurant, product_controller_1.default.getAllProducts);
routerAdmin.post('/product/create', restaurant_controller_1.default.verifyRestaurant, 
// uploadProductImage.single('productImage'),
(0, uploader_1.default)("products").array("productImages", 5), product_controller_1.default.createNewProduct);
routerAdmin.post('/product/:id', restaurant_controller_1.default.verifyRestaurant, product_controller_1.default.updateChosenProduct);
/* user  */
routerAdmin.get("/user/all", restaurant_controller_1.default.verifyRestaurant, restaurant_controller_1.default.getUsers);
routerAdmin.post("/user/edit", restaurant_controller_1.default.verifyRestaurant, restaurant_controller_1.default.updateChosenUser);
exports.default = routerAdmin;
