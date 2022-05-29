import React from 'react'
import { Button, TextInput, View,Text,Image, FlatList, Linking, TouchableOpacity, TouchableHighlight } from 'react-native-web'
class Detail extends React.Component{
    constructor(props) {
        super(props)
        this.state = { Ld:[{nom:"achraf",id:1},{nom:"adam",id:2}]}
    }
    render()
    {
        return(
            <>
            <Text>hello</Text>
            {this.state.Ld.map((x)=>
            {
                <Text>{x.nom}</Text>
            })}
            </>
        )
    }
}
export default Detail