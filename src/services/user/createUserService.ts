import prismaClient from "../../prisma";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserServices {
  async execute({ name, email, password }: IUserRequest) {
    if (!email) throw new Error("Email incorrect");

    const userAlreadyExistis = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExistis) throw new Error("User already exists");

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        name: true,
        id: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserServices };
