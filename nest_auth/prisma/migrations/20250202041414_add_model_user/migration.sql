-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "age" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
