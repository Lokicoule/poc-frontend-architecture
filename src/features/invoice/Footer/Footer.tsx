import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { Contact } from "./components/Contact/Contact";
import { TermsOfUse } from "./components/TermsOfUse/TermsOfUse";

const styles = StyleSheet.create({
  pageNumber: {
    alignSelf: "flex-end",
    padding: "0px 0px",
    marginTop: 44,
  },
});

export const Footer = () => (
  <>
    <TermsOfUse></TermsOfUse>
    <Contact email="fruitsdorient@gmail.com" phone="0033670747850"></Contact>
    <Text
      style={styles.pageNumber}
      render={({ pageNumber, totalPages }) =>
        totalPages !== 1 && `${pageNumber} / ${totalPages}`
      }
      fixed
    />
  </>
);
