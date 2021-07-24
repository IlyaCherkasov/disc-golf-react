import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Layout from 'components/Layout';
import theme from 'helpers/theme';
import routes from 'helpers/routes';
import Home from 'pages/Home';
import Master from 'pages/Master';
import Train from 'pages/Train';
import Newbie from 'pages/Newbie';
import Pro from 'pages/Pro';
import International from 'pages/International';
import Companies from 'pages/Companies';
import Sponsorship from 'pages/Sponsorship';
import Shop from 'pages/Shop';
import CitySelectModal from 'components/CitySelectModal';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    margin: 0;
  }

  svg {
    flex-shrink: 0;
  }
`;

const App = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Layout openCitySelect={() => setOpen(true)}>
            <Route exact path={routes.HOME} component={Home} />
            <Route
              exact
              path={routes.MASTER}
              render={(props) => (<Master {...props} openCitySelect={() => setOpen(true)} />)}
            />
            <Route exact path={routes.TRAINING} component={Train} />
            <Route
              exact
              path={routes.NEWBIE}
              render={(props) => (<Newbie {...props} openCitySelect={() => setOpen(true)} />)}
            />
            <Route
              exact
              path={routes.PRO}
              render={(props) => (<Pro {...props} openCitySelect={() => setOpen(true)} />)}
            />
            <Route exact path={routes.INTERNATIONAL} component={International} />
            <Route exact path={routes.SHOP} component={Shop} />
            <Route exact path={routes.COMPANIES} component={Companies} />
            <Route exact path={routes.SPONSORSHIP} component={Sponsorship} />
            <CitySelectModal isOpen={open} onClose={() => setOpen(false)} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
