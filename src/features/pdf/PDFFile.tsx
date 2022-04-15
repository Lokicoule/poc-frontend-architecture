import { Document, Font, Page, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { CompanySection } from "./CompanySection/CompanySection";
import { ContactSection } from "./ContactSection/ContactSection";
import { Header } from "./Header/Header";

const styles = StyleSheet.create({
  page: {
    padding: "20px 35px",
  },
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

export const PDFFile = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header></Header>
      <CompanySection></CompanySection>
      <ContactSection></ContactSection>
    </Page>
  </Document>
);
