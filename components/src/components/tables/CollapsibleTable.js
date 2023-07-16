import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const data2 = [
  {
    name: "Johny",
    location: "UK",
    sports: [
      { sport: "Basketball", time: "10 years" },
      { sport: "Rock Climbing", time: "3 years" },
    ],
  },
  {
    name: "Brianna",
    location: "Victoria",
    sports: [
      { sport: "Netball", time: "1 year" },
      { sport: "Dancing", time: "9 years" },
    ],
  },
  {
    name: "Anders",
    location: "Sweden",
    sports: [
      { sport: "Basketball", time: "10 years" },
      { sport: "Rock Climbing", time: "3 years" },
    ],
  },
];

const args = {
  data: data2,
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

//   const rows = Object.entries(row).map(
//     ([key, value], index) => (
//       <TableCell
//         key={Math.random() * 10}
//       //   align={sx.align[index]}
//       >
//         {value}
//         {/* {console.log('index', index)} */}
//       </TableCell>
//     )

//   )

// Object.entries(row).forEach(([key, value]) => console.log(key,value))
const rows = Object.entries(row).map(([key, value]) => <TableCell key={key+1}>{value}</TableCell>)


  return (
    <React.Fragment>
        {/* {Object.entries(row).forEach(([key, value]) => (<Typography key={key}>{value}</Typography>))} */}
       
     

      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
          
        </TableCell>
        {/* {Object.entries(row).forEach(([key, value]) => <TableCell key={key}>{value}</TableCell>)} */}
      
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.sports.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ args }) {
  // const [rows]=args

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data2.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
