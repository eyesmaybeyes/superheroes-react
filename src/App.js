import './assets/styles/style.css';

import { Header } from './assets/components/header';
import { Card } from './assets/components/card';
// import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        {/* <Router> */}
        <Card></Card>
        {/* </Router> */}
      </div>
    </div>
  );
}

export default App;
