export type Route = {
  id: string;
  name: string;
  volume: number;
  risk: 'low' | 'medium' | 'high';
  coordinates: [number, number][];
};

export const routes: Route[] = [
  {
    id: 'route-01',
    name: '华东-华中干线',
    volume: 86,
    risk: 'low',
    coordinates: [
      [121.4737, 31.2304],
      [117.2000, 31.8206],
      [114.3054, 30.5931]
    ]
  },
  {
    id: 'route-02',
    name: '华中-西南冷链',
    volume: 72,
    risk: 'medium',
    coordinates: [
      [114.3054, 30.5931],
      [112.9830, 28.1127],
      [104.0665, 30.5728]
    ]
  },
  {
    id: 'route-03',
    name: '华南-华中补给',
    volume: 91,
    risk: 'medium',
    coordinates: [
      [113.2644, 23.1291],
      [112.9389, 28.2282],
      [114.3054, 30.5931]
    ]
  },
  {
    id: 'route-04',
    name: '西北供应链联动',
    volume: 66,
    risk: 'high',
    coordinates: [
      [108.9398, 34.3416],
      [112.5492, 37.8706],
      [116.4074, 39.9042]
    ]
  }
];
