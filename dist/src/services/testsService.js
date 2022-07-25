var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as repository from "../repositories/testsRepository.js";
function insertTests(createTestsData) {
    return __awaiter(this, void 0, void 0, function* () {
        yield repository.insertTests(createTestsData).catch(err => {
            if (err.code === "P2002")
                throw { type: "conflict", message: "this card already exists" };
        });
    });
}
function getTestsByDisciplines() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield repository.getTestsByDiscipline();
        if (!result)
            throw { type: "not_found", message: "not found" };
        return result;
    });
}
function getTestsByTeachers() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield repository.getTestsByTeacher();
        if (!result)
            throw { type: "not_found", message: "not found" };
        return result;
    });
}
export { insertTests, getTestsByDisciplines, getTestsByTeachers };
