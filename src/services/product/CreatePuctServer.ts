interface IPdoduct {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreatePuctServer {
  async execute({ banner, category_id, description, name, price }: IPdoduct) {
    return "deu bom";
  }
}

export { CreatePuctServer };
