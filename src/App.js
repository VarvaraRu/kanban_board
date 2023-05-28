import './App.css'; 
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { DetailsPage } from './pages/descriptionPage';
import { NotFoundPage } from './pages/notFound';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/details' element={<DetailsPage/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
