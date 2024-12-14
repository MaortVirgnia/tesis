import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const Profile = () => {
  return (
    <>
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
        <Text style={styles.chartTitle}>Gráfico de Ejemplo</Text>
        <LineChart
                    data={{
                        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
                        datasets: [
                            {
                                data: [20, 45, 28, 80, 99, 43]
                            }
                        ]
                    }}
                    width={Dimensions.get('window').width - 16} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#fff",
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 119, 182, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 119, 182, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#023e8a"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  userInformation:{
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    fontSize: 20,
    marginBottom: 10,
  },
  span:{
    fontWeight: "bold",
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
},
});

export default Profile;
