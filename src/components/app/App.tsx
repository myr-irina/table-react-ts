import React, { useState } from 'react';
import EditableTable from '../editable-table/editable-table';
import NonEditableTable from '../non-editable-table/non-editable-table';
import styles from './styles.module.scss';
import { data } from '../../utils/data';
import { v4 as uuidv4 } from 'uuid';
import { TrainDataId } from '../../types/train-data';

function App() {
  const updatedData: TrainDataId[] = data.map((item) => {
    return {
      id: uuidv4(),
      ...item,
    };
  });

  const columnsLeft = [{ field: 'trainName', fieldName: 'Train Name' }];

  let newArray = [];
  for (let i = 0; i < 2; i++) {
    for (let speedLimits of data[i].speedLimits) {
      newArray.push(speedLimits.name);
    }
  }
  const columnsRight = [...new Set(newArray)];
  const [rowsState, setRowsState] = useState(updatedData);

  return (
    <div className={styles.wrapper}>
      <NonEditableTable rowsState={rowsState} columns={columnsLeft} />
      <EditableTable columns={columnsRight} rows={rowsState} actions />
    </div>
  );
}

export default App;
