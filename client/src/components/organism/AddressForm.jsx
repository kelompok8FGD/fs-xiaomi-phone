import React, { useState, useEffect } from "react";
import axios from "axios";

const AddressForm = ({ onClose }) => {
  const apiKey =
    "2cfd80e4e2928634a890259476e7fc7181615888611972711d13f953c7d858a9";
  const token = localStorage.getItem("token");
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [subdistrict, setSubdistrict] = useState([]);
  const [villages, setVillages] = useState([]);
  const [formData, setFormData] = useState({
    address_name: "",
    province: "",
    city: "",
    subdistrict: "",
    villages: "",
    full_address: "",
    postal_code: "",
    phone_number: "",
  });

  const fetchProvinces = async () => {
    try {
      const response = await fetch(
        `https://api.binderbyte.com/wilayah/provinsi?api_key=${apiKey}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setProvinces(data.value);
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  useEffect(() => {
    // Panggil fungsi fetchProvinces saat komponen dimount
    fetchProvinces();
  }, []);

  const getCities = async (selectedProvince) => {
    try {
      // Panggil API Raja Ongkir untuk mendapatkan daftar kota/kabupaten berdasarkan provinsi
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kabupaten?api_key=${apiKey}&id_provinsi=${selectedProvince}`
      );
      setCities(response.data.value);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const getSubdistrict = async (selectedCity) => {
    try {
      // Panggil API Raja Ongkir untuk mendapatkan daftar kota/kabupaten berdasarkan provinsi
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kecamatan?api_key=${apiKey}&id_kabupaten=${selectedCity}`
      );
      setSubdistrict(response.data.value);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
  const getVillages = async (SelectedSubdistrict) => {
    try {
      // Panggil API Raja Ongkir untuk mendapatkan daftar kota/kabupaten berdasarkan provinsi
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kelurahan?api_key=${apiKey}&id_kecamatan=${SelectedSubdistrict}`
      );
      setVillages(response.data.value);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const submitForm = () => {
    const dataToSend = {
      // Sesuaikan dengan properti yang sesuai untuk nama
      address_name: formData.address_name,
      province: formData.province,
      city: formData.city,
      subdistrict: formData.subdistrict,
      villages: formData.villages,
      full_address: formData.full_address,
      postal_code: formData.postal_code,
      phone_number: formData.phone_number,
    };

    // Panggil server API pribadi untuk menyimpan data alamat
    axios
      .post("https://flixflix-api.onrender.com/api/v1/address", dataToSend, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) =>
        console.log("Address submitted successfully:", response.data)
      )
      .catch((error) => console.error("Error submitting address:", error));
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      province: selectedProvince,
      city: "",
    }));
    getCities(selectedProvince);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      city: selectedCity,
      subdistrict: "",
    }));
    getSubdistrict(selectedCity);
  };
  const handleSubdistrictChange = (e) => {
    const SelectedSubdistrict = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      subdistrict: SelectedSubdistrict,
      villages: "",
    }));
    getVillages(SelectedSubdistrict);
  };
  const handleVillagesChange = (e) => {
    const SelectedVillages = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      villages: SelectedVillages,
    }));
  };

  const handleAddressChange = (e) => {
    const full_address = e.target.value;
    setFormData((prevData) => ({ ...prevData, full_address }));
  };
  const handleAddressNameChange = (e) => {
    const address_name = e.target.value;
    setFormData((prevData) => ({ ...prevData, address_name }));
  };
  const handlePhoneNumberChange = (e) => {
    const phone_number = e.target.value;
    setFormData((prevData) => ({ ...prevData, phone_number }));
  };
  const handlePostalCodeChange = (e) => {
    const postal_code = e.target.value;
    setFormData((prevData) => ({ ...prevData, postal_code }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="py-20 container mx-auto mt-8 p-8 bg-gray-100 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Pilih Alamat Pengiriman</h2>
        <div className="mt-4">
          <label htmlFor="address_name">Nama Alamat:</label>
          <input
            id="address_name"
            name="address_name"
            value={formData.address_name}
            onChange={handleAddressNameChange}
            rows="4"
            cols="50"
            className="w-full p-2 border border-gray-300 rounded-md"
          ></input>
        </div>
        <div className="mt-4">
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="number"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handlePhoneNumberChange}
            rows="4"
            cols="50"
            className="w-full p-2 border border-gray-300 rounded-md"
          ></input>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="province">Provinsi:</label>
            <select
              id="province"
              name="province"
              value={formData.province}
              onChange={handleProvinceChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Pilih Provinsi</option>
              {provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="city">Kota/Kabupaten:</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleCityChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Pilih Kota/Kabupaten</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="subdistrict">Kecamatan:</label>
            <select
              id="subdistrict"
              name="subdistrict"
              value={formData.subdistrict}
              onChange={handleSubdistrictChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Pilih Kecamatan</option>
              {subdistrict.map((subdistrict) => (
                <option key={subdistrict.id} value={subdistrict.id}>
                  {subdistrict.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="villages">Kelurahan / Desa:</label>
            <select
              id="villages"
              name="villages"
              value={formData.villages}
              onChange={handleVillagesChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Pilih Kelurahan / Desa</option>
              {villages.map((village) => (
                <option key={village.id} value={village.id}>
                  {village.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="postal_code">Postal Code:</label>
          <input
            type="number"
            id="postal_code"
            name="postal_code"
            value={formData.postal_code}
            onChange={handlePostalCodeChange}
            rows="4"
            cols="50"
            className="w-full p-2 border border-gray-300 rounded-md"
          ></input>
        </div>
        <div className="mt-4">
          <label htmlFor="full_address">Alamat lengkap:</label>
          <textarea
            id="full_address"
            name="full_address"
            value={formData.address}
            onChange={handleAddressChange}
            rows="4"
            cols="50"
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <button
          type="button"
          onClick={submitForm}
          className="mt-4 bg-blue-500 text-white p-2 rounded-md cursor-pointer"
        >
          Kirim
        </button>
        <button
          onClick={onClose}
          className=" mx-8 mt-4 bg-blue-500 text-white p-2 rounded-md cursor-pointer"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
