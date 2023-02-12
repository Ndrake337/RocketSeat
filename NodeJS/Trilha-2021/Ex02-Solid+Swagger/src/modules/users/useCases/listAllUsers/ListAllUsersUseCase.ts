import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

export class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAlreadyExists = this.usersRepository.findById(user_id);
    const users = this.usersRepository.list();
    if (userAlreadyExists === undefined || userAlreadyExists.admin === false) {
      throw new Error("Mensagem do erro");
    }
    return users;
  }
}
