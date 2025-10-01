import prisma from "../db";
import { Smartphone } from "../generated/prisma";

async function findSmartphones() {
  return await prisma.smartphone.findMany();
}

async function findsmartphoneById(id: number) {
  return await prisma.smartphone.findUnique({
    where: {
      id,
    },
  });
}

async function insertSmartphone({
  brand,
  model,
  brief,
  released,
  announced,
  hardwareDesign,
  codename,
}: Smartphone) {
  return await prisma.smartphone.create({
    data: {
      brand,
      model,
      brief,
      released,
      announced,
      hardwareDesign,
      codename,
    },
  });
}

async function updateSmartphone(
  id: number,
  {
    brand,
    model,
    brief,
    released,
    announced,
    hardwareDesign,
    codename,
  }: Smartphone
) {
  return await prisma.smartphone.update({
    where: {
      id,
    },
    data: {
      brand,
      model,
      brief,
      released,
      announced,
      hardwareDesign,
      codename,
    },
  });
}

async function deleteSmartphone(id: number) {
  await prisma.smartphone.delete({
    where: {
      id,
    },
  });
}

export {
  findSmartphones,
  findsmartphoneById,
  insertSmartphone,
  deleteSmartphone,
  updateSmartphone
};
