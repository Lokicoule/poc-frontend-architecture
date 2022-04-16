import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#e2ece9",
    backgroundColor: "#e2ece9",
    borderBottomWidth: 1,
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Lato Bold",
    fontSize: 14,
    height: 25,
    color: "#43aa8b",
    flexGrow: 1,
  },
  code: {
    width: "17.5%",
  },
  label: {
    width: "30%",
  },
});

export const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.code}>Code article</Text>
    <Text style={styles.label}>Désignation</Text>
    <Text style={styles.code}>Quantité</Text>
    <Text style={styles.code}>Prix unitaire</Text>
    <Text style={styles.code}>Montant HT</Text>
  </View>
);
