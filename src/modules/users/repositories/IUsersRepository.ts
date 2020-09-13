import User from '../infra/typeorm/entities/User';
import CreateUserDTO from '../dtos/ICreateUserDTO';

export default interface UsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: CreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
