/*
  Warnings:

  - You are about to drop the column `content` on the `Book` table. All the data in the column will be lost.
  - Added the required column `report` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "content",
ADD COLUMN     "report" TEXT NOT NULL,
ADD COLUMN     "summary" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
