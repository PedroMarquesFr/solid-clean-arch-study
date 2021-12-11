import { IMailProvider } from "../../../infra/providers/IEmailProvider";
import { IUsersRepository } from "../../../infra/repositories/IUsersRepository";
import { Email } from "../../entities/Email";
import { User } from "../../entities/User";
import { CreateuserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: CreateuserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User Already exists.");
    }

    const user = new User(data);

    await this.usersRepository.create(user);

    const email = new Email({
      from: { email: data.email, name: data.name },
      to: { email: "equipe@app.com", name: "Time" },
      subject: "Seja bem vindo a plataforma",
      body: "<p>Voce ja pode fazer login na plataforma</p>",
    });

    await this.mailProvider.sendMail(email);
  }
}
