import React, { useEffect } from 'react';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import * as Notifications from 'expo-notifications';
import { PlantProps } from './src/libs/storage';

export default function App() {
  const [fonsLoading] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      });

      return () => subscription.remove();
  },[]);

  if (!fonsLoading)
    return <AppLoading />

  return (
    <Routes />
  );
}

