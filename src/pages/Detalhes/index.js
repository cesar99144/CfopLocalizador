import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BotaoCompartilhar, BotaoVoltar, Container, ConteudoModal, ModalContainer, TextoBotao, TextoBotaoVoltar, TextoDescricao, TituloModal, TopModal} from './styles';

export default function Detalhes(props){
    return(
        <Container>
           
            <ModalContainer>

                <TopModal>

                    <BotaoVoltar onPress={props.voltar}>
                        <TextoBotaoVoltar>Voltar</TextoBotaoVoltar>
                    </BotaoVoltar>
              
                </TopModal>

                <ConteudoModal>
                    <TituloModal>
                        CFOP {props.cfop.codigo}
                    </TituloModal>

                    <TextoDescricao>
                        {props.cfop.descricao}
                    </TextoDescricao>

                    <BotaoCompartilhar>
                        <TextoBotao>
                            Compartilhar
                        </TextoBotao>
                    </BotaoCompartilhar>

                </ConteudoModal>
              
            </ModalContainer>

        </Container>
    );
}
