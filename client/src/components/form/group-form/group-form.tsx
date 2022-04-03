import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';
import Input from '../input/input';
import styles from './group-form.module.scss';

interface Props {
  //onSubmit: (name: string, description: string) => void;
  onSubmit: any
  onCancel?: () => void;
  data?: {
    group_id: number,
    name: string,
    description: string
  }
}

const GroupForm: FC<Props> = ({ data, onSubmit, onCancel }) => {

  const [name, setName] = useState<string>(data?.name || '');
  const [description, setDescription] = useState<string>(data?.description || '');

  return (
    <form className={styles.form}>
      <legend className={styles.header}>Group</legend>
      <p className={styles.field}>
        <label>NAME</label>
        <Input 
          value={name} 
          onChange={
            (e: ChangeEvent<HTMLInputElement>) => 
              setName(e.target.value)
          } 
        />
      </p>
      <p className={styles.field}>
        <label>DESCRIPTION</label>
        <Input 
          value={description} 
          onChange={
            (e: ChangeEvent<HTMLInputElement>) => 
              setDescription(e.target.value)
          } 
        />
      </p>
      {onCancel && <button className={styles.btn} onClick={onCancel}>CANCEL</button>}
      <button onClick={
        (e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          onSubmit(name, description, data?.group_id);
          setName('');
          setDescription('');
        }}
        className={styles.btn}
      >
        SAVE
      </button>
    </form>
  )
}

export default GroupForm;