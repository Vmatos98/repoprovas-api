var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prisma from "../config/dataBase.js";
function getAllCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.category.findMany();
    });
}
function getCategoryById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.category.findUnique({
            where: {
                id: id,
            }
        });
    });
}
function getAllDisciplines() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.disciplines.findMany();
    });
}
function getDisciplineById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.disciplines.findUnique({
            where: {
                id: id,
            }
        });
    });
}
function getTeacherByDisciplines(disciplineId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.teacherDisciplines.findMany({
            where: {
                disciplineId: disciplineId,
            },
            select: {
                teacher: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        });
    });
}
function getTeacherById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.teacher.findUnique({
            where: {
                id: id,
            }
        });
    });
}
export { getAllCategories, getAllDisciplines, getTeacherByDisciplines, getCategoryById, getDisciplineById, getTeacherById };
