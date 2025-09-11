import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Alert,
    Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../Assets/Colors/Color";

const ApplyAsProfessional = () => {
    const [form, setForm] = useState({
        fullName: "",
        age: "",
        experience: "",
        mobile: "",
        location: "",
        skill: "",
        description: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value });
        setErrors({ ...errors, [key]: "" });
    };

    const validate = () => {
        let valid = true;
        let newErrors = {};

        if (!form.fullName.trim()) {
            newErrors.fullName = "Please fill out this field";
            valid = false;
        }
        if (!form.age.trim()) {
            newErrors.age = "Please fill out this field";
            valid = false;
        }
        if (!form.experience.trim()) {
            newErrors.experience = "Please fill out this field";
            valid = false;
        }
        if (!form.mobile.trim()) {
            newErrors.mobile = "Please fill out this field";
            valid = false;
        } else if (form.mobile.length < 10) {
            newErrors.mobile = "Enter a valid mobile number";
            valid = false;
        }
        if (!form.location.trim()) {
            newErrors.location = "Please fill out this field";
            valid = false;
        }
        if (!form.skill.trim()) {
            newErrors.skill = "Please fill out this field";
            valid = false;
        }
        if (!form.description.trim()) {
            newErrors.description = "Please fill out this field";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log("Form Data:", form);
            Alert.alert("Success", "Form Submitted!");
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Apply as Professional</Text>
                <Text style={styles.subtitle}>
                    Join our network of skilled professionals and connect with clients in your area.
                </Text>

                <View style={styles.formBox}>
                    {/* Full Name */}
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Your Name"
                        value={form.fullName}
                        onChangeText={(text) => handleChange("fullName", text)}
                    />
                    {errors.fullName ? <Text style={styles.error}>{errors.fullName}</Text> : null}

                    {/* Age */}
                    <Text style={styles.label}>Age</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="25"
                        keyboardType="numeric"
                        value={form.age}
                        onChangeText={(text) => handleChange("age", text)}
                    />
                    {errors.age ? <Text style={styles.error}>{errors.age}</Text> : null}

                    {/* Experience */}
                    <Text style={styles.label}>Years of Experience</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="5"
                        keyboardType="numeric"
                        value={form.experience}
                        onChangeText={(text) => handleChange("experience", text)}
                    />
                    {errors.experience ? <Text style={styles.error}>{errors.experience}</Text> : null}

                    {/* Mobile Number */}
                    <Text style={styles.label}>Mobile Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="1234567890"
                        keyboardType="phone-pad"
                        value={form.mobile}
                        onChangeText={(text) => handleChange("mobile", text)}
                    />
                    {errors.mobile ? <Text style={styles.error}>{errors.mobile}</Text> : null}

                    {/* Location */}
                    <Text style={styles.label}>Area/Location</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="City, State"
                        value={form.location}
                        onChangeText={(text) => handleChange("location", text)}
                    />
                    {errors.location ? <Text style={styles.error}>{errors.location}</Text> : null}

                    {/* Primary Skill */}
                    <Text style={styles.label}>Primary Skill</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Plumbing, Electrical, Carpentry"
                        value={form.skill}
                        onChangeText={(text) => handleChange("skill", text)}
                    />
                    {errors.skill ? <Text style={styles.error}>{errors.skill}</Text> : null}

                    {/* Description */}
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={[styles.input, styles.textarea]}
                        placeholder="Description"
                        multiline
                        numberOfLines={4}
                        value={form.description}
                        onChangeText={(text) => handleChange("description", text)}
                    />
                    {errors.description ? <Text style={styles.error}>{errors.description}</Text> : null}

                    {/* Submit Button */}
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>

                <Image
                    source={require("../../Assets/Images/pp6.jpg")}
                    style={styles.bottomImage}
                    resizeMode="cover"
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },

    container: {
        padding: 16,
        paddingBottom: 100,
    },

    title: {
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 20,
        textAlign: "center",
        color: "#000",
        lineHeight: 30
    },

    subtitle: {
        fontSize: 15,
        textAlign: "center",
        marginBottom: 16,
        color: Colors.mutedForeground,
        lineHeight: 22
    },

    formBox: {
        backgroundColor: "#e0f2fe",
        padding: 25,
        borderRadius: 10,
        elevation: 30,
        top: 30,
        marginBottom: 30
    },

    label: {
        fontSize: 14,
        marginBottom: 10,
        color: "#333",
    },

    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
    },

    textarea: {
        height: 100,
        textAlignVertical: "top",
    },

    button: {
        backgroundColor: "#2563eb",
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 12,
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },

    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 8,
    },

    bottomImage: {
        width: "100%",
        height: 350,
        marginTop: 10,
        borderRadius: 10,
        overflow: "hidden",
        top: 20
    },

});

export default ApplyAsProfessional;
