import React, { FC } from 'react';
import { IGroup } from '../../../models';
import styles from './group-item.module.scss';

interface Props {
  group: IGroup;
  actions: {
    setSelectedGroup: (name: string, description: string) => void;
    edit: (group_id: number, name: string, description: string) => void,
    del: (user_id: number) => void;
  }
}

const GroupItem: FC<Props> = ({ group, actions }) => {
  return (
    <tr>
      <td className={styles.item}>{group.id}</td>
      <td className={styles.item}>{group.name}</td>
      <td className={styles.item}>{group.description}</td>
      <td className={styles.item}>{group.users?.map((item) => item.username + ", ")}</td>
      <td className={styles.item}>
        <button
          className={styles.btn}
          onClick={() => {
            actions.setSelectedGroup(group.name, group.description);
            actions.edit(group.id, group.name, group.description)
            }}
        >EDIT</button>
        <button 
          className={styles.btn} 
          onClick={() => {
            if(group.users?.length) alert('Cant delete group with users')
            else actions.del(group.id);
          }}>DEL</button>
      </td>
    </tr>
  )
}

export default GroupItem;