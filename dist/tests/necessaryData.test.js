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
let token = '';
const email = 'test2@root.com';
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$executeRaw `DELETE FROM public."User" WHERE email = ${email}`;
    yield supertest(app).post('/sigin').send({ email: "test2@root.com", password: "senhaforte", confirmPassword: "senhaforte" });
    const response = yield supertest(app).post('/login').send({ email: "test2@root.com", password: "senhaforte" });
    token = response.body.token;
}));
describe("aget data tests suit", () => {
    it("get categories", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest(app).get('/categories').set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(200);
        expect(response).not.toBeNull();
    }));
    it("get disciplines", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest(app).get('/discipline').set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(200);
        expect(response).not.toBeNull();
    }));
    it("get teachers", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest(app).get('/discipline/teacher/1').set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(200);
        expect(response).not.toBeNull();
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
