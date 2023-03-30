import React, { useState } from 'react';
import EditableTable from '../editable-table/editable-table';
import NonEditableTable from '../non-editable-table/non-editable-table';
import styles from './styles.module.scss';
import { data } from '../../utils/data';

function App() {
  const columnsLeft = [{ field: 'trainName', fieldName: 'Train Name' }];

  let newArray = [];
  for (let i = 0; i < 2; i++) {
    for (let speedLimits of data[i].speedLimits) {
      newArray.push(speedLimits.name);
    }
  }
  const columnsRight = [...new Set(newArray)];

  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className={styles.wrapper}>
      <NonEditableTable data={data} columns={columnsLeft} />
      <EditableTable />
    </div>
  );
}

export default App;
