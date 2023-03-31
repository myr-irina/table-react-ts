import React from 'react';
import { Table } from 'react-bootstrap';
import TableItem from '../table-item/table-item';
import { EditableTableProps } from '../../types/editable-table-props';
import './editable-table.module.scss';

const EditableTable = ({ columns, rows, actions }: EditableTableProps) => {
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
              <TableItem row={row} actions={actions} />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default EditableTable;
