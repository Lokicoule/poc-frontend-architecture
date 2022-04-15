import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { CustomerCompany } from "./CustomerCompany/CustomerCompany";
import { InvoicerCompany } from "./InvoicerCompany/InvoicerCompany";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
  },
});

export const CompanySection = () => (
  <View style={styles.container}>
    <InvoicerCompany></InvoicerCompany>
    <CustomerCompany></CustomerCompany>
  </View>
);
