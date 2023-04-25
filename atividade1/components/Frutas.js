import React from 'react';
import { StyleSheet, View, Text, ScrollView, Platform } from 'react-native';

export default Frutas = () => {

const VetordeFrutas = ['abacate','amora','ameixa','acerola','abacaxi','açai','banana','carambola','caju','cereja','cacau','caqui','cupuaçu','damasco','figo','framboesa','graviola','goiaba','groselia','guarana','jaca','kiwi','laranja','limao','lima','lixia','melancia','mamao','melao','maracuja','manga','maça','mexerica','morango','nectarina','pera','pessego','pitanga','pinha','quina','roma','tangerina','uva'];

 
  const FiltrarLetraR = () => {
    const FrutasLetraR = VetordeFrutas.filter(i => i.toUpperCase().includes('R'));
    const FrutasLetraR1 = FrutasLetraR.map(FrutasLetraR => FrutasLetraR.toLocaleUpperCase())
    return FrutasLetraR1.map(i => (
      <Text key={i} style = {stylefruta.T}>{i}</Text>
    ));
  };

  const Maiuscula = () => {
    const M = VetordeFrutas.map(i => i.toUpperCase());
    return M.map(i => (
      <Text key={i} style = {stylefruta.T}>{i}</Text>
    ));
  };

  return (
    <View style ={stylefruta.Container}>
        <ScrollView>    
            <View>
            <Text style = {stylefruta.ttl}>Vetor Frutas Maiúsculas:</Text>
            {Maiuscula()}
            </View>
            <View>
            <Text style = {stylefruta.ttl}>Vetor Frutas com a letra R:</Text>
            {FiltrarLetraR()}
            </View>
        </ScrollView>
    </View>
  );
};

const stylefruta = StyleSheet.create({
 Container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 29,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 40,
    paddingTop: Platform.OS === 'android' ? 25 : 0
 },

 T: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
    marginBottom: 7,
 },
 ttl: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
 }
})

