import { View, Text, Image} from 'react-native'
import * as React from "react";
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { Card } from "@rneui/base";
import { StyleSheet } from 'react-native-web';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
    return (
        <View style={{marginTop: Constants.statusBarHeight, flexGrow:1}}>

            {/* ------ Start Header ------- */}
            <View style={{width:"100%", height:50, backgroundColor:"#fff", flexDirection:"row"}}>
                <Image
                        style={{ width: 60, height: 50, marginLeft:20}}
                        resizeMode="contain"
                        source={{
                            uri:
                            "https://i.pinimg.com/736x/29/0c/09/290c09d453b2f9002ce0905bce60234b.jpg"
                        }}
                        />
                <Text style={{textAlign:"center", fontWeight:"bold", fontSize:18, marginTop:12}}>NombreApp</Text>
            </View>
            {/* ------- End Header ------- */}


            <ScrollView bounces={false} bouncesZoom={false}>
                <StatusBar backgroundColor="#fff"/>

            {/* ------- Start First Card ------- */}
                <View >          
                    <Card containerStyle={{borderRadius:15}} wrapperStyle={{}}>
                    <Card.Title style={{textAlign: "left"}}>Tienes el Poder de Protegerte contra la Violencia</Card.Title>
                        <View style={{ alignItems: "center" }}>
                <Image
                style={{ width: "100%", height: 150}}
                resizeMode="cover"
                source={{
                    uri:
                    "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                }}
                />
            </View>      
            </Card>
            
            {/* Carrousel */}
        

                </View>
            {/* ------- End First Card ------- */}


            {/* ------- Start First Carrousel ------- */}
                <View style={{backgroundColor:"#fff", marginTop:20, height:250}}>
                <View style={{marginTop:25, marginLeft:20}}>
                    
                    <Text style={{fontWeight:"bold"}}>Tipos de Violencia</Text>
                    <Text>Conoce los tipos de Violencia que existen</Text>            

                </View>
                {/* ------- Start Cards ------- */}
                    <View>
                    <ScrollView horizontal            
                    showsHorizontalScrollIndicator={false}>
                        
                {/* ------- 1st Card ------- */}
                    <Card containerStyle={{height: 150, marginRight:0, width:140,borderRadius:15}} wrapperStyle={{}}>
                        <View
                        style={{
                        alignItems: "center",
                        }}
                    >
                        <Image
                        style={{ width: "100%", height: 80}}
                        resizeMode="cover"
                        source={{
                            uri:
                            "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                        }}
                        />
                    </View> 
                    <Card.Title style={{textAlign: "left", marginTop:5, fontWeight:"200"}}>Violencia de Género</Card.Title>
                    
                    </Card>  
                {/* ------- 2nd Card ------- */}
                    <Card containerStyle={{height: 150, marginRight:0, width:140,borderRadius:15}} wrapperStyle={{}}>
                        <View
                        style={{
                        alignItems: "center"
                        }}
                    >
                        <Image
                        style={{ width: "100%", height: 80}}
                        resizeMode="cover"
                        source={{
                            uri:
                            "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                        }}
                        />
                    </View> 
                    <Card.Title style={{textAlign: "left", marginTop:5, fontWeight:"200"}}>Violencia de Género</Card.Title>
                    
                    </Card>
                {/* ------- 3rd Card ------- */}
                    <Card containerStyle={{height: 150, marginRight:0, width:140,borderRadius:15}} wrapperStyle={{}}>
                        <View
                        style={{
                        alignItems: "center"
                        }}
                    >
                        <Image
                        style={{ width: "100%", height: 80}}
                        resizeMode="cover"
                        source={{
                            uri:
                            "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                        }}
                        />
                    </View> 
                    <Card.Title style={{textAlign: "left", marginTop:5, fontWeight:"200"}}>Violencia de Género</Card.Title>
                    
                    </Card> 
                {/* ------- 4th Card ------- */} 
                    <Card containerStyle={{height: 150, marginRight:0, width:140,borderRadius:15}} wrapperStyle={{}}>
                        <View
                        style={{
                        alignItems: "center"
                        }}
                    >
                        <Image
                        style={{ width: "100%", height: 80}}
                        resizeMode="cover"
                        source={{
                            uri:
                            "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                        }}
                        />
                    </View> 
                    <Card.Title style={{textAlign: "left", marginTop:5, fontWeight:"200"}}>Violencia de Género</Card.Title>
                    
                    </Card>  
                {/* ------- 5th Card ------- */} 
                    <Card containerStyle={{height: 150, marginRight:0, width:140,borderRadius:15}} wrapperStyle={{}}>
                        <View
                        style={{
                        alignItems: "center"
                        }}
                    >
                        <Image
                        style={{ width: "100%", height: 80}}
                        resizeMode="cover"
                        source={{
                            uri:
                            "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                        }}
                        />
                    </View> 
                    <Card.Title style={{textAlign: "left", marginTop:5, fontWeight:"200"}}>Violencia de Género</Card.Title>
                    
                    </Card> 
                {/* ------- 6th Card ------- */} 
                    <Card containerStyle={{height: 150, marginRight:0, width:140, marginRight:15,borderRadius:15}} wrapperStyle={{}}>
                        <View
                        style={{
                        alignItems: "center"
                        }}
                    >
                        <Image
                        style={{ width: "100%", height: 80}}
                        resizeMode="cover"
                        source={{
                            uri:
                            "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                        }}
                        />
                    </View> 
                    <Card.Title style={{textAlign: "left", marginTop:5, fontWeight:"200"}}>Violencia de Género</Card.Title>
                    
                    </Card>  
                        
                    </ScrollView>
                    </View>
                {/* ------- End Cards ------- */}    
                </View>
            {/* ------- End First Carrousel ------- */}


            
            {/* ------- Start Second Carrousel ------- */}
                <View>
                {/* ------- Start Cards ------- */}        
            <ScrollView horizontal            
                showsHorizontalScrollIndicator={false}> 

                {/* ------- 1st Card ------- */}   
                <Card containerStyle={{height: 200, marginRight:0, width:295,borderRadius:15}} wrapperStyle={{}}>
                    <View
                    style={{
                    alignItems: "center",
                    }}
                >
                    <Image
                    style={{ width: "100%", height: 130}}
                    resizeMode="cover"
                    source={{
                        uri:
                        "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                    }}
                    />
                </View> 
                <Card.Title style={{textAlign: "left", marginTop:5, fontWeight:"200"}}>¿Cómo puedo saber si soy víctima de violencia de género?</Card.Title>
                
                </Card>  
                
                {/* ------- 2nd Card ------- */}  
                <Card containerStyle={{height: 200, marginRight:0, width:295,borderRadius:15}} wrapperStyle={{}}>
                    <View
                    style={{
                    alignItems: "center",
                    }}
                >
                    <Image
                    style={{ width: "100%", height: 130}}
                    resizeMode="cover"
                    source={{
                        uri:
                        "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                    }}
                    />
                </View> 
                <Card.Title style={{textAlign: "left", marginTop:5, fontWeight:"200"}}>¿Cómo puedo saber si soy víctima de violencia de género?</Card.Title>
                
                </Card> 

                {/* ------- 3rd Card ------- */}
                <Card containerStyle={{height: 200, marginRight:0, width:295,borderRadius:15}} wrapperStyle={{}}>
                    <View
                    style={{
                    alignItems: "center",
                    }}
                >
                    <Image
                    style={{ width: "100%", height: 130}}
                    resizeMode="cover"
                    source={{
                        uri:
                        "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                    }}
                    />
                </View> 
                <Card.Title style={{textAlign: "left", marginTop:5, fontWeight:"200"}}>¿Cómo puedo saber si soy víctima de violencia de género?</Card.Title>
                
                </Card>  

                {/* ------- 4th Card ------- */}
                <Card containerStyle={{height: 200, marginRight:0, width:295,borderRadius:15}} wrapperStyle={{}}>
                    <View
                    style={{
                    alignItems: "center",
                    }}
                >
                    <Image
                    style={{ width: "100%", height: 130}}
                    resizeMode="cover"
                    source={{
                        uri:
                        "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                    }}
                    />
                </View> 
                <Card.Title style={{textAlign: "left", marginTop:5, fontWeight:"200"}}>¿Cómo puedo saber si soy víctima de violencia de género?</Card.Title>
                
                </Card>  
                {/* ------- End Cards ------- */} 
                </ScrollView>
                </View>    
            {/* ------- End Second Carrousel ------- */}


            {/* ------- Start Recommendations ------- */}
            <View style={{marginBottom: 120, backgroundColor:"#fff", marginTop:20, height:"100%"}}
            >
            <Text style={{fontWeight:"bold",marginLeft:20, marginTop:20}}>Recomendaciones</Text>
            
            {/* ------- 1st Recommendation ------- */}
            <View style={{height: 100}}>
            <Card containerStyle={{borderRadius:15}} wrapperStyle={{}}>
            <Card.Title style={{textAlign: "left", width: "49%", top: 20, fontWeight:"200"}}>
                ¿Qué debo hacer si soy victima o testigo de una agresión?</Card.Title>
            <View
                style={{
                alignItems: "flex-end"
                }}
            >
                <Image
                style={{ width: "50%", height: "82%", bottom: 70}}
                resizeMode="cover"
                source={{
                    uri:
                    "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                }}
                />
            </View>         
            </Card>          
            </View>
    
            {/* ------- 2nd Recommendation ------- */}
            <View style={{height: 100, marginTop:40}}>
            <Card containerStyle={{borderRadius:15}} wrapperStyle={{}}>
            <Card.Title style={{textAlign: "left", width: "49%", top: 20, fontWeight:"200"}}>
                ¿Qué debo hacer si soy victima o testigo de una agresión?</Card.Title>
            <View
                style={{
                alignItems: "flex-end"
                }}
            >
                <Image
                style={{ width: "50%", height: "82%", bottom: 70}}
                resizeMode="cover"
                source={{
                    uri:
                    "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                }}
                />
            </View>         
            </Card>          
            </View>

            {/* ------- 3rd Recommendation ------- */}
            <View style={{height: 100, marginTop:40}}>
            <Card containerStyle={{borderRadius:15}} wrapperStyle={{}}>
            <Card.Title style={{textAlign: "left", width: "49%", top: 20, fontWeight:"200"}}>
                ¿Qué debo hacer si soy victima o testigo de una agresión?</Card.Title>
            <View
                style={{
                alignItems: "flex-end"
                }}
            >
                <Image
                style={{ width: "50%", height: "82%", bottom: 70}}
                resizeMode="cover"
                source={{
                    uri:
                    "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                }}
                />
            </View>         
            </Card>          
            </View>
                
            {/* ------- 4th Recommendation ------- */}
            <View style={{height: 100, marginTop:40}}>
            <Card containerStyle={{borderRadius:15}} wrapperStyle={{}}>
            <Card.Title style={{textAlign: "left", width: "49%", top: 20, fontWeight:"200"}}>
                ¿Qué debo hacer si soy victima o testigo de una agresión?</Card.Title>
            <View
                style={{
                alignItems: "flex-end"
                }}
            >
                <Image
                style={{ width: "50%", height: "82%", bottom: 70}}
                resizeMode="cover"
                source={{
                    uri:
                    "https://educacion30.b-cdn.net/wp-content/uploads/2022/08/violencia-ninos.jpg"
                }}
                />
            </View>         
            </Card>          
            </View>
            </View>
            {/* ------- End Recommendations ------- */}
            
    </ScrollView>
        </View>
        
    )
}

export default HomeScreen;

