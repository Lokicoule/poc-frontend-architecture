import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { OrderProductViewModel } from "../../../viewModels/orders/OrderProductViewModel";
import { OrderViewModel } from "../../../viewModels/orders";
import { currency } from "../../../utils/CurrencyUtils";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#e2ece9",
    borderBottomWidth: 0.7,
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Lato",
    fontSize: 10,
    height: 25,
    flexGrow: 1,
  },
  code: {
    width: "17.5%",
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
      <Text style={styles.code}>{currency.format(item.unitPrice)}</Text>
      <Text style={styles.code}>
        {currency.format(item.amount * item.unitPrice)}
      </Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};
