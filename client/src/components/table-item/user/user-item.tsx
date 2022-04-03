import React, { FC } from 'react';
import { IGroup, IUser } from '../../../models';
import styles from './user-item.module.scss';

interface Props {
  user: IUser;
  actions: {
    setSelectedUser: (username: string, group: IGroup | null) => void;
    edit: (user_id: number, username: string) => void,
    del: (user_id: number) => void;
  }
}

const UserItem: FC<Props> = ({user, actions}) => {

  return (
    <tr>
      <td className={styles.item}>{user.id}</td>
      <td className={styles.item}>{user.username}</td>
      <td className={styles.item}>{user.group?.name}</td>
      <td className={styles.item}>{user.createdAt.toString().split('GMT')[0]}</td>
      <td className={styles.item}>
        <button 
          className={styles.btn} 
          onClick={() => {
            actions.setSelectedUser(user.username, user.group);
            actions.edit(user.id, user.username);
          }}
        >EDIT</button>
        <button className={styles.btn} onClick={() => actions.del(user.id)}>DEL</button>
      </td>
    </tr>
  )
}

export default UserItem;