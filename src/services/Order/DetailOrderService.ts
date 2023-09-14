import prismaClient from "../../prisma";

class DetailOrderService {
  async execute(id: string) {
    const detail = await prismaClient.item.findMany({
      where: {
        orderId: id,
      },
      include: {
        Order: true,
        product: true,
      },
    });

    return detail;
  }
}

export { DetailOrderService };
