+++
authors = "bagus"
categories = ["blog", "wawasan", "blogs"]
cover = "/post/cover-logicgates.jpg"
date = 2020-11-19T17:00:00Z
dateUpdate = 2021-01-21T17:00:00Z
description = "Mengetahui apa aja gerbang logika dasar yang harus kita pahami"
series = ""
status = "publish"
tags = ["fakta", "edukasi", "wawasan", "elektronika"]
title = "Gerbang Logika Dasar"
type = ["blog", "blogs"]
url = "gerbang-logika-dasar"
[author]
images = "/img/baus.jpg"
name = "bagus"

+++

Dalam merangkai sebuah rangkaian elektronika tidak lepas dengan adanya gerbang logika. Disetiap gerbang logika memiliki satu keluaran dan satu atau lebih masukan (_input_). Didalam bahasa mesin sendiri hanya dikenal dalam bilangan biner saja antara **1** dan **0**.

Maka dari itu keluaran dan masukan di gerbang logika ini memiliki kondisi **HIGH 1** atau **LOW 0**. Disetiap gerbang pun memiliki tabel kebenaran, yakni tabel yang berisikan kombinasi-kombinasi Variabel Input (Masukan) yang menghasilkan Output (Keluaran) Logis.

Gerbang logika digital standar secara umum tersedia dalam dua macam yakni,

- TTL (Transistor-Transistor Logic)
- CMOS (Complementary Metal-Oxide-Silicon).

Nah kedua hal tersebut mengacu pada teknologi logika yang digunakan untuk memproduksi sebuah IC (Integrated Circuit) atau chip.

Gerbang logika sendiri ada tujuh macam ,yakni :

1. _AND_
2. _OR_
3. _NOT_
4. _NAND_
5. _NOR_
6. _X OR_
7. _X NOR_

<br>

## **Gerbang AND**

---

Gerbang **AND** 2 masukan dapat dianalogikan sebagai 2 saklar seri untuk menghidupkan lampu. Lampu akan menyala bila saklar SA dan saklar SB sama - sama ditutup _(gambar 1.1)_. Gerbang AND dapat disimbolkan pada _(gambar 1.2)_.

![Gambar 1.1](/post/saklar-and.png "Gambar 1.1 Saklar Lampu Sederhana")

![Gambar 1.2](/post/simbol-and.png "Gambar 1.2 Simbol Gerbang AND")

Tabel kebenaran dari Gerbang AND untuk 2 masukan (inputan)

| Masukan |     | Keluaran |
| ------- | --- | -------- |
| A       | B   | Y=A.B    |
| 0       | 0   | 0        |
| 0       | 1   | 0        |
| 1       | 0   | 0        |
| 1       | 1   | 1        |

Jadi ibaratnya kita pake operator perkalian dalam gerbang AND ini. lalu, untuk IC atau chip yang menggunakan gerbang ini contohnya adalah seperti berikut.

_Gerbang AND 2 masukan : IC 7408 (gambar 1.3)_

_![Gambar 1.3](/post/ic-7408.jpg "Gambar 1.3 IC 7408")_

_Gerbang AND 3 masukan : IC 7411 (gambar 1.4)_

_![Gambar 1.4](/post/ic-7411.png "Gambar 1.4 IC 7411")_

_Gerbang AND 4 masukan : IC 7421 (gambar 1.5)_

_![Gambar 1.5](/post/ic-7421.jpg "Gambar 1.5 IC 7421")_

<br>

## **Gerbang OR**

---

Gerbang OR 2 masukan dapat dianalogikan sebagai 2 saklar paralel untuk menghidupkan lampu, lampu akan menyala bila salah satu saklar SA atau saklar SB ditutup _(gambar 2.1)_. Gerbang OR memiliki simbol seperti ini _(gambar 2.2)._

![Gambar 2.1](/post/saklar-or.png "Gambar 2.1 Saklar sederhana OR")

![Gambar 2.2](/post/simbol-or.png "Gambar 2.2 Simbol Gerbang OR")

Tabel Kebenaran untuk Gerbang OR dan 2 masukan (inputan)

| Masukan |     | Keluaran |
| ------- | --- | -------- |
| A       | B   | Y=A+B    |
| 0       | 0   | 0        |
| 0       | 1   | 1        |
| 1       | 0   | 1        |
| 1       | 1   | 1        |

Bisa diibaratin kita pake operator penjumlahan dalam hal ini. Untuk IC atau chip yang menggunakan gerbang ini contohnya adalah _IC 7432_.

!["Gambar 2.3"](/post/ic-7432.png "Gambar 2.3 IC 7432")

<br>

## **Gerbang NOT (INVERTER)**

---

Gerbang ini merupakan suatu rangkaian logika yang berfungsi sebagai "pembalik", jika masukan berlogika 1, maka keluaran akan berlogika 0, demikian sebaliknya. Seperti halnya sebuah saklar yang dihubungkan ke relay _Normally Closed (NC)_.

Jika saklar SA terbuka (logika 0), maka relay (S) dalam kondisi tertutup lalu lampu menyala (logika 1), sedangkan bila saklar tertutup (logika 1), maka relay dalam kondisi terbuka sehingga lampu padam (logika 0) _(gambar 3.1)_. Gerbang Not disimbolkan seperti (_gambar 3.2)._

![Gambar 3.1](/post/saklar-not.png "Gambar 3.1 Rangkaian Saklar NOT dengan NC")

![Gambar 3.2](/post/simbol-not.png "Gambar 3.2 Simbol Gerbang NOT")

