import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Watch from './Pages/Watch';
import Channel from './Pages/Channel';

function App() {
  const [filter, setFilter] = useState('home');
  const [categoryId, setCategoryId] = useState(null);

  return (
    <BrowserRouter>
      <div
        className='offcanvas offcanvas-start'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <Sidebar
          filter={filter}
          setFilter={setFilter}
          setCategoryId={setCategoryId}
        />
      </div>
      <Navbar />

      <Routes>
        <Route path='/'element={<Home filter={filter} categoryId={categoryId} />}/>
        <Route path='/watch/:videoId/:channelId'element={<Watch/>}/>
        <Route path='/channel/:channelId' element={<Channel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
