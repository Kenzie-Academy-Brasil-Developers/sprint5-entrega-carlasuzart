import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserId } from "../../interfaces/user";

const userDeleteService = async ({ id }: IUserId) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const account = users.find((user) => user.id === id);

  if (!account) {
    throw new Error("User not found");
  }

  await userRepository.delete(account!.id);
  return true;
};

export default userDeleteService;
