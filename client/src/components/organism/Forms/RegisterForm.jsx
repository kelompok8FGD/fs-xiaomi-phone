import React, { useState } from "react";
import { useRegister } from "../../../hooks/useRegister";
import CustomInput from "../../Atoms/CustomInput";
import CustomLabel from "../../Atoms/CustomLabel";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CountrySelector from '../../Atoms/CountrySelector/index'

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");

  const navigate = useNavigate();
  const { t } = useTranslation();

  const { error, isLoading, register } = useRegister(navigate);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      // Set an error message for password mismatch
      setPasswordMatchError("Passwords do not match");
      return;
    }

    // Reset the password match error when passwords match
    setPasswordMatchError("");

    await register(email, password, fullname);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        required
        intent="form"
        type="text"
        onChange={(e) => setFullName(e.target.value)}
        value={fullname}
        placeholder="Full Name"
      />

      <CountrySelector/>

      <CustomInput
        required
        intent="form"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
      />

      {/* Password input */}
      <CustomInput
        required
        intent="form"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder={t("setpassword")}
      />

      {/* Confirm Password input */}
      <CustomInput
        required
        intent="form"
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        placeholder={t("confirmpassword")}
      />

      {/* Display password match error */}
      {passwordMatchError && (
        <div className="text-red-500">{passwordMatchError}</div>
      )}

<p className="text-[13px] text-text leading-tight">{t("information")}</p>
      <div className='flex items-start space-x-2 py-4'>
        <CustomInput required
type="checkbox"
checked={isChecked}
onChange={handleCheckboxChange}
intent="checkbox"
/>

<CustomLabel intent="checkbox" text={t("checkbox")} htmlFor="checkbox" />
      </div>

      <div className="mt-4 flex flex-col space-y-4 pb-2">
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full text-center p-4 ${
            isChecked ? "bg-[#ff5c00] text-white" : "bg-[#ffbe99] text-white"
          }`}
        >
          {t("next")}
        </button>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </form>
  );
};

export default RegisterForm;
