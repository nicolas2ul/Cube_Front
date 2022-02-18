import React from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Image } from 'react-native';
import { AiOutlineHome, AiOutlineSearch, AiOutlineComment, AiOutlineUser } from 'react-icons/ai'
import { Link } from '@react-navigation/native';

export default function Menu() {
    return (

        <View style={styles.container}>

            <View
                style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 2,
                }}

            />

            <View style={styles.buttonContainer}>


                <View style={styles.like}>
                    <Link to={{ screen: 'Home' }} >
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={() => Alert.alert('Home')}
                        >
                            <AiOutlineHome />
                        </TouchableOpacity>
                    </Link>


                </View>

                <View style={styles.like}>

                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => Alert.alert('Favoris')}
                    >

                        <AiOutlineSearch />
                    </TouchableOpacity>
                </View>

                <View style={styles.like}>

                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => Alert.alert('Favoris')}
                    >

                        <Image
                            style={styles.image}
                            source={require('./../assets/logoNoir.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.like}>
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => Alert.alert('Favoris')}
                    >
                        <AiOutlineComment />
                    </TouchableOpacity>
                </View>

                <View style={styles.like}>

                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => Alert.alert('Favoris')}
                    >
                        <AiOutlineUser />
                    </TouchableOpacity>
                </View>
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },

    icon: {
        fontSize: '1.6em',
    },

    image: {
        width: 30,
        height: 30,
    },

    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },

});
