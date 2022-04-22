import { StyleSheet, View } from "@react-pdf/renderer";
import { CustomerCompany } from "./CustomerCompany/CustomerCompany";
import { ShipTo } from "./ShipTo/ShipTo";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const Delivery = () => (
  <View style={styles.container}>
    <CustomerCompany></CustomerCompany>
    <ShipTo></ShipTo>
  </View>
);
