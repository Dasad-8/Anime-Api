import './search.css';
import { useRef } from 'react';
import { SetValue } from '../12/data';
import { useNavigate } from 'react-router-dom';


interface SearchProps{
    setSearch: SetValue<any>;
}

function Search({setSearch} : SearchProps) {
    const navigate = useNavigate();

    const searchRef = useRef<HTMLInputElement>(null);

    function onSearch() {
        if (searchRef.current !== null) {
            const refValue = searchRef.current.value;
            setSearch(refValue);
        }
    }

    return<>
        <div className='search'>
                <input onInput={onSearch} ref={searchRef} className='search-input' type="text" />
                <button onClick={() => navigate("/search")} className='search-btn'>Apply</button>
        </div>
    </>
    
}
export default Search;