import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFFile } from "../../features/pdf/PDFFile";
import { PDFViewer } from "@react-pdf/renderer";

export const BackofficePage = () => {
  return (
    <>
      <h1>Backoffice Page</h1>
      {/* <PDFDownloadLink document={<PDFFile />} fileName="test">
        download
      </PDFDownloadLink> */}
      <PDFViewer
        style={{
          width: "75%",
          height: "100%",
          minHeight: "75vh",
        }}
      >
        <PDFFile></PDFFile>
      </PDFViewer>
    </>
  );
};
