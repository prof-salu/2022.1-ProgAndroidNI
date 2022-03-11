// O componente MeuBotao deve possuir a cor vermelha
// E o seu titulo deverá ser definido 
// via propriedade na classe que o chamar

import React from 'react';
import {View, Button} from 'react-native';

class MeuBotao extends React.Component{
    render(){
        return(
            <View>
                <Button color='red' title={this.props.msg}/>
            </View>
        );
    }
}

export default MeuBotao;