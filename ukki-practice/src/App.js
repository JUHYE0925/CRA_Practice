import {BrowserRouter, Routes, Route} from 'react-router-dom';
import reset from './css/ResetFile.module.css';
import Layout from './layouts/Layout';
import UserStorePage from './pages/UserStorePage';

function App() {
  return (
    <BrowserRouter style={reset}>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<UserStorePage/>}/>
        <Route path="store" element={<UserStorePage/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


