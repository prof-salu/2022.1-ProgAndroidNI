import React, {createContext} from 'react';

export const ListaContatos = createContext({});

function geraId(){
    return Math.floor(Math.random() * Date.now());
}

function addContato(agenda, inputNome, inputTel){
    agenda.push({id: geraId(), nome: inputNome, tel: inputTel});
}

function Lista({children}){
    return(
        <ListaContatos.Provider value = {
                                {agenda: [{id: '', nome: '', tel: ''}], addContato}
                            }>
            {children}
        </ListaContatos.Provider>
    );
}

export default Lista;