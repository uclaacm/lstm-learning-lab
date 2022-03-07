import {
  BrowserRouter as Router,
  Routes, 
  Route 
} from 'react-router-dom';

import AppWrapper from './shared/AppWrapper';
import { HeaderSections } from './shared/globalTypes';
import '../assets/WestwoodSans-Regular.ttf';

import Landing from "./pages/Landing";

function App(): JSX.Element {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={
            <AppWrapper section={HeaderSections.DEFAULT_SECTION}>
              <Landing />
            </AppWrapper>
          } />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
