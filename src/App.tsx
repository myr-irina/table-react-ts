import React from 'react';
import logo from './logo.svg';
import EditableTable from './components/editable-table/editable-table';
import NonEditableTable from './components/non-editable-table/non-editable-table';
function App() {
  return (
    <>
      <NonEditableTable />
      <EditableTable />
    </>
  );
}

export default App;
