import './App.css';
import Header from './Header'
import State from "./State"
import showStateData from './ShowStateData'
import DistrictData from './DistrictData'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


function App() {
  return (
    <Router >
      <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={State} />
        <Route path="/:id" exact component={showStateData}/>
        <Route path="/:id/:dis" component={DistrictData} />
      </Switch>
     
      
    </div>
    </Router>
    
  );
}

export default App;
