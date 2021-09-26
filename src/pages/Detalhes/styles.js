import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    margin-left: 10px;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`;

export const ModalContainer = styled.View`
    width: 90%;
    height: 40%;
    background-color: #121212;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 10px;
`;

export const TopModal = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
`;

export const BotaoVoltar = styled.TouchableOpacity`
    
`;

export const TextoBotaoVoltar = styled.Text`
    color: white;
    font-size: 16px;
`;

export const ConteudoModal = styled.View`
    text-align: center;
    align-items: center;
`;

export const TituloModal = styled.Text`
    text-align: center;
    color: #fff;
    padding: 10px;
    font-size: 28px;
    font-weight: bold;
`;

export const TextoDescricao = styled.Text`
    color: #fff;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 3%;
`;

export const BotaoCompartilhar = styled.TouchableOpacity`
    width: 250px;
    background-color: #2D994B;
    padding: 10px;
    border-radius: 40px;
    margin-top: 10%;
`;

export const TextoBotao = styled.Text`
    text-align: center;
    color: white;
    font-weight: bold;
    flex-wrap: wrap;
`;