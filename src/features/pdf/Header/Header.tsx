import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#6c757d",
    borderBottomStyle: "solid",
    alignItems: "stretch",
  },
  companyColumn: {
    flexDirection: "column",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  invoiceColumn: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  companyName: {
    justifySelf: "flex-end",
    fontFamily: "Lato Bold",
    fontSize: 26,
    textTransform: "uppercase",
  },
  invoiceLabel: {
    fontFamily: "Lato Bold",
    fontSize: 22,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
  invoiceNumber: {
    color: "#6c757d",
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
