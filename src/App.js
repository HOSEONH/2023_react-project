import {Route, Routes} from "react-router-dom"
import Nav from './Components/Nav';
import Main from './page/Main';
import Menu from './page/Menu';
import Cart from './page/Cart';
import Event from './page/Event';
import Store from './page/Store'
import Menulist from './page/Menulist';

import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>

        <Nav />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/menu' element={<Menu />} >
            <Route path='/menu/:category' element={<Menulist />} />
          </Route>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/event' element={<Event />}/>
          <Route path='/store' element={<Store />}/>

        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
