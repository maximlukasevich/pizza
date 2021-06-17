import './App.css';
import Navigation from './components/Navigation/Navigation';
import Pizza from './pages/Pizza/Pizza';
import PizzaDetail from './pages/PizzaDetail/PizzaDetail';
import Cart from "./pages/Cart/Cart";
import Auth from "./pages/Admin/Auth/Auth";
import PizzaList from "./pages/Admin/PizzaList/PizzaList";
import CreatePizza from "./pages/Admin/CreatePizza/CreatePizza";
import UpdatePizza from "./pages/Admin/UpdatePizza/UpdatePizza";
import Orders from "./pages/Admin/Orders/Orders";

function App() {
  return (
    <div className='container'>
      <Navigation />
      <div className='content'>
        <div className='contentBody'>

          <Orders />
          <UpdatePizza />
          <CreatePizza />
          <PizzaList />
          <Auth />

          <Cart />
          <PizzaDetail />
          <Pizza />

        </div>
      </div>
    </div>
  );
}

export default App;
