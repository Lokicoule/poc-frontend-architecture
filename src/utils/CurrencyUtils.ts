// fr-FR locale => symbol not displayed with roboto font and react-pdf/renderer
export const currency = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
