import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Tabs,
  Tab,
  Paper,
  Button,
  Box,
} from "@mui/material/";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import SearchBar from "../mini-components/SearchBar";

// const tableArgs = {
//   rows: [
//     {
//       data1: "Data 1",
//       data2: "Data 2",
//       data3: "Data 3",
//     },
//     {
//       data1: "Data 4",
//       data2: "Data Poo",
//       data4: "Data 6",
//     },
//     {
//       data1: "Data 1",
//       data2: "Data Data",
//       data3: "Data 3",
//     },
//     {
//       data1: "Data 4",
//       data2: "Data 5",
//       data4: "Data 6",
//     },
//     {
//       data1: "Hello",
//       data2: "There",
//       data3: "Data 3",
//     },
//     {
//       data1: "Data 4",
//       data2: "Data 5",
//       data4: "Data 6",
//     },
//     {
//       data1: "Data 1",
//       data2: "Data 2",
//       data3: "Data 3",
//     },
//   ],
//   headings: [
//     ["", "Heading 1"],
//     ["", "Heading 2"],
//     ["", "Heading 3"],
//     ["", "Expand"],
//   ],
//   sx: {
//     minWidth: 650,
//     align: ["left", "left", "left", "right"],
//   },
//   search: true,
//   labels: [
//     { label: "All" },
//     { label: "Data 1", marginRight: 5 },
//     { label: "Data 4", marginRight: 5 },
//   ],
//   filters: [
//     (search) => search,
//     (search) => search.filter((el) => el.data1 === "Data 1"),
//     (search) => search.filter((el) => el.data1 === "Data 4"),
//   ],
//   onClick: (content) => {
//     setModalContent(content);
//     setOpen(true);
//   },
// };

export default function BasicTable({ args }) {
  const { rows, headings, sx, labels, filters, search, onClick } = args;

  const [coreData, setCoreData] = useState(rows);
  const [tabValue, setTabValue] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [tableData, setTableData] = useState(search)

  useEffect(() => {
    if (filters) {
      setCoreData(filters[tabValue](rows));
    }
  }, [tabValue]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);

    setPage(0);
  };

  const TableTabs = () => {
    const handleChange = (event, newValue) => {
      setTabValue(newValue);
    };

    return (
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          {labels?.map((label, index) => {
            return (
              <Tab
                key={index}
                id={label.id}
                value={index}
                label={label.label}
                sx={{ marginRight: label.marginRight }}
              />
            );
          })}
        </Tabs>
      </Box>
    );
  };

  const tableHeadings = headings.map((heading, index) => (
    <TableCell
      key={Math.random() * 10}
      align={heading[0] ? heading[0] : sx.align[index]}
    >
      {heading[1]}
    </TableCell>
  ));

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <TableTabs />
        {search ? (
          <SearchBar
            setSearch={setCoreData}
            data={filters ? filters[tabValue](rows) : rows}
          />
        ) : null}
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: sx.minWidth }} aria-label="simple table">
          <TableHead>
            <TableRow>{tableHeadings}</TableRow>
          </TableHead>
          <TableBody>
            {!coreData
              ? coreData
              : coreData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const rowData = Object.entries(row).map(
                      ([key, value], index) => (
                        <TableCell
                          key={Math.random() * 10}
                          align={sx.align[index]}
                        >
                          {value}
                          {/* {console.log('index', index)} */}
                        </TableCell>
                      )
                    );
                    return (
                      <TableRow
                        key={Math.random() * 10}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        {rowData}

                        {rowData.length < headings.length ? (
                          <TableCell
                            key={Math.random() * 10}
                            align={sx.align[sx.align.length - 1]}
                          >
                            <Button onClick={() => onClick(row)}>
                              <ArrowForwardIosIcon />
                            </Button>
                          </TableCell>
                        ) : null}
                      </TableRow>
                    );
                  })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={coreData?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
