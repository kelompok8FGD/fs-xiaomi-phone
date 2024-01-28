import React from "react";
import CustomButton from "../Buttons/CustomButton";

const ConfirmPayment = ({ onConfirm, onCancel }) => {
  return (
    <div className="popup-container fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50">
      <div className="py-20 container mx-auto mt-8 p-4 bg-gray-100 rounded-md text-center">
        <h2 className="font-bold text-xl">Konfirmasi Pembayaran</h2>
        <p>Apakah Anda yakin ingin melanjutkan pembayaran?</p>
        <div className="button-container flex gap-3 my-3 justify-center">
          <CustomButton
            intent="light"
            rounded="yes"
            size="small"
            hover="bg"
            border="always"
            text="Yes"
            className="hover:text-slate-100"
            onClick={onConfirm}
          />
          <CustomButton
            intent="light"
            rounded="yes"
            size="small"
            hover="bg"
            border="always"
            className="hover:text-slate-100"
            text="No"
            onClick={onCancel}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayment;
