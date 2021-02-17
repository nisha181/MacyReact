 import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListOfProfilesComponent from './component/ListOfProfilesComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateProfileComponent from './component/CreateProfileComponent';
import UpdateProfileComponent from './component/UpdateProfileComponent';
import StampProfileWithOrderComponent from './component/StampProfileWithOrderComponent';
import ListOfOrdersComponent from './component/ListOfOrdersComponent';

function App() {
  return (
    <div>
      <Router>
         <HeaderComponent/>
             <div className="container">
                <Switch>
                      <Route path="/list" component={ListOfProfilesComponent}></Route>
                      <Route path="/add" component={CreateProfileComponent}></Route>
                      <Route path="/update/:id" component={UpdateProfileComponent}></Route>
                      <Route path="/order/add" component={StampProfileWithOrderComponent}></Route>
                      <Route path="/order/list" component={ListOfOrdersComponent}></Route>
                 </Switch>
             </div>
         <FooterComponent/>
      </Router>
    </div>
    
  );
}

export default App;
