import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from "react-navigation-drawer"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion

/**
 * new navigators can be imported here
 */ import BlankScreen010890 from "../features/BlankScreen010890/navigator"
import Imagecardlist516943 from "../features/Imagecardlist516943/navigator"

const AppNavigator = {
  Imagecardlist516943: { screen: Imagecardlist516943 },
  //@BlueprintNavigationInsertion

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  },

  BlankScreen010890: { screen: BlankScreen010890 }
}

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator
  },

  {
    contentComponent: SideMenu
  }
)

const AppContainer = createAppContainer(DrawerAppNavigator)

export default AppContainer
