import { DataContext } from "../context/DataContext";
import { useContext } from 'react';

export const useDataContext = () => {

    const context = useContext(DataContext)

    if(!context) {
        throw Error('use data context must be used inside a dataContextProvider')
    }

    return context
}