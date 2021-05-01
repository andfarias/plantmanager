import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import { PlantSelect } from '../pages/PlantSelect';
import { MaterialIcons } from '@expo/vector-icons';
import { MyPlants } from '../pages/MyPlants';

const AppTab = createBottomTabNavigator();

const AuthRoutes: React.FC = () => (
  <AppTab.Navigator
    tabBarOptions={{
      activeTintColor: colors.green,
      inactiveTintColor: colors.heading,
      labelPosition: 'beside-icon',
      style: {
        height: 88
      }
    }}
  >

    <AppTab.Screen
      name="Nova Planta"
      component={PlantSelect}
      options={{
        tabBarIcon: (({ color, size }) => (
          <MaterialIcons
            name="add-circle-outline"
            size={size}
            color={color}
          />
        ))
      }}
    />

    <AppTab.Screen
      name="Minhas Plantas"
      component={MyPlants}
      options={{
        tabBarIcon: (({ color, size }) => (
          <MaterialIcons
            name="format-list-bulleted"
            size={size}
            color={color}
          />
        ))
      }}
    />

  </AppTab.Navigator>
);

export default AuthRoutes;