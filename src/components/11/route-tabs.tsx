import Tabs from '../10/tabs';
import TabsLoader from '../10/tabs-loader';

enum Tab {
    InTheProcessOf,
    Revisiting,
    InThePlans,
    Postponed,
    Finished,
    Favourite,
    Abandoned,
    Custom
}

function RouteTabs({tabs}: any) {
    


    return<>
        <Tabs tabs={tabs}/>

        <ol className='tabs-anime-ol'>
            {(tabs.length > 0) ? 
            <>{tabs.map((animeName: any, index: number) => (<li className='tabs-anime-li' key={index}>{tabs.animeName}</li>))}</> : 
            <>
            <TabsLoader/>
            <TabsLoader/>
            </>
            }
        </ol>
    </>
};

export default RouteTabs;