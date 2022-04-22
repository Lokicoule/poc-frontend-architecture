import { StyleSheet, Image, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "column",
    width: "50%",
    textAlign: "left",
  },
  rowContainer: {
    flexDirection: "row",
    fontFamily: "Lato",
    fontSize: 12,
    textTransform: "uppercase",
  },
  head: {
    fontFamily: "Lato Bold",
    fontSize: 14,
    marginBottom: 8,
    color: "#43aa8b",
    textTransform: "uppercase",
  },
  title: {
    width: "70%",
  },
  label: {
    width: "30%",
  },
});

export const CustomerCompany = () => {
  return (
    <View style={styles.tableContainer}>
      <Text style={styles.head}>Réf. client</Text>

      <View style={styles.rowContainer}>
        <Text style={styles.title}>Code client</Text>
        <Text style={styles.label}>0001CL</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.title}>Numéro commande</Text>
        <Text style={styles.label}>AF-3012</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.title}>Date commande</Text>
        <Text style={styles.label}>17-04-2022</Text>
      </View>
    </View>
  );
};
