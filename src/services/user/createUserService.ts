import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

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

    const paswordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: paswordHash,
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
