import React, { useState } from "react";
import TabButton from "../../Atoms/TabButton";

const index = () => {
  return (
    <>
      <section>
        <div className="w-full justify-center px-4 p-6 lg:w-full flex text-center">
          <TabButton redirect="/About" text="Tentang Kita" />
          <TabButton redirect="/Leadership" text="Leadership Team" />
          <TabButton redirect="/Agreement" text="Persetujuan pengguna" />
          <TabButton redirect="/Privacy" text="Kebijakan privasi" />
        </div>
      </section>
    </>
  );
};

export default index;
