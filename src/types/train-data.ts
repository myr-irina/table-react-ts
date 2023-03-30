export type TrainData = {
  id?: string;
  name: string;
  description: string;
  speedLimits: Speedlimits[];
};

export type Speedlimits = {
  name: string;
  speedLimit: number;
};
