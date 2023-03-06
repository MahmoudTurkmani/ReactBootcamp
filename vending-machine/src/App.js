import {Routes, Route} from 'react-router-dom';

import './App.css';
import VendingMachine from './VendingMachine';
import Cola from './Cola';
import Noodels from './Noodles';
import Chips from './Chips';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={VendingMachine.routeName} element={<VendingMachine />} />
        <Route exact path={Cola.routeName} element={<Cola />} />
        <Route exact path={Chips.routeName} element={<Chips />} />
        <Route exact path={Noodels.routeName} element={<Noodels />} />
      </Routes>
    </div>
  );
}

export default App;
