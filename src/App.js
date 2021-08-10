import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Covid from './componants/covid-updates/Covid';
import DigitalClock from './componants/digital-clock/DigitalClock';
import { Route, Switch } from 'react-router-dom';
import InterNationalCovidUpdate from './componants/covid-updates/InterNationalCovidUpdate';
import FooterNavigation from './componants/FooterNavigation';
import Covid2 from './componants/covid-updates/Covid2';


function App() {
  return (
    <>
      <Switch>
        <Route path="/digital-clock" component={DigitalClock} />
        <Route path="/covid" component={Covid} />
        <Route path="/international-covid-updates" component={InterNationalCovidUpdate} />
        <Route path="/covid-2" component={Covid2} />
        <Route path="/">
          <div className="homeSection">
            <h1>Welcome</h1>
          </div>
        </Route>
      </Switch>
      
      <FooterNavigation />
    </>
  );
}

export default App;