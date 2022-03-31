import React, { FC } from 'react';
import { IGroup } from '../../../models';
import styles from './group-item.module.scss';

const GroupHeader: FC = () => {
  return (
    <tr>
      <th className={styles.item}>ID</th>
      <th className={styles.item}>NAME</th>
      <th className={styles.item}>DESCRIPTION</th>
      <th className={styles.item}>USERS</th>
      <th className={styles.item}>ACTIONS</th>
    </tr>
  )
}

export default GroupHeader;