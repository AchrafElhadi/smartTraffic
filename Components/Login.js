import React from 'react'
import { Button, TextInput, View,Text,Image, FlatList, Linking, TouchableOpacity, TouchableHighlight } from 'react-native-web'
import MapView from 'react-native-maps'
class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            
        }
    }
    
    componentDidMount()
    {
       
       
    }
      
    render()
    {
        return(
            <View style={{padding:12}}>
                
            <Text>Nom</Text>
             </View>
            )
    }
    mytest=()=>
    {
      auth.signInWithEmailAndPassword("achraf@gmail.com","123456").then(
          res=>{
              console.log(res.user.email)
          }
      ).catch(err=>console.log(err.message))
    auth.signOut()
    console.log(auth.currentUser?.email)

    }
}

export default Login