import supertest from "supertest";
import app from "../src/app.js"
import prisma from "../src/config/dataBase.js";

let token= '';
const email = 'test2@root.com';

beforeAll(async () => {
    await prisma.$executeRaw`DELETE FROM public."User" WHERE email = ${email}`;

    await supertest(app).post('/sigin').send({email:"test2@root.com", password:"senhaforte", confirmPassword:"senhaforte"});
    const response = await supertest(app).post('/login').send({email:"test2@root.com",password:"senhaforte"});
    token= response.body.token;    
});

describe("aget data tests suit", ()=>{
    it("get categories",async () => {
        const response = await supertest(app).get('/categories').set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(200);
        expect(response).not.toBeNull();
    })
    
    it("get disciplines", async ()=>{
        const response = await supertest(app).get('/discipline').set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(200);
        expect(response).not.toBeNull();
    })

    it("get teachers", async ()=>{
        const response = await supertest(app).get('/discipline/teacher/1').set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(200);
        expect(response).not.toBeNull();
    }) 
})
afterAll(async()=>{
    await prisma.$disconnect();
})