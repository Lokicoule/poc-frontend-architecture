import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    fontFamily: "Lato",
    fontSize: 8,
  },
});

export const TermsOfUse = () => (
  <View style={styles.container}>
    <Text>
      {`(1) Toute commande est ferme et définitive et suppose un accord à nos conditions générales de vente.
(2) Notre société n'est pas responsable de la marchandise, une fois celle-ci partie de nos locaux.
(3) L'acceptation de la commande résulte de la signature du bon de livraison au moment de la livraison.`}
    </Text>
  </View>
);
