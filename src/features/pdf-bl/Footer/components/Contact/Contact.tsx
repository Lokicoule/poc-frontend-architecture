import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  footer: {
    fontSize: 12,
    fontFamily: "Lato Bold",
    marginTop: 15,
    paddingTop: 5,
    "@media orientation: landscape": {
      marginTop: 10,
    },
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  link: {
    fontFamily: "Lato",
    fontSize: 14,
    color: "black",
    textDecoration: "none",
  },
});

export const Contact = () => (
  <View style={styles.footer}>
    <Link src="mailto:fruitsdorient@gmail.com" style={styles.link}>
      fruitsdorient@gmail.com
    </Link>
    <Link src="tel:0033670747850" style={styles.link}>
      +33 6 70 74 78 50
    </Link>
  </View>
);
