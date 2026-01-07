import { toPng } from "html-to-image";
import jsPDF from "jspdf";

const download = async (node: HTMLElement) => {
  const dataUrl = await toPng(node);
  const pdf = new jsPDF("p", "mm", "a4");

  const imgProps = pdf.getImageProperties(dataUrl);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("document.pdf");
};

export { download as downloadPDF };
