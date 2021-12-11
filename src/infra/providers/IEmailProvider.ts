import { Email } from "../../domain/entities/Email";

export interface IMailProvider {
  sendMail(message: Email): Promise<void>;
}
