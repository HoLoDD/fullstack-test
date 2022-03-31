import React, { FC } from 'react';
import styles from './user-item.module.scss';

const UserHeader: FC = () => {
  return (
    <tr>
      <th className={styles.item}>ID</th>
      <th className={styles.item}>USERNAME</th>
      <th className={styles.item}>GROUP</th>
      <th className={styles.item}>CREATED AT</th>
      <th className={styles.item}>ACTIONS</th>
    </tr>
  )
}

export default UserHeader;