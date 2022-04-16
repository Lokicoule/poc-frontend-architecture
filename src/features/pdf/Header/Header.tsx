import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    /* borderBottomWidth: 0.5,
    borderBottomColor: "#6c757d",
    borderBottomStyle: "solid", */
    //alignItems: "stretch",
  },
  companyColumn: {
    flexDirection: "column",
    textTransform: "uppercase",
    color: "#343a40",
  },
  invoiceColumn: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
    color: "#343a40",
    textTransform: "uppercase",
  },
  companyName: {
    justifySelf: "flex-end",
    fontFamily: "Lato Bold",
    fontSize: 20,
    marginBottom: 20,
    textTransform: "uppercase",
  },
  invoiceLabel: {
    fontFamily: "Lato Bold",
    fontSize: 18,
    alignSelf: "flex-end",
    marginBottom: 20,
    justifySelf: "flex-end",
  },
  invoiceNumber: {
    color: "#43aa8b",
  },
});

export const Header = () => (
  <View style={styles.container}>
    <View style={styles.companyColumn}>
      <Text style={styles.companyName}>Fruits d'orient</Text>
    </View>
    <View style={styles.invoiceColumn}>
      <Text style={styles.invoiceLabel}>
        Facture N°<Text style={styles.invoiceNumber}>000001F</Text>
      </Text>
    </View>
  </View>
);
