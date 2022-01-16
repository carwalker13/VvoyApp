import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {

    // Events

    const initialCurrentLocation = {
        streetName: "Vvoy- Adventure Awaits",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "All",
            icon: icons.all,
        },
        {
            id: 2,
            name: "Free",
            icon: icons.free,
        },
        {
            id: 3,
            name: "Food",
            icon: icons.food,
        },
        {
            id: 4,
            name: "Markets",
            icon: icons.markets,
        },
        {   id: 5,
            name: "Music",
            icon: icons.music,
        },
        {
            id: 6,
            name: "Shop Local",
            icon: icons.shopLocal,
        },
        {
            id: 7,
            name: "Kids",
            icon: icons.kids,
        },
        {
            id: 8,
            name: "Nature",
            icon: icons.nature,
        },
        {
            id: 9,
            name: "Pets",
            icon: icons.pets,
        },
        {
            id: 10,
            name: "Retail",
            icon: icons.retail,
        },
        {
            id: 11,
            name: "Exercise",
            icon: icons.exercise,
        },
        {
            id: 12,
            name: "Art",
            icon: icons.art,
        },
        {
            id: 13,
            name: "Self Care",
            icon: icons.selfCare,
        },
        
        

    ]

    // price rating
    const free = 0
    const inexpensive = 1
    const average = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Hoboken Farmers Market",
            categories: [1, 3, 4, 6],
            priceRating: inexpensive,
            photo: images.farmers_market_1,         
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
           
            menu: [
                {
                    menuId: 1,
                    name: "Hoboken Farmers Market",
                    photo: images.farmers_market_2,
                    description: "Shop local fruits and vegetables, support small farmers, and gather with your community.",             

                },
            ]   
        },
        {
            id: 2,
            name: "Happy Hero Hour, $6 Heros",
            categories: [1, 3],
            priceRating: inexpensive,
            photo: images.vitos,         
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
           
            menu: [
                {
                    menuId: 1,
                    name: "Happy Hero Hour, $6 Heros",
                    photo: images.vitos,
                    description: "Shop local fruits and vegetables, support small farmers, and gather with your community.",  
                    address: "1301 Hudson Street",


                },
            ]   
        },
        {
            id: 3,
            name: "Family Farmers Market",
            categories: [1, 3, 4, 6],
            priceRating: inexpensive,
            photo: images.familyMarket,         
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
           
            menu: [
                {
                    menuId: 1,
                    name: "Family Farmers Market",
                    photo: images.familyMarket1,
                    description: "Shop local fruits and vegetables, support small farmers, and gather with your community.",   
                    address: "1301 Hudson Street"          

                },
            ]   
        },
        {
            id: 4,
            name: "Story Time at the Hoboken Museum",
            categories: [1, 7],
            priceRating: inexpensive,
            photo: images.museum,         
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
           
            menu: [
                {
                    menuId: 1,
                    name: "Story Time at the Hoboken Museum",
                    photo: images.storytime,
                    description: "Shop local fruits and vegetables, support small farmers, and gather with your community.",  
                    address: "1301 Hudson Street",           

                },
            ]   
        },
        {
            id: 5,
            name: "Artisan Market",
            categories: [1, 4, 6, 12],
            priceRating: inexpensive,
            photo: images.artisan,         
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
          
           
            menu: [
                {
                    menuId: 1,
                    name: "Artisan Market",
                    photo: images.artisan,
                    description: "Shop local fruits and vegetables, support small farmers, and gather with your community.",  
                    address: "1301 Hudson Street",           

                },
            ]   
        },
        {
            id: 6,
            name: "“CIRCUS LIVES: Hovering Above, Balancing Below” Art Exhibit",
            categories: [1, 2, 12],
            priceRating: free,
            photo: images.circus,         
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
           
            menu: [
                {
                    menuId: 1,
                    name: "“CIRCUS LIVES: Hovering Above, Balancing Below” Art Exhibit",
                    photo: images.circus,
                    description: "Shop local fruits and vegetables, support small farmers, and gather with your community.", 
                    address: "1301 Hudson Street",            

                },
            ]   
        },
    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))
        setRestaurants(restaurantList)
        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)
        if (category.length > 0)
            return category[0].name
        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '92%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>               
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
              

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
            
        )
    }
    
    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Description", {
                    item,
                    currentLocation
                })}
            >

                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />  
                </View>
               
                {/* Event Name */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 15
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }  
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home