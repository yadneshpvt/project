import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap"
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Register from './Register'


function App() {
    return (
    
        <div className="App">
          <BrowserRouter>
          <Header />
                <h1>E-Comm Project</h1>
                
                <Route path="/register">
                    <Register />
                </Route>
                
          </BrowserRouter>
        </div>
  );
}

export default App;
