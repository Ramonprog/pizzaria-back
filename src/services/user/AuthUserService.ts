import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

interface IAuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execut({ email, password }: IAuthRequest) {
    try {
      const user = await prismaClient.user.findFirst({
        where: {
          email: email,
        },
      });

      if (!user) throw new Error("User/Password incorrect");

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) throw new Error("User/Password incorrect");

      const token = sign(
        {
          name: user.name,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          subject: user.id,
          expiresIn: "30d",
        }
      );

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        token,
      };
    } catch (error) {
      throw new Error("User/Password incorrect");
    }
  }
}

export { AuthUserService };
