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
const Member_service_1 = __importDefault(require("../models/Member.service"));
const Auth_service_1 = __importDefault(require("../models/Auth.service"));
const Errors_1 = __importStar(require("../libs/Errors"));
const config_1 = require("../libs/config");
//REACT
const memberService = new Member_service_1.default();
const authService = new Auth_service_1.default();
const memberController = {};
memberController.getRestaurant = async (req, res) => {
    try {
        console.log('getRestaurant');
        const result = await memberService.getRestaurant();
        res.status(Errors_1.HttpCode.OK).json(result);
    }
    catch (err) {
        console.log("Error, getRestaurant:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
memberController.signup = async (req, res) => {
    try {
        console.log('signup');
        const input = req.body, result = await memberService.signup(input);
        const token = await authService.createToken(result);
        console.log("token =>", token);
        res.cookie("accessToken", token, { maxAge: config_1.AUTH_TIMER * 3600 * 1000,
            httpOnly: false,
        });
        res.status(Errors_1.HttpCode.CREATED).json({ member: result, accessToken: token });
    }
    catch (err) {
        console.log("Error, signup:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
memberController.login = async (req, res) => {
    try {
        console.log('login');
        // console.log("body;", req.body);
        const input = req.body, result = await memberService.login(input), 
        // console.log("result =>", result);
        token = await authService.createToken(result);
        // console.log("token =>", token);
        res.cookie("accessToken", token, { maxAge: config_1.AUTH_TIMER * 3600 * 1000,
            httpOnly: false,
        });
        res.status(Errors_1.HttpCode.OK).json({ member: result, accessToken: token });
    }
    catch (err) {
        console.log("Error, login:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
memberController.logout = (req, res) => {
    try {
        console.log("logout");
        res.cookie("accessToken", null, { maxAge: 0, httpOnly: true });
        res.status(Errors_1.HttpCode.OK).json({ logout: true });
    }
    catch (err) {
        console.log("Error, logout:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
memberController.getMemberDetail = async (req, res) => {
    try {
        console.log("getMemberDetail");
        const result = await memberService.getMemberDetail(req.member);
        res.status(Errors_1.HttpCode.OK).json(result);
    }
    catch (err) {
        console.log("Error, getMemberDetail:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
memberController.updateMember = async (req, res) => {
    try {
        console.log("updateMember");
        const input = req.body;
        if (req.file)
            input.memberImage = req.file.path.replace(/\\/g, "/");
        const result = await memberService.updateMember(req.member, input);
        res.status(Errors_1.HttpCode.OK).json(result);
    }
    catch (err) {
        console.log("Error, updateMember:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
memberController.getTopUsers = async (req, res) => {
    try {
        console.log("getTopUsers");
        const result = await memberService.getTopUsers();
        res.status(Errors_1.HttpCode.OK).json(result);
    }
    catch (err) {
        console.log("Error, getTopUsers:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
memberController.verifyAuth = async (req, res, next) => {
    try {
        const token = req.cookies["accessToken"];
        if (token)
            req.member = await authService.checkAuth(token);
        if (!req.member)
            throw new Errors_1.default(Errors_1.HttpCode.UNAUTHORIZED, Errors_1.Message.NOT_AUTHENTICATED);
        next();
    }
    catch (err) {
        console.log("Error, verifyAuth:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
memberController.retrieveAuth = async (req, res, next) => {
    try {
        const token = req.cookies["accessToken"];
        if (token)
            req.member = await authService.checkAuth(token);
        next();
    }
    catch (err) {
        console.log("Error, retriveAuth:", err);
        next();
    }
};
exports.default = memberController;
