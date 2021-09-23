import React, {useEffect, useState} from 'react';
import {ScrollView,Text, View, Button, Image} from 'react-native';
import Style from './Style'

export default (props)=>{

  const Separator = () =>(
    <View style={Style.separator}></View>
  )

  const[number,setNumero] = useState(props.valor)

  const calculate = (price)=>{
    setNumero(number + price)

  }

  const decrease = (price)=>{
    setNumero((number - price))
  }

  const reset = ()=>{
    setNumero(number === 0)
  }

  useEffect(()=>{
    setTimeout(()=>{
      alert("Parabéns! Você ganhou o cupom #10FREE, use no fim de sua compra.")
    }, 8000);
  }, []);

  return(

      <ScrollView style={Style.container}>
      <Text style={Style.titleMain}>Lanches:</Text>
      <Text style={Style.text}>X-Burguer</Text>
      <Image style={Style.photo1}  source={require('../assets/imgs/burguer.png')}  />
      <Button title="Comprar" onPress={() =>calculate(20)}/>
      <Separator/>
      <Button title="Retirar" color="#F4a07E" onPress={() =>decrease(-20)}/>

      <Text style={Style.text}>X-Bacon</Text>
      <Image style={Style.photo2}  source={require('../assets/imgs/bacon.png')}  />
      <Button title="Comprar" onPress={() =>calculate(10)}/>
      <Separator/>
      <Button title="Retirar" color="#F4a07E" onPress={() =>decrease(10)}/>

      <Text style={Style.text}>Batata Frita</Text>
      <Image style={Style.photo1}  source={require('../assets/imgs/potato.png')}  />
      <Button title="Comprar" onPress={() =>calculate(8)}/>
      <Separator/>
      <Button title="Retirar" color="#F4a07E" onPress={() =>decrease(8)}/>

      <Text style={Style.titleMain}>Bebidas:</Text>

      <Text style={Style.text}>Coca Cola</Text>
      <Image style={Style.photo1}  source={require('../assets/imgs/coca.png')}  />
      <Button title="Comprar" onPress={() =>calculate(5)}/>
      <Separator/>
      <Button title="Retirar" color="#F4a07E" onPress={() =>decrease(5)}/>

      <Text style={Style.text}>Suco</Text>
      <Image style={Style.photo1}  source={require('../assets/imgs/juice.png')}  />
      <Button title="Comprar" onPress={() =>calculate(4)}/>
      <Separator/>
      <Button title="Retirar" color="#F4a07E" onPress={() =>decrease(4)}/>

      <Text ></Text>
      <Button title="Cancelar" color="#D54911" onPress={() =>reset(0)}/>

      <Text style={Style.titleEnd}>  Valor Total: R$ {number}</Text>
  </ScrollView>
  ); 
}