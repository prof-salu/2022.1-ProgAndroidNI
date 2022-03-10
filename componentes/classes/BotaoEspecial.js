import React from "react";
import {View, Button} from "react-native";

class BotaoEspecial extends React.Component{
    render(){
        return(
            <View>
                <Button color='red' title={this.props.msgBotao} />
            </View>
        )            
    }
}

export default BotaoEspecial;