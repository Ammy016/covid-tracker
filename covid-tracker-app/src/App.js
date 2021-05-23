import './App.css';
import Header from './component/header/Header'
import State from './component/state/State'
import ShowStateData from './component/state/ShowStateData'
import DistrictData from './component/district/DistrictData'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


function App() {

  

  return (
    <Router >
      <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={State} />
        <Route path="/:id" exact component={ShowStateData}/>
        <Route path="/:id/:dis" component={DistrictData} />
      </Switch>
     
      
    </div>
    </Router>
    
  );
}

export default App;
