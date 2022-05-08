import { Document, Font, Page, StyleSheet, View } from "@react-pdf/renderer";
import React from "react";
import { OrderViewModel } from "../../modules/orders/domain/orders.model";
import { CompanySection } from "./CompanySection/CompanySection";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { ProductsSection } from "./ProductsSection/ProductsSection";
import { StateSection } from "./StateSection/StateSection";
import { TotalSection } from "./TotalSection/TotalSection";

const styles = StyleSheet.create({
  page: {
    padding: "50px 60px",
    flexGrow: 1,
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

type InvoicePageProps = {
  order: OrderViewModel;
};

export const Invoice = ({ order }: InvoicePageProps) => (
  <Document title="facture" author="fdo-webapp">
    <Page size="A4" style={styles.page}>
      <View style={{ marginBottom: 30 }} fixed>
        <Header></Header>
      </View>
      <CompanySection></CompanySection>
      <StateSection></StateSection>
      <ProductsSection items={order.items}></ProductsSection>
      <TotalSection items={order.items}></TotalSection>
      <Footer></Footer>
    </Page>
  </Document>
);
