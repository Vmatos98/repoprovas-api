var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from "bcrypt";
import prisma from "../src/config/dataBase.js";
const terms = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
];
const categories = [
    { name: 'Projeto' },
    { name: 'Prática' },
    { name: 'Recuperação' },
];
const teachers = [
    { name: 'Diego Pinho' },
    { name: 'Bruna Hamori' },
];
const disciplines = [
    { name: "HTML e CSS", termId: 1 },
    { name: "JavaScript", termId: 2 },
    { name: "React", termId: 3 },
    { name: "Humildade", termId: 4 },
    { name: "Planejamento", termId: 5 },
    { name: "Autoconfiança", termId: 6 },
];
const disciplinesOnTeachers = [
    { teacherId: 1, disciplineId: 1 },
    { teacherId: 1, disciplineId: 2 },
    { teacherId: 1, disciplineId: 3 },
    { teacherId: 2, disciplineId: 4 },
    { teacherId: 2, disciplineId: 5 },
    { teacherId: 2, disciplineId: 6 },
];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.upsert({
            where: { email: "admin@root.com" },
            update: {},
            create: {
                email: "admin@root.com",
                password: bcrypt.hashSync("senhaforte", 10)
            }
        });
        yield prisma.terms.createMany({ data: terms });
        yield prisma.category.createMany({ data: categories });
        yield prisma.teacher.createMany({ data: teachers });
        yield prisma.disciplines.createMany({ data: disciplines });
        yield prisma.teacherDisciplines.createMany({ data: disciplinesOnTeachers });
    });
}
main().catch((err) => {
    console.log(err);
    process.exit(1);
}).finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
