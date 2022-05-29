import React from 'react'
import {View,StyleSheet,Text,TouchableHighlight,Image,ImageBackground} from 'react-native-web'

class Yolo extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            // dte:{detections:{labels:[{},{},{},{},{},{}]}},
            dte:"",
            duree:15,
            road2:10,
            roadlight1:false,
            vois:true,
            rod:false
        }
    }
    async componentDidMount()
    {
        const resp=await fetch("http://localhost:5000/")
        const res=await resp.json();

        this.setState({dte:res})
         if(this.state.dte.detections.labels.length>10)
             this.setState({roadlight1:true})
      

        setInterval(() => {
            if(this.state.duree>0 && this.state.dte!=="")
            this.setState({duree:this.state.duree-1})
          }, 1000)
     
    }
     componentDidUpdate()
     {
        
        if(this.state.duree==0)
        {
            if(this.state.dte.detections.labels.length>10 ||this.state.dte.detections.labels.length<10 )
            {
                if( this.state.vois)
                    this.setState({duree:5,roadlight1:!this.state.roadlight1})
                else
                    this.setState({duree:15,roadlight1:!this.state.roadlight1})
            }
            else
            this.setState({duree:15,roadlight1:!this.state.roadlight1})
            
                        this.setState({vois:!this.state.vois})

        }
        
       
        
     }
    
    render()
    {
        
        return(
            <View>
 

                {(this.state.dte=="")?
                <>

                <Text style={styles.text}>Loading ...</Text>
                </>
                :<>
               
                <Text  style={styles.text}>Le nombre de voiture :{this.state.dte.detections.labels.length}</Text>
                <ImageBackground 
                 source={{uri: require("../Images/road2.jpg")}} style={{height:400,width:"100%"}} resizeMode="cover">
                  <View style={{flexDirection:"column",height:"100%"}}>
                        <View style={{flexDirection:"row",padding: "91px 45px 0px",paddingTop: 20,flex:1.3}}>

                                <View style={{flex:1,marginTop: 45,marginLeft: 83}}>                           
                                   <Text style={{marginTop:40}}> <Text  style={styles.text}>CountDown : {this.state.duree}</Text></Text>
                                </View>

                                <View style={{flex:2.2,marginTop: 45}} >
                                   
                                        <Text  style={{ border: "1px solid",
                                        height: 25,
                                        width: 25,
                                        marginTop:40,
                                        borderRadius: 20,backgroundColor:this.state.roadlight1==true?"green":"red"}}></Text> 
                                        
                                       
                                    
                                </View>

                        </View>
                        <View style={{flexDirection:"row",flex:1.3}}>

                                <View style={{flex:1,marginLeft: 13,marginTop:48}}>                           
                                    <Text  style={styles.text}><Text style={{color:"white"}}> CountDown : {this.state.duree}</Text></Text>
                                </View>

                                <View style={{flex:0.4}} >
                                   
                                        <Text  style={{ border: "1px solid",
                                        height: 25,
                                        marginTop:48,
                                        width: 25,
                                        marginLeft: 31,
                                        borderRadius: 20,backgroundColor:this.state.roadlight1==false?"green":"red"}}></Text> 
                                        
                
                                    
                                </View>
                                <View style={{flex:1}}>

                                </View>
                                <View style={{flex:0.4,marginLeft: 17}} >
                                   
                                        <Text  style={{ border: "1px solid",
                                        height: 25,
                                        width: 25,
                                        borderRadius: 20,backgroundColor:this.state.roadlight1==false?"green":"red"}}></Text>
                                    
                                </View>
                                <View style={{flex:1.2,marginLeft: 13}}>                           
                                    <Text  style={styles.text}><Text style={{color:"white"}}> CountDown : {this.state.duree}</Text></Text>
                                </View>

                        </View>
                        <View style={{flexDirection:"row",flex:1}}>

                            <View style={{flex:1.4}}>

                            </View>
                                <View style={{flex:1.1,flexDirection:"row",marginTop: -31}}>

                                    <View style={{flex:1}} >
                                         
                                            <Text  style={{ border: "1px solid",
                                        height: 25,
                                        width: 25,
                                        borderRadius: 20,backgroundColor:this.state.roadlight1==true?"green":"red"}}></Text> 

                                        
                                    </View>
                                    <View style={{flex:2.2}}>                           
                                        <Text  style={styles.text}>CountDown : {this.state.duree}</Text>
                                    </View>
                                </View>
                        </View>
                        
                </View>
                </ImageBackground>
                </>
               
               }
           </View>
        )
       
    }
    
}
const styles = StyleSheet.create({
    text:{fontSize:17},
    Greenlight:{
        border: "1px solid",
        height: 25,
        width: 25,
        borderRadius: 20,
        backgroundColor: "green",
      
    },
    Redlight:{
        border: "1px solid",
        height: 25,
        width: 25,
        borderRadius: 20,
        backgroundColor: "red"
    }
   });

export default Yolo