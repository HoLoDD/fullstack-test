import { Request, Response } from 'express';
import userService from '../services/user.service';
class UserController {
  
  async create(req: Request, res: Response) {
    const { username } = req.body;
    const newUser = await userService.createUser(username)
    res.json(newUser);
  };

  async setGroup(req: Request, res: Response) {
    const { group_id } = req.body;
    const user_id  = parseInt(req.params.id)
    const newUser = await userService.setGroup(user_id, group_id); 
    res.json(newUser);
  };

  async get(req: Request, res: Response) {
    const users = await userService.getAllUsers()
    res.json(users);
  };

  async edit(req: Request, res: Response) {
    const { username } = req.body;
    const id  = parseInt(req.params.id)
    const editedUser = await userService.editUser(id, username);
    res.json(editedUser);
  };

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const deleteResult = await userService.deleteUser(id);
    res.json(deleteResult);
  };

}

export default new UserController();