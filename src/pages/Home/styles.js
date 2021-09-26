import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #3EA07D;
    align-items: center;
`;

export const AreaTopo = styled.View`
    
    height: 30%;

`;

export const ImagemLogo = styled.Image`
    width: 80%;
    height: 50%;
    margin-top: -6%;
`;

export const AreaPesquisa = styled.View`
    align-items: center;
    margin-top: -10%;
    padding: 5%;
    padding-top: 8%;
    background-color: white;
    height: 100%;
    width: 95%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`;

export const Input = styled.TextInput`
    border-width: 2px;
    width: 90%;
    border-color: #e8e8e8;
    background-color: #f6f6f6;
    border-radius: 10px;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const Botao = styled.TouchableOpacity`
    width: 280px;
    background-color: green;
    padding: 10px;
    margin-top: 5%;
`;

export const BotaoReseta = styled.TouchableOpacity`
    width: 280px;
    background-color: red;
    padding: 10px;
    margin-top: 5%;
    font-weight: bold;
`;

export const BotaoLink = styled.TouchableOpacity`
    margin-top: 5%;
`;

export const TextoBotao = styled.Text`
    text-align: center;
    color: white;
`;

export const TextoBotaoLink = styled.Text`
    color: #3EA07D;
    font-size: 17px;
    font-weight: bold;
`;