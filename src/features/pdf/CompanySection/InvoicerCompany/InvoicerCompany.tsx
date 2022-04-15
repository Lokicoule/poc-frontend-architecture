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
  name: {
    fontFamily: "Lato Bold",
    fontSize: 20,
    marginBottom: 4,
    color: "#343a40",
  },
  detail: {
    fontSize: 14,
    fontFamily: "Lato",
  },

  identification: {
    fontSize: 14,
    fontFamily: "Lato",
  },
});

export const InvoicerCompany = () => (
  <View>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>Fruits d'orient</Text>
      <Text style={styles.detail}>10 Rue de la république</Text>
      <Text style={styles.detail}>13001 MARSEILLE</Text>
      <Text style={styles.detail}>France</Text>
    </View>

    <View style={styles.identificationColumn}>
      <Text style={styles.identification}>RCS MARSEILLE 805 216 439</Text>
      <Text style={styles.identification}>TVA FR32805216439</Text>
    </View>
  </View>
);
