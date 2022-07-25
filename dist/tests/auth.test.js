var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import supertest from "supertest";
import app from "../src/app.js";
import prisma from "../src/config/dataBase.js";
const email = "admin@root.com";
const password = "senhaforte";
const confirmPassword = "senhaforte";
export const login = { email: email, password: password, confirmPassword };
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$executeRaw `DELETE FROM public."User" WHERE email=${email}`;
}));
describe("auth tests suit", () => {
    it("given email and pass, create user", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest(app).post('/sigin').send(login);
        expect(response.statusCode).toBe(201);
        const user = yield prisma.user.findFirst({
            where: { email: email, }
        });
        expect(user.email).toBe(email);
    }));
    it("given email and pass, receive token", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest(app).post('/login').send({ email, password });
        const token = response.body.token;
        expect(token).not.toBeNull();
    }));
    it("given email and password already in use, fail to create user", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest(app).post('/sigin').send(login);
        expect(response.statusCode).toBe(201);
        const response2 = yield supertest(app).post('/sigin').send(login);
        expect(response2.statusCode).toBe(409);
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
