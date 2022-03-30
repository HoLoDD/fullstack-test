import dataSource from '../utils/connect-db';

class GroupService {
  async createGroup(name: string) {
    // insert new Group
  }

  async getAllGroups() {
    //get all Groups
  }
  
  async editGroup(id: number, name: string, description: string) {
    // edit Group by id
  }

  async deleteGroup(id: number) {
    // delete Group
  }

}

export default new GroupService();