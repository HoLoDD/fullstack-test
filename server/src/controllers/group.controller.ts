import { Request, Response } from 'express';
import { Group } from '../models/group.entity';
import groupService from '../services/group.service';
class GroupController {
  async create(req: Request, res: Response) {
    const newGroup = await groupService.createGroup(req.body.name)
    res.json(newGroup);
  };

  async get(req: Request, res: Response) {
    const users = await groupService.getAllGroups()
    res.json(users);
  };

  async edit(req: Request, res: Response) {
    const {id, name, description} = req.body;
    const editedGroup = await groupService.editGroup(id, name, description);
    res.json(editedGroup);
  };

  async delete(req: Request, res: Response) {
    const deletedGroup = await groupService.deleteGroup(req.body.id);
  };
}

export default new GroupController();