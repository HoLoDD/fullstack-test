import { Request, Response } from 'express';
import { Group } from '../models/group.entity';
import groupService from '../services/group.service';
import userService from '../services/user.service';
class GroupController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body;
    const newGroup = await groupService.createGroup(name, description);
    res.json(newGroup);
  };

  async addUser(req: Request, res: Response) {
    const group_id = parseInt(req.params.id);
    const { user_id } = req.body;
    const newGroup = await groupService.addUser(user_id, group_id);
    res.json(newGroup);
  }

  async get(req: Request, res: Response) {
    const users = await groupService.getAllGroups()
    res.json(users);
  };

  async edit(req: Request, res: Response) {
    const group_id = parseInt(req.params.id);
    const {name, description} = req.body;
    const editedGroup = await groupService.editGroup(group_id, name, description);
    res.json(editedGroup);
  };

  async delete(req: Request, res: Response) {
    const deletedGroup = await groupService.deleteGroup(parseInt(req.params?.id));
  };
}

export default new GroupController();