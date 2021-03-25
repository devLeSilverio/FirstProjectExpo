import React, {Fragment, useState} from 'react';
import {View,Text, Button} from 'react-native';
import Estilo from './Estilos'

export default (props)=>{
  const[numero,setNumero] = useState(props.valor)

  const calcula = (preco)=>{
    setNumero(numero + preco)
  }
  const zerar = ()=>{
    setNumero(numero == 0)
  }

  return(
  <Fragment>
      <Text style={Estilo.textoDestaque}>Lanches:</Text>
      <Text style={Estilo.texto}>X-Burguer</Text>
      <Button title="Comprar" onPress={() =>calcula(20)}/>
      <Text style={Estilo.texto}>X-Salada</Text>
      <Button title="Comprar" onPress={() =>calcula(10)}/>
      <Text style={Estilo.texto}>X-Bacon</Text>
      <Button title="Comprar" onPress={() =>calcula(12)}/>
      <Text style={Estilo.texto}>Batata Frita</Text>
      <Button title="Comprar" onPress={() =>calcula(8)}/>
      <Text style={Estilo.textoDestaque}>Bebidas:</Text>
      <Text style={Estilo.texto}>Coca Cola</Text>
      <Button title="Comprar" onPress={() =>calcula(5)}/>
      <Text style={Estilo.texto}>Suco</Text>
      <Button title="Comprar" onPress={() =>calcula(4)}/>
      <Text style={Estilo.texto}>Água com gás</Text>
      <Button title="Comprar" onPress={() =>calcula(2)}/>
      <Text style={Estilo.textoDestaque}>Cancelar Pedido</Text>
      <Button title="Cancelar" onPress={() =>zerar(0)}/>
      <Text style={Estilo.textoDestaque}>Valor Total: R$ {numero}</Text>
  </Fragment>
  ); 
}