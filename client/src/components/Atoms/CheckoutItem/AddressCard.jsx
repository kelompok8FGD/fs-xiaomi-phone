import React from "react";

function AddressCard(props) {
  const { addressName, key } = props;
  return (
    <div>
      <section className="bg-white mt-2 mb-4 px-8 gap-5 lg:grid lg:grid-cols-2">
        {adress.length > 0 ? (
          adress.map((checkout) => (
            <div
              key={checkout.id}
              className={`max-w-lg py-6 lg:border lg:border-solid lg:rounded-lg lg:p-[10px] lg:mr-1 lg:hover:border-[#FF6900] lg:hover:cursor-pointer ${
                checkout === mainAddress ? "border-[#FF6900]" : ""
              }`}
              onClick={() => handleSelectMainAddress(checkout)}
            >
              <h2 className="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-lg">
                {checkout.address_name}
              </h2>
              <p className="text-lg lg:text-base">{checkout.phone_number}</p>
              <p className="text-lg lg:text-base ">
                {checkout.full_address}
                <span> {checkout.villages}</span>
                <span> {checkout.subdistrict}</span>
              </p>
              <p className="text-lg lg:text-base ">
                {checkout.city}, {checkout.province} {checkout.postal_code}
              </p>
            </div>
          ))
        ) : (
          <div className="max-w-lg py-6 lg:block lg:border lg:border-solid lg:rounded-lg lg:p-[10px] lg:ml-1 lg:hover:border-[#FF6900] lg:hover:text-[#FF6900]">
            <div className="flex justify-center text-center">
              <p className="text-lg lg:text-base">
                Anda belum menambahkan alamat, silahkan tambahkan alamat
                terlebih dahulu{">>"}.
              </p>
            </div>
          </div>
        )}

        <div
          className=" max-w-lg py-6 items-center lg:block lg:border lg:border-solid lg:rounded-lg lg:p-[10px] lg:ml-1 lg:hover:border-[#FF6900] lg:hover:text-[#FF6900] lg:hover:cursor-pointer"
          onClick={handleTambahAlamatClick}
        >
          <div className="flex justify-center text-center">
            <p className="font-inter">Tambah Alamat Baru</p>
          </div>
        </div>
        {tampilkanAddressForm && (
          <AddressForm onClose={handleCloseAddressForm} />
        )}
      </section>
    </div>
  );
}

export default AlamatPengiriman;
