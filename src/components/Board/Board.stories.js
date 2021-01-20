import React from 'react'
import Board from './Board.component';

import { Provider } from 'react-redux';
import store from '../../redux/store';
import { object } from '@storybook/addon-knobs';

export default {
  title: 'Board',
  component: Board,
  argTypes: {
    board: { control: 'array'}
  },
  decorators: [story => <Provider store={store}>{story()}</Provider>]
};

const boardState = [{ "ship": { "type": "Battleship", "shipIndex": 0, "direction": 0 } }, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Destroyer", "shipIndex": 0, "direction": 0 } }, { "ship": { "type": "Destroyer", "shipIndex": 1, "direction": 0 } }, {}, { "ship": { "type": "Battleship", "shipIndex": 1, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Battleship", "shipIndex": 2, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Battleship", "shipIndex": 3, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Carrier", "shipIndex": 0, "direction": 0 } }, { "ship": { "type": "Carrier", "shipIndex": 1, "direction": 0 } }, { "ship": { "type": "Carrier", "shipIndex": 2, "direction": 0 } }, { "ship": { "type": "Carrier", "shipIndex": 3, "direction": 0 } }, { "ship": { "type": "Carrier", "shipIndex": 4, "direction": 0 } }, {}, {}, {}, {}, { "ship": { "type": "Cruiser", "shipIndex": 0, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Cruiser", "shipIndex": 1, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Cruiser", "shipIndex": 2, "direction": 0 } }, {}, {}, {}, {}, { "ship": { "type": "Submarine", "shipIndex": 0, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Submarine", "shipIndex": 1, "direction": 0 } }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "ship": { "type": "Submarine", "shipIndex": 2, "direction": 0 } }, {}, {}, {}];

const Template = args => <Board {...args} board={object("Board", boardState)}/>

export const Default = Template.bind({});
Default.args = {
  //board: object("Board", boardState)
};
