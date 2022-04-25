import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { OrderProductViewModel } from "../../../viewModels/orders/OrderProductViewModel";
import { OrderViewModel } from "../../../viewModels/orders";
import { currency } from "../../../core/utils/CurrencyUtils";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#e2ece9",
    borderBottomWidth: 0.7,
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Lato",
    fontSize: 10,
    height: 30,
    flexGrow: 1,
  },
  code: {
    width: "14%",
  },
  label: {
    width: "30%",
  },
});

type InvoiceTableRowProps = Pick<OrderViewModel, "items">;

export const InvoiceTableRow = ({ items }: InvoiceTableRowProps) => {
  const generateKey = (id: string) => `invoice_table_row_${id}`;
  const rows = items.map((item) => (
    <View style={styles.row} key={generateKey(item.id)}>
      <Text style={styles.code}>{item.product.code}</Text>
      <Text style={styles.label}>{item.product.label}</Text>
      <Text style={styles.code}>{item.amount}</Text>
      <Text style={styles.code}>MFTU 4110430</Text>
      <Text style={styles.code}>010/2022</Text>
      <Text style={styles.code}>30/06/2023</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};
