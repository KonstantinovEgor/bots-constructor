import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import UserStore from './store/UserStore';

export const Context = React.createContext(null);
console.log(process.env.REACT_APP_API_URL)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
    user: new UserStore()
  }}>
    <App/>
  </Context.Provider>
);


