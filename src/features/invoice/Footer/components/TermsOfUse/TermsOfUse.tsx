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
      {`(1) Condition de règlement : 30 jours après la date de livraison.
      (2) Escompte pour paiement anticipé : 0%
      (3) 3.5% du montant TTC de la facture pour pénalités de retard, exigibles en cas de non-paiement à la date de règlement. 
      (4) Indemnité forfaitaire de 40€ pour frais de recouvrement, en cas de retard de paiement.`}
    </Text>
  </View>
);
