import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const criarLeilao = async (id: number, produto: string, preco: number, datalimite: Date, usuarioId: number, listaLances: string) => {
  return prisma.leilao.create({
    data: {
      id,
      produto,
      preco,
      datalimite,
      dono: { connect: { id: usuarioId } },
      listaLances,
    },
  });
};
