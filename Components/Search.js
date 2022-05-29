import React from 'react'
import { Button, TextInput, View,Text,Image, FlatList, Linking, TouchableOpacity, TouchableHighlight } from 'react-native-web'
class Search extends React.Component{
    constructor(props) {
        super(props)
        this.state = { ListDetail:"" ,word:"",d:[{nom:"achraf",id:1},{nom:"adam",id:2}]}
    }
    render()
    {
        return(
            <View style={{padding:12}}>
                
                <br></br>
                 <View style={{ flexDirection: "row"}}>
                    
               <TextInput   style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    textIndent:9,
                   flex:2,
                    }}
                    onKeyPress={(e)=>{if(e.key==="Enter")this.chercher()}}
 
                    onChange={(e)=>this.setState({word:e.target.value})}
                    />
                     <Button 
                    title="     Search     "
                    onPress={this.chercher}
                />
               </View>
               <br/>
               <View style={{flexDirection:"column"}}>
                   
                 {(this.state.ListDetail!=="")?
                this.state.ListDetail.results.map((x,i)=>{
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
            </View>
        )
    }

    chercher=()=>
    {
        fetch("http://api.themoviedb.org/3/search/movie?api_key=dd429284b23f81196d1443a87be09816&language=en-US&query="+this.state.word+"&page=1").then((res)=>res.json()).then(data=>{this.setState({ListDetail:data})}).catch(err=>alert(err))
    }
}

export default Search
