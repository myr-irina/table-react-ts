import { TrainDataId } from './train-data';

export type EditableTableProps = {
  columns: string[];
  rows: TrainDataId[];
  actions: boolean;
};

export type TableItemProps = {
  row: TrainDataId;
  actions: boolean;
};

type HandleEditType = (a: string) => void;
type HandleVoidFn = (a?: any) => void;
