import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { PencilFill, Save, XSquare } from 'react-bootstrap-icons';
import { TableItemProps } from '../../types/editable-table-props';
import styles from './table-item.module.scss';

const TableItem = ({ row, actions }: TableItemProps) => {
  const [rowData, setRowData] = useState(row);
  const [rowIDToEdit, setRowIDToEdit] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = (rowID: string) => {
    setIsEditMode(true);
    setRowIDToEdit(rowID);
  };

  const handleCancelEditing = () => {
    setIsEditMode(false);
  };

  const handleOnChange = (value: any, id: number) => {
    const speedLimits = [...rowData.speedLimits];
    speedLimits[id].speedLimit = value;
    const newData = { ...rowData, speedLimits };
    setRowData(newData);
  };

  function prepareRowData({ id, name, speedLimits }: any) {
    const sortedSpeedLimits = speedLimits
      .sort((a: any, b: any) => a.speedLimit - b.speedLimit)
      .map(({ speedLimit }: any, index: any) => ({
        speedLimit,
        name: `Скорость №${index}`,
      }));

    return { id, name, speedLimits: sortedSpeedLimits };
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newRowData = prepareRowData(rowData);

    setTimeout(() => {
      setIsEditMode(false);
      console.log({ newRowData });
    }, 1000);

    console.log({ newRowData });
  };

  const preventPasteNegative = (e: any) => {
    const clipboardData = e.clipboardData || window.Clipboard;
    const pastedData = parseFloat(clipboardData.getData('text'));

    if (pastedData < 0) {
      e.preventDefault();
    }
  };

  const preventMinus = (e: any) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };

  return (
    <>
      <td>
        {actions && (
          <>
            {isEditMode && rowIDToEdit === row.id ? (
              <button onClick={handleSubmit} className={styles.action_btn}>
                <Save />
              </button>
            ) : (
              <button
                onClick={() => handleEdit(row.id)}
                className={styles.action_btn}
              >
                <PencilFill />
              </button>
            )}
            {isEditMode && rowIDToEdit === row.id ? (
              <button
                onClick={() => handleCancelEditing()}
                className={styles.action_btn}
              >
                <XSquare />
              </button>
            ) : null}
          </>
        )}
      </td>
      {rowData.speedLimits.map(function (element, index) {
        return (
          <td key={index}>
            {isEditMode && rowIDToEdit === row.id ? (
              <Form.Control
                type='number'
                min='0'
                onPaste={preventPasteNegative}
                onKeyDown={preventMinus}
                defaultValue={element.speedLimit}
                id={row.id}
                onChange={(evt) => handleOnChange(evt.target.value, index)}
              />
            ) : (
              element.speedLimit
            )}
          </td>
        );
      })}
    </>
  );
};

export default TableItem;
