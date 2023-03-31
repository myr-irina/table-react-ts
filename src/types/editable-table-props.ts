import { UpdatedTrainData } from './train-data';

export type EditableTableProps = {
  columns: string[];
  rows: UpdatedTrainData[];
  actions: boolean;
};

export type TableItemProps = {
  row: UpdatedTrainData;
  actions: boolean;
};
