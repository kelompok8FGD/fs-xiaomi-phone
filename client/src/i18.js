import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'id',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                account: "Xiaomi Account",
                login: "Login",
                register: "Register",
                darkmode: "Dark Mode",
                lightmode: "Light Mode",
                logout: "Logout",
                google: "Log in with Google",
                support: "Support",
                password: "Password",
                noaccount: "Don't have an account? ",
                options: "Other Options",
                setpassword: "Set Password",
                confirmpassword: "Confirm Password",
                fullname: "Full Name",
                next: "Next",
                information: "Passwords must be 8-16 characters long and include both numbers and letters.",
                checkbox: "I have read and agree to Xiaomi's User Agreement and Privacy Policy.",
                useragreement: "User agreement",
                privacypolicy: "Privacy Policy",
                help: "Need Help?",
                language: "Select your language",
                country: "Select your country",
            }
        },
        id: {
            translation: {
                account: "Akun Xiaomi",
                login: "Masuk",
                register: "Daftar",
                darkmode: "Mode Gelap",
                lightmode: "Mode Terang",
                logout: "Keluar",
                google: "Masuk dengan Google",
                support: "Bantuan",
                password: "Sandi",
                noaccount: "Belum punya akun?",
                options: "Pilihan lainnya",
                setpassword: "Setel Sandi",
                confirmpassword: "Masukan sandi Anda lagi",
                fullname: "Nama Lengkap",
                next: "Berikutnya",
                information: "Sandi harus terdiri dari 8-16 karakter dan mencakup angka dan huruf.",
                checkbox: "Saya telah membaca dan menyetujui Perjanjian Pengguna dan Kebijakan Privasi Xiaomi.",
                useragreement: "Perjanjian Pengguna",
                privacypolicy: "Kebijakan Privasi",
                help: "Butuh Bantuan?",
                language: "Pilih Bahasa Anda",
                country: "Pilih Negara Anda",
            },
        },
    },
});

export default i18n;