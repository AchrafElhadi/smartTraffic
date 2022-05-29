import React from 'react'
import {View,Text,TouchableHighlight,Image} from 'react-native-web'
import { AntDesign } from '@expo/vector-icons'; 
import {connect} from 'react-redux'
 class Favoris extends React.Component{
    constructor(props) {
        super(props)
    }
    render()
    {
        return(
            <>
            <View style={{flexDirection:"column"}}>
              
              
                {this.props.favoris.map((x,i)=>{
                        return(
                    <li key={i} style={{listStyle:'none'}}>
                    
                   
                    <View style={{flexDirection:"row",marginBottom:"12px",padding:10}}   >
                        
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Detail',{id:x.id})} style={{ flex:1}}>
                            <Image  
                            style={{ height: 200 }}
                                source={{
                                    uri: 'https://image.tmdb.org/t/p/w300/'+x.img,
                                }}
                                
                            />
                            </TouchableHighlight>
                            <View style={{flexDirection:"column",flex:2,marginLeft:7}} >
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{flex:4,fontSize:18,fontWeight:"bold"}}>{x.title}</Text>
                                    <Text style={{flex:1,color: "grey",fontSize:18,marginLeft:7,fontWeight:"bold"}}>{x.Note}</Text>
                                </View>
                                <View >
                                <Text  numberOfLines={6}>{x.desc}</Text>
                                </View>
                            </View>
                    </View>
                    
                    </li>)})}
            </View>
            </>
        )
    }
}
function mapStateToProps(state)
{
    return{
        favoris:state.favoris
    }
}
export default connect(mapStateToProps)(Favoris)