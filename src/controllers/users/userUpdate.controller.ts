import { Request, Response } from "express";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password, age } = req.body;

    const updateUser = await userUpdateService({ id });

    const { password: newPassword, ...user } = updateUser;

    return res.status(200).json({ message: "User successfully updated" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userUpdateController;
