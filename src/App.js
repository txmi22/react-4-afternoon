import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <Link className='link-wrap'>
              <Link to='/' className='links' >Home</Link>
              <Link to='/about' className='links' >About</Link> 
          </Link>
        </nav>
        {routes}
      </div>
      </HashRouter>
    )
  }
}