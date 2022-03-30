import { User } from '../models/user.entity';
import dataSource from '../utils/connect-db';

class UserService {
  async createUser(username: string) {
    // insert new user
  }

  async getAllUsers() {
    const users: User[] = await dataSource.manager.find(User);
    return users;
  }
  
  async editUser(id: number, username: string) {
    // edit user by id
  }

  async deleteUser(id: number) {
    // delete user
  }

}

export default new UserService();