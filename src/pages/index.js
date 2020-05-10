import React  from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    FlatList
} from 'react-native'


import Icon from 'react-native-vector-icons/MaterialIcons';

//desestruturando o navigation para navegar entre as telas
const App = ( {navigation} ) => {
    const data =[
        {
            id: '1',
            title: 'Livro 1',
            anotations: 'Livro muito bom',
            read: false,
            foto: null
        },
        {
            id: '2',
            title: 'Livro 2',
            anotations: 'Livro muito bom',
            read: false,
            foto: null
        },
        {
            id: '3',
            title: 'Livro 3',
            anotations: 'Livro muito bom',
            read: false,
            foto: null
        }
    ]
    
    return(
        <View style={styles.container}>
            <View style={styles.toolBox}>
                <Text style={styles.title}>Lista de leitura</Text>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                        navigation.navigate('Cadastrar')
                    }}>
                    <Icon name='add' size={14} color='#FFF'/>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={data}
                keyExtractor={item => item.id} 
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemButton}>
                        <Text style={styles.textButton}>{item.title}</Text>
                    </TouchableOpacity>
                    
                )}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 5
    },
    toolBox: {
        flexDirection: 'row',
        /* justifyContent: 'center', */
        marginBottom: 5

    },
    title: {
        flex: 1,//para ocupar o maior espaço, presionando o botão ao canto direito
        fontSize: 16,
        color: '#3498db'
    },
    addButton: {
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
        borderRadius: 50,
        

    },
    itemButton: {

    },
    textButton: {
        fontSize: 16
    }

})

export default App