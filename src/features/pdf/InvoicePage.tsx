import {
  Document,
  View,
  Font,
  Text,
  Page,
  StyleSheet,
} from "@react-pdf/renderer";
import React from "react";
import { OrderViewModel } from "../../viewModels/orders";
import { CompanySection } from "./CompanySection/CompanySection";
import { ContactSection } from "./ContactSection/ContactSection";
import { Header } from "./Header/Header";
import { ProductsSection } from "./ProductsSection/ProductsSection";
import { StateSection } from "./StateSection/StateSection";
import { TermsOfUseSection } from "./TermsOfUseSection/TermsOfUseSection";
import { TotalSection } from "./TotalSection/TotalSection";

const styles = StyleSheet.create({
  page: {
    padding: "50px 60px",
    flexGrow: 1,
  },
  line: {
    border: "0.3px solid #6c757d",
  },
  pageNumber: {
    alignSelf: "flex-end",
    padding: "10px 20px",
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

export const InvoicePage = ({ order }: InvoicePageProps) => (
  <Document title="facture" author="fdo-webapp">
    <Page size="A4">
      <View style={styles.page}>
        <Header></Header>
        <hr style={styles.line}></hr>
        <CompanySection></CompanySection>
        <StateSection></StateSection>
        <ProductsSection items={order.items}></ProductsSection>
        <TotalSection items={order.items}></TotalSection>
        <TermsOfUseSection></TermsOfUseSection>
        <ContactSection></ContactSection>
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) =>
          totalPages !== 1 && `${pageNumber} / ${totalPages}`
        }
        fixed
      />
    </Page>
  </Document>
);
