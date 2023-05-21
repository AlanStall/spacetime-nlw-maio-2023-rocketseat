import React, { useEffect, useState } from "react";
import { styled } from "nativewind";
import { SplashScreen, Stack } from 'expo-router'
import * as SecureStore from 'expo-secure-store'

import blurBg from '../src/assets/bg-blur.png';
import Stripes from '../src/assets/stripes.svg';
import { ImageBackground } from "react-native";

import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import {
    BaiJamjuree_700Bold,
} from '@expo-google-fonts/bai-jamjuree';
import { StatusBar } from "expo-status-bar";


const StyledStripes = styled(Stripes);

export default function Layout() {
    const [isUserAuthenticate, setIsUserAuthenticate] = useState<null | boolean>(null);
    const [hasLoadedFonts] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        BaiJamjuree_700Bold,
    })

    useEffect(() => {
        SecureStore.getItemAsync('token').then(token => {
            setIsUserAuthenticate(!!token)
        })
    }, []);

    if (!hasLoadedFonts) {
        return <SplashScreen />
    }

    return (
        <ImageBackground
            source={blurBg}
            className='relative flex-1 bg-gray-900'
        >
            <StyledStripes className='absolute left-2' />

            <StatusBar style="light" translucent />
            <Stack screenOptions={{ headerShown: true, contentStyle: { backgroundColor: 'transparent' } }}>
                <Stack.Screen name="index" redirect={isUserAuthenticate}/>
                <Stack.Screen name="memories"/>

            </Stack>
        </ImageBackground>
    )
}