import { Request, Response } from 'express';
import userService from '../services/user.service';
class UserController {
  
  async create(req: Request, res: Response) {
    const newUser = await userService.createUser(req.body.name)
    res.json(newUser);
  };

  async get(req: Request, res: Response) {
    const users = await userService.getAllUsers()
    res.json(users);
  };

  async edit(req: Request, res: Response) {
    const {id, username} = req.body;
    const editedUser = await userService.editUser(id, username);
    res.json(editedUser);
  };

  async delete(req: Request, res: Response) {
    const deletedUser = await userService.deleteUser(req.body.id);
  };
}

export default new UserController();