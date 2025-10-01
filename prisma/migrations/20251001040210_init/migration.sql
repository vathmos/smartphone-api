-- CreateTable
CREATE TABLE "Smartphone" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "brief" TEXT NOT NULL,
    "released" DATE NOT NULL,
    "announced" DATE NOT NULL,
    "hardwareDesign" TEXT NOT NULL,
    "codename" TEXT NOT NULL,

    CONSTRAINT "Smartphone_pkey" PRIMARY KEY ("id")
);
