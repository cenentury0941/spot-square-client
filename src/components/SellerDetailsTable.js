import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData('Seller', "Seller A"),
  createData('Location', "44 E. West Street Ashland, OH 44805"),
  createData('Joined', "2016"),
  createData('Orders', "100+"),
  createData('Rating', "★★★☆☆"),
];

export default function SellerDetailsTable() {
  return (
    <TableContainer sx={{ height:"35vh" }} component={Paper}>
      <Table sx={{ width:"100%",  height:"35vh" }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}