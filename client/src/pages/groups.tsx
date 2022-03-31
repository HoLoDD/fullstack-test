import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import AddBtn from '../components/add-btn/add-btn';
import GroupHeader from '../components/table-item/group/group-header';
import GroupItem from '../components/table-item/group/group-item';
import Table from '../components/table/table';
import { IGroup } from '../models';
import styles from './groups.module.scss';

const Groups: FC = () => {
  const [groups, setGroups] = useState<IGroup[]>([]);

  const fetchGroups = async () => {
    const response = await axios.get<IGroup[]>('http://localhost:5000/api/group');
    setGroups(response.data.sort((group1, group2) => group1.id - group2.id));
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <AddBtn onClick={() => console.log('add group')}>ADD USER</AddBtn>
        <Table 
          data={groups} 
          renderData={(group: IGroup) => <GroupItem key={group.id} group={group} />} 
          renderHeader={() => <GroupHeader />} 
        />
      </div>
    </div>
  )
}

export default Groups;