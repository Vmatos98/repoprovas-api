var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from "jsonwebtoken";
import * as User from "../services/authService.js";
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const user = yield User.findUser({ email, password });
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 12 });
        res.status(200).send({ token });
    });
}
function sigin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email } = req.body;
        const user = yield User.findUserByEmail({ email });
        if (user) {
            throw { type: "conflict", message: "User already exists" };
        }
        yield User.createUser(req.body);
        res.sendStatus(201);
    });
}
export { login, sigin };
