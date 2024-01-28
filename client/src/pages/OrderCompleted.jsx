import React, { useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import OrderInvoice from "./OrderInvoice"; // component to convert to PDF
import CustomButton from "../components/Atoms/Buttons/CustomButton";
import CountdownTimer from "../components/Atoms/CheckoutItem/CountdownTimer";
import axios from "axios";
const PdfDownloadComponent = () => {
  const countdownStartTime = localStorage.getItem("countdownStartTime");
  const countdownEndTime = localStorage.getItem("countdownEndTime");
  const token = localStorage.getItem("token");

  const handleDownloadPDF = async () => {
    try {
      // Make an API request to clear the cart data
      await axios.delete(`${import.meta.env.VITE_APP_BASEURL}/clearCart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Wait for a short time to ensure the rendering is complete
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Get the element to convert to PDF
      const input = document.getElementById("pdf-content");

      // Convert the element to canvas
      const canvas = await html2canvas(input, { useCORS: true });

      // Convert the canvas to image data URL
      const imgData = canvas.toDataURL("image/png");

      // Create a PDF and add the image
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);

      // Save the PDF
      pdf.save("xiomi-phone-myorder.pdf");
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background flex flex-col w-full items-center py-10">
      <CustomButton
        intent="accent_bg"
        onClick={handleDownloadPDF}
        text="Download Invoice"
      />
      <CountdownTimer
        startTime={countdownStartTime}
        endTime={countdownEndTime}
      />
      <p>BCA Xiaomi Indonesia : 0541235888</p>
      <OrderInvoice id="pdf-content" />
      {/* Ensure to pass the same id to the target component */}
    </div>
  );
};
export default PdfDownloadComponent;
