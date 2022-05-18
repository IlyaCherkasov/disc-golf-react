import { useState } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/Layout';
import TownSelectModal from 'components/TownSelectModal';
import GlobalStyle from 'helpers/GlobalStyle';
import routes from 'helpers/routes';
import theme from 'helpers/theme';
import { TownProvider } from 'hooks/TownContext';
import About from 'pages/About';
import Companies from 'pages/Companies';
import Home from 'pages/Home';
import International from 'pages/International';
import Master from 'pages/Master';
import Newbie from 'pages/Newbie';
import Players from 'pages/Players';
import Pro from 'pages/Pro';
import Shop from 'pages/Shop';
import Train from 'pages/Train';

const App = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <TownProvider>
          <Layout openTownSelect={() => setOpen(true)}>
            <Routes>
              <Route path={routes.HOME} element={<Home />} />
              <Route
                path={routes.MASTER}
                element={<Master openTownSelect={() => setOpen(true)} />}
              />
              <Route path={routes.TRAINING} element={<Train />} />
              <Route
                path={routes.NEWBIE}
                element={<Newbie openTownSelect={() => setOpen(true)} />}
              />
              <Route
                path={routes.PRO}
                element={<Pro openTownSelect={() => setOpen(true)} />}
              />
              <Route path={routes.INTERNATIONAL} element={<International />} />
              <Route path={routes.SHOP} element={<Shop />} />
              <Route path={routes.COMPANIES} element={<Companies />} />
              <Route path={routes.ABOUT} element={<About />} />
              <Route path={routes.PLAYERS} element={<Players />} />
            </Routes>
            <TownSelectModal isOpen={open} onClose={() => setOpen(false)} />
          </Layout>
        </TownProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
