import prismaClient from "../../prisma";

class DetailUserService {
  async execute(id: string) {
    try {
      const user = await prismaClient.user.findFirst({
        where: {
          id: id,
        },
        select: {
          name: true,
          email: true,
          id: true,
        },
      });

      return user;
    } catch (error) {}
  }
}

export { DetailUserService };
