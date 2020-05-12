//importando a biblioteca
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

//importando as paginas(telas)
import Index from './pages/'
import Cadastrar from './pages/Cadastrar'
 
//criando as rotas
const Routes = createAppContainer(
    createSwitchNavigator(
        { //paginas
            Index,
            Cadastrar
        }, { //configuração
            initialRouteName: 'Index', //primeira pagina ao ser chamada
            backBehavior: 'history' //quando apertar em voltar segue o hitorico voltando
        }
    )
)

export default Routes 