import { TrainData, TrainDataId } from './train-data';

export type EditableTableProps = {
  columns: string[];
  rows: TrainDataId[];
  isEditMode: boolean;
  rowIDToEdit: string | null;
  handleEdit: HandleEditType;
  handleCancelEditing: HandleVoidFn;
  handleSaveRowChanges: HandleVoidFn;
  actions: any;
};

export type TableItemProps = {
  row: TrainDataId;
  isEditMode: boolean;
  rowIDToEdit: string | null;
  handleEdit: HandleEditType;
  handleCancelEditing: HandleVoidFn;
  handleSaveRowChanges: HandleVoidFn;
  actions: any;
};

type HandleEditType = (a: string) => void;
type HandleVoidFn = (a?: any) => void;
