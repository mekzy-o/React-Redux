import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './home/Homepage';
import Aboutpage from './about/About';

 function App() {
    return (
        <div className='fluid'>
               <Route exact path='/' component={Homepage}></Route>
               <Route path='/about' component={Aboutpage}></Route>
        </div>
    )
}

export default App;