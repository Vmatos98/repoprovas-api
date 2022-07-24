import supertest from "supertest";
import app from "../src/app.js"
import prisma from "../src/config/dataBase.js";

const email = "admin@root.com";
const password = "senhaforte";
const confirmPassword = "senhaforte"
export const login = {email: email, password: password, confirmPassword};

beforeEach(async()=>{
    await prisma.$executeRaw`DELETE FROM public."User" WHERE email=${email}`;
})

describe("auth tests suit", ()=>{
    it("given email and pass, create user",async () => {
        const response = await supertest(app).post('/sigin').send(login);
        expect(response.statusCode).toBe(201);

        const user = await prisma.user.findFirst({
            where:{email:email,}
        });
        expect(user.email).toBe(email);
    })
    
    it("given email and pass, receive token", async ()=>{
        const response = await supertest(app).post('/login').send({email, password});
        const token = response.body.token;
        expect(token).not.toBeNull();
    })

    it("given email and password already in use, fail to create user", async ()=>{
        const response = await supertest(app).post('/sigin').send(login);
        expect(response.statusCode).toBe(201);
        const response2 = await supertest(app).post('/sigin').send(login);
        expect(response2.statusCode).toBe(409);
    }) 
})
afterAll(async()=>{
    await prisma.$disconnect();
})