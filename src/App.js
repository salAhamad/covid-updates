import { Route, Switch } from 'react-router-dom';
import Covid from './componants/covid-updates/Covid';
import Covid2 from './componants/covid-updates/Covid2';
import InterNationalCovidUpdate from './componants/covid-updates/InterNationalCovidUpdate';
import DigitalClock from './componants/digital-clock/DigitalClock';
import JsonPlaceholder from './componants/json-placeholder/JsonPlaceholder';
import PostDetail from './componants/json-placeholder/PostDetail';
import FooterNavigation from './componants/FooterNavigation';

// Css Importing */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Albums from './componants/json-placeholder/Albums';

function App() {
  return (
    <>
      <Switch>
        <Route path="/digital-clock" component={DigitalClock} />
        <Route path="/covid" component={Covid} />
        <Route path="/international-covid-updates" component={InterNationalCovidUpdate} />
        <Route path="/covid-2" component={Covid2} />
        <Route path="/json-placeholder" component={JsonPlaceholder} />
        <Route path="/post-details" component={PostDetail} />
        <Route path="/album" component={Albums} />
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