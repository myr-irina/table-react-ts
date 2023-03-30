export type TrainData = {
  name: string;
  description: string;
  speedLimits: Speedlimits[];
};

export type Speedlimits = {
  name: string;
  speedLimit: number;
};
