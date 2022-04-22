import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  detailColumn: {
    flexDirection: "column",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  identificationColumn: {
    flexDirection: "column",
    fontFamily: "Lato",
    fontSize: 14,
  },
  title: {
    fontFamily: "Lato Bold",
    fontSize: 14,
    marginBottom: 4,
    color: "#43aa8b",
  },
  name: {
    fontFamily: "Lato Bold",
    fontSize: 12,
    marginBottom: 4,
    color: "#343a40",
  },
  detail: {
    fontSize: 12,
    fontFamily: "Lato",
  },

  identification: {
    fontSize: 12,
    fontFamily: "Lato",
  },
});

export const ShipTo = () => (
  <View style={styles.detailColumn}>
    <Text style={styles.title}>Expédié à</Text>
    <Text style={styles.name}>Mondial trading</Text>
    <Text style={styles.detail}>12 rue du test</Text>
    <Text style={styles.detail}>13001 MARSEILLE</Text>
    <Text style={styles.detail}>France</Text>
  </View>
);
