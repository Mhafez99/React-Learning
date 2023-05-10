import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap//dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist//js/bootstrap.min.js';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
// import {RecoilRoot} from 'recoil';

// import App from './Components/Section-1/App';
// import App from './Components/Section-2/App';
// import App from './Components/Section-3/App';
// import App from './Components/Section-4/App';
// import App from './Components/Section-5/App';
// import App from './Components/Section-6-7/App';
// import App from './Components/Section-8/App';
// import App from './Components/Section-9/App';
// import App from './Components/Section-10/App';
// import App from './Components/Section-11/App';
import App from './Components/Section-12/App';


// import {store} from './Components/Section-11/Store';
// import {store} from './Components/Section-11/RTK/store';
import {store} from './Components/Section-12/RTK/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  {/* /* <RecoilRoot> */ }
  <Provider store={store}>
    <App />
  </Provider>
  {/* // </RecoilRoot> */}
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
