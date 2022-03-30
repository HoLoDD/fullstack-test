import { group } from 'console';
import { Group } from '../models/group.entity';
import { User } from '../models/user.entity';
import dataSource from '../utils/connect-db';

class UserService {
  async createUser(username: string) {
    try {
      const user = new User();
      user.username = username;
      const newUser = dataSource.manager.insert(User, user)
      return newUser;
    } catch (error) {
      console.log(error);
      
    }
  }

  async getAllUsers() {
    const users: User[] = await dataSource.manager.find(User, {relations: ["group"]});
    return users;
  }

  async getOneUser(id: number) {
    try {
      const group = await dataSource.manager.findOneByOrFail(User, {id});
      return group;
    } catch (error) {
      console.log(error);
    }
  }
  
  async editUser(id: number, username: string) {
    try {
      const user: User = await dataSource.manager.findOneByOrFail(User, {id});
      user.username = username || user.username;
      const savedUser = await dataSource.manager.save(user);
      return savedUser;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(id: number) {
    try {
      return await dataSource.manager.delete(User, {id})
    } catch (error) {
      console.log(error); 
    }
  }

  async setGroup(user_id: number, group_id: number) {
    try {
      const user = await dataSource.manager.findOneByOrFail(User, {id: user_id});
      const group = await dataSource.manager.findOneByOrFail(Group, {id: group_id});
      user.group = group;
      return await dataSource.manager.save(user);
    } catch (error) {
      console.log(error);
    }
  }

}

export default new UserService();