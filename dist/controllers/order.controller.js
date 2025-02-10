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
const Errors_1 = __importStar(require("../libs/Errors"));
const Order_service_1 = __importDefault(require("../models/Order.service"));
const orderController = {};
const orderService = new Order_service_1.default;
orderController.createOrder = async (req, res) => {
    try {
        console.log('createOrder');
        const result = await orderService.createOrder(req.member, req.body);
        res.status(Errors_1.HttpCode.CREATED).json(result);
    }
    catch (err) {
        console.log("Error, createOrder:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
orderController.getMyOrders = async (req, res) => {
    try {
        console.log('getMyOrders');
        const { page, limit, orderStatus } = req.query;
        const inquiry = {
            page: Number(page),
            limit: Number(limit),
            orderStatus: orderStatus,
        };
        console.log("inquiry", inquiry);
        const result = await orderService.getMyOrders(req.member, inquiry);
        res.status(Errors_1.HttpCode.CREATED).json(result);
    }
    catch (err) {
        console.log("Error, getMyOrders:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
orderController.updateOrder = async (req, res) => {
    try {
        console.log("updateOrder");
        const input = req.body;
        console.log("input:", input);
        const result = await orderService.updateOrder(req.member, input);
        res.status(Errors_1.HttpCode.OK).json(result);
    }
    catch (err) {
        console.log("Error, updateOrder:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
exports.default = orderController;
