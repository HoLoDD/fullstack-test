import React, { FC, useEffect, useState } from 'react';
import { groupAPI } from '../api';
import AddBtn from '../components/add-btn/add-btn';
import GroupForm from '../components/form/group-form/group-form';
import Modal from '../components/modal/modal';
import GroupHeader from '../components/table-item/group/group-header';
import GroupItem from '../components/table-item/group/group-item';
import Table from '../components/table/table';
import { IGroup } from '../models';
import styles from './groups.module.scss';

const Groups: FC = () => {

  const [groups, setGroups] = useState<IGroup[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<{ group_id: number, name: string, description: string}>();
  const [modalAdd, setModalAdd] = useState<boolean>(false);
  const [modalEdit, setModalEdit] = useState<boolean>(false);

  const fetchGroups = async () => {
    try {
      groupAPI.fetchGroups()
        .then((groups) =>
          setGroups(groups.data.sort((group1, group2) => group1.id - group2.id))
        )
    } catch (error) {
      console.log(error);
    }
  }

  async function addGroup(name: string, description: string) {
    setModalAdd(false);
    const response = await groupAPI.addGroup(name, description);
    setGroups([...groups, response.data])
  }

  async function editGroup(name: string, description: string, group_id: number) {
    setModalEdit(false);
    const response = await groupAPI.editGroup(group_id, name, description);
    setGroups(groups.map((group) => group.id === group_id 
      ? {...group, name: response.data.name, description: response.data.description}
      : group
    ));
  }

  async function deleteGroup(group_id: number) {
    setGroups(groups.filter((group) => group.id !== group_id));
    const response = await groupAPI.deleteGroup(group_id);
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <AddBtn onClick={() => setModalAdd(true)}>ADD GROUP</AddBtn>
        <Modal 
          visible={modalAdd} 
          setVisible={setModalAdd}
        >
          <GroupForm onSubmit={addGroup} />
        </Modal>
        <Modal 
          visible={modalEdit} 
          setVisible={setModalEdit}
        >
          <GroupForm 
            onSubmit={editGroup} 
            onCancel={() => setModalEdit(false)} 
            data={selectedGroup}
          />
        </Modal>
        <Table
          data={groups}
          renderHeader={() => <GroupHeader />}
          renderData={(group: IGroup) =>
            <GroupItem
              key={group.id}
              group={group}
              actions={{
                setSelectedGroup: () => setSelectedGroup({ group_id: group.id, name: group.name, description: group.description }),
                edit: () => setModalEdit(true),
                del: deleteGroup,
              }}
            />}
        />
      </div>
    </div>
  )
}

export default Groups;
