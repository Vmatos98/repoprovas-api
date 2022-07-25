var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as repository from '../repositories/necessaryDataRepository.js';
function getAllCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield repository.getAllCategories();
        if (!result)
            throw { type: "not_found", message: "categories not found" };
        return result;
    });
}
function getCategoryById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield repository.getCategoryById(id);
        if (!result)
            throw { type: "not_found", message: "categorie not found" };
        return result;
    });
}
function getAllDisciplines() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield repository.getAllDisciplines();
        if (!result)
            throw { type: "not_found", message: "categories not found" };
        return result;
    });
}
function getDisciplineById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield repository.getDisciplineById(id);
        if (!result)
            throw { type: "not_found", message: "discipline not found" };
        return result;
    });
}
function getTeacherByDisciplines(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield repository.getTeacherByDisciplines(id);
        if (!result)
            throw { type: "not_found", message: "categories not found" };
        return result;
    });
}
function getTeacherById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield repository.getTeacherById(id);
        if (!result)
            throw { type: "not_found", message: "teacher not found" };
        return result;
    });
}
export { getAllCategories, getAllDisciplines, getTeacherByDisciplines, getCategoryById, getDisciplineById, getTeacherById, };
