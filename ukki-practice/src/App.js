import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styles from './css/ResetFile.module.css';
import Layout from './layouts/Layout';
import UserStorePage from './pages/UserStorePage';

function App() {
  return (
    <BrowserRouter style={styles}>
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


