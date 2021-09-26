import React, {useState, useEffect, useRef} from "react";
import { View, Text, Button, StyleSheet, Image, TextInput, Touchable, Modal, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";
import {Container, AreaTopo, ImagemLogo, AreaPesquisa, Input, Botao, BotaoReseta, BotaoLink, TextoBotaoLink, TextoBotao} from './styles';

import api from '../../services/api';
import Detalhes from '../Detalhes/index';

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
        <Container>

                <ImagemLogo source={require('../../imagens/logo.png')} />

            <AreaPesquisa>
                <Input ref={inputCfopCodigo} placeholder="Código cfop" onChangeText={ (text) => setCodigoCfop(text)} />

                <Botao onPress={buscarCfop}>
                    <TextoBotao>Pesquisar</TextoBotao>
                </Botao>

                <BotaoReseta onPress={limparCampo}>
                    <TextoBotao>Limpar campo</TextoBotao>
                </BotaoReseta>

                <BotaoLink>
                    <TextoBotaoLink>CFOP para devolução</TextoBotaoLink>
                </BotaoLink>

            </AreaPesquisa>

            <Modal transparent={true} animationType="slide" visible={visibleModal}>
            <Detalhes cfop={dadosCfop} voltar={ () =>setVisibleModal(false)}/>
            </Modal>
        </Container>
    );
}

