interface HealthHistory {
  status: string
  timestamp: string
}
  
export interface AssetsType {
  assignedUserIds: [number];
  companyId: number;
  healthHistory: [HealthHistory];
  healthscore: number;
  id: number;
  image: string;
  metrics: {
    lastUptimeAt: string;
    totalCollectsUptime: number;
    totalUptime: number;
  }
  model: string;
  name: string;
  sensor: [string];
  specifications: {
    maxTemp: number;
  }
  status: string;
  unitid: number;
}


// export interface LifeSeriesType {
//   name: string;
//   data: number;
// }

export interface LossSeriesType {
  name: string;
  data: [number];
}

// export interface ListAssetsType {
//   categories: [string];
//   life: [LifeSeriesType];
//   loss: LossSeriesType;
// }