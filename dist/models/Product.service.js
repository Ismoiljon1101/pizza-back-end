"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_enum_1 = require("../libs/enums/product.enum");
const config_1 = require("../libs/config");
const Errors_1 = __importStar(require("../libs/Errors"));
const Product_model_1 = __importDefault(require("../schema/Product.model"));
const View_service_1 = __importDefault(require("./View.service"));
const view_enum_1 = require("../libs/enums/view.enum");
class ProductService {
    constructor() {
        this.productModel = Product_model_1.default;
        this.viewService = new View_service_1.default();
    }
    /* SPA */
    async getProducts(inquiry) {
        console.log("inquiry =>", inquiry);
        const match = { productStatus: product_enum_1.ProductStatus.PROCESS };
        if (inquiry.productCollection)
            match.productCollection = inquiry.productCollection;
        if (inquiry.search) {
            match.productName = { $regex: new RegExp(inquiry.search, "i") };
        }
        const sort = inquiry.order === 'productPrice'
            ? { [inquiry.order]: 1 }
            : { [inquiry.order]: -1 };
        const result = await this.productModel.aggregate([
            { $match: match },
            { $sort: sort },
            { $skip: (inquiry.page * 1 - 1) * inquiry.limit },
            { $limit: inquiry.limit * 1 },
        ]).exec();
        console.log("\n\nResult in Product service:", result);
        if (!result)
            throw new Errors_1.default(Errors_1.HttpCode.NOT_FOUND, Errors_1.Message.NO_DATA_FOUND);
        return result;
    }
    async getProduct(memberId, id) {
        const productId = (0, config_1.shapeIntoMongooseObjectId)(id);
        let result = await this.productModel
            .findOne({ _id: productId, productStatus: product_enum_1.ProductStatus.PROCESS })
            .exec();
        if (!result)
            throw new Errors_1.default(Errors_1.HttpCode.NOT_FOUND, Errors_1.Message.NO_DATA_FOUND);
        if (memberId) {
            //Check existance
            const input = {
                memberId: memberId,
                viewRefId: productId,
                viewGroup: view_enum_1.ViewGroup.PRODUCT
            };
            const existView = await this.viewService.checkViewExistence(input);
            console.log("exist: =>", !!existView);
            if (!existView) {
                //Insert new view log
                console.log(" Planning to insert new View");
                await this.viewService.insertMemberView(input);
                //Increase Counts
                const result = await this.productModel
                    .findByIdAndUpdate(productId, { $inc: { productViews: +1 } }, { new: true })
                    .exec();
            }
        }
        return result;
    }
    /* SSR */
    async getAllProducts() {
        // string  => objectId 
        const result = await this.productModel.find().exec();
        if (!result)
            throw new Errors_1.default(Errors_1.HttpCode.NOT_FOUND, Errors_1.Message.NO_DATA_FOUND);
        console.log("Result:", result);
        if (!result)
            throw new Errors_1.default(Errors_1.HttpCode.NOT_FOUND, Errors_1.Message.NO_DATA_FOUND);
        console.log("\n\nResult:", result);
        return result;
    }
    async createNewProduct(input) {
        try {
            return await this.productModel.create(input);
        }
        catch (err) {
            console.error("Error, model:createNewProduct", err);
            throw new Errors_1.default(Errors_1.HttpCode.BAD_REQUEST, Errors_1.Message.CREATE_FAILED);
        }
    }
    async updateChosenProduct(id, input) {
        // string  => objectId 
        id = (0, config_1.shapeIntoMongooseObjectId)(id);
        const result = await this.productModel.findOneAndUpdate({ _id: id }, input, { new: true })
            .exec();
        if (!result)
            throw new Errors_1.default(Errors_1.HttpCode.NOT_MODIFIED, Errors_1.Message.UPDATE_FAILED);
        console.log("Result:", result);
        return result;
    }
}
exports.default = ProductService;
