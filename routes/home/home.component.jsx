import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { notification, plus } from '../../svg';
import { AuthContext } from '../../contexts/auth.context';
import { TogglesContext } from '../../contexts/toggles.context';
import Notification from '../../components/notifications/notification.component';

const image = require('../../assets/images/bg.jpg');
const { width, height } = Dimensions.get('window');

const Home = () => {

    const navigation = useNavigation();

    const navigateToSignup = () => {
        navigation.navigate('Signup');
    }
    const navigateToSignin = () => {
        navigation.navigate('Signin');
    }
    const navigateToSetting = () => {
        navigation.navigate('Setting');
    }

    const navigateToInventory = () => {
        navigation.navigate('Inventory');
    }

    const navigateToScanner = () => {
        navigation.navigate('Scanner');
    }

    const { isConnected, signout } = useContext(AuthContext);

    const { notif, setNotif } = useContext(TogglesContext);

    const notifToggle = () => {
        setNotif(!notif);
    }

    return (
        <View>
            {isConnected ? (
                <>
                    {/* <View style={styles.mainContainer}>
                        <SafeAreaView>
                            <TouchableOpacity onPress={navigateToSetting}>
                                <Text>Setting</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                        <SafeAreaView>
                            <TouchableOpacity onPress={navigateToInventory}>
                                <Text>My Inventory</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                        <SafeAreaView>
                            <TouchableOpacity onPress={navigateToScanner}>
                                <Text>Scanner</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                        <SafeAreaView>
                            <TouchableOpacity onPress={handleSignout}>
                                <Text>Signout</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </View> */}

                    <SafeAreaView style={styles.mainContainer}>
                        <SafeAreaView style={styles.topSection}>
                            <SafeAreaView style={styles.topSectionC}>
                                <TouchableOpacity>
                                    <SvgXml xml={plus} width='28' height="28" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={notifToggle}>
                                    <SvgXml xml={notification} width='25' height="25" />
                                </TouchableOpacity>
                            </SafeAreaView>
                        </SafeAreaView>
                    </SafeAreaView>
                    {
                        notif ? (<Notification />) : (<View />)
                    }

                </>
            ) : (
                <>
                    <ImageBackground source={image} style={styles.container}>
                        <SafeAreaView style={styles.section}>
                            <Image style={styles.image} source={require('../../assets/images/future.png')} />
                        </SafeAreaView>
                        <SafeAreaView style={styles.section}>
                            <SafeAreaView style={styles.subSection}>
                                <Text style={styles.h1}>
                                    Manage your
                                </Text>
                                <Text style={styles.h1}>
                                    Project inventory here
                                </Text>
                            </SafeAreaView>
                            <SafeAreaView style={styles.subSection}>
                                <Text style={styles.p}>
                                    Explore our exciting tools &
                                </Text>
                                <Text style={styles.p}>
                                    Manage your inventory easly and rapidly
                                </Text>
                            </SafeAreaView>
                        </SafeAreaView>
                        <SafeAreaView style={styles.btnSection}>
                            <TouchableOpacity onPress={navigateToSignup} style={styles.signUpButton}>
                                <Text style={styles.buttonText}>Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={navigateToSignin} style={styles.signInButton}>
                                <Text style={styles.buttonText}>Sign In</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </ImageBackground>

                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    topSection: {
        width: width,
        height: 45,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 10,
        paddingLeft: 10,
        position: 'absolute',
        top: 0,
        right: 0
    },
    topSectionC: {
        height: '100%',
        width: '20%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mainContainer: {
        width: width,
        height: height,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff'
    },
    section: {
        width: width,
        alignItems: 'center',
    },
    subSection: {
        width: width,
        paddingBottom: 20,
    },
    image: {
        width: width - 100,
        height: 300,
        resizeMode: 'cover',
        borderRadius: 30
    },
    h1: {
        fontSize: 26,
        fontWeight: '500',
        textAlign: 'center',
        color: '#000000',
    },
    p: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
    },
    btnSection: {
        width: width - 50,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        backgroundColor: 'transparent',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#fff',
        marginBottom: 50
    },
    signUpButton: {
        width: '50%',
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        elevation: 5,
        ...Platform.select({
            android: {
                elevation: 0, // Remove box shadow on Android
            },
        }),
    },
    signInButton: {
        width: '50%',
        height: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        elevation: 5,
        ...Platform.select({
            android: {
                elevation: 0, // Remove box shadow on Android
            },
        }),
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',

    },
});

export default Home;
