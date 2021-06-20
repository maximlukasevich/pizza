import {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from './store/CurrentAdmin/actions';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Pizza from './pages/Pizza/Pizza';
import PizzaDetail from './pages/PizzaDetail/PizzaDetail';
import Cart from './pages/Cart/Cart';
import Auth from './pages/Admin/Auth/Auth';
import PizzaList from './pages/Admin/PizzaList/PizzaList';
import CreatePizza from './pages/Admin/CreatePizza/CreatePizza';
import UpdatePizza from './pages/Admin/UpdatePizza/UpdatePizza';
import Orders from './pages/Admin/Orders/Orders';
import Page404 from './pages/Page404/Page404';


const App = () => {

  const isAuth = useSelector(state => state.currentAdmin.isAuth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (

    <div className='container'>
      <Navigation isAuth={isAuth} />
      <div className='content'>
        <div className='contentBody'>
          <Switch>
            <Route exact path={'/cart'} component={Cart} />
            <Route exact path={'/pizza'} component={Pizza} />
            <Route exact path={'/pizza/:slug'} component={PizzaDetail} />
            <Route exact path={'/'} render={() => <Redirect to={'/pizza'} /> }/>

            {isAuth ?
              <Switch>
                <Route exact path={'/admin/orders'} component={Orders} />
                <Route exact path={'/admin/pizza'} component={PizzaList} />
                <Route exact path={'/admin/pizza/:slug/update'} component={UpdatePizza} />
                <Route exact path={'/admin/pizza/create'} component={CreatePizza} />
                <Route exact path={'/login'} render={() => <Redirect to={'/admin/orders'}/>} />
              </Switch> : <Route exact path={'/login'} component={Auth} />}

            <Route path={'*'} component={Page404} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
