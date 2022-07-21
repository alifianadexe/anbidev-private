+++
title = "Macam - Macam Operator Dalam Python"
description = "Mempelajari tentang deskripsi serta penggunaan operator dalam python"
type = ["tutorials","tutorial"]
cover = "/post/python-operator.png"
status = "publish"
tags = [
    "python"
]
date = "2019-09-10"
tutorials = [
    "python"
]
series = "Python 101"
authors = "adexe"
shortcode = "Operator"
url = "/python-operator/"
aliases = [
    "/tutorials/python/python-operator/",
]
sumber = [
    "https://belajarpython.com/tutorial/operator-python",
    "https://www.w3schools.com/python/python_operators.asp"
    
]
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

**Operator** digunakan untuk melakukan operasi pada variabel dan value. Operator berbentuk simbol atau gabungan dari simbol, bukan berbentuk keyword atau kata.

Contoh penggunaan operator yang sederhana seperti ini `2 + 2 = 4`. Operator yang digunakan adalah penjumlahan (`+`).

Operator dikelompokan menjadi beberapa bagian:

- [Operator Aritmatika](#operator-aritmatika) (_Arithmetic Operators_)
- [Operator Perbandingan](#operator-perbandingan) (_Comparison (Relational) Operators_)
- [Operator Penugasan](#operator-penugasan) (_Assignment Operators_)
- [Operator Logika](#operator-logika) (_Logical Operators_)
- [Operator Identitas](#operator-identitas) (_Identity Operators_)
- [Operator Keanggotaan](#operator-keanggotaan) (_Membership Operators_)
- [Operator Bitwise](#operator-bitwise) (_Bitwise Operators_)

<br>

## Operator Aritmatika

<hr>

| Operator                        | Penggunaan |
| ------------------------------- | ---------- |
| Penjumlahan (`+`)               | `x + y`    |
| Pengurangan (`-`)               | `x - y`    |
| Perkalian (`*`)                 | `x * y`    |
| Pembagian (`/`)                 | `x / y`    |
| Modulus (`%`)                   | `x % y`    |
| Pangkat (`**`)                  | `x ** y`   |
| Pembagian Bilangan Bulat (`//`) | `x // y`   |

- **Penjumlahan** <br>
  Menjumlahkan nilai dari masing-masing nilai operan atau bilangan. <br>

  ```
  20 + 120 = 140
  ```

- **Pengurangan** <br>
  Mengurangi nilai operan di sebelah kiri menggunakan nilai operan di sebelah kanan.<br>

  ```
  90 - 50 = 40
  ```

- **Perkalian** <br>
  Mengalikan nilai operan berdasarkan nilai operan di sebelah kanan. <br>

  ```
  9 * 5 = 45
  ```

- **Pembagian** <br>
  Membagi nilai operan berdasarkan nilai operan. <br>

  ```
  36 / 6 = 6
  ```

- **Modulus** <br>
  Mendapatkan sisa pembagian dari nilai operan. <br>

  ```
  9 % 2 = 1
  9 % 3 = 0
  ```

- **Pangkat** <br>
  Memangkatkan operan berdasarkan nilai dari operan sebelah kanan. <br>

  ```
  9 ** 2 = 81
  2 ** 3 = 8
  ```

- **Pembagian Bulat** <br>
  Sama seperti pembagian. Hanya saja hasil pembagian dibulatkan kebawah.

  ```
  9 // 2 = 4
  8 // 3 = 3
  ```

<br>

<div id="operator-perbandingan"></div>

## Operator Perbandingan

<hr>

Operator perbandingan (_comparision operators_) adalah suatu operator yang digunakan untuk membandingkan suatu nilai atau kondisi dari masing - masing operan.

Keluaran operator perbandingan hanya ada 2 yaitu `True` dan `False`

| Operator                            | Penggunaan |
| ----------------------------------- | ---------- |
| Sama Dengan (`==`)                  | `x == y`   |
| Tidak Sama Dengan (`!=`)            | `x != y`   |
| Lebih Besar Dari (`>`)              | `x > y`    |
| Lebih Kecil Dari (`<`)              | `x < y`    |
| Lebih Besar Atau Sama Dengan (`>=`) | `x >= y`   |
| Lebih Kecil Atau Sama Dengan (`<=`) | `x <= y`   |

- **Sama Dengan** <br>
  Bernilai `True` Jika masing-masing operan memiliki nilai yang sama, maka kondisi bernilai benar atau `True` jika salah maka `False`.<br> `12 == 12` -> `True`<br> `11 == 12` -> `False`

- **Tidak Sama Dengan** <br>
  Bernilai `True` Jika masing-masing operan memiliki nilai yang **TIDAK** sama, sebaliknya jika nilai bernilai sama maka `False`.<br> `1 != 2` -> `True`<br> `2 == 2` -> `False`

- **Lebih Besar Dari** <br>
  Bernilai `True` Jika operan disebelah kiri memiliki nilai yang lebih **BESAR** dari nilai operan sebelah kanan, dan sebaliknya. <br> `900 > 10` -> `True`<br> `10 > 1000` -> `False`

- **Lebih Kecil Dari** <br>
  Bernilai `True` Jika operan disebelah kiri memiliki nilai yang lebih **KECIL** dari nilai operan sebelah kanan, dan sebaliknya. <br> `10 < 1000` -> `True`<br> `999 < 1` -> `False`

- **Lebih Besar Atau Sama Dengan** <br>
  Bernilai `True` Jika operan disebelah kiri memiliki nilai yang lebih **BESAR** atau **SAMA** dari nilai operan sebelah kanan, dan sebaliknya. <br> `999 => 10` -> `True` <br> `10 => 10` -> `True`

- **Lebih Kecil Atau Sama Dengan** <br>
  Bernilai `True` Jika operan disebelah kiri memiliki nilai yang lebih **KECIL** atau **SAMA** dari nilai operan sebelah kanan, dan sebaliknya. <br> `20 =< 20` -> `True` <br> `2 =< 230` -> `True`

<br>

## Operator Penugasan

<hr>

Operator penugasan adalah sebuah operator yang digunakan untuk memodifikasi nilai dari operator yang sudah ada.

| Operator | Penggunaan | Sama Seperti | Contoh                |
| -------- | ---------- | ------------ | --------------------- |
|          |            |              | _Anggap x = 5_        |
| `=`      | `x = y`    | `x = y`      | **x = 5**             |
| `+=`     | `x += y`   | `x = x + y`  | **x += 3** -> **8**   |
| `-=`     | `x -= y`   | `x = x - y`  | **x -= 3** -> **2**   |
| `*=`     | `x *= y`   | `x = x * y`  | **x \*= 3** -> **15** |
| `/=`     | `x /= y`   | `x = x / y`  | **x /= 2** -> **2.5** |
| `%=`     | `x %= y`   | `x = x % y`  | **x %= 2** -> **1**   |
| `//=`    | `x //= y`  | `x = x // y` | **x //= 2** -> **2**  |
| `**=`    | `x **= y`  | `x = x ** y` | **x = 2** -> **9**    |
| `&=`     | `x &= y`   | `x = x & y`  | **x &= 3** -> **1**   |
| `^=`     | `x ^= y`   | `x = x ^ y`  | **x ^= 3** -> **6**   |
| `>>=`    | `x >>= y`  | `x = x >> y` | **x >>= 3** -> **0**  |
| `<<=`    | `x <<= y`  | `x = x << y` | **x <<= 3** -> **40** |

Mungkin ada beberapa operan yang belum kita ketahui, tapi tenang kita akan membahasnya lebih lanjut.

<br>

## Operator Logika

<hr>

Operator Logika adalah operator yang digunakan untuk menghasilkan _return_(`True` atau `False`) dari suatu kondisi dengan menggabungkan _statement_ yang berbeda.

| Operator      | Penggunaan              |
| ------------- | ----------------------- |
| Dan (`and`)   | `(x == y) and (a == b)` |
| Atau (`or`)   | `(x == y) or (a == b)`  |
| Bukan (`not`) | `not x == y`            |

- **Dan** <br>
  Membandingkan dua _statement_, menghasilkan nilai `True` jika **kedua**nya bernilai **benar**(`True`), dan jika **salah satu** _statement_ **salah** maka hasilnya `False`. Walaupun _statement_ lainnya bernilai `True`. <br> `(10 == 10) and (20 == 20)` -> `True` <br> `(10 == 9) and (20 == 20)` -> `False`

- **Atau** <br>
  Membandingkan dua _statement_, menghasilkan nilai `True` jika **salah satu**nya bernilai **benar**(`True`), dan jika **kedua** _statement_ **salah** maka hasilnya `False`. Walaupun _statement_ lainnya bernilai `False`. <br> `(10 == 9) and (20 == 20)` -> `True` <br> `(8 == 10) and (9 == 20)` -> `False`

- **Bukan** <br>
  Menghasilkan hasil sebaliknya, jika nilai operan adalah **benar**(`True`), maka hasilnya akan `False`, dan jika nilai operan adalah **salah** (`False`), maka hasilnya `True`. <br> `not (20 == 20)` -> `False` <br> `not (20 == 10)` -> `True`

<br>

## Operator Identitas

<hr>

Operator Identitas adalah operator yang digunakan untuk membandingkan _object_. Jika _object_ bernilai sama dan memiliki lokasi memori yang sama maka hasilnya `True`.

> Hampir sama seperti perbandingan (`==` dan `!=`) tetapi lebih spesifik dan lebih agresif dalam melakukan perbandingan

| Operator | Penggunaan   | Contoh                                                          |
| -------- | ------------ | --------------------------------------------------------------- |
| `is`     | `x is y`     | `{} is dict()` -> `False` <br> `10 is 10` -> `True`             |
| `is not` | `x is not y` | `[] is not list()` -> `True` <br> `"ad" is not "ad"` -> `False` |

<br>

<div id="operator-keanggotaan"></div>

## Operator Keanggotaan

<hr>

Operator Kenggotaan adalah operator yang digunakan untuk mengecek apakah nilai operan berada di dalam _sequence_ (list, dictionary, tuple).

| Operator | Penggunaan   | Contoh                         |
| -------- | ------------ | ------------------------------ |
| `in`     | `x in y`     | `5 in [1,2,3,4,5]` -> `True`   |
| `not in` | `x not in y` | `5 not in [2,3,4,6]` -> `True` |

<br>

<div id="operator-bitwise"></div>

## Operator Bitwise

<hr>

Operator Bitwise adalah operator yang digunakan untuk membandingkan data binari. Biasa digunakan untuk membuat rangkaian logika (_AND, OR, XOR, NOT_).

| Operator | Alias                | Penggunaan |
| -------- | -------------------- | ---------- |
| `&`      | _AND_                | `x & y`    |
|          | _OR_                 |            |
| `^`      | _XOR_                | `x ^ y`    |
| `~`      | _NOR_                | `~x`       |
| `<<`     | _Binary Left Shift_  | `x << y`   |
| `>>`     | _Binary Right Shift_ | `x >> y`   |

- **AND** <br>
  Jika masing - masing operan memiliki bit `1` pada setiap pembanding, maka nilainya `1`.

  ```python
  a = 60            # 60 = 0011 1100
  b = 13            # 13 = 0000 1101
  c = a & b         # 12 = 0000 1100
  print(c)
  ```

- **OR** <br>
  Jika salah satu atau kedua operan memiliki bit `1` pada setiap pembanding, maka nilainya `1`.

  ```python
  a = 60            # 60 = 0011 1100
  b = 13            # 13 = 0000 1101
  c = a | b         # 61 = 0011 1101
  print(c)
  ```

- **XOR** <br>
  Jika hanya salah satu operan memiliki bit `1` pada setiap pembanding, maka nilainya `1`, jika pembanding memilki nilai sama maka `0`.

  ```python
  a = 60            # 60 = 0011 1100
  b = 13            # 13 = 0000 1101
  c = a ^ b         # 49 = 0011 0001
  print(c)
  ```

- **NOR** <br>
  Membalik semua nilai pada bit.

  ```python
  a = 60            # 60 = 0011 1100
  c = ~a;           # -61 = 1100 0011
  print(c)
  ```

- **Binary Left Shift**<br>
  Mengubah posisi biner ke kiri dengan menambahkan nilai `zero`.

  ```python
  a = 60            # 60 = 0011 1100
  c = a << 2;       # 240 = 1111 0000
  print(c)
  ```

- **Binary Right Shift**<br>
  Mengubah posisi biner ke kanan dengan menambahkan nilai `zero`.

  ```python
  a = 60            # 60 = 0011 1100
  c = a >> 2;       # 15 = 0000 1111
  print(c)
  ```
