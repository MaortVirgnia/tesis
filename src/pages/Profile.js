import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";


const Profile = () => {
  return (
    <>
    <ScrollView contentContainerStyle={styles.ScrollView}>
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <View>
            <Image
              source={require("../../assets/user.jpg")}
              style={styles.image}
            />
          </View>

          <View>
            <Text style={styles.title}>Christopher Medina</Text>
            <View style={styles.userInformation}>
                <Text><Text style={styles.span}>Edad:</Text> 19</Text>
                <Text><Text style={styles.span}>Sexo:</Text> M</Text>
                <Text><Text style={styles.span}>Altura:</Text> 1.63cm</Text>
                <Text><Text style={styles.span}>Peso:</Text> 75kg</Text>
            </View>
          </View>
        </View>
        <View>
        <Text style={styles.recomendationsTittle}>Recomendaciones</Text>
          <View style={styles.recomendationsContainer}>
            <View style={styles.card}>
              <Text style={styles.cardInfo}>Recomendacion 1</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardInfo}>Recomendacion 1</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardInfo}>Recomendacion 1</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    flexGrow: 1,
  },
  container: {
    alignItems: "center",
    flex: 1,
    marginTop: 16,
  },
  userInfo: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#007787",
  },
  userInformation:{
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  span:{
    fontWeight: "bold",
    color: "#007787",
    fontSize: 16,
  },
  recomendationsTittle: {
    fontSize: 30,
    marginTop: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007787',
},
recomendationsContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
    padding: 20,
    borderRadius: 10,
},
card:{
  marginBottom: 10,
  borderRadius: 8,
  elevation: 2,
  backgroundColor: '#ccc',
  width: '150%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 100,
},
cardInfo:{
  fontSize: 24,
  fontWeight: 'bold',
  color: '#007787',
},
});

export default Profile;
