import { useState } from "react";

import { Box } from "@mui/material/";

import Statistic from "./components/mini-components/Statistic";
import BasicTable from "./components/tables/BasicTable";
import BasicTable2 from "./components/tables/BasicTable2";

import CollapsibleTable from "./components/tables/CollapsibleTable";
import ModalWindow from "./components/mini-components/ModalWindow";


// const tableArguments = {
// 	labels: [
// 		{ label: 'All' },
// 		// { label: 'Purchases', marginRight: 5 },
// 		// { label: 'Service Only', marginRight: 5 },
// 	],
// 	headingsNames: ['Heading 1', 'Heading 2'],
// 	filter: (item) => item,
// 	data: {first: 'First', second: 'Second'},
// 	// data2,
// 	 onClick: () => console.log('clicked'),
// 	// height,
// 	title: 'Practice',
// 	// add:,
// }

// const statArgs = {
//   title: "Title",
//   statistic: "Statistic",
//   expand: "Expand Text",
//   // type: 'link',
//   type: "modal",
//   // href: '/link',
//   modalArgs: modalArgs,
//   paper: {
//     elevation: 5,
//     padding: 2,
//     height: { sm: "20vh", md: "19vh" },
//     width: "25%",
//     borderRadius: "15px",
//     display: "flex",
//     flexDirection: "column",
//   },
// };

const BasePage = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(false);

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

  // const modalArgs = {
  //   openModal: true,
  //   content: `${modalContent.data1}`,
  //   sx: {
  //     width: "80%",
  //     //  child,
  //     height: "50%",
  //     onClose: false,
  //     backButton: true,
  //     maxWidth: "200px",
  //   },
  // };



  return (
    <div>
      
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        {/* <Statistic details={statArgs} /> */}
      </Box>

      {/* <BasicTable2 args={tableArgs} /> */}
      {/* <CollapsibleTable/> */}
      {/* <ModalWindow details={modalArgs} open={open} setOpen={setOpen} /> */}
    </div>
  );
};

export default BasePage;
