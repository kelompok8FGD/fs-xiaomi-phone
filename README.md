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
      note: Sebelum run buatlah dahulu databasenya di mysql masing2 dengan nama xiaomi_dev
   1. install NPN package dengan cara >> npm Install
   2. siapkan database dengan nama database, username, password yang sama yang tertera di .env
   3. Koneksi dengan database mysql edit pada .env
      DB_NAME="xiaomi_dev"
      DB_USERNAME="root"
      DB_PASSWORD="12345678"
      DB_HOST="127.0.0.1"
   4. test dengan cara >> npm run dev
   5. jika saat run atau melakukan update pada backend terdapat error maka cek pada error apakah ada error pada framework atau plugin maka solusinya bisa coba install framework atau plugin tersebut,, seperti contoh express, sequelize dll.
