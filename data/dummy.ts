export type LegoSet = {
  id: string;
  name: string;
  number: number;
  theme: string;
  price: number;
  pieceCount: number;
  imageUrl?: string;
};

export const DUMMY_SETS: LegoSet[] = [
  {
    id: '1',
    name: 'Eiffel Tower',
    number: 10307,
    theme: 'Icons',
    price: 629.99,
    pieceCount: 10001,
  },
  {
    id: '2',
    name: 'Botanical Garden',
    number: 10329,
    theme: 'Icons',
    price: 99.99,
    pieceCount: 1363,
  },
  {
    id: '3',
    name: 'Millennium Falcon',
    number: 75192,
    theme: 'Star Wars',
    price: 849.99,
    pieceCount: 7541,
    imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1',
  },
];
