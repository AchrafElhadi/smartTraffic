import React from 'react'
import { Button, TextInput, View,Text,Image, FlatList, Linking, TouchableOpacity ,TouchableHighlight} from 'react-native-web'
class Interface extends React.Component{
    constructor(props) {
        super(props)
        this.state = { Listfilm:""}
    }
    componentDidMount()
    {
        this.list()
    }
    render()
    {
        return(
            <View style={{flexDirection:"column",overflow: scroll}}>
                   
                 {(this.state.Listfilm!=="")?
                this.state.Listfilm.results.map((x,i)=>{
                        return(
                    <li key={i} style={{listStyle:'none'}}>
                    
                   
                    <View style={{flexDirection:"row",marginBottom:"12px"}}   >
                        
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Detail',{id:x.id})} style={{ flex:1}}>
                            <Image  
                            style={{ height: 200 }}
                                source={{
                                    uri: 'https://image.tmdb.org/t/p/w300/'+x.poster_path,
                                }}
                                
                            />
                            </TouchableHighlight>
                            <View style={{flexDirection:"column",flex:2,marginLeft:7}} >
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{flex:4,fontSize:18,fontWeight:"bold"}}>{x.title}</Text>
                                    <Text style={{flex:1,color: "grey",fontSize:18,marginLeft:7,fontWeight:"bold"}}>{x.vote_average}</Text>
                                </View>
                                <View >
                                <Text  numberOfLines={6}>{x.overview}</Text>
                                </View>
                            </View>
                    </View>
                    
                    </li>)} ):<></>}
                    </View>
        )
    }
    list=()=>
    {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=dd429284b23f81196d1443a87be09816&language=en-US&page=1").then((res)=>res.json()).then(data=>{this.setState({Listfilm:data})}).catch(err=>alert(err))
    }
}
export default Interface