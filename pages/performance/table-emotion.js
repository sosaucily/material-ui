/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import NoSsr from '@material-ui/core/NoSsr';

const createComponent = defaultComponent => {
  const MyComponent = React.forwardRef(function MyComponent(props, ref) {
    const { component: Component = defaultComponent, ...other } = props;

    return <Component ref={ref} {...other} />;
  });

  MyComponent.propTypes = {
    component: PropTypes.elementType,
  };

  return styled(MyComponent)`
    background: pink;
  `;
};

const Table = createComponent('table');
const TableHead = createComponent('thead');
const TableRow = createComponent('tr');
const TableCell = createComponent('td');
const TableBody = createComponent('tbody');

const data = { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 };
const rows = Array.from(new Array(100)).map(() => data);

function TableEmotion() {
  return (
    <NoSsr defer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell>Calories</TableCell>
            <TableCell>Fat (g)</TableCell>
            <TableCell>Carbs (g)</TableCell>
            <TableCell>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </NoSsr>
  );
}

export default TableEmotion;
