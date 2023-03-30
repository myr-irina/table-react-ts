import React from 'react';
import Table from 'react-bootstrap/Table';

const NonEditableTable = ({ data, columns }) => {
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
        {data.map((row, index) => {
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
