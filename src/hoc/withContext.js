import React, {useState} from 'react';
import AppContext from '../context/AppContext';

export default (Component) => {
  const ContextComponent = (props) => {
    const [appData] = useState({});
    return (
      <AppContext.Provider value={appData}>
        <Component {...props} />
      </AppContext.Provider>
    );
  };
  return ContextComponent;
};
