import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Contracts from '../screens/Contracts'
import Xd from '../screens/Xd'
import VideoPage from '../screens/VideoPage'
import make_contract from '../screens/make_contract'
import role_select from '../screens/role_select'
import Bid from '../screens/Bid'


const stackNavigatorOptions ={
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Contracts:{screen:Contracts},
    Xd:{screen:Xd},
    VideoPage:{screen:VideoPage},
    make_contract:{screen:make_contract},
    role_select:{screen:role_select},
    Bid:{screen:Bid}


},
{
    defaultNavigationOptions:stackNavigatorOptions
}
)
export default createAppContainer(AppNavigator);
