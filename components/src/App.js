import { useState } from 'react'
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";


import CssBaseline from '@mui/material/CssBaseline';

import ResponsiveAppBar from "./components/app-bar/ResponsiveAppBar";
import BottomAppBar from './components/app-bar/BottomAppBar';
import MessagesList from './components/mini-components/MessagesList'

import BasePage from "./BasePage";
import theme from "./components/Theme";

const bottomAppArgs = {
  onSearchClick: (item, setItem) => setItem(!item),
  onClick: () => console.log('added'),
}

function App() {
  const [appSearch, setAppSearch] = useState()
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
      <BrowserRouter>
      <ResponsiveAppBar search={appSearch} setSearch={setAppSearch}/>
        <Routes>
          {/* <Route path="/" element={<MessagesList />} /> */}
        </Routes>
        {/* <BottomAppBar args={bottomAppArgs} /> */}
      </BrowserRouter>
 
    </ThemeProvider>
  );
}

export default App;
