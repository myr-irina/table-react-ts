import React from 'react';
import Table from 'react-bootstrap/Table';

const NonEditableTable = ({ columns, rowsState }) => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          {columns.map((column, index) => {
            return <th key={index}>{column.fieldName}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rowsState.map((row, index) => {
          return (
            <tr key={index}>
              <td>{row.name}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default NonEditableTable;
