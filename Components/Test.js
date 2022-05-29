import React from 'react'
import { Button ,Image,Text, View,TouchableOpacity} from 'react-native-web'
import {connect} from 'react-redux'
import { AntDesign } from '@expo/vector-icons'; 
import * as RootNavigation from './RootNavigation';

class Test extends React.Component{

    constructor(props) {
        super(props)
        this.state = { filmList:""}
    }

    render()
    {
        return(
            <View style={{flexDirection:"row",height:"7%"}}>
               
                    <View style={{flex:1,marginTop:4}}>
                        <View style={{textAlign:"center",flexDirection:"column"}}>
                            <TouchableOpacity onPress={()=>RootNavigation.navigate("Search")}>
                                <AntDesign name="search1" size={24} color="black" /> 
                                <Text>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{flex:1,marginTop:4}}>
                        <View style={{textAlign:"center",flexDirection:"column"}}>
                        <TouchableOpacity onPress={()=>RootNavigation.navigate("favoris")}>
                            <AntDesign name="heart" size={24} color="black" />
                            <Text >favoris</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{flex:1,marginTop:4}}>
                        <View style={{textAlign:"center",flexDirection:"column"}}>
                        <TouchableOpacity onPress={()=>RootNavigation.navigate("Interface")}>
                            <AntDesign name="home" size={24} color="black" />
                            <Text >Home</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        )
    }
}
export default Test