import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './shared/hooks/useCachedResources';
import useColorScheme from './shared/hooks/useColorScheme';
import Navigation from './shared/navigation';
import {Text} from "./shared/components/Themed";
console.log("YEA!")
export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Text >EXPO APP!!</Text>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
            </SafeAreaProvider>
        );
    }
}
