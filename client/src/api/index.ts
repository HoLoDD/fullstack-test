import axios from 'axios';
import { IGroup, IUser } from '../models';

class UserAPI {
  async fetchUsers() {
    const response = await axios.get<IUser[]>('http://localhost:5000/api/user');
    return response;
  }

  async addUser(username: string, group: IGroup | null) {
    const response = await axios.post<IUser>('http://localhost:5000/api/user', { username });

    if (group) {
      const addResponse = await axios.post<IUser>(`http://localhost:5000/api/user/${response.data.id}`, { group_id: group.id })
      return addResponse;
    }
    return response;
  }

  async deleteUser(user_id: number) {
    const response = await axios.delete(`http://localhost:5000/api/user/${user_id}`);
    return response;
  }

  async editUser(user_id: number, username: string, group: IGroup | null) {
    const response = await axios.patch<IUser>(`http://localhost:5000/api/user/${user_id}`, { username, group });

    if (group) {
      const addResponse = await axios.post<IUser>(`http://localhost:5000/api/user/${response.data.id}`, { group_id: group.id })
      return addResponse;
    }

    return response;
  }
}

export const userAPI = new UserAPI();

export class GroupAPI {
  async fetchGroups() {
    const response = await axios.get<IGroup[]>('http://localhost:5000/api/group');
    return response;
  }

  async addGroup(name: string, description: string) {
    const response = await axios.post<IGroup>('http://localhost:5000/api/group', { name, description });

    return response;
  }

  async deleteGroup(group_id: number) {
    const response = await axios.delete(`http://localhost:5000/api/group/${group_id}`);
    return response;
  }

  async editGroup(group_id: number, name: string, description: string) {
    console.log(name, description);
    
    const response = await axios.patch<IGroup>(`http://localhost:5000/api/group/${group_id}`, { name, description });
    return response;
  }
}

export const groupAPI = new GroupAPI();