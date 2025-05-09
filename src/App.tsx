import './App.css'
import { useState } from 'react';
import Main from './components/1/main';
import Search from './components/2/search';
import {Link } from 'react-router-dom';

function App() {

  const [search, setSearch] = useState ("");




  return (
    <>
    <section className='wrap'>
        <nav>
            <ol className='nav-ol'>
                <Link className='nav-li' to='/'>Home</Link>
                <Link className='nav-li' to='/genre'>Genre</Link>
                <Link className='nav-li' to='/tabs'>Tabs</Link>
                <Link className='nav-li' to='/new'>New</Link>
            </ol>
            <Search setSearch={setSearch}/>
        </nav>

        <Main search={search}/>
    </section>
    </>
  )
}

export default App
