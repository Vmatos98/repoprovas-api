var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as testsService from "../services/testsService.js";
import * as dataService from "../services/necessaryDataService.js";
function createTest(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { categoryId, disciplineId, teacherId } = req.body;
        yield dataService.getCategoryById(categoryId);
        yield dataService.getDisciplineById(disciplineId);
        yield dataService.getTeacherById(teacherId);
        yield testsService.insertTests(req.body);
        res.sendStatus(201);
    });
}
function getTestsByGroup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { groupBy } = req.query;
        if (groupBy === 'disciplines') {
            const data = yield testsService.getTestsByDisciplines();
            const result = {
                tests: data,
            };
            return res.status(200).send(result);
        }
        else if (groupBy === 'teachers') {
            const result = yield testsService.getTestsByTeachers();
            return res.status(200).send({ tests: result });
        }
        // throw{type: "bad_request", message: "not data found"};
    });
}
export { createTest, getTestsByGroup };
