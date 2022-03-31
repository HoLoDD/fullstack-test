import React, { FC } from 'react';
import { IUser } from '../../../models';
import styles from './user-item.module.scss';

interface Props {
  user: IUser;
}

const UserItem: FC<Props> = ({user}) => {
  return (
    <tr>
      <td className={styles.item}>{user.id}</td>
      <td className={styles.item}>{user.username}</td>
      <td className={styles.item}>{user.group?.name}</td>
      <td className={styles.item}>{user.createdAt.toString().split('GMT')[0]}</td>
      <td className={styles.item}>edit | del</td>
    </tr>
  )
}

export default UserItem;