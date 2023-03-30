import { TrainData } from './train-data';

export type EditableTableProps = {
  columns: string[];
  rows: TrainData[];
  isEditMode: boolean;
  rowIDToEdit: string | null;
  handleEdit: HandleEditType;
  handleCancelEditing: HandleVoidFn;
  handleSaveRowChanges: HandleVoidFn;
  actions: any;
};

export type TableItemProps = {
  row: TrainData;
  isEditMode: boolean;
  rowIDToEdit: string | null;
  handleEdit: HandleEditType;
  handleCancelEditing: HandleVoidFn;
  handleSaveRowChanges: HandleVoidFn;
  actions: any;
};

type HandleEditType = (a: string) => void;
type HandleVoidFn = () => void;
