+++
aliases = ["/blogs/design-pattern-singleto/"]
authors = "adexe"
categories = ["serapan"]
draft=true
cover = "/post/web-singleton.jpg"
date = 2022-02-01T00:00:00Z
dateUpdate = ""
description = "Disini saya akan menjelaskan lebih jauh tentang design pattern object pool "
series = "Serapan"
status = "publish"
tags = ["blog", "serapan", "design-pattern"]
title = "Menulis Kode Yang Optimal"
type = ["blogs", "blog"]
url = "/design-pattern-object-pool/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++

Selamat malam rekan-rekan, Topik untuk kali ini saya akan coba share adalah terkait bagaimana kita melakukan penulisan kode secara optimal.

Pada prakteknya kode yang optimal akan sangat membantu meningkatkan unjuk kerja serta efisiensi kerja dari output akhir aplikasi yang dihasilkan, masalahnya kebanyakan programmer sering berhenti pada titik dimana kode yang ditulisnya sudah berjalan sesuai harapan.

Padahal hampir 90% permasalahan yang terkait dengan performa disebabkan karena kode ditulis sub-optimal, dan hanya 10% sisa-nya yang bisa diimprove oleh hardware.

Jika kita lihat trend perkembangan teknologi hardware saat ini berbeda dengan 10 atau 20 tahun lalu, prosesor setiap 3-6 bulan akan muncul yang lebih cepat, harddisk yang lebih besar, RAM yang lebih cepat, dll.

Pada kenyataannya saat ini, trendnya sudah mencapai limit ataupun rasional dari dasar teknologi yang digunakan, CPU tidak lagi berlomba lomba semakin cepat, namun menawarkan core prosesor yang semakin banyak, ataupun arsitektur yang lebih sederhana (ARM).

Komponen seperti RAM sudah mulai stabil, HDD sudah stabil, perkembangannya lebih pada SSD yang juga saat ini sudah umum diaplikasikan. Pada akhirnya semua terkait dengan hardware perkembangannya akan semakin melandai karena keterbatasan teknologi yang mencakup bagimana benda secara fisik dibuat.


Pada akhirnya semua terkait dengan hardware perkembangannya akan semakin melandai karena keterbatasan teknologi yang mencakup bagimana benda secara fisik dibuat. Sementara sebuah penemuan baru membutuhkan riset dan pengembangan yang cukup panjang.

Di titik dimana perkembangan teknologi semakin melandai, improvement atas performance yang didapat dengan mengganti hardware akan semakin kecil, atau bahkan nisbi (relatif). Yang ada hanyalah penambahan kapasitas dan bukan unjuk kerja. 

Artinya di titik ini pula peran developer untuk memastikan kode yang ditulis mencapai titik optimal akan semakin penting. Karena upgrade hardware sudah tidak lagi menjadi opsi seperti halnya satu dekade lalu.

Saya akan beri sebuah contoh kode yang umum terlihat dari repository:

```python
def calc_gaji(gapok, nikah=False, juml_anak=0):
    if nikah:
        tunj_keluarga = 0.15 * gapok
        tunj_anak = 0
        if juml_anak == 1:
            tunj_anak = 0.05 * gapok
        elif juml_anak == 2:
            tunj_anak = 0.1 * gapok
        elif juml_anak == 3:
            tunj_anak = 0.15 * gapok
        else:
            raise Exception("Maksimum jumlah anak = 3")

        total_tunj = tunj_keluarga + tunj_anak
        gabrut = gapok + total_tunj
        pajak = 0
        if (gabrut >= 1500000) and (gabrut < 3000000):
            pajak = -0.025 * gabrut
        elif (gabrut >= 3000000):
            pajak = -0.05 * gabrut
        gasih = gabrut + pajak
        return list([gapok, tunj_keluarga, tunj_anak, pajak, gasih, gabrut])
    else:
        pajak = 0
        if (gapok >= 1500000) and (gapok < 3000000):
            pajak = 0.025 * gapok
        elif gapok >= 3000000:
            pajak = 0.05 * gapok
        gasih = gapok + pajak
        return list([gapok, 0, 0, pajak, gasih, gapok])
```

Bentuk kode dengan struktur seperti di atas umum sekali ditemukan dalam repository aplikasi yang kita buat, dan tidak ada yang salah dari kode tersebut, berfungsi sebagaimana mestinya.

### Lalu, apakah kode seperti ini sudah optimal?

Beberapa prinsip dasar penulisan kode yang optimal diantaranya adalah:
1. Hindari duplikasi kode
2. Hindari hirarkis kode yang disebabkan karena IF terlalu dalam

Dari keduanya, ada satu prinsip utama yang yang harus dipegang, **HINDARI AMBISI UNTUK MENULIS KODE OPTIMAL**.

Pada dasarnya kode yang optimal ditujukan untuk meningkatkan kualitas dari kode yang ditulis, dan bukan sebagai ambisi untuk unjuk diri atas kemampuan menulis kode yang berkualitas. Hal tersebut menjadi sangat penting mengingat :

> "PRELIMINARY OPTIMIZATION IS THE ROOT OF ALL EVIL"

Optimasi adalah langkah selanjutnya setelah mendapati kode yang ditulis telah berfungsi dengan benar, dan bukan saat awal penulisan.

Jika kita revisit kode di atas , duplikasi kode terjadi perbedaan dasar perhitungan yang disebabkan karena status pernikahan:

```python
    if nikah:
        ...
    else:
        ...
```

Dan pada dasarnya persentase yang digunakan terkait dengan "jumlah anak", serta "persentase pajak
 bisa kita gantikan sebagai *driver* (parameter) dan bukan ditulis secara hardcode seperti di atas.

 ```python
 def calc_gaji(gapok, nikah=False, juml_anak=0):
 ```
Dengan melihat definisi parameter yang ada, kita ketahui tipe dari parameter nikah adalah boolean, dan maksimum jumlah anak adalah 3 dan boolean hanya ada dua kemungkinan False dan True yang secara integer adalah 0 dan 1.

Karena nilainya adalah sekuens (0 dan 1) maka sebenarnya atas variabel tersebut bisa kita gunakan sebagai index atas array ataupun list. Dan kalau melihat dari tunjangan anak 0.05, 0.10, 0.15 bisa dikatakan anak 1, 2, dan 3 masing masing adalah **0.05**.

Sehingga jika kita menggunakan array ataupun list yang dimulai dari 0, maka tunjangan anak ini bisa kita definisikan sebagai `[0, 0.05, 0.05, 0.05]`. Sementara tunjangan keluarga sebesar 0.15 hanya berlaku bagi yang sudah menikah.

Dengan demikian struktur driver, bisa kita definisikan sebagai berikut :

```
[tunj_keluarga, [anak_0, anak_1, anak_2, anak_3]]
```

atau versi konversi python nya seperti ini :

```python
allowance_reff = [0.15, [0, 0.05, 0.05, 0.05]]
```

Sementara untuk yang belum menikah tidak ada perhitungan, atau seperti ini:

```python
allowance_reff = [0, [0, 0, 0, 0]]
```

Sehingga bila kita gabungkan dengan mengguanakan dasar boolean `False` / `True` ataupun 0, 1 untuk membedakan yang belum dan sudah menikah maka didapat kode :

```python
 allowance_reff = [[0, [0, 0, 0, 0]], [0.15, [0, 0.05, 0.05, 0.05]]]
```

Untuk pajak, berlaku baik terhadap yang sudah menikah ataupun belum dengan kriteria, antara 1.5jt sampai 3jt sebesar 2.5% dan diatas 3jt sebesar 5%.

