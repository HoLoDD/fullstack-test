import React, { FC } from 'react';
import styles from './add-btn.module.scss';

interface IProps {
  onClick: () => void;
}

const AddBtn: FC<IProps> = ({children, onClick}: any) => {
  return (
    <button className={styles.addbtn} onClick={onClick}>{children}</button>
  )
}

export default AddBtn;