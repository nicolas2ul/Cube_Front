import React from 'react';
import { Button, StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { AiOutlineHeart, AiOutlineStar, AiOutlineCaretDown } from 'react-icons/ai'
import Menu from './Menu';

export default function Discovery() {
    return (

        <View style={styles.container}>
            <View style={styles.container2}>

                <View>
                    <Text style={styles.titleOne}>
                        Découvrez
                    </Text>

                    <TouchableOpacity
                        style={styles.filter}
                        onPress={() => Alert.alert('Liker')}
                    >
                        <Text style={styles.innerText}>FILTRER<AiOutlineCaretDown /></Text>
                    </TouchableOpacity>

                    <Text style={styles.titleTwo}>
                        TOUTES LES RESSOURCES
                    </Text>

                </View>

                <View style={styles.content}>
                    <Text>Catégorie :</Text>
                    <Text>Types de relations :</Text>
                    <Text>Types de ressources :</Text>
                </View>

                <View style={styles.content}>
                    <Text>Titre de la ressource</Text>
                    <Text>Liens</Text>

                </View>
            

            
                <Image style={styles.image}
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2017/03/27/13/33/beach-2178747_960_720.jpg'
                    }}
                />
            
            </View>


            <View style={styles.buttonContainer}>

                <Text>Username example</Text>
                <Button
                    title="Commentaires "
                    onPress={() => Alert.alert('Commenter')}
                />

                <View style={styles.like}>
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => Alert.alert('Liker')}
                    >
                        <AiOutlineHeart />
                    </TouchableOpacity>
                </View>

                <View style={styles.like}>

                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => Alert.alert('Favoris')}
                    >
                        <AiOutlineStar />
                    </TouchableOpacity>

                </View>
            </View>

            <Menu />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        fontWeight: "bold",
    },

    container2: {
        marginHorizontal: '4%',
        marginTop: '4%'
    },

    titleOne: {
        fontSize: 35,

    },

    innerText: {
        color: 'white',
        padding: 2,
        margin: 3,
    },

    filter: {
        width: 100,
        height: 30,
        backgroundColor: '#2196f3',
        borderRadius: 2,
        color: 'white',
        marginVertical: 15
    },

    titleTwo: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 15,
    },

    content: {
        marginBottom: 15,
    },

    image: {
        width: '90vw',
        height: "100vw",

    },
    

    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginTop: 15,
        marginBottom: 15,
    },

    like: {
        width: 30,
        height: 33,
        backgroundColor: '#2196f3',
        borderRadius: 2,
        alignItems: 'center',
    },

    icon: {
        color: 'white',
        padding: 5,
        margin: 2,

    },
});
