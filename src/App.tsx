import './App.css'
import { useState } from 'react';
import Main from './components/1/main';
import Search from './components/2/search';
import {Link } from 'react-router-dom';

function App() {

  const [search, setSearch] = useState <any> ("");




  return (
    <>
    <section className='wrap'>
        <nav>
            <ol className='nav-ol'>
                <Link to='/'>Home</Link>
                <Link to='/genre'>Genre</Link>
                <Link to='/tabs'>Tabs</Link>
                <Link to='/new'>New</Link>
            </ol>
            <Search setSearch={setSearch}/>
        </nav>

        <Main search={search}/>
    </section>
    </>
  )
}

export default App
