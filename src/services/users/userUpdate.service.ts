import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/user";
import bcrypt from "bcrypt";

const userUpdateService = async ({
  name,
  email,
  password,
  age,
  id,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.findOneBy({ id });

  if (!users) {
    throw new Error("User not found");
  }

  if (password) {
    users.password = bcrypt.hashSync(password, 10);
  }

  users.name = name || users.name;
  users.email = email || users.email;
  users.age = age || users.age;
  users.updated_at = new Date();

  await userRepository.save(users);

  return users;
};

export default userUpdateService;
