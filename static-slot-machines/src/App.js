import './App.css';

import Machine from './Machine.js';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Slot Machines!</h1>
      </header>
      <Machine s1='🐢' s2='🐦' s3='🐈' />
      <Machine s1='🐢' s2='🐢' s3='🐢' />
      <Machine s1='🐈' s2='🐍' s3='🐦' />
    </div>
  );
}

export default App;
