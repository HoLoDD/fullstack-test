import React, { FC, useEffect, useState } from 'react';
import styles from './users.module.scss';
import AddBtn from '../components/add-btn/add-btn';
import Table from '../components/table/table';
import { IGroup, IUser } from '../models';
import UserItem from '../components/table-item/user/user-item';
import UserHeader from '../components/table-item/user/user-header';
import Modal from '../components/modal/modal';
import UserForm from '../components/form/user-form/user-form';
import { groupAPI, userAPI } from '../api/index';

const Users: FC = () => {

  const [users, setUsers] = useState<IUser[]>([]);
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [selectedUser, setSelectedUser] = useState<{ user_id: number, username: string, group: IGroup | null }>();
  const [modalAdd, setModalAdd] = useState<boolean>(false);
  const [modalEdit, setModalEdit] = useState<boolean>(false);

  useEffect(() => {
    userAPI.fetchUsers()
      .then((users) =>
        setUsers(users.data.sort((user1, user2) => user1.id - user2.id))
      );
    groupAPI.fetchGroups()
      .then((groups) =>
        setGroups(groups.data.sort((group1, group2) => group1.id - group2.id))
      )
  }, []);

  async function addUser(username: string, group: IGroup | null) {
    setModalAdd(false);
    const response = await userAPI.addUser(username, group);
    setUsers([...users, response.data])
  }

  async function editUser(username: string, group: IGroup | null, user_id: number) {
    setModalEdit(false);
    const response = await userAPI.editUser(user_id, username, group);
    setUsers(users.map((user) => user.id === user_id ? response?.data : user));
  }

  async function deleteUser(user_id: number) {
    setUsers(users.filter((user) => user.id !== user_id));
    await userAPI.deleteUser(user_id);
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <AddBtn onClick={() => setModalAdd(true)}>ADD USER</AddBtn>
        <Modal 
          visible={modalAdd} 
          setVisible={setModalAdd}
        >
          <UserForm 
            onSubmit={addUser} 
            groups={groups} 
            onCancel={() => setModalEdit(false)} 
            />
        </Modal>
        <Modal 
          visible={modalEdit} 
          setVisible={setModalEdit}
        >
          <UserForm 
            onSubmit={editUser} 
            onCancel={() => setModalEdit(false)} 
            groups={groups} 
            data={selectedUser} 
          />
        </Modal>
        <Table
          data={users}
          renderData={(user: IUser) =>
            <UserItem
              key={user.id}
              user={user}
              actions={{
                setSelectedUser: () => setSelectedUser({ user_id: user.id, username: user.username, group: user.group }),
                edit: () => setModalEdit(true),
                del: deleteUser,
              }} />}
          renderHeader={() => <UserHeader />}
        />
      </div>
    </div>
  )
}

export default Users;