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
function insertTests(createTestsData) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.tests.create({
            data: createTestsData,
        });
    });
}
function getTestsByDiscipline() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.terms.findMany({
            include: {
                disciplines: {
                    include: {
                        teachers: { include: {
                                teacher: true,
                                tests: { include: { category: true, } }
                            }
                        }
                    },
                },
            },
        });
    });
}
function getTestsByTeacher() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.teacherDisciplines.findMany({
            include: {
                teacher: { select: {
                        name: true,
                        id: true,
                    } },
                discipline: { include: {
                        term: true,
                    },
                },
                tests: { include: {
                        category: true,
                    } }
            }
        });
        // return await prisma.teacher.findMany({
        //     include: {
        //         tests: {include:{
        //             disciplines:true,
        //         }}
        //     }
        // })
    });
}
export { insertTests, getTestsByDiscipline, getTestsByTeacher, };
