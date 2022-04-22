import { StyleSheet, Image, Text, View } from "@react-pdf/renderer";
import React from "react";
import { currency } from "../../../utils/CurrencyUtils";
import { OrderViewModel } from "../../../viewModels/orders";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    flexGrow: 1,
  },
  tableContainer: {
    flexDirection: "column",
  },
  rowContainer: {
    flexDirection: "row",
    textAlign: "center",
    fontFamily: "Lato",
    alignSelf: "flex-end",
    fontSize: 12,
    borderWidth: 0.9,
    borderColor: "#e2ece9",
    alignItems: "center",
    height: 40,
    textTransform: "uppercase",
  },
  leftColumn: {
    width: "44%",
    borderWidth: 2,
    borderColor: "#C8E3D4",
    borderStyle: "dotted",
    borderRadius: 2,
    textAlign: "center",
    fontFamily: "Lato Bold",
    fontSize: 12,
    alignItems: "center",
    height: 120,
    color: "#C8E3D4",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Lato Bold",
    fontSize: 14,
    width: "40%",
  },
  label: {
    width: "40%",
    /* borderColor: "#e2ece9",
    borderWidth: 0.7, */
    /* borderWidth: 0.7,
    borderColor: "#e2ece9", */
  },
  line: {
    borderLeft: 0.9,
    borderColor: "#e2ece9",
    height: "100%",
    /* borderColor: "#e2ece9",
    borderWidth: 0.7, */
    /* borderWidth: 0.7,
    borderColor: "#e2ece9", */
  },
});

type ProductsSectionProps = Pick<OrderViewModel, "items">;

export const TotalSection = ({ items }: ProductsSectionProps) => {
  const total = items
    .map((item) => item.amount * item.unitPrice)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const tva = (total * 5.5) / 100;
  const net = total + tva;
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Text>Cachet de l'entreprise</Text>
        <Image
          src={
            "https://res.cloudinary.com/dy3urijtl/image/upload/v1650118383/fdo/Tampon-FDO_pviuzj.png"
          }
        ></Image>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Total HT</Text>
          <hr style={styles.line}></hr>
          <Text style={styles.label}>{currency.format(total)}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>TVA 5.5 %</Text>
          <hr style={styles.line}></hr>
          <Text style={styles.label}>{currency.format(tva)}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>Net à payer</Text>
          <hr style={styles.line}></hr>
          <Text style={styles.title}>{currency.format(net)}</Text>
        </View>
      </View>
    </View>
  );
};
