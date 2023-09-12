import prismaClient from "../../prisma";

class ListByCategoryService {
  async execute(category_id: any) {
    const findByCategory = await prismaClient.product.findMany({
      where: {
        categoryId: category_id,
      },
    });

    return findByCategory;
  }
}

export { ListByCategoryService };
