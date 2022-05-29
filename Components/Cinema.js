import React from 'react'
import { Button, TextInput, View,Text,Image, FlatList, Linking, TouchableOpacity, TouchableHighlight } from 'react-native-web'

class Cinema extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            cinma:['imax','megarama','Grand Rex','Screen x','Theatral','Vision'],
            res:[]
        }
    }
    
      
    render()
    {
        for (let i = 0; i < 3; i++) {
            this.state.res.push(this.state.cinma[ Math.floor(Math.random()*6)])
           }
           this.state.res=[...new Set(this.state.res)]
        return(
            <>
            <View style={{padding:10}}>
                <Text style={{textAlign:"center",fontWeight:"bold"}}>Voici les cinemas qui vont diffuse ce film </Text>
                <ul>
                {this.state.res.map((x,i)=>(
                    
                <li key={i}>    <Text>{x}</Text></li>
                ))}
                </ul>
                </View>
            </> 
            )
    }
}
export default Cinema