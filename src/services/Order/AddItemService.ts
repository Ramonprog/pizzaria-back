import prismaClient from "../../prisma";

interface IItemRequest {
  orderId: string;
  productId: string;
  amount: number;
}

class AddItemService {
  async execute({ amount, orderId, productId }: IItemRequest) {
    const order = await prismaClient.item.create({
      data: {
        amount,
        orderId,
        productId,
      },
    });

    return order;
  }
}

export { AddItemService };