Tabel Kebenaran Gerbang Not

| Masukan | Keluaran |
| ------- | -------- |
| A       | Z = A’   |
| 0       | 0        |
| 1       | 1        |

Untuk IC atau chip yang menggunakan gerbang ini contohnya adalah _IC 7404._

![Gambar 3.3](/post/ic-7404.png "Gambar 3.3 IC 7404")

<br>

## **Gerbang NAND**

---

Gabungan antara gerbang NOT dan gerbang AND. Gerbang logika ini adalah kebalikan dari gerbang logika AND namun tidak sama dengan gerbang logika OR. Memiliki simbol :

![Gambar 4.1](/post/simbol-nand2.png "Gambar 4.1 Simbol Gerbang NAND")

![Gambar 4.2](/post/simbol-nand1.png "Gambar 4.2 Simbol Gerbang NAND")

Tabel Kebenaran Gerbang NAND

| Masukan |     | Keluaran |       |
| ------- | --- | -------- | ----- |
| A       | B   | Yand     | Ynand |
| 0       | 0   | 0        | 1     |
| 0       | 1   | 0        | 1     |
| 1       | 0   | 0        | 1     |
| 1       | 1   | 1        | 0     |

Nah, untuk IC atau chip yang menggunakan gerbang ini contohnya adalah seperti berikut.

_Gerbang NAND 2 masukan : IC 7400 (gambar 4.3)_

![Gambar 4.3](/post/ic-7400.gif "Gambar 4.3 IC 7400")

_Gerbang NAND 3 masukan : IC 7410 (gambar 4.4)_

![Gambar 4.4](/post/ic-7410.gif "Gambar 4.4 IC 7410")

_Gerbang NAND 4 masukan : IC 7420 (gambar 4.5)_

![Gambar 4.5](/post/ic-7420.gif "Gambar 4.5 IC 7420")

_Gerbang NAND 8 masukan : IC 7430 (gambar 4.6)_

![Gambar 4.6](/post/ic-7430.gif "Gambar 4.6 IC 7420")

<br>

## **Gerbang NOR**

---

Gabungan dari gerbang NOT dan gerbang OR. Artinya gerbang logika ini adalah kebalikan dari Gerbang OR. Memiliki simbol :

![Gambar 5.1](/post/simbol-nor1.png "Gambar 5.1 Simbol Gerbang NOR")

![Gambar 5.2](/post/simbol-nor2.png "Gambar 5.2 Simbol Gerbang NOR")

Tabel Kebenaran Gerbang NOR

| Masukan |     | Keluaran |      |
| ------- | --- | -------- | ---- |
| A       | B   | Yor      | Ynor |
| 0       | 0   | 0        | 1    |
| 0       | 1   | 1        | 0    |
| 1       | 0   | 1        | 0    |
| 1       | 1   | 1        | 0    |

IC atau chip yang menggunakan gerbang ini contohnya adalah seperti berikut.

_Gerbang NOR 2 masukan : IC 7402 (gambar 5.3)._

![Gambar 5.3](/post/ic-7402.gif "Gambar 5.3 IC 7402")

_Gerbang NOR 3 masukan : IC 7427 (gambar 5.4)._

![Gambar 5.4](/post/ic-7427.gif "Gambar 5.4 IC 7427")

<br>

## **Gerbang XOR**

---

(Exclusive OR) memiliki dua inputan dan satu hasil output. Logika pada gerbang ini adalah output pasti 1 jika kedua nilai inputan berbeda, dan pasti 0 jika kedua inputan sama.

![Gambar 6.1](/post/simbol-xor.png "Gambar 6.1 Simbol Gerbang XOR")

Tabel Kebenaran Gerbang X OR

| Masukan |     | Keluaran |      |
| ------- | --- | -------- | ---- |
| A       | B   | Yor      | Yxor |
| 0       | 0   | 0        | 0    |
| 0       | 1   | 1        | 1    |
| 1       | 0   | 1        | 1    |
| 1       | 1   | 1        | 0    |

IC atau chip yang menggunakan gerbang ini contohnya adalah _IC 7486_ dua masukan.

![Gambar 6.2](/post/ic-7486.png "Gambar 6.2 IC 7486")

<br>

## **Gerbang XNOR**

---

(Exclusive NOT OR) adalah kebalikan dari gerbang XOR. Logika gerbang ini adalah jika kedua input nilainya sama maka output yang dihasilkan pasti 1.

![Gambar 7.1](/post/simbol-xnor1.png "Gambar 7.1 Simbol Gerbang XNOR")

![Gambar 7.2](/post/simbol-xnor2.png "Gambar 7.2 Simbol Gerbang XNOR")

Tabel Kebenaran Gerbang X NOR

| Masukan |     | Keluaran |       |
| ------- | --- | -------- | ----- |
| A       | B   | Yxor     | Yxnor |
| 0       | 0   | 0        | 1     |
| 0       | 1   | 1        | 0     |
| 1       | 0   | 1        | 0     |
| 1       | 1   | 0        | 1     |

IC atau chip yang menggunakan gerbang ini contohnya adalah IC 74266 dua masukan.

![gambar 7.3](/post/ic-74266-1.png "Gambar 7.3 IC 74266")

Nah mungkin itu dia beberapa informasi yang dapat saya sampaikan untuk saat ini. Mohon maaf atas segala kesalahan dan kerandoman materi saya, jika ada sanggahan mangga untuk komen di bawah yah. Terima kasih :)
