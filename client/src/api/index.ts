import axios from 'axios';
import { IGroup, IUser } from '../models';
const API_URL = 'http://localhost:5000/api';

class UserAPI {
    async fetchUsers() {
        const response = await axios.get<IUser[]>(`${API_URL}/user`);
        return response;
    }

    async addUser(username: string, group: IGroup | null) {
        const response = await axios.post<IUser>(`${API_URL}/user`, {
            username,
        });

        if (group) {
            const addResponse = await axios.post<IUser>(
                `${API_URL}/user/${response.data.id}`,
                { group_id: group.id }
            );
            return addResponse;
        }
        return response;
    }

    async deleteUser(user_id: number) {
        const response = await axios.delete(`${API_URL}/user/${user_id}`);
        return response;
    }

    async editUser(user_id: number, username: string, group: IGroup | null) {
        const response = await axios.patch<IUser>(
            `${API_URL}/user/${user_id}`,
            { username, group }
        );

        if (group) {
            const addResponse = await axios.post<IUser>(
                `${API_URL}/user/${response.data.id}`,
                { group_id: group.id }
            );
            return addResponse;
        }

        return response;
    }
}

export const userAPI = new UserAPI();

export class GroupAPI {
    async fetchGroups() {
        const response = await axios.get<IGroup[]>(`${API_URL}/group`);
        return response;
    }

    async addGroup(name: string, description: string) {
        const response = await axios.post<IGroup>(`${API_URL}/group`, {
            name,
            description,
        });

        return response;
    }

    async deleteGroup(group_id: number) {
        const response = await axios.delete(`${API_URL}/group/${group_id}`);
        return response;
    }

    async editGroup(group_id: number, name: string, description: string) {
        console.log(name, description);

        const response = await axios.patch<IGroup>(
            `${API_URL}/group/${group_id}`,
            { name, description }
        );
        return response;
    }
}

export const groupAPI = new GroupAPI();
