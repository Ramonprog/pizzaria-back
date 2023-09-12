import prismaClient from "../../prisma";

interface IPdoduct {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreatePuctServer {
  async execute({ banner, category_id, description, name, price }: IPdoduct) {
    const product = await prismaClient.product.create({
      data: {
        banner,
        description,
        name,
        price,
        categoryId: category_id,
      },
    });

    return product;
  }
}

export { CreatePuctServer };
