-- DropForeignKey
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_id_fkey";

-- DropIndex
DROP INDEX "TeacherDisciplines_teacherId_key";

-- AddForeignKey
ALTER TABLE "TeacherDisciplines" ADD CONSTRAINT "TeacherDisciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
