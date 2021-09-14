import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Detalhes(props){
    return(
        <View style={styles.container}>
           
           <View style={styles.modalContainer}>
              <View style={styles.topModal}>
              <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
                  <Text style={{color: '#fff', fontSize: 16}}></Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
                  <Text style={{color: '#fff', fontSize: 16}}>Voltar</Text>
              </TouchableOpacity>
              
              </View>

              <View style={styles.conteudoModal}>
                <Text style={styles.titulo}>CFOP {props.cfop.codigo}</Text>
                <Text style={styles.descricao}>{props.cfop.descricao}</Text>

                <TouchableOpacity style={styles.botaoCompartilhar}>
                    <Text style={styles.textoBotao}>Compartilhar</Text>
                </TouchableOpacity>
              </View>
              
              
           </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        
        marginLeft: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent:'flex-end'
    },
    modalContainer:{
        width: '90%',
        height: '40%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 10,

    },
    topModal:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    conteudoModal:{
        textAlign: 'center',
        alignItems: 'center'
    },
    titulo:{
        textAlign: 'center',
        color: '#FFF',
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold'
    },
    descricao:{
        color: '#FFF',
        marginLeft: 10,
        marginRight: 10,
        marginTop: '3%'
    },
    botaoCompartilhar:{
        width: 250,
        backgroundColor: '#2D994B',
        padding: 10,
        borderRadius: 40,
        marginTop: '10%',
    },
    textoBotao:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        flexWrap: 'wrap'
    },
});