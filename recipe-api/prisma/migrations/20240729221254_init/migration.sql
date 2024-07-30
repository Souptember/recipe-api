/*
  Warnings:

  - A unique constraint covering the columns `[typeName]` on the table `SoupType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tagName]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `SoupType_typeName_key` ON `SoupType`(`typeName`);

-- CreateIndex
CREATE UNIQUE INDEX `Tag_tagName_key` ON `Tag`(`tagName`);
