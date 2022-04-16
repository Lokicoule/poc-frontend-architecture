import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  detailColumn: {
    flexDirection: "row",
    textTransform: "uppercase",
    width: "100%",
    backgroundColor: "#e2ece9",
    padding: "3px 5px",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  identificationColumn: {
    flexDirection: "column",
    fontFamily: "Lato",
    fontSize: 14,
  },
  title: {
    fontFamily: "Lato Bold",
    fontSize: 12,
    color: "#43aa8b",
    marginBottom: 4,
  },
  value: {
    fontSize: 12,
    fontFamily: "Lato",
  },
});

export const StateSection = () => (
  <View style={styles.detailColumn}>
    <View>
      <Text style={styles.title}>Date de facture</Text>
      <Text style={styles.value}>15-04-2022</Text>
    </View>
    <View>
      <Text style={styles.title}>Date de livraison </Text>
      <Text style={styles.value}>16-04-2022</Text>
    </View>
    <View>
      <Text style={styles.title}>Paiement</Text>
      <Text style={styles.value}>Virement</Text>
    </View>
    <View>
      <Text style={styles.title}>Echéance de paiement</Text>
      <Text style={styles.value}>15-05-2022</Text>
    </View>
  </View>
);
