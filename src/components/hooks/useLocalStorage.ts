import { useState } from "react";
import { SetValue } from "../12/data";

function useLocalStorage <L> (key:string, defaultSrc:string): {value: L, setValueWithLocalStorage: SetValue <L>, loading: boolean} {

    const [loading, setLoading] = useState<boolean>(true);
    
    const [value, setValue] = useState <L >( () =>{
        const json = localStorage.getItem(key);
        if (json === null) {
            fetch (defaultSrc)
            .then(response => response.json())
            .then(value => {
                setValue(value);
                setLoading(false);
            });
        } else {
            setLoading(false);
            return (JSON.parse(json));
        }
    });

    const setValueWithLocalStorage = (newValue:L | ((oldValue:L)=> L)) => {
        if (newValue instanceof Function) {
            setValue((oldValue:L)=>{
                const val:L = newValue(oldValue);
                localStorage.setItem (key, JSON.stringify(val));
                return val
            });
        }else{
            setValue(newValue);
            localStorage.setItem (key, JSON.stringify(newValue));
        }
    };

    return {value, setValueWithLocalStorage, loading};
};

export default useLocalStorage;


/* value: value as L */