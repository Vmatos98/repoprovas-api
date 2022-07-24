/*
  Warnings:

  - A unique constraint covering the columns `[teacherId]` on the table `TeacherDisciplines` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "TeacherDisciplines" DROP CONSTRAINT "TeacherDisciplines_teacherId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "TeacherDisciplines_teacherId_key" ON "TeacherDisciplines"("teacherId");

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_id_fkey" FOREIGN KEY ("id") REFERENCES "TeacherDisciplines"("teacherId") ON DELETE RESTRICT ON UPDATE CASCADE;
