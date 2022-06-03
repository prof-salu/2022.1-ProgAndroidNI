import React, {useState, createContext} from 'react';
export const LivroContext = createContext({});

function EnviaLivro({children}){
    const [livro, setLivro] = useState('');

    function editaLivro(inputId, inputTitulo, inputAssunto, inputEditora, inputAutor){
        setLivro({id: inputId, titulo: inputTitulo, assunto: inputAssunto, 
                        editora: inputEditora, autor: inputAutor});
        return livro;
    }

    return(
        <LivroContext.Provider value = {{livro, editaLivro}}>
            {children}
        </LivroContext.Provider>
    );
}
export default EnviaLivro;