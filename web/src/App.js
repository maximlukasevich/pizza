import {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from './store/CurrentAdmin/actions';

import './App.css';
import Pizza from './pages/Pizza/Pizza';
import PizzaDetail from './pages/PizzaDetail/PizzaDetail';
import Cart from './pages/Cart/Cart';
import Page404 from './pages/Page404/Page404';
import AdminContainer from "./pages/admin/components/AdminContainer/AdminContainer";
import Login from "./pages/admin/Login/Login";
import AdminPage from "./pages/admin/AdminPage/AdminPage";
import Wrapper from "./components/Wrapper/Wrapper";


const App = () => {

  const isAuth = useSelector(state => state.currentAdmin.isAuth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  // TODO: Fix this shit
  return (
    <div>

      <Switch>

        {isAuth && <>
          <Switch>
          <Route exact path={'/admin'}>
            <AdminContainer>
              <AdminPage />
            </AdminContainer>
          </Route>

            <Wrapper>
              <div className='content'>
                <div className='contentBody'>
                  <Switch>
                    <Route exact path={'/cart'} component={Cart} />
                    <Route exact path={'/pizza'} component={Pizza} />
                    <Route exact path={'/pizza/:slug'} component={PizzaDetail} />
                    <Route exact path={'/login'} component={Login}/>
                    <Route exact path={'/'} render={() => <Redirect to={'/pizza'} /> }/>
                    <Route component={Page404} />
                  </Switch>
                </div>
              </div>
            </Wrapper>

          </Switch>

        </>}

        {!isAuth && <>
          <Wrapper>
            <div className='content'>
              <div className='contentBody'>
                <Switch>
                  <Route exact path={'/cart'} component={Cart} />
                  <Route exact path={'/pizza'} component={Pizza} />
                  <Route exact path={'/pizza/:slug'} component={PizzaDetail} />
                  <Route exact path={'/login'} component={Login}/>
                  <Route exact path={'/'} render={() => <Redirect to={'/pizza'} /> }/>
                  <Route component={Page404} />
                </Switch>
              </div>
            </div>
          </Wrapper>
        </>}

      </Switch>
    </div>
  );
}

export default App;
