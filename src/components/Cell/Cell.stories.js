import React from 'react'
import Cell from './Cell.component';
import Ships from '../../assets/static/ship';

export default {
  title: 'Cell',
  component: Cell
};

const cellStyle = {
  width: '50px',
  height: '50px'
};

export const Default = props => <Cell {...props} style={cellStyle}/>;

export const Hit = props => <Cell {...props} ship={Ships[0]} style={cellStyle}/>;