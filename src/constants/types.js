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
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export const DEFAULT_BOARD_PLAYER = [{ "ship": { "type": "Battleship", "shipIndex": 0, "direction": 0 } }, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Destroyer", "shipIndex": 0, "direction": 0 } }, { "ship": { "type": "Destroyer", "shipIndex": 1, "direction": 0 } }, {}, { "ship": { "type": "Battleship", "shipIndex": 1, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Battleship", "shipIndex": 2, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Battleship", "shipIndex": 3, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Carrier", "shipIndex": 0, "direction": 0 } }, { "ship": { "type": "Carrier", "shipIndex": 1, "direction": 0 } }, { "ship": { "type": "Carrier", "shipIndex": 2, "direction": 0 } }, { "ship": { "type": "Carrier", "shipIndex": 3, "direction": 0 } }, { "ship": { "type": "Carrier", "shipIndex": 4, "direction": 0 } }, {}, {}, {}, {}, { "ship": { "type": "Cruiser", "shipIndex": 0, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Cruiser", "shipIndex": 1, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Cruiser", "shipIndex": 2, "direction": 0 } }, {}, {}, {}, {}, { "ship": { "type": "Submarine", "shipIndex": 0, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Submarine", "shipIndex": 1, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Submarine", "shipIndex": 2, "direction": 0 } }, {}, {}, {}];

export const DEFAULT_BOARD_MACHINE = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Destroyer", "shipIndex": 0, "direction": 0 } }, { "ship": { "type": "Destroyer", "shipIndex": 1, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Carrier", "shipIndex": 0, "direction": 0 } }, {}, {}, {}, {}, {}, { "ship": { "type": "Cruiser", "shipIndex": 0, "direction": 0 } }, { "ship": { "type": "Cruiser", "shipIndex": 1, "direction": 0 } }, { "ship": { "type": "Cruiser", "shipIndex": 2, "direction": 0 } }, {}, { "ship": { "type": "Carrier", "shipIndex": 1, "direction": 0 } }, {}, {}, {}, { "ship": { "type": "Battleship", "shipIndex": 0, "direction": 0 } }, {}, { "ship": { "type": "Submarine", "shipIndex": 0, "direction": 0 } }, { "ship": { "type": "Submarine", "shipIndex": 1, "direction": 0 } }, { "ship": { "type": "Submarine", "shipIndex": 2, "direction": 0 } }, {}, { "ship": { "type": "Carrier", "shipIndex": 2, "direction": 0 } }, {}, {}, {}, { "ship": { "type": "Battleship", "shipIndex": 1, "direction": 0 } }, {}, {}, {}, {}, {}, { "ship": { "type": "Carrier", "shipIndex": 3, "direction": 0 } }, {}, {}, {}, { "ship": { "type": "Battleship", "shipIndex": 2, "direction": 0 } }, {}, {}, {}, {}, {}, { "ship": { "type": "Carrier", "shipIndex": 4, "direction": 0 } }, {}, {}, {}, { "ship": { "type": "Battleship", "shipIndex": 3, "direction": 0 } }, {}];