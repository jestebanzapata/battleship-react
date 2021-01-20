import React from 'react'
import Board from './Board.component';

import { Provider } from 'react-redux';
import store from '../../redux/store';

export default {
  title: 'Board',
  component: Board,
  argTypes: {
    board: { control: 'array'}
  },
  decorators: [story => <Provider store={store}>{story()}</Provider>]
};


const Template = args => <Board {...args}/>

export const Default = Template.bind({});
Default.args = {
  board: [
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
  ]
};
