export type RiskArea = {
  id: string;
  name: string;
  level: 'low' | 'medium' | 'high';
  coordinates: [number, number][][];
};

export const riskAreas: RiskArea[] = [
  {
    id: 'risk-01',
    name: '长江中游气候影响区',
    level: 'medium',
    coordinates: [
      [
        [112.5, 31.4],
        [114.8, 32.1],
        [116.1, 30.9],
        [114.5, 29.6],
        [112.8, 30.2],
        [112.5, 31.4]
      ]
    ]
  },
  {
    id: 'risk-02',
    name: '西北供应链波动区',
    level: 'high',
    coordinates: [
      [
        [106.6, 35.6],
        [110.2, 36.4],
        [111.3, 34.9],
        [108.9, 33.7],
        [106.6, 35.6]
      ]
    ]
  },
  {
    id: 'risk-03',
    name: '华南港口拥堵区',
    level: 'low',
    coordinates: [
      [
        [112.4, 22.3],
        [114.8, 22.4],
        [114.1, 23.5],
        [112.7, 23.2],
        [112.4, 22.3]
      ]
    ]
  }
];
