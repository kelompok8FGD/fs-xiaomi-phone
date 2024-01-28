import CheckoutNavbar from "../components/organism/Navbar/CheckoutNavbar";
import React, { useEffect, useState } from "react";
import AddressForm from "../components/organism/Address/AddressForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductItem from "../components/Atoms/CheckoutItem/ProductItem";
import TotalPrice from "../components/Atoms/CheckoutItem/TotalPrice";
import ConfirmPayment from "../components/Atoms/CheckoutItem/ConfirmPayment";
import CountdownTimer from "../components/Atoms/CheckoutItem/CountdownTimer";

function Checkout() {
  const navigate = useNavigate();
  const [tampilkanAddressForm, setTampilkanAddressForm] = useState(false);
  const [isAddressSelected, setIsAddressSelected] = useState(false);
  const [isAgreementSelected, setIsAgreementSelected] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [tampilkanCountdown, setTampilkanCountdown] = useState(false);
  const countdownStartTime = localStorage.getItem("countdownStartTime");
  const countdownEndTime = localStorage.getItem("countdownEndTime");

  const handleSelectMainAddress = (address) => {
    // Your existing logic to set the main address
    setMainAddress(address);
    setIsAddressSelected(true);
  };

  const handleTambahAlamatClick = () => {
    setTampilkanAddressForm(true);
  };

  const handleCloseAddressForm = () => {
    setTampilkanAddressForm(false);
  };

  // metode pengiriman
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioClick = () => {
    if (!isChecked) {
      setIsChecked(true);
    }
  };

  const handleCheckboxChange = (e) => {
    setIsAgreementSelected(e.target.checked);
  };

  const [bankSelection, setBankSelection] = useState(false);
  const [paymentSelection, setPaymentSelection] = useState(false);

  const handleRadioPaymentChange = (group) => {
    if (group === "bank") {
      setBankSelection(true);
      setPaymentSelection(false);
    } else if (group === "payment") {
      setBankSelection(false);
      setPaymentSelection(true);
    }
  };

  const [dataAddress, setDataAddress] = useState([]);
  const [mainAddress, setMainAddress] = useState(null);
  const [currentAddress, setCurrentAddress] = useState(0);
  const [addressPerPage, setAddressPerPage] = useState(1);

  const [dataCartItem, setDataCartItem] = useState([]);
  const [dataTimer, setDataTimer] = useState([]);

  const token = localStorage.getItem("token");

  const isPaymentSelected = bankSelection || paymentSelection;

  const getTimer = async () => {
    try {
      const response = await axios(
        `${import.meta.env.VITE_APP_BASEURL}/timers`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDataTimer(response.data);

      // Pilih alamat utama (contoh: alamat pertama dalam daftar)
      if (response.data && response.data.startTime) {
        const elapsed = new Date() - new Date(response.data.startTime);
        if (elapsed < 24 * 60 * 60 * 1000) {
          setTampilkanCountdown(true);
        }
      }
      console.log(dataTimer);
      // Check if dataTimer.data exists before iterating
      if (response.data.data) {
        // Convert and store startTime in the local storage
        response.data.data.forEach((item) => {
          const startTime = new Date(item.startTime);
          const endTime = new Date(item.endTime);
          const formattedStartTime = startTime.toString(); // Change this line for a specific format
          const formattedEndTime = endTime.toString(); // Change this line for a specific format

          // Store formattedStartTime in local storage, using the item's id as a key
          localStorage.setItem(`countdownStartTime`, formattedStartTime);
          localStorage.setItem(`countdownEndTime`, formattedEndTime);
        });
      }
    } catch (error) {
      console.error("Error fetching timer data:", error);
    }
  };

  const getApiAddress = async () => {
    const response = await axios(
      `${import.meta.env.VITE_APP_BASEURL}/address`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setDataAddress(response.data);
    // Pilih alamat utama (contoh: alamat pertama dalam daftar)
    if (response.data.data.length > 0) {
      setMainAddress(response.data[0]);
      setIsAddressSelected(true); // Auto select the first address
    }
  };
  const getCartItems = async () => {
    const response = await axios(
      `${import.meta.env.VITE_APP_BASEURL}/getCartItems`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setDataCartItem(response.data);
    // Pilih alamat utama (contoh: alamat pertama dalam daftar)
    if (response.data.length > 0) {
      setMainAddress(response.data[0]);
    }
  };

  useEffect(() => {
    getApiAddress();
    getCartItems();
    getTimer();

    const storedStartTime = localStorage.getItem("countdownStartTime");

    if (storedStartTime) {
      const elapsed = new Date() - new Date(storedStartTime);
      if (elapsed < 24 * 60 * 60 * 1000) {
        setTampilkanCountdown(true);
      }
    }
  }, []);

  const allAddress = dataAddress.data || [];
  const allCartItem = dataCartItem.data || [];

  // Initialize a counter variable
  let totalProductItems = 0;

  // Loop through each cart item and check if it has ProductModel
  allCartItem.forEach((item) => {
    if (item.ProductModel) {
      // Increment the counter if ProductModel exists
      totalProductItems++;
    }
  });

  // Initialize a variable to store the total cost
  let totalCost = 0;

  // Loop through each cart item, calculate the cost (price * qty) for each item, and add it to the total
  allCartItem.forEach((item) => {
    const itemCost = item.price * item.qty;
    totalCost += itemCost;
  });

  const adress = allAddress.slice(
    currentAddress,
    currentAddress + addressPerPage
  );
  // Menampilkan data ProductModel dengan console.log

  const handleBayarSekarangClick = async () => {
    setShowConfirmation(true);
  };

  const handleConfirmPayment = async () => {
    const startTime = new Date().toString();
    const endTime = new Date(
      new Date().getTime() + 24 * 60 * 60 * 1000
    ).toString(); // Menambahkan 24 jam ke waktu saat ini

    localStorage.setItem("countdownStartTime", startTime);
    localStorage.setItem("countdownEndTime", endTime);

    const response = await axios.post(
      `${import.meta.env.VITE_APP_BASEURL}/timers`,
      {
        startTime: startTime,
        endTime: endTime,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // Your logic when the user confirms the payment
    try {
      // Your logic to prepare data for API
      const dataPembayaran = {
        payment_type: bankSelection ? "Bank" : paymentSelection ? "Online" : "",
        // Add other fields as needed for payment
      };

      const dataPengiriman = {
        shipment_type: isChecked ? "Standar" : "Motor",
        // Add other fields as needed for shipment
      };

      // Send data to API for shipment
      const responsePengiriman = await axios.post(
        `${import.meta.env.VITE_APP_BASEURL}/shipmentMethods`,
        dataPengiriman,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Send data to API for payment
      const responsePembayaran = await axios.post(
        `${import.meta.env.VITE_APP_BASEURL}/paymentMethods`,
        dataPembayaran,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Display confirmation message or redirect user
      const isConfirmed = window.confirm("Payment confirmed!");

      if (isConfirmed) {
        // Redirect user or perform other actions
        navigate("/ordercompleted");
      } else {
        console.log("Payment canceled.");
      }

      // Log API responses
      console.log("Payment Response:", responsePembayaran.data);
      console.log("Shipment Response:", responsePengiriman.data);
      console.log("Payment and Timer Response:", response.data);

      // Hide confirmation popup
      setShowConfirmation(false);
      setTampilkanCountdown(true);
    } catch (error) {
      // Handle errors
      console.error("Error during payment or shipment:", error);
      console.error("Error during payment or creating timer:", error);
    }
  };

  const handleCancelPayment = () => {
    // Your logic when the user cancels the payment
    console.log("Payment canceled.");
    setShowConfirmation(false);
    setTampilkanKonfirmasi(false);
  };

  return (
    <div>
      <CheckoutNavbar activeStep={2} />

      {/* Checkout Start */}
      <main className="grid grid-cols-1 lg:min-w-[1025px] lg:max-w-[1440px] lg:grid-cols-7 lg:m-auto lg:relative lg:mb-5">
        <article className="grid grid-flow-col grid-cols-1 max-w-full min-w-xl lg:col-span-4 lg:ml-4 lg:mr-1 lg:bg-white lg:mt-2">
          <div className="">
            <section className="bg-white mt-2 mb-4 px-8">
              <div className="pt-6 hidden lg:block">
                <div className="pb-6">
                  <h2 className="font-Inter font-semibold text-3xl">
                    Alamat Pengiriman
                  </h2>
                </div>
                <div className="bg-slate-100 h-[1px] max-w-2xl lg:mb-7"></div>
              </div>
            </section>
            <>
              <section className="bg-white mt-2 mb-4 px-8 gap-5 lg:grid lg:grid-cols-2">
                {adress.length > 0 ? (
                  adress.map((address) => (
                    <div
                      key={address.id}
                      className={`max-w-lg py-6 lg:border lg:border-solid lg:rounded-lg lg:p-[10px] lg:mr-1 lg:hover:border-[#FF6900] lg:hover:cursor-pointer ${
                        address === mainAddress ? "border-[#FF6900]" : ""
                      }`}
                      onClick={() => handleSelectMainAddress(address)}
                    >
                      <h2 className="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-lg">
                        {address.address_name}
                      </h2>
                      <p className="text-lg lg:text-base">
                        {address.phone_number}
                      </p>
                      <p className="text-lg lg:text-base ">
                        {address.full_address}
                        <span> {address.villages}</span>
                        <span> {address.subdistrict}</span>
                      </p>
                      <p className="text-lg lg:text-base ">
                        {address.city}, {address.province} {address.postal_code}
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
            </>

            <section className="p-8 mb-4 bg-white">
              <div className="mb-6">
                <div className="pb-6">
                  <h2 className="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                    Faktur
                  </h2>
                </div>
                <div className="bg-slate-100 h-[1px] max-w-2xl"></div>
              </div>
              <div>
                <p>Formulir online faktur pajak dalam perbaikan.</p>
                <p>Permintaan faktur pajak hubungi call center</p>
                <br />
                <br />
                <p>(Maksimal di tanggal akhir bulan transaksi)</p>
                <p>Hotline : 00180300650029 (! Toll-Free / Bebas Biaya)</p>
                <p>Jam Operasional: Senin-Minggu Jam 09:00-18:00 WIB</p>
                <p>Email: service.id@support.mi.com</p>
              </div>
            </section>

            <section
              className="p-4 mb-2 bg-white"
              value={setIsChecked}
              onChange={handleRadioClick}
            >
              <div className="mb-6">
                <div className="pb-6">
                  <h2 className="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                    Metode Pengiriman
                  </h2>
                </div>
                <div className="bg-slate-100 h-[1px] max-w-2xl"></div>
              </div>

              <div className="grid grid-cols-9 border bg-gray-200 border-solid rounded-lg mb-2 lg:hover:cursor-pointer">
                <div className="text-center my-auto">
                  <input
                    type="radio"
                    className="form-checkbox text-gray-400 h-5 w-5"
                    name="pengiriman"
                    disabled
                  />
                </div>
                <div className="p-4 col-span-8">
                  <p>Pengiriman Sepeda motor</p>
                  <p className="text-gray-400">
                    Layanan pengiriman ini tidak didukung
                  </p>
                </div>
              </div>

              <div
                className="grid grid-cols-9 border border-solid rounded-lg mt-2 mb-3 lg:hover:border-[#FF6900] lg:hover:cursor-pointer"
                onClick={handleRadioClick}
              >
                <div className="text-center my-auto">
                  <input
                    type="radio"
                    className="form-checkbox text-[#FF6900] h-5 w-5"
                    name="pengiriman"
                    checked={isChecked}
                    onChange={() => {}}
                  />
                </div>
                <div className="p-4 col-span-8" value="shipp">
                  <p>Pengiriman standar</p>
                  <p>3-5 hari setelah pembayaran</p>
                  <p className="text-[#FF6900]">
                    Pengiriman gratis dari Rp 500.000
                  </p>
                </div>
              </div>
              <p>
                Dipengaruhi oleh cuaca dan festival, pengiriman akan tertunda
              </p>
            </section>

            <section className="p-4 mb-2 bg-white">
              <section className="mt-6 mb-4 bg-white">
                <div className="">
                  <div className="">
                    <h2 className="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl pb-6">
                      Metode Pembayaran
                    </h2>
                  </div>
                  <div className=" bg-slate-100 h-[1px] max-w-2xl"></div>
                </div>
              </section>
              {/* Shipping with Card section (conditionally rendered) */}
              {isChecked === true && (
                <>
                  <div
                    className="grid grid-cols-9 border border-solid rounded-lg mb-2 lg:hover:border-[#FF6900] lg:hover:cursor-pointer"
                    onClick={() => handleRadioPaymentChange("bank")}
                  >
                    <div className="text-center my-auto">
                      <input
                        type="radio"
                        className="form-checkbox text-[#FF6900] h-5 w-5"
                        name="bankSelection"
                        checked={bankSelection}
                        onChange={() => {}}
                      />
                    </div>
                    <div className="p-3 col-span-8 flex">
                      <img
                        src="https://i02.appmifile.com/411_operatorx_operatorx_xm/22/03/2023/aa4f7b9b044b02579d60e54fb40e66bc.png"
                        alt="Bank BCA"
                        width="30px"
                      />
                      <p className="ml-5">Bank BCA</p>
                    </div>
                  </div>

                  <div
                    className="grid grid-cols-9 border border-solid rounded-lg mb-2 lg:hover:border-[#FF6900] lg:hover:cursor-pointer"
                    onClick={() => handleRadioPaymentChange("payment")}
                  >
                    <div className="text-center my-auto">
                      <input
                        type="radio"
                        className="form-checkbox text-[#FF6900] h-5 w-5"
                        name="paymentSelection"
                        checked={paymentSelection}
                        onChange={() => {}}
                      />
                    </div>

                    <div className="p-4 col-span-8 flex">
                      <img
                        src="https://i01.appmifile.com/webfile/globalimg/checkout/cards.png"
                        alt="Bank BCA"
                        width="30px"
                      />
                      <p className="ml-4">Pembayaran Online & Indomaret</p>
                    </div>
                  </div>
                </>
              )}
            </section>
          </div>
        </article>

        <aside className="grid grid-flow-col grid-cols-1 max-w-full min-w-xl lg:col-span-3 lg:ml-1 lg:mr-4 lg:mt-2 lg:bg-white">
          <div className="grid grid-cols-1">
            <section className="p-8 mb-4 bg-white lg:order-2 lg:pt-0 lg:pb-0 lg:mb-0">
              <div className="pb-6">
                <div className="pb-6">
                  <h2 className="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                    {totalProductItems} item
                  </h2>
                </div>

                <div className="bg-slate-100 h-[1px] max-w-2xl"></div>
              </div>

              {allCartItem.map((cart) => (
                <div>
                  <ProductItem
                    className="grid grid-cols-4"
                    Image={cart.ProductModel.image}
                    Tittle={cart.ProductModel.name_product}
                    Qty={cart.qty}
                    Price={cart.price}
                  />
                </div>
              ))}
            </section>

            <section className="p-8 mb-4 bg-white lg:order-1 lg:pb-0 lg:mb-0">
              <div>
                <div className="pb-6">
                  <h2 className="font-Inter font-semibold text-3xl">
                    Ringkasan pesanan
                  </h2>
                </div>
              </div>
            </section>
            <section className="p-8 mb-4 bg-white lg:order-3 lg:pb-0 lg:mb-0 lg:mt-0 lg:pt-0">
              <div className="grid grid-flow-col grid-cols-2 pb-6">
                <div>
                  <p>Subtotal</p>
                </div>
                <div className="text-right">
                  <TotalPrice TotalPrice={totalCost} />
                </div>
              </div>
              <div className="bg-slate-100 h-[1px] max-w-2xl"></div>
              <div className="grid grid-flow-col grid-cols-2 pt-6">
                <div>
                  <p>Biaya pengiriman</p>
                </div>
                <div className="text-right">
                  <p>Gratis</p>
                </div>
              </div>
            </section>

            <section className="hidden lg:grid lg:order-last text-center">
              {tampilkanCountdown && (
                <div className="mt-4">
                  <CountdownTimer
                    startTime={countdownStartTime}
                    endTime={countdownEndTime}
                  />
                </div>
              )}
              <div className="items-end lg:bottom-0 lg:right-20 lg:pb-1">
                <button
                  disabled={
                    !isAddressSelected ||
                    !isChecked ||
                    !isPaymentSelected ||
                    !isAgreementSelected ||
                    allAddress.length === 0
                  }
                  onClick={handleBayarSekarangClick}
                  className={`w-[201px] h-[56px] rounded-lg bg-black opacity-1 text-center justify-self-end xsml:w-[241px] lg:w-[400px] ${
                    !isAddressSelected ||
                    !isChecked ||
                    !isPaymentSelected ||
                    !isAgreementSelected ||
                    allAddress.length === 0
                      ? "cursor-not-allowed bg-gray-400"
                      : ""
                  }`}
                >
                  <h1 className="text-white font-Inter text-xl xsml:text-2x1">
                    Bayar Sekarang
                  </h1>
                </button>
              </div>
            </section>

            <div className="mt-4 text-center bg-white lg:hidden">
              <CountdownTimer
                startTime={countdownStartTime}
                endTime={countdownEndTime}
              />
            </div>
            <section className="p-8 mb-4 lg:order-last lg:pb-0 lg:mb-0 lg:mt-0 lg:pt-0">
              <div
                className="grid grid-cols-9 lg:hover:border-[#FF6900] lg:hover:cursor-pointer "
                onChange={handleCheckboxChange}
              >
                <div className="text-center m-auto">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#FF6900] h-5 w-5"
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className="col-span-8">
                  <span className="">
                    Dengan melakukan pemesanan, berarti Anda telah membaca dan
                    menyetujui{" "}
                    <span className="text-[#FF6900]">
                      Ketentuan Penggunaandan{" "}
                    </span>
                    dan{" "}
                    <span className="text-[#FF6900]">Kebijakan Privasi </span>{" "}
                    Mi.com. Saya telah membaca dan menyetujui
                    <span className="text-[#FF6900]">
                      {" "}
                      Kebijakan Pengembalian.
                    </span>
                  </span>
                </div>
              </div>
            </section>

            <section className="bg-white lg:order-2 lg:mt-0 lg:pt-0">
              <div className="relative">
                <div className="inset-99 bottom-0 w-full p-4 mb-0 bg-white flex flex-row justify-normal lg:static lg:grid lg:order-2 lg:grid-cols-2 lg:pt-0 lg:pb-0 lg:mt-0 lg:mb-0">
                  <div className=" pr-5 my-auto justify-self-start left-2 lg:left-0">
                    <h1 className="font-Inter text-2xl font-bold text-[#FF6900] xsml:w-3xl lg:ml-auto lg:text-2xl">
                      Total:
                    </h1>
                  </div>
                  <div className="justify-self-start mx-auto my-auto lg:text-right lg:mr-2">
                    <h1 className="font-Inter text-2xl xsml:w-3xl font-bold text-[#FF6900] sm:text-3xl lg:text-2xl">
                      <TotalPrice TotalPrice={totalCost} />
                    </h1>
                  </div>
                  <div className="items-end lg:absolute lg:bottom-0 lg:right-20 lg:pb-10 lg:hidden">
                    <button
                      disabled={
                        !isAddressSelected ||
                        !isChecked ||
                        !isPaymentSelected ||
                        !isAgreementSelected ||
                        allAddress.length === 0
                      }
                      onClick={handleBayarSekarangClick}
                      className={`w-[201px] h-[56px] rounded-lg bg-black opacity-1  text-white text-center justify-self-end xsml:w-[241px] ${
                        !isAddressSelected ||
                        !isChecked ||
                        !isPaymentSelected ||
                        !isAgreementSelected ||
                        allAddress.length === 0
                          ? "cursor-not-allowed bg-gray-400"
                          : ""
                      }`}
                    >
                      <h1 className="text-white font-Inter text-xl xsml:text-2x1">
                        Bayar Sekarang
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </aside>
      </main>
      {showConfirmation && (
        <ConfirmPayment
          onConfirm={handleConfirmPayment}
          onCancel={handleCancelPayment}
        />
      )}
      {/* Checkout End */}
    </div>
  );
}

export default Checkout;
