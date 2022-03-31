import React, { FC, useEffect, useState } from 'react';
import styles from './users.module.scss';
import AddBtn from '../components/add-btn/add-btn';
import Table from '../components/table/table';
import { IUser } from '../models';
import axios from 'axios';
import UserItem from '../components/table-item/user/user-item';
import UserHeader from '../components/table-item/user/user-header';

const Users: FC = () => {

  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get<IUser[]>('http://localhost:5000/api/user');
    setUsers(response.data.sort((user1, user2) => user1.id - user2.id));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log('render');
  

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <AddBtn onClick={() => console.log('add user')}>ADD USER</AddBtn>
        <Table 
          data={users} 
          renderData={(user: IUser) => <UserItem key={user.id} user={user} />} 
          renderHeader={() => <UserHeader />} 
        />
      </div>
    </div>
  )
}

export default Users;