import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import TableItem from '../table-item/table-item';
import { EditableTableProps } from '../../types/editable-table-props';
import './editable-table.module.scss';

const EditableTable = ({
  columns,
  rows,
  // isEditMode,
  // rowIDToEdit,
  // handleEdit,
  // handleCancelEditing,
  // handleSaveRowChanges,
  actions,
}: EditableTableProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState<string | null>(null);

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
    <Table hover bordered>
      <thead>
        <tr>
          <th>Edit</th>
          {columns.map((column, i) => {
            return (
              <th key={i} scope='col'>
                {column}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row.id}>
              <TableItem
                isEditMode={isEditMode}
                row={row}
                rowIDToEdit={rowIDToEdit}
                handleCancelEditing={handleCancelEditing}
                // preventPasteNegative={preventPasteNegative}
                actions={actions}
                // preventMinus={preventMinus}
                handleSaveRowChanges={handleSaveRowChanges}
                handleEdit={handleEdit}
              />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default EditableTable;
