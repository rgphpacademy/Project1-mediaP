import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, SafeAreaView, Date } from 'react-native';



export default HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError]=useState(false);
  const [name,setName]=useState('');
  
  const urlBase = "https://via.placeholder.com";
  const param1 = Math.floor(Math.random() * 1000);
  const param2 = Math.floor(Math.random() * 1000);

  useEffect(()=>{
    getData();
  },[]);

  const getRandom = (items) => {
    return items[Math.floor(Math.random()*items.length)];
  }

  const getImageUrl = () => {
    return urlBase + '/' + param1 + '/' + param2;
  }
   

  const getData = ()=>{
    fetch(url)
      .then((respons)=>respons.json())
      .then((json)=>setData(json.image))
      .then((json)=>setName(json.name))
      .catch((error)=>setError(true))
      .finally(()=>setLoading(false))
  }

  renderItem=({item})=>{
    return (  
      <TouchableOpacity onPress={()=>navigation.navigate('Image', item)}>
      <Image style={styles.Image}
        source={{uri:getImageUrl}}
      />
      <View>
        <Text>
          {getRandom(name)}
        </Text>
      </View>
      </TouchableOpacity>
    )

  }



  return (
    <View>
      {error?<Text style={styles.error}>Somthing wen wrong!</Text>:''}
      {isLoading ? <ActivityIndicator size="Lage" color="#0000ff"/> : (
        <FlatList
          data={data}
          keyExtractor={({item }, index) => index}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF'
  },
  Image:{
    width:100,
    height:100
  },
  error:{
    fontSize: 10,
    color: 'red'
  }

});