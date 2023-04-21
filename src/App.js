import {Route, Routes} from "react-router-dom"
import Menu from './Components/Menu';
import Main from './page/Main';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
