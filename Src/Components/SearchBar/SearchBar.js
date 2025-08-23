import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Text,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleSearch = () => {
        console.log("Search:", query);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Search Input Box */}
                <View
                    style={[
                        styles.inputContainer,
                        { borderColor: isFocused ? "#007bff" : "#ccc" },
                    ]}
                >
                    <Icon name="search-outline" size={20}
                        color="#777" style={styles.icon} />

                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        value={query}
                        onChangeText={setQuery}
                        placeholderTextColor="#999"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />

                    {query.length > 0 && (
                        <TouchableOpacity onPress={() => setQuery("")}>
                            <Icon name="close-circle" size={20} color="#777" style={styles.icon} />
                        </TouchableOpacity>
                    )}
                </View>

                {/* Search Button */}
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Text style={styles.searchText}>Search</Text>
                    <Icon name="arrow-forward-outline" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#f9f9f9",
        paddingHorizontal: 16,
        top: 30,
        marginBottom: 30,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 8,
        backgroundColor: "#fff",
        height: 45,
    },
    icon: {
        marginHorizontal: 4,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#000",
    },
    searchButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#007bff",
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 12,
        marginLeft: 8,
    },
    searchText: {
        color: "#fff",
        fontSize: 16,
        marginRight: 5,
    },
});

export default SearchBar;
