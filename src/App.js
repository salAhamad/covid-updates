import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Covid from './componants/covid-updates/Covid';
import DigitalClock from './componants/digital-clock/DigitalClock';
import { Route, Switch } from 'react-router-dom';
import InterNationalCovidUpdate from './componants/covid-updates/InterNationalCovidUpdate';
import FooterNavigation from './componants/FooterNavigation';


function App() {
  return (
    <>
      <Switch>
        <Route path="/digital-clock" component={DigitalClock} />
        <Route path="/covid" component={Covid} />
        <Route path="/international-covid-updates" component={InterNationalCovidUpdate} />
      </Switch>
      <FooterNavigation />
    </>
  );
}

export default App;