import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.usuario.create({
    data: {
      id: 34,
      nome: 'Leila',
      email: 'LeilaPalmeiras@hotmail.com'
    },
  })
  const leilao = await prisma.leilao.create({
    data: {
      id: 25,
      produto: 'Bola',
      preco: 300.99,
      datalimite: new Date(),
      dono: {
        connect: { id: 34 } },
      listaLances: 'lance7'
    }})
  const lance = await prisma.lance.create({
      data: {
        id: 12,
        comprador: { connect: {id: 34}},
        leilao: { connect: {id: 25}},
        valor: 600.80
      }
  });
}

main()