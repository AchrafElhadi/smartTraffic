import React from 'react'
import { Button ,Image,Text, View,TouchableOpacity} from 'react-native-web'
import {connect} from 'react-redux'
import {AntDesign}  from '@expo/vector-icons'
 class Home extends React.Component{

    constructor(props) {
        super(props)
        this.state = { filmList:""}
    }
    componentDidMount()
    {
        this.detail()
        
    }
    
    render()
    {
        return(
        <>
            <View style={{flexDirection:"column"}}>
 
           
           {(this.state.dte!=="")?
        <>
        
        {/* <Image style={{height:300,width:300}} source={{uri:lgog}}/> */}
        
           </>:<></>
        }
            {(this.state.filmList!=="")?
            <>
            <Image  
            style={{ height: 200,width:"100%",marginBottom:15 }}
                source={{
                    uri: 'https://image.tmdb.org/t/p/w300'+this.state.filmList.backdrop_path,
                }}
                
    
            />
           
            
                 {/* <this.state.filmList.backdrop_path */}
                <Text style={{textAlign:"center",fontSize:30,fontWeight:"bold",marginBottom:10}}>{this.state.filmList.title}</Text>
                <View style={{textAlign:'center',marginBottom:10}} onPress={()=>alert("yes")}>
                <TouchableOpacity onPress={()=>this.props.Addfavoris({id:this.state.filmList.id,title:this.state.filmList.title,Note:this.state.filmList.vote_average,desc:this.state.filmList.overview,img:this.state.filmList.poster_path})}> 
                <AntDesign name="hearto" size={24} color="black"/>
                 </TouchableOpacity>
                </View>
                <View style={{padding:6}}>
                
               <Text  style={{marginBottom:10}}> {this.state.filmList.overview}</Text>
               
               <Text><b>Sortie le : </b> {this.state.filmList.release_date }</Text>
               <Text><b>Note : </b> {this.state.filmList.vote_average}/10</Text>
               <Text><b>Nombre de vote : </b> {this.state.filmList.vote_count}</Text>
               <Text><b>Budget : </b> {this.state.filmList.budget} $</Text>
               <Text><b>Genre : </b>
               {this.state.filmList.genres.map((x)=>(
                 <>{x.name} /</>
               ))}
               </Text>
               <Text style={{marginBottom:10}}><b>Companies : </b>
               {this.state.filmList.production_companies.map((x)=>(
                 <>{x.name} / </>
               ))}
               </Text>

              <Button  onPress={()=>this.props.navigation.navigate('Cinema')} title="Cinema"></Button>
                </View>
                </>  :<></> }
              </View>
              </>
        )
    }
    detail=()=>
    {
        fetch("https://api.themoviedb.org/3/movie/"+this.props.route.params.id+"?api_key=dd429284b23f81196d1443a87be09816&language=en-US").then(res=>res.json()).then(data=>this.setState({filmList:data})).catch(err=>alert(err))
        console.log("1")
    }
}
function mapStateToProps(state)
{
    return{
        favoris:state.favoris
    }
}
function mapDispatchToProps(dispatch)
{
    return{
        Addfavoris: (v)=>{dispatch({type:"Add",val:v})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)