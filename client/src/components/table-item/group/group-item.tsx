import React, { FC } from 'react';
import { IGroup } from '../../../models';
import styles from './group-item.module.scss';

interface Props {
  group: IGroup;
}

const GroupItem: FC<Props> = ({group}) => {
  return (
    <tr>
      <td className={styles.item}>{group.id}</td>
      <td className={styles.item}>{group.name}</td>
      <td className={styles.item}>{group.description}</td>
      <td className={styles.item}>{group.users?.map((item) => item.username + ", ")}</td>
      <td className={styles.item}>edit | del</td>
    </tr>
  )
}

export default GroupItem;