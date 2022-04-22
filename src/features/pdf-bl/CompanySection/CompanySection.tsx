import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { CustomerCompany } from "./CustomerCompany/CustomerCompany";
import { InvoicerCompany } from "./InvoicerCompany/InvoicerCompany";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const CompanySection = () => (
  <View style={styles.container}>
    <InvoicerCompany></InvoicerCompany>
    <CustomerCompany></CustomerCompany>
  </View>
);
