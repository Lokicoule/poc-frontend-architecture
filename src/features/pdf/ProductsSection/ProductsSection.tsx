import { StyleSheet, View } from "@react-pdf/renderer";
import React from "react";
import { OrderViewModel } from "../../../viewModels/orders";
import { InvoiceTableHeader } from "./InvoiceTableHeader";
import { InvoiceTableRow } from "./InvoiceTableRow";

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 0.1,
    borderColor: "#6c757d",
  },
});

type ProductsSectionProps = Pick<OrderViewModel, "items">;

export const ProductsSection = ({ items }: ProductsSectionProps) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader />
    <InvoiceTableRow items={items} />
  </View>
);
