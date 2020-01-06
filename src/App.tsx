import React from 'react';
import RouterView from './router/index'
// 引入StoreContext的Provider
import StoreContext from './context/StoreContext'
import store from './store/index'

const App: React.FC = () => {
  return (
    <div className="App">
      <StoreContext.Provider value={store}>
          <RouterView></RouterView>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
