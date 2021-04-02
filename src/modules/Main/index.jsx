import { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import routes from "shared/constants/paths";
import Navbar from "shared/components/Navbar";
import Styled from './styled';

const Content = lazy(() => import('modules/Content'));
const Apps = lazy(() => import('modules/Apps'));

const Main = () => (
  <Styled.Wrapper>
    <Navbar />

    <Switch>
      <Route exact path={routes.content} component={Content} />
      <Route exact path={routes.apps} component={Apps} />
      <Redirect to={routes.apps} />
    </Switch>
  </Styled.Wrapper>
)

export default Main