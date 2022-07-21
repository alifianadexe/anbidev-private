+++
authors = "bagus"
categories = []
cover = "/post/web-logika.jpg"
date = 2021-05-05T17:00:00Z
dateUpdate = 2021-05-05T17:00:00Z
description = "Membahas mengenai dasar logika informatika"
series = ""
status = "publish"
tags = ["proposisi", "premis", "logika informatika", "informatika", "logika", "fakta", "kuliah"]
title = "Dasar-dasar Logika"
type = []
url = "/logika-informatika"
[author]
images = ""
name = "bagus"

+++
Logika berasal dari bahasa Greece Yunani, yakni logos yang artinya kata, ucapan atau alasan. Jadi, logika adalah ilmu untuk berfikir dan menalar dengan benar. Logika matematika adalah sebuah alat untuk bekerja dengan pernyataan (statement) majemuk yang rumit. Terimasuk di dalamnya:

• Bahasa untuk merepresentasikan pernyataan

• Notasi yang tepat untuk menuliskan sebuah pernyataan

• Metodologi untuk bernalar secara objektif untuk menentukan nilai benar-salah dari pernyataan

• Dasar-dasar untuk menyatakan pembuktian formal dalam semua cabang matematika Istilah-istilah logika

Ada beberapa istilah yang akan digunakan dalam logika informatika yaitu :

Premis : yaitu sebuah pernyataan

Argumen : usaha untuk mencari kebenaran dari premis berupa kesimpulan

Konklusi : Kesimpulan

**Pernyatann (Proposisi)**

Di dalam matematika tidak semua pernyataan yang bernilai benar atau salah saja yang digunakan dalam penalaran. Pernyataan disebut juga kalimat deklaratif yaitu kalimat yang bersifat menerangkan. Disebut juga proposisi. Pernyataan/ Kalimat Deklaratif/ Proposisi adalah kalimat yang bernilai benar atau salah tetapi tidak keduanya.

Contoh :

Semarang Kota Atlas (Benar).

2+9=11 (Benar).

Tidak semua kalimat berupa proposisi

Contoh :

Berapa jumlah kru mugiwara sebelum time skip?.

Dimana lokasi one piece?.

**Inferensi Logika**

Logika selalu berhubungan dengan pernyataan – pernyataan yang ditentukan nilai kebenarannya. Sering kali diinginkan untuk menentukan benar tidaknya kesimpulan berdasarkan sejumlah kalimat yang diketahui nilai kebenarannya. 

**Argumen Valid dan Invalid**

Argumen adalah rangkaian kalimat – kalimat. Semua kaliamat – kalimat tersebut kecuali yang terakhir disebut hipotesa ( atau asumsi/premise). Kalimat terakhir disebut kesimpulan. 

Suatu argumen dikatakan valid apabila untuk sembarang pernyataan yang disubsitusikan ke dalam sebuah hipotesa, jika semua hipotesa tersebut benar, maka kesimpulan juga benar. Sebaliknya meskipun semua hipotesa benar tetapi ada kesimpulan yang salah, maka argumen tersebut dikatakan invalid.

Kalau suatu argumen dan semua hipotesanya bernilai benar maka kebenaran nilai konklusi dikatakan sebagai \`diinferensikan (diturunkan) dari kebenaran hipotesa. 

Untuk mengecek apakah suatu argumen merupakan kalimat yang valid, dapat dilakukan langkah – langkah sebagai berikut :

1\. Menentukan hipotesa dan kesimpulan kalimat.

2\. Membuat tabel yang merupakan nilai kebenaran untuk semua hipotesa dan kesimpulan.

3\. Mencari baris kritis, yaitu baris dimana semua hipotesa bernilai benar.

4\. Dalam baris kritis tersebut, jika semua nilai bernilai benar, maka argumen itu valid. Jika diantara baris kritis tersebut ada baris dengan nilai kesimpulan yang salah, maka argumen itu invalid.

**Metode-metode Inferensi**

Metode Inferensi yaitu teknik untuk menurunkan kesimpulan berdasarkan hipotesa yang ada, tanpa harus menggunakan tabel kebenaran. Ada delapan bentuk inferensi. 

**1.Addisi (Add)** 

p 

} ∴ p v q

**2.Modus Ponen (MP)**

p → q

p

} ∴ q

**3.Disjungtif Silogisme (DS)**

p v q

\~p

} ∴ q

**4.Konjungsi (Conj)**

p 

q

} ∴ p n q

**5.Simplifikasi (Simp)**

p n q

} ∴ p

**6.Modus Tollens (MT)**

p → q

\~p

} ∴ \~p

**7.Hypothetical Silogisme (HS)**

p → q

q → r

} ∴ p → r

**8.Prinsip Resolusi (PR)**

p v q

\~p v r

} ∴ q → r

**9.Hukum De Morgan (de Mor)**

 - \~(p n q) == \~p v \~q

 - \~(p v q) == \~p n \~q

**10.Comutative (Comm)**

 - p v q == q v p

 - p n q == q n p