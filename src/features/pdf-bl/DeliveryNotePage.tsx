import { Document, Font, Page, StyleSheet, View } from "@react-pdf/renderer";
import React from "react";
import { OrderViewModel } from "../../modules/orders/domain/orders.model";
import { CompanySection } from "./CompanySection/CompanySection";
import { Delivery } from "./Delivery/Delivery";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { ProductsSection } from "./ProductsSection/ProductsSection";

const styles = StyleSheet.create({
  page: {
    padding: "50px 60px",
  },
});

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato Italic",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

type DeliveryNotePageProps = {
  order: OrderViewModel;
};

export const DeliveryNotePage = ({ order }: DeliveryNotePageProps) => (
  <Document title="bon-de-livraison" author="fdo-webapp">
    <Page size="A4" style={styles.page}>
      <View style={{ marginBottom: 30 }} fixed>
        <Header></Header>
      </View>
      <View style={{ flexGrow: 1 }}>
        <CompanySection></CompanySection>
        <Delivery></Delivery>
        <ProductsSection items={order.items}></ProductsSection>
      </View>
      <Footer></Footer>
    </Page>
  </Document>
);
