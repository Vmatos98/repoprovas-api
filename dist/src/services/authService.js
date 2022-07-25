var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from 'bcrypt';
import * as authRepository from "../repositories/authRepository.js";
function findUser(searchUserData) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = searchUserData.email;
        const user = yield authRepository.findUser({ email });
        if (bcrypt.compareSync(searchUserData.password, user.password)) {
            return user;
        }
        throw { type: "unauthorized", message: "invalid email or password" };
    });
}
function findUserByEmail(searchUserData) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = searchUserData.email;
        const user = yield authRepository.findUser({ email });
        return user;
    });
}
function createUser(createUserData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email } = createUserData;
        const password = bcrypt.hashSync(createUserData.password, 10);
        const user = yield authRepository.insertUser({ email, password });
        return user;
    });
}
export { findUser, createUser, findUserByEmail };
