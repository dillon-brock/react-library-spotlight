import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import GenderChart from './components/Chart/GenderChart';
import PlantsTable from './components/PlantsTable/PlantsTable';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
          <PlantsTable />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <h2>Percent of Population Identifying as Transgender By Race</h2>
          <h4>data from <a href='https://williamsinstitute.law.ucla.edu/publications/trans-adults-united-states/'>UCLA Williams Institute</a></h4>
          <GenderChart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
