import './styles/style.css';
import { Route, Routes } from "react-router-dom";

import { Header } from './components/header';
import { Card } from './components/card';
import { Hero } from './components/hero';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" component={Card} />
          <Route path="/hero" component={Hero}>
            <Route index component={Card} />
            <Route path=":id" component={Hero} />
          </Route >
        </Routes>
      </div>
    </div >
  );
}

export default App;
