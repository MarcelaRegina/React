import React, { useState } from 'react';
import { Alert, Image } from 'react-native';
import {
    Container,
    Animation,
    Input,
    Button,
    ButtonText,
    AddressArea,
    Text
} from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';

export default function Home() {
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState(null);

    async function handleBuscar() {
        try {
            const { status, data } = await api.get(`${cep}/json/`);

            if (status != 200 || data.erro) {
                Alert.alert('Buscar', 'Digite um livro válido.');
            } else {
                setAddress(data);
            }

        } catch (error) {
            Alert.alert('Buscar', 'Digite um livro válido');
        }
    };

    async function handleLimpar() {
        setAddress(null);
        setCep('');
    }

    return (
        <Container>
            <Animation
                animation='bounceInDown'
                delay={100}
                duration={1500}
            >
                <Image source={logo} />
            </Animation>

            <Animation
                animation='bounceInRight'
                delay={100}
                duration={1500}
            >
                {!address &&
                    <Input
                        keyboardType="text"
                        maxLength={25}
                        onChangeText={setCep}
                        onSubmitEditing={handleBuscar}
                        placeholder="Digite o Livro que deseja buscar"
                        placeholderTextColor="#2F48D4"
                        value={cep}
                    />
                }

                <Button
                    activeOpacity={0.8}
                    onPress={address ? handleLimpar : handleBuscar}>
                    <ButtonText>
                        {address ? 'Limpar' : 'Buscar'}
                    </ButtonText>
                </Button>
            </Animation>

            {address &&
                <AddressArea>
                    <Text>Livro: {cep}</Text>
                    <Text>{address.plot}</Text>
                    <Text>Autor: {address.autor}</Text>
                    <Text>Ano: {address.data}</Text>
                    
                </AddressArea>
            }
        </Container>
    );
}