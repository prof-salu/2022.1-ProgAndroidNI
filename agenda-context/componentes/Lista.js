import React, {createContext} from 'react';

export const ListaContatos = createContext({});

function Lista({children}){

    return(
        <ListaContatos.Provider value = {
                                {agenda: [{id: 0, nome: 'ze', tel: '1234'}]}
                            }>
            {children}
        </ListaContatos.Provider>
    );
}

export default Lista;