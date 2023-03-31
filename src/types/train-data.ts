export type TrainData = {
  name: string;
  description: string;
  speedLimits: Speedlimit[];
};

export type UpdatedTrainData = TrainData & {
  id: string;
};

export type Speedlimit = {
  name: string;
  speedLimit: number;
};

export type Speedlimits = Speedlimit[];
