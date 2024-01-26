import React, {useEffect} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import OrderInvoice from './OrderInvoice'; // component to convert to PDF
import CustomButton from '../components/Atoms/Buttons/CustomButton';
const PdfDownloadComponent = () => {
  const handleDownloadPDF = () => {
    const input = document.getElementById('pdf-content'); 
    // Specify the id of the element you want to convert to PDF
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('xiomi-phone-myorder.pdf'); 
      // Specify the name of the downloaded PDF file
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='bg-background flex flex-col w-full items-center py-10'>
        <CustomButton intent="accent_bg" onClick={handleDownloadPDF} text="Download Invoice"/>
      <OrderInvoice id="pdf-content" /> 
      {/* Ensure to pass the same id to the target component */}
    </div>
  );
};
export default PdfDownloadComponent;