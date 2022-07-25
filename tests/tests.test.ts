import supertest from "supertest";
import app from "../src/app.js"
import prisma from "../src/config/dataBase.js";

let token= '';

const email = 'test2@root.com';

const dataTest = {
    name:"prova 1",
    pdfUrl:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi-iIaEpZD5AhWYsJUCHQ78AysQFnoECBAQAQ&url=https%3A%2F%2Fdhg1h5j42swfq.cloudfront.net%2F2020%2F04%2F18094640%2Fuerr-prova-pmrr-2018.pdf&usg=AOvVaw15uvmel_XUOWib05Au1AYW",
    categoryId:1,
    teacherId:1,
    disciplineId:1
}


beforeAll(async () => {
    await prisma.$executeRaw`DELETE FROM public."User" WHERE email = ${email}`;

    await supertest(app).post('/sigin').send({email:"test2@root.com", password:"senhaforte", confirmPassword:"senhaforte"});
    const response = await supertest(app).post('/login').send({email:"test2@root.com",password:"senhaforte"});
    token= response.body.token;    
});

describe("post and get tests suit", ()=>{
    it("post tests",async () => {
        const response = await supertest(app).post('/tests').send(dataTest).set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(201);
    })
    
    it("get tests by discipline", async ()=>{
        const response = await supertest(app).get('/tests?groupBy=disciplines').set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(200);
        expect(response).not.toBeNull();
    })
    it("get tests by teachers", async ()=>{
        const response = await supertest(app).get('/tests?groupBy=teachers').set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(200);
        expect(response).not.toBeNull();
    })

})
afterAll(async()=>{
    await prisma.$disconnect();
})