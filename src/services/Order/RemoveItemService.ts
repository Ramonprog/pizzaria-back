import prismaClient from "../../prisma";

class RemoveItemService {
  async execute(item_id: string) {
    const removeItem = await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });

    return removeItem;
  }
}

export { RemoveItemService };
