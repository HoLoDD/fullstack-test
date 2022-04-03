import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { IGroup } from '../../../models';
import Input from '../input/input';
import styles from './user-form.module.scss';

interface Props {
  //onSubmit: (username: string, group: IGroup | null) => void;
  onSubmit: any;
  onCancel?: () => void;
  data?: {
    user_id: number;
    username: string;
    group: IGroup | null;
  }
  groups: IGroup[];
}

const UserForm: FC<Props> = ({ onSubmit, onCancel, groups, data }) => {
  const [username, setUsername] = useState<string>(data?.username || '');
  const [group, setGroup] = useState<IGroup | null>(data?.group || null);

  return (
    <form className={styles.form}>
      <legend className={styles.header}>User</legend>
      <p className={styles.field}>
        <label>USERNAME</label>
        <Input
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        />
      </p>
      <p className={styles.field}>
        <label>GROUP</label>
        <select
          className={styles.select}
          value={group?.id}
          onChange={
            (e: ChangeEvent<HTMLSelectElement>) =>
              setGroup(groups[e.target.selectedIndex])
          }
        >
          {groups.map((group: IGroup) => <option key={group.id} value={group.id}>{group.name}</option>)}
        </select>
      </p>
      {onCancel && <button className={styles.btn} onClick={onCancel}>CANCEL</button>}
      <button onClick={
        (e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          onSubmit(username, group, data?.user_id);
          setUsername('');
        }}
        className={styles.btn}
      >
        SAVE
      </button>
    </form>
  )
}

export default UserForm;