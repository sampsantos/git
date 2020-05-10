import React from 'react'
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Cadastro = ({ navigation }) => {
    return (
        <View style={styles.container}>
                <Text  style={styles.titleText} >Inclua seu novo livro</Text>

                <TextInput  style={styles.input} 
                    placeholder='Título'
                />
                <TextInput style={styles.input}
                    placeholder='Descrição'
                    multiline={true}
                    numberOfLines={4}
                />

                <TouchableOpacity style={styles.buttonCamera}>
                    <Icon name='photo-camera' size={18} color='#FFF' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCadastra}>
                    <Text style={styles.buttonCadastrarText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCancel}
                    onPress={() => {
                        navigation.goBack()
                    }}>
                    <Text style={styles.buttonCancelText}>Cancelar</Text>
                </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    titleText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#3498db',
        marginBottom: 20
    },
    input: {
        borderBottomColor: '#f39c12',
        borderBottomWidth: 1,
        marginBottom: 20
    },
    buttonCamera: {
        backgroundColor: '#f39c12',
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        width: 32,
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 20
    },
    buttonCadastra: {
        backgroundColor: '#f39c12',
        alignSelf: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    buttonCadastrarText: {
        color: '#FFF',
        fontSize: 16,
        
    },

    buttonCancel: {
        alignSelf: 'center'
    },
    buttonCancelText: {
        color: '#95a5a6'
    }

})

export default Cadastro