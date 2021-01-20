export const shipTypes = [
    {
      type: 'Destroyer',
      length: 2,
      count: 1,
      sprites: [],
      color: 'blue'
    },
    {
      type: 'Submarine',
      length: 3,
      count: 1,
      sprites: [],
      color: 'yellow'
    },
    {
      type: 'Cruiser',
      length: 3,
      count: 1,
      sprites: [],
      color: 'green'
    },
    {
      type: 'Battleship',
      length: 4,
      count: 1,
      sprites: [],
      color: 'red'
    },
    {
      type: 'Carrier',
      length: 5,
      count: 1,
      sprites: [],
      color: 'pink'
    },
  ];

export const gameStatus = {
  SETTING: 1,
  PLAYING: 2,
  FINISHED: 3
};

export const modes = {
  SINGLE: 1,
  MULTIPLAYER: 2
}

export const EMPTY_BOARD = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]