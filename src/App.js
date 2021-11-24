import { Provider } from 'react-redux';
import './App.css';
import HeaderComponent from './components/header/index.js';
import store from './js-redux/store';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import WelcomeComponent from './components/home/mainPage/welcomePage';
import TrendingComponent from './components/home/mainPage/TrendingPage';
import AllItemsComponent from './components/home/mainPage/allitems/index.js';
import MyCartComponent from './components/home/mainPage/myCart';
import NoPageFoundComponent from './components/home/mainPage/NoPageFound';
import ContactUsComponent from './components/home/mainPage/contactUsPage';
import BeveragesComponent from './components/home/mainPage/beverages/index';
import DessertsComponent from './components/home/mainPage/desserts/index'
import HappyMealsComponent  from "./components/home/mainPage/happyMeal/index";
import OrderPlacedComponent from './components/home/mainPage/orderPlaced';
import OrderHistoryComponent from './components/home/mainPage/orderHistory';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="yyy container-fluid">
          <HeaderComponent/>
          <div className="row">
            <div className="ggg col-2">
              <div className="nav flex-column horizontalNavbar" role = "tablist" aria-orientation="vertical">
                <Link to="/all_items" className="aaa nav-link"  data-toggle ="pill" href = "#" role = "tab" style = {{color:"black"}} aria-selected="false">All</Link>
                <Link to = "/trending" className="aaa nav-link" data-toggle ="pill" href = "#" role = "tab"  style = {{color:"black"}} aria-selected="false" >Trending</Link>
                <Link to = "/happy_meals" className="aaa nav-link" data-toggle ="pill" href = "#" role = "tab"  style = {{color:"black"}} aria-selected="false" >Happy Meals</Link>
                <Link to = "/desserts" className="aaa nav-link" data-toggle ="pill" href = "#" role = "tab"  style = {{color:"black"}} aria-selected="false" >Desserts</Link>
                <Link to = "/beverages" className="aaa nav-link" data-toggle ="pill" href = "#" role = "tab"  style = {{color:"black"}} aria-selected="false" >Beverages</Link>
              </div>
            </div>
            <div className="col-10">
              <br></br>
              <Switch>
                <Route exact path = "/" component = {WelcomeComponent}/>
                <Route exact path = "/trending" component={TrendingComponent}/>
                <Route exact path = "/all_items" component = {AllItemsComponent}/>
                <Route exact path = "/happy_meals" component = {HappyMealsComponent}/>
                <Route exact path = "/desserts" component = {DessertsComponent}/>
                <Route exact path = "/beverages" component = {BeveragesComponent}/>
                <Route exact path = "/my_cart" component = {MyCartComponent}/>
                <Route exact path = "/contact" component= {ContactUsComponent}/>
                <Route exact path = "/order_history" component={OrderHistoryComponent}/>
                <Route exact path = "/order_placed" component = {OrderPlacedComponent}/>
                <Route exact path = "*" component={NoPageFoundComponent}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
