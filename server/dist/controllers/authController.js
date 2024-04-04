"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const authModel_1 = require("../models/authModel");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield authModel_1.Users.create(req.body);
        console.log("req", req.body);
        res.status(200).json({
            status: "success",
            data: {
                tour: `Created user with credentials, ${newUser}`,
            },
        });
    }
    catch (err) {
        console.log("sasas", err);
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => {
    try {
        console.log("req", req.body);
        res.status(200).json({
            status: "success",
            data: {
                tour: "<>Updated tour here if required</>",
            },
        });
    }
    catch (err) {
        console.log("sasas", err);
    }
};
exports.loginUser = loginUser;
