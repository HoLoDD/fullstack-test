import React, { ReactNode } from 'react';
import styles from './table.module.scss';

interface Props<T> {
  data: T[];
  renderData: (data: T) => ReactNode;
  renderHeader: () => ReactNode;
}

export default function Table<T> ({data, renderData, renderHeader}: Props<T>) {

  return (
    <table>
      <thead>
        {renderHeader()}
      </thead>
      <tbody>
        {data.map(renderData)}
      </tbody>
    </table>
  )
}
