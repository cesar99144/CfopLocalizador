import React, {useState, useEffect, useRef} from "react";
import { View, Text, Button, StyleSheet, Image, TextInput, Touchable, Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";

import api from './../../services/api';
import Detalhes from './Detalhes';

export default function Home(){

    const navigation = useNavigation();

    const inputCfopCodigo = useRef(null);

    const [codigoCfop, setCodigoCfop] = useState('');

    const [dadosCfop, setDadosCfop] = useState([]);

    const [visibleModal, setVisibleModal] = useState(false);



    function telaDevolucao(){

        navigation.navigate('devolucao');
    }

    async function buscarCfop(){

        try{
            const response = await api.get(`/${codigoCfop}`);

            setDadosCfop(response.data);
            setVisibleModal(true);
            
        }catch(error){
            alert('error'+error)
        }
    }

    function limparCampo(){

        inputCfopCodigo.current.clear();
        setCodigoCfop('');
    }

    return(
        <View style={styles.container}>
            <View style={styles.areaTopo}>
                <Image style={styles.imagemLogo} source={require('../../imagens/logo.png')} />
            </View>

            <View style={styles.areaPesquisa}>
                <TextInput  ref={inputCfopCodigo} style={styles.entradaDados} placeholder="Código cfop" onChangeText={ (text) => setCodigoCfop(text)} />

                <TouchableOpacity onPress={buscarCfop} style={styles.botaoPesquisar}>
                    <Text style={styles.botaoTexto}>Pesquisar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={limparCampo} style={[styles.botaoPesquisar, {backgroundColor: 'red', fontWeight: 'bold'}]}>
                    <Text style={styles.botaoTexto}>Limpar campo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoLink}>
                    <Text style={styles.TextoLink}>Cfop para devolução</Text>
                </TouchableOpacity>
            </View>

            <Modal transparent={true} animationType="slide" visible={visibleModal}>
            <Detalhes cfop={dadosCfop} voltar={ () =>setVisibleModal(false)}/>
            </Modal>
        </View>
    );
}

const styles = new StyleSheet.create({
    container:{
        flex: 1,
    },
    areaTopo:{
        backgroundColor: '#3EA07D',
        height: '30%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center'
    },
    imagemLogo:{
        width: '70%',
        height: '70%',
        marginTop: '5%'
    },
    areaPesquisa:{
        alignItems: 'center',
        marginTop: '15%',
        padding: 10
    },
    entradaDados:{
        borderWidth: 2,
        width: '90%',
        borderColor: '#e8e8e8',
        backgroundColor: '#f6f6f6',
        borderRadius: 10,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    botaoPesquisar:{
        width: 280,
        backgroundColor: '#5DB075',
        padding: 10,
        borderRadius: 15,
        marginTop: '5%',
    },
    botaoTexto:{
        textAlign: 'center',
        color: 'white'
    },
    botaoLink:{
        marginTop: '5%'
    },
    TextoLink:{
        color: '#3EA07D',
        fontSize: 17,
        fontWeight: 'bold',
        
    }
});