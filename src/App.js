import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import GenderChart from './components/Chart/GenderChart';
import PlantsTable from './components/PlantsTable/PlantsTable';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/table" className="navbar-item">Table</Link>
        <Link to="/charts" className="navbar-item">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1 className="title is-1">Table Libary</h1>
          <h2 className="title is-3">Plants</h2>
          <PlantsTable />
        </Route>
        <Route path="/charts">
          <h1 className="title is-1">Chart Library</h1>
          <h2 className="title is-3">Percent of Population Identifying as Transgender By Race</h2>
          <h4 className="title is-6">data from <a href='https://williamsinstitute.law.ucla.edu/publications/trans-adults-united-states/'>UCLA Williams Institute</a></h4>
          <GenderChart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
