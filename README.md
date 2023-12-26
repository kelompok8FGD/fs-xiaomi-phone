Melakukan update pada frontend dan backend

1. Lakukan Forking seperti biasa
2. clone di direktori yang di inginkan
3. lalu jika sudah, buka repositori yang sudah di clone
   Note: jika ingin melakukan update pada frontend masuk terlebih dahulu ke dalam directori client  >>  cd client
         jika ingin melakukan update pada backend masuk terlebih dahulu ke dalam directori server  >>  cd server
         -- lakukan cd .. untuk mundur ke direktori sebelumnya untuk masuk ke direktori lain contoh saat dalam client maka jika ingin masuk ke direktory server perlu mundur ke direktori sebelumnya >> cd .. lalu baru lakukan >> cd server

   -- Melakukan update pada frontend (jangan lupa cek apakah direktori sudah benar di /client)
   1. install NPN package dengan cara >> npm Install
   2. test dengan cara >> npm run dev
   3. jika terjadi error seperti contoh 1 moderate severity vulnerability bisa fix dengan cara >> npm audit fix seperti yang disarankan pada terminalnya
   4. jika saat run atau melakukan update pada frontend terdapat error maka cek pada error apakah ada error pada framework atau plugin maka solusinya bisa coba install framework atau plugin tersebut,, seperti contoh tailwind, vite redux, dll.
  
   -- Melakukan update pada backend (jangan lupa cek apakah direktori sudah benar di /server)
   1. install NPN package dengan cara >> npm Install
   2. Koneksi dengan database mysql pada direktori config/config.json
      "development": {
    "username": "root", >> gunakan username root
    "password": null, >> password bisa disesuaikan
    "database": "xiaomi_dev", >> nama database harus disamakan xiaomi_dev
    "host": "127.0.0.1", >> ip mysql server default 127.0.0.1
    "dialect": "mysql" >> secara default tapi nanti jika perlu menggunakan mysql2 perlu dirubah ke mysql2
  },
   3. test dengan cara >> npm run dev
   4. jika saat run atau melakukan update pada backend terdapat error maka cek pada error apakah ada error pada framework atau plugin maka solusinya bisa coba install framework atau plugin tersebut,, seperti contoh express, sequelize dll.
