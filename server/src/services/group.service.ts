import { Group } from '../models/group.entity';
import dataSource from '../utils/connect-db';
import userService from './user.service';

class GroupService {
  async createGroup(name: string, description: string) {
    try {
      const group = new Group();
      group.name = name;
      group.description = description;
      const newGroup = dataSource.manager.save(Group, group)
      return newGroup;
    } catch (error) {
      console.log(error);
    }
  }

  async addUser(user_id: number, group_id: number) {
    try {
      const user = await userService.getOneUser(user_id);
      const group = await dataSource.manager.findOneOrFail(Group, {where: {id: group_id}, relations: ["users"]});
      if (!group.users) {
        group.users = [];
      }
      group.users = [...group.users, user];
      return await dataSource.manager.save(group);
    } catch (error) {
      console.log(error);
    }
  }

  async getAllGroups() {
    const groups = await dataSource.manager.find(Group, {relations: ["users"]});
    return groups;
  }

  async getOneGroup(id: number) {
    try {
      const group = await dataSource.manager.findOneByOrFail(Group, {id});
      return group;
    } catch (error) {
      console.log(error);
    }
  }
  
  async editGroup(id: number, name: string, description: string) {
    try {
      const group: Group = await dataSource.manager.findOneByOrFail(Group, {id});
      group.name = name || group.name;
      group.description = description || group.description;
      const savedGroup = await dataSource.manager.save(group);
      return savedGroup;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteGroup(id: number) {
    try {
      return await dataSource.manager.delete(Group, {id})
    } catch (error) {
      console.log(error); 
    }  
  }

}

export default new GroupService();