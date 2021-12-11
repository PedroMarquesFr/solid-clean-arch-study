import { User } from "../../domain/entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  create(user: User): Promise<void>;
}
