import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

/*  Restaurant */
routerAdmin.get("/", restaurantController.goHome)

// Login Page
routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin)
    
// Sign-up Page
routerAdmin
    .get("/signup", restaurantController.getSignup,)
    .post('/signup',
      makeUploader('members').single('memberImage'),
      restaurantController.processSignup)

// Logout and ChecoutSession
routerAdmin.get("/logout", restaurantController.logout)
routerAdmin.get('/check-me', restaurantController.checkoutSession)

/** PRODUCT */
routerAdmin.get("/product/all",
  restaurantController.verifyRestaurant,
  productController.getAllProducts);

routerAdmin.post('/product/create',
  restaurantController.verifyRestaurant,
  // uploadProductImage.single("productImage"),
  makeUploader('products').array('productImages',8),
  productController.createNewProduct);

routerAdmin.post('/product/:id',
  restaurantController.verifyRestaurant,
  productController.updateChosenProduct)

/** USER */
routerAdmin.get(
  "/user/all",
  restaurantController.verifyRestaurant,
  restaurantController.getUsers
);
routerAdmin.post(
  "/user/edit",
  restaurantController.verifyRestaurant,
  restaurantController.updateChosenUser
); 

export default routerAdmin; 