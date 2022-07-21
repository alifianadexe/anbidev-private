+++
authors = "adexe"
categories = ["riset"]
date = 2019-11-15T00:00:00Z
description = "Eksplorasi dengan Tableau"
draft=true
series = "Riset"
status = "draft"
tags = ["blog", "ai", "mdp"]
title = "Belajar Tentang Markov Decission Process"
type = ["blogs", "blog"]
url = "/blogs/belajar-tentang-mdp/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++

Markov Decission Process atau lebih dikenal sebagai MDP adalah sebuah tipe dari model matematika yang sangat berguna untuk machine learning, lebih spesifiknya yaitu reinforcement learning.

Model ini mengizinkan machine dan agent untuk menentukan perilaku yang ideal dalam environtment yang spesifik, yang bertujuan untuk memaksimalkan kemampuan model untuk mencapai state atau multiple state dalam sebuah environtment, tergantung tujuan yang ingin kamu capai.

Tujuan ini ditentukan oleh apa yang kita sebut policy, yang diterapkan pada setiap aksi si agent tergantung environtmentnya. Dan MDP berupaya mengoptimalkan langkah - langkah yang diambil untuk mencapai sebuah solusi.

## Breaking Down

Untuk memahami MDP, pertama kita lihat komponen yang unik pada setiap process nya. yang terdiri dari :

- **State\*\*\***(S)\*\*\* : Serangkaian kondisi yang ada pada environtment.
- **Action\*\*\***(a)\*\*\* : Serangkaian aksi yang mungkin dapat dilakukan oleh agent dalam environtment.
- **Transition\*\*\***(T)\*\*\* : Deskripsi efek dari masing - masing aksi pada kondisi saat ini.
- **Reward\*\*\***(T)\*\*\* : fungsi yang akan memberi sebuah reward dari state dan aksi yang dilakukan.
- **Policy\*\*\***(P)\*\*\* : Policy berupaya untuk memecahkan MDP. Kamu dapat berpikir ini sama seperti mapping dari State ke action. Simpel nya lagi, ini menunjukan aksi terbaik (a) yang diambil saat dalam State(s).

## Understanding the model

Seperti yang kamu lihat kita punya T(S, a, P') \~ P(S'|S, a).

Model sering direferensikan sebagai Transition Model. Jika kamu breakdown, ini akan menjadi lebih simpel untuk dipahami. T mewakili konseptualisasi tindakan kita. Kita mulai dari sebuah state (S), lalu ambil sebuah aksi (a) dan si agen akan menemukan dirinya dalam State yang baru (S').

> Jangan biarkan kata - kataku membuat kamu bingung. Sangat mungkin bahwa aksi yang agen lakukan berada pada State yang sama.

Selanjutnya kita definisikan (P), atau probabilitas State baru yang dapat kita capai dari aksi yang diambil di State sebelumnya.

## Matematika : The Markov Property

`P[St + 1 | a, S0,....., St] = P[St + 1 | a, St]`

Formula diatas mendefinisikan Markov Property State. Kita breakdown lagi.

St + 1 dapat diartikan sebagai State di masa depan, atau keadaan yang ingin kita tuju dan \[S1,...,St\] mewakili history dari semua informasi yang relevan yang ada dalam State History. `a` tentu saja masih merupakan tindakan yang diambil. Namun, State baru hanya bergantung pada kondisi sebelumnya. Ia tidak memiliki ketergantungan pada history state di masa lampau.

## Given the Markov state, define transition probability

Mengingat bahwa agen berada didalam sebuah State, ada kemungkinan untuk pergi ke State pertama, kemungkinan lainnya yaitu pergi ke state kedua, dan seterusnya untuk setiap State yang ada. Ini adalah probabilitas transisi yang ada.

Kita dapat mengambil probabilitas ini dan memasukkannya ke dalam sebuah matriks State. Lalu kita ambil sebuah contoh dengan 3 State masalah cuaca. Ini aturannya :

1. Kamu tinggal di kota yang cerah, tapi sayangnya, cuaca cerah tidak pernah datang dua kali secara berturut - turut.
2. Jika hari ini cerah. Pasti hari berikutnya pasti akan terjadi hujan atau salju.
3. Jika hari ini hujan atau bersalju, akan ada 50/50 kesempatan terjadinya cuaca yang sama di hari berikutnya.
4. Jika cuaca berganti dari bersalju atau hujan , itu hanya akan berubah menjadi cerah selama setengah hari.

Jika kita buat menjadi state matriks akan menjadi seperti ini :

        R   N   S
    R  1/2 1/4 1/4
    N  1/2  0  1/2
    S  1/4 1/4 1/2

Dimana baris pertama mewakili kemungkinan terjadinya hujan di hari - hari berikutnya. Lalu baris kedua mewakili probabilitas untuk hari normal, dan baris ketiga untuk hari bersalju. Matriks ini dikenal sebagai matriks transisi.

Sekarang, kita coba model permasalahan nyata dari matriks kita dimana `p²(i, j)`. `i` mewakili keaadan saat ini, dan `j` mewakili keaadan di masa depan.

Kita ingin tahu apa kemungkinannya, mengingat hujan turun hari ini. Apa kemungkinan turun salju dua hari dari sekarang? mengingat hujan sedang turun, apa kemungkinannya?

Yah, satu - satunya batasannya adalah kita tidak mengalami dua hari cerah secara berturut - turut. Dan semua State yang lain kemungkinan untuk terjadi sekarang atau besok sangatlah mungkin terjadi. Sehingga, bisa jadi besok hujan dan lusa bersalju, atau besok cerah dan lusa bersalju, dan juga bisa salju besok dan lusa hujan.

Kita masuk ke bentuk perbandingan :

    P²(Rain,Snow) = P(Rain, Rain) * P(Rain, Snow) + P(Rain, Normal) * P(Normal, Snow) + P(Rain, Snow) * P(Snow, Snow)

Saya tahu itu buruk untuk dilihat, tapi kamu mungkin menyadari pada titik ini bahwa pada dasarnya ini hanyalah matematika vektor dan matriks. Kita ambil elemen dari titik di baris 1 dengan kolom 3.

## Visualizing To Make Life Easier

Kita coba perumpamaan dengan periode selama 6 hari, atau sama dengan enam State Transisi. Kita belum mendefinisikan satu State pun untuk memulainya, Kita hanya ingin menemukan setiap Kemungkinan pada State saat periode transisi, mengingat inisialisasi probabilitas awal kita. Hal ini disebut dengan regular markov chain. Seperti yang dapat kamu lihat, kita tetap menggunakan kalkulasi matematika vektor untuk menghitung peluang setiap State yang diambil pada matrix. AnbiDev
