import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Modal,
    FlatList,
    Alert
} from "react-native";

import { supabase } from "../../integrations/supabase/client"

import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/Ionicons";

const SERVICES = [
    "Carpenter",
    "Mason",
    "Helper",
    "Painter",
    "Welder",
    "Labour",
    "Steel Cutter",
    "Tiles and Floor Work",
    "Plumber",
    "Electrician",
];

const FIND_US = [
    "Newspaper",
    "Friends",
    "Social Media",
    "Pamphlets",
    "Ads And Billboards",
    "Other"
];

const LOCATIONS = [
    "Katra, Jammu",
    "Sikandarpur, Bihar",
    "Aya Nagar, Delhi",
    "Janipur, Jammu",
    "High Court, Jammu",
    "Satwari, Jammu",
    "Gandhi Nagar, Jammu",
    "Gangyal, Jammu",
    "Bahu Plaza, Jammu",
    "Raghunath Bazaar, Jammu",
    "Bus Stand, Jammu",
    "Bari Brahmana, Jammu",
    "Sainik Colony, Jammu",
    "Other"
];

const ProfessionalService = () => {

    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");

    const [serviceType, setServiceType] = useState("");
    const [findUs, setFindUs] = useState("");

    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState("");

    const [searchQuery, setSearchQuery] = useState("");

    const handleSelect = (item) => {
        if (modalType === "service") setServiceType(item);
        if (modalType === "findus") setFindUs(item);
        if (modalType === "location") setLocation(item);
        setModalVisible(false);
        setSearchQuery("");
    };

    const getDataForModal = () => {
        if (modalType === "service") return SERVICES;
        if (modalType === "findus") return FIND_US;
        if (modalType === "location") return LOCATIONS;
        return [];
    };

    const filteredData = getDataForModal().filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // fetching the data from supabase
    async function fetchData() {
        console.log('fetchData called');
        const { data, error } = await supabase.from('profiles').select('*');
        if (error) {
            console.error('Error:', error);
            Alert.alert("Error", error.message || "Something went wrong");
        } else {
            console.log('Data:', data);
            Alert.alert("Success", `Found ${data.length} profiles`);
        }
    }

    const handleSubmit = () => {
        if (!date) {
            Alert.alert("Validation Error", "Please select a date.");
            return;
        }
        if (!location) {
            Alert.alert("Validation Error", "Please select a location.");
            return;
        }
        if (!phone) {
            Alert.alert("Validation Error", "Please enter your phone number.");
            return;
        }
        if (!serviceType) {
            Alert.alert("Validation Error", "Please select a service type.");
            return;
        }
        if (!findUs) {
            Alert.alert("Validation Error", "Please select how you found us.");
            return;
        }

        // Alert.alert(
        //     "      Booking Successfully",
        //     "We will connect you in 15 minutes via Phone or SMS."
        // );

        fetchData();
        
        setDate(new Date());
        setLocation("");
        setPhone("");
        setServiceType("");
        setFindUs("");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {/* --- Title --- */}
                <Text style={styles.mainTitle}>
                    Find Professional{"\n"}Services
                </Text>

                {/* --- Card --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Book a Service</Text>

                    {/* --- Date Picker --- */}
                    <Text style={styles.label}>Start Date</Text>
                    <TouchableOpacity
                        style={styles.inputRow}
                        onPress={() => setShowDate(true)}
                    >
                        <Icon name="calendar-outline" size={20} color="#666" style={styles.icon} />
                        <Text style={styles.inputText}>
                            {date ? date.toDateString() : "Select date"}
                        </Text>
                    </TouchableOpacity>
                    {showDate && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) => {
                                const currentDate = selectedDate || date;
                                setShowDate(false);
                                setDate(currentDate);
                            }}
                        />
                    )}

                    {/* --- Location --- */}
                    <Text style={styles.label}>Location</Text>
                    <TouchableOpacity
                        style={styles.inputRow}
                        onPress={() => {
                            setModalType("location");
                            setModalVisible(true);
                        }}
                    >
                        <Icon name="location-outline" size={20} color="#666" style={styles.icon} />
                        <Text style={styles.inputText}>
                            {location ? location : "Select Location"}
                        </Text>
                    </TouchableOpacity>

                    {/* --- Phone --- */}
                    <Text style={styles.label}>Phone Number</Text>
                    <View style={styles.PhoneNumber}>
                        <Icon name="call-outline" size={20} color="#666" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your phone"
                            value={phone}
                            keyboardType="numeric"
                            onChangeText={setPhone}
                            maxLength={10}
                        />
                    </View>

                    {/* --- Service Type --- */}
                    <Text style={styles.label}>Service Type</Text>
                    <TouchableOpacity
                        style={styles.inputRow}
                        onPress={() => {
                            setModalType("service");
                            setModalVisible(true);
                        }}
                    >
                        <Icon name="construct-outline" size={20} color="#666" style={styles.icon} />
                        <Text style={styles.inputText}>
                            {serviceType ? serviceType : "Select Service"}
                        </Text>
                    </TouchableOpacity>

                    {/* --- How did you find us --- */}
                    <Text style={styles.label}>How did you find us?</Text>
                    <TouchableOpacity
                        style={styles.inputRow}
                        onPress={() => {
                            setModalType("findus");
                            setModalVisible(true);
                        }}
                    >
                        <Icon name="search-outline" size={20} color="#666" style={styles.icon} />
                        <Text style={styles.inputText}>
                            {findUs ? findUs : "Select option"}
                        </Text>
                    </TouchableOpacity>

                    {/* --- Submit Button --- */}
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            {/* --- Modal Dropdown (for service, findus, location) --- */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>
                            {modalType === "service"
                                ? "Choose a Service"
                                : modalType === "findus"
                                    ? "How did you find us?"
                                    : "Choose Location"}
                        </Text>

                        {/* --- Search for location --- */}
                        {modalType === "location" && (
                            <TextInput
                                style={styles.searchBox}
                                placeholder="Search location..."
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                            />
                        )}

                        <FlatList
                            data={filteredData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                const isSelected =
                                    (modalType === "service" && serviceType === item) ||
                                    (modalType === "findus" && findUs === item) ||
                                    (modalType === "location" && location === item);

                                return (
                                    <TouchableOpacity
                                        style={[
                                            styles.modalItem,
                                            isSelected && styles.selectedItem,
                                        ]}
                                        onPress={() => handleSelect(item)}
                                    >
                                        <Text
                                            style={[
                                                styles.modalItemText,
                                                isSelected && styles.selectedText,
                                            ]}
                                        >
                                            {item}
                                        </Text>
                                        {isSelected && (
                                            <Icon name="checkmark" size={20} color="#fff" />
                                        )}
                                    </TouchableOpacity>
                                );
                            }}
                        />

                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: "#f9f9f9"
    },

    container: {
        padding: 20,
        top: 20
    },

    mainTitle: {
        fontSize: 36,
        lineHeight: 42,
        fontWeight: "700",
        textAlign: "center",
        marginVertical: 20,
        color: "#000",
        marginBottom: 32,
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        marginBottom: 40,
    },

    cardTitle: {
        fontSize: 24,
        fontWeight: "600",
        color: "#007BFF",
        marginBottom: 20,
        textAlign: "center",
    },

    label: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 6,
        color: "#333"
    },

    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 15,
    },

    PhoneNumber: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 2.5,
        marginBottom: 15,
    },

    icon: {
        marginRight: 8
    },

    inputText: {
        fontSize: 16,
        color: "#000"
    },

    input: {
        flex: 1,
        fontSize: 16,
        color: "#000"
    },

    submitButton: {
        backgroundColor: "#007BFF",
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 10,
    },

    submitText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
    },

    modalOverlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.5)",
    },

    modalView: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: "60%",
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },

    modalItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        borderRadius: 8,
    },

    modalItemText: {
        fontSize: 16,
        color: "#333"
    },

    selectedItem: {
        backgroundColor: "#00897B"
    },

    selectedText: {
        color: "#fff",
        fontWeight: "bold"
    },

    closeButton: {
        marginTop: 10,
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#007BFF",
    },

    closeText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },

    searchBox: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 10,
        fontSize: 16,
    },

});

export default ProfessionalService;
