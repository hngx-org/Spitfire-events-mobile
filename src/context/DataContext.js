import { createContext, useReducer } from "react";

export const DataContext = createContext()

export const dataReducer = (state, action ) => {
   
    switch (action.type) {
        case 'SET_DATA':
            return {
                data: action.payload
            }

        case 'CREATE_DATA':     
            return {
                data: [action.payload, ...state.data.data]
            } 
            
        // case 'DELETE_DATA': 
        //     return {
        //         data: state.data.filter((d)=>{ d.id !== action.payload.id})
        //     }
    
        default:
            return state
    }
}

export const DataContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(dataReducer, {
        data: []
    })

    return (
        <DataContext.Provider value={{...state, dispatch}}>
            { children }
        </DataContext.Provider>
    )
} 