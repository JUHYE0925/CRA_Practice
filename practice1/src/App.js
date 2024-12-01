import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import About from './pages/About';
import List from './pages/List';
import MemberDetail from './pages/MemberDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='main' element={<Main/>}/>
        <Route path='about' element={<About/>}/>
        <Route path="list">
        <Route index element={<List/>}/>
        <Route path=':id' element={<MemberDetail/>}/>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
