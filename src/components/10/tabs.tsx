import './tabs.css';
/* import TabsLoader from './tabs-loader'; */


function Tabs({tabs}: any) {
    


    return <>
        <h1 className='tabs-h1'>Your tabs</h1>

        <div className='search flex-tabs-search'>
                <p className='tabs-search-p'>Search</p>
                <input  className='search-input' type="text" />
                <button  className='search-btn'>Apply</button>
        </div>

        <ol className='genre-tabs-ol'>
            <li className='genre-tabs-li'><button>In the process of</button></li>
            <li className='genre-tabs-li'><button>Revisiting</button></li>
            <li className='genre-tabs-li'><button>In the plans</button></li>
            <li className='genre-tabs-li'><button>Postponed</button></li>
            <li className='genre-tabs-li'><button>Finished</button></li>
            <li className='genre-tabs-li'><button>Favourite</button></li>
            <li className='genre-tabs-li'><button>Abandoned</button></li>
            <li className='genre-tabs-li'><button>Custom</button></li>
            <li className='genre-tabs-li'><button>All</button></li>
            <li className='genre-tabs-li'><button>Updates</button></li>
            <li className='genre-tabs-li'><button>History</button></li>
        </ol>
        
    </>
};

export default Tabs;