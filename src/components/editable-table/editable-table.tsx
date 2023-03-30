import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { PencilFill, Save, Trash, XSquare } from 'react-bootstrap-icons';
import TableItem from '../table-item/table-item';
import './EditableTable.styles.scss';
import { EditableTableProps } from '../../types/editable-table-props';

const EditableTable = ({
  columns,
  rows,
  isEditMode,
  rowIDToEdit,
  handleEdit,
  handleCancelEditing,
  handleSaveRowChanges,
  actions,
}: EditableTableProps) => {
  return (
    <Table bordered hover>
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
