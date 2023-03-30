import React, { useState } from 'react';
import EditableTable from '../editable-table/editable-table';
import NonEditableTable from '../non-editable-table/non-editable-table';
import styles from './styles.module.scss';
import { data } from '../../utils/data';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const updatedData = data.map((item) => {
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

  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState<string | null>(null);
  const [rowsState, setRowsState] = useState(updatedData);

  const handleEdit = (rowID: string) => {
    setIsEditMode(true);
    setRowIDToEdit(rowID);
  };

  const handleCancelEditing = () => {
    setIsEditMode(false);
  };

  const handleSaveRowChanges = () => {
    setTimeout(() => {
      setIsEditMode(false);
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      <NonEditableTable rowsState={rowsState} columns={columnsLeft} />
      <EditableTable
        columns={columnsRight}
        rows={rowsState}
        isEditMode={isEditMode}
        rowIDToEdit={rowIDToEdit}
        handleEdit={handleEdit}
        handleCancelEditing={handleCancelEditing}
        handleSaveRowChanges={handleSaveRowChanges}
        actions
      />
    </div>
  );
}

export default App;
