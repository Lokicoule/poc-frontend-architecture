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

type ContactProps = {
  email: string;
  phone: string;
};

export const Contact = ({ email, phone }: ContactProps) => {
  const mailTo = `mailto:${email}`;
  const callAt = `tel:${phone}`;
  return (
    <View style={styles.footer}>
      <Link src={mailTo} style={styles.link}>
        {email}
      </Link>
      <Link src={callAt} style={styles.link}>
        {phone}
      </Link>
    </View>
  );
};
