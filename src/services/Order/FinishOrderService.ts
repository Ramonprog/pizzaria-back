import prismaClient from "../../prisma";

class FinishOrderService {
  execute(id: string) {
    const finish = prismaClient.order.update({
      where: {
        id: id,
      },
      data: {
        status: true,
      },
    });

    return finish;
  }
}

export { FinishOrderService };
