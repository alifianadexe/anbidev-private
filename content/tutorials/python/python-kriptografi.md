+++
authors = "adexe"
tutorials = ["python"]
cover = "/post/python-cryptography.jpg"
date = 2021-03-05T00:00:00Z
description = "Mari kita belajar apa saja kriptografi yang ada dan bagaimana penerapannya menggunakan Python"
series = "More Python"
shortcode = "Kriptografi"
status = "publish"
draf=false
tags = ["algoritma", "python", "library"]
title = "Belajar Kriptografi Dengan Python"
type = ["tutorials", "tutorial"]
url = "/python-kriptografi/"
sumber = ['https://devqa.io/cryptography-basics/','https://pycryptodome.readthedocs.io/']
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++

Baiklah anbies mari kita belajar kriptografi. Bagi sebagian orang keamanan data sangat diprioritaskan saat membuat aplikasi. 

Ancaman dari hacker atau cracker akan selalu menjadi momok yang menakutkan untuk sebagian orang, maka dari, salah satu cara menghindari dari bobolnya sistem keamanan adalah dengan menyamarkannya.

Disini kita akan membahas tentang cara menerapkan **kriptografi** dengan **Python**. Dari kalian yang tertarik tentang keamanan data mungkin bisa nih, disimak terlebih dahulu.

<br>

## Fundamental

<hr>

**Kriptografi** adalah proses menyembunyikan informasi dengan cara mengkonversi data yang dapat dibaca, kedalam data yang tidak bisa dibaca menggunakan sejumlah kunci (*key*) atau algoritma enkripsi.

Apa saja yang bisa kita enkripsi? Informasi yang dapat kita enkripsi menggunakan kriptografi meliputi email, gambar, video, file dan data sensitif lainnya. 

Tujuan dari kriptografi adalah untuk memastikan informasi yang terenkripsi selalu tetap rahasia, integritas, otentikasi dan asli tidak terbantahkan (non-repudiation).

Kriptografi dibagi menjadi 2 tipe : 

 * ***Symmetric encryption*** - menggunakan satu kunci (*key*) untuk mengenkripsi dan mendekripsi sebuah informasi yang dikirim atau diterima.

 * ***Asymmetric enryption*** - menggunakan kunci (*key*) yang berbeda - beda untuk mengenkripsi dan mendekripsi sebuah informasi yang dikirim atau diterima.


<br>

 ## Cipher 

 <hr>

 ***Chiper*** (sandi) merujuk pada sebuah algoritma apa yang digunakan saat mengenkripsi dan mendekripsi sebuah informasi. 

 *Chiper* dibagi menjadi 2 golongan, *classical ciphers* dan *modern ciphers*.

 * ***Classical Cipher*** adalah cipher yang memanipulasi karakter secara tradisional, seperti mengganti huruf menjadi angka. Dikategorikan menjadi 2 : 

    * *Substitution cipher*  dimana data akan diganti dengan sandi atau karakter lain.
    * *Transposition cipher* dimana data akan diatur ulang membentuk sebuah sandi.

* ***Modern Cipher*** adalah cipher yang memanfaatkan algoritma matematika dan beroperasi menggunakan urutan byte binari. Inipun dibagi menjadi 2

    * Cipher Berbasis Kunci (*Key*) seperti *Symmetric* dan *Asymmetric* encryption.
    * Cipher Berbasis Input, yang terbagi juga menjadi *block cipher* dan *stream cipher*.

<br>

!["Kriptografi Dalam Kerang"](/post/python-cryptography-01.jpg "Kriptografi Dalam Kerang")

<br>


## Library Kriptografi Python

<hr>

Dalam tutorial ini anbi bakal menggunakan library kriptografi bernama  [pycryptodome](https://pycryptodome.readthedocs.io/en/latest/src/introduction.html). Ini adalah library kriptografi tingkat-rendah yang memiliki banyak fungsi algoritma enkripsi.

Untuk cara installnya bisa menggunakan [pip](https://anbidev.com/Python-pip).

```bash
pip  install pycryptodome
```

Selain itu Python juga memiliki *built-in library* yang sudah ada pada standard package Python bernama `cryptography`. Untuk ini akan kita bahas diakhir, kita akan fokus menggunakan `pycryptodome`. 

<br>

## Encoding Dan Decoding String Dengan Python 

<hr>

Sebelum kita masuk ke dalam penerapan masing - masing algoritma enkripsi, anbi mau kasih tau terlebih dahulu tentang *`encoding()`* dan *`decoding()`* string dengan Python.

***Encoding*** adalah proses mengkonversi [string](https://anbidev.com/Python-string) menjadi kumpulan *bytes array*. ***Decoding*** sebaliknya.

Contoh : 

```Python
data = "Kata pythön akan di encode!"

# encode
data = data.encode()
print(data)
```

Output Encode :

```
b'Kata pyth\xc3\xb6n akan di encode!'
```

Ada tambahan `b' '` pada string yang di encode, juga karakter "ö" akan tergantikan oleh kode karakter di `UTF-8`.

Untuk *decode* bagaimana? caranya juga hampir sama : 

```Python
data = b'Kata pyth\xc3\xb6n akan di decode!'

data = data.decode()
print(data)
```

Output Decode : 

```
Kata pythön akan di decode!
```

Untuk penjelasan lebih lanjut kalian bisa lihat dijawaban *stack overflow* [disini](https://stackoverflow.com/questions/7585435/best-way-to-convert-string-to-bytes-in-Python-3/7585619#7585619).


<br>

## Algoritma Enkripsi Bersama Python

<hr>

Ketika kita sudah mengerti fundamental dalam mengawali kriptografi, sekarang kita akan mencoba menerapkan beberapa algoritma enkripsi menggunakan Python.

<br>

### DES

<hr>

**DES** (*Data Encryption Standard*) adalah standar enkripsi data menggunakan algoritma *symmetric encryption*. 

Pada algoritma ini, kunci (*key*) hanya memiliki ukuran blok data tetap sebesar **8 byte**. Tetapi, *Secret Key* yang digunakan untuk enkripsi dan dekripsi ada 64 byte. 56 byte digenerate secara random, dan 8 byte digunakan untuk *error checking*.

Mari kita masuk kedalam kode. Untuk cara enkripsi DES menggunakan Python cukup seperti ini :

```Python
# encryption
from Crypto.Cipher import DES
from Crypto.Util.Padding import pad

data = "Data ini akan dienkripsi"

# 8 byte block 
key = b'1n1kunC1' 

# Menetapkan panjang data yang akan dienkripsi
BLOCK_SIZE = 32 

des = DES.new(key, DES.MODE_ECB)
padded_text = pad(data.encode(), BLOCK_SIZE)
encrypted_text = des.encrypt(padded_text)

print(encrypted_text)
```

Nilai pada data akan terenkripsi menjadi seperti ini :

```
b'p8\xf1\\f\xd9\xd1\n*\x8d\taa\xb0\xa4\xec\x1a\x19\xb4sB\x84E\xcd\xad\xc8\xb4\xfd\x89\xc3k!'
```

Lalu bagaimana cara kita mendekripsi nya? kita juga perlu kunci (*key*) untuk mendekripsi data yang terenkripsi.

```Python
# decryption
key = b'1n1kunC1' # 8 byte block
des = DES.new(key, DES.MODE_ECB)
decrypted_text = des.decrypt(encrypted_text)

print(decrypted_text.decode())
```

Dan ini hasil dekripsi nya.

```
Data ini akan dienkripsi
```

> Dalam melakukan dekripsi, bisa diibaratkan seperti membuka pintu yang terkunci, kita membutuhkan **kunci** (*key*) untuk membukanya. 


<br>

### AES 

<hr>

Berbeda dengan DES, untuk **AES** (*Advanced Encryption Standard*) adalah algoritma *symmetric-key* yang melakukan operasi yang sama setiap kali.

Memiliki block tetap sejumlah **128 byte**, yang nantinya akan menjadi tiga kunci yang masing - masing memiliki panjang 128, 192 dan 256 byte.

AES dikenal cukup cepat dan aman, serta secara *defacto* diakui sebagai standar algoritma enkripsi simetris. 

Mari kita langsung ke penerapan enkripsi AES menggunakan Python : 

```Python
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes

data = 'Data ini akan di enkripsi!'
key = b'1n1kuNc1k174h3h3' # 16 block size

# encryption
cipher = AES.new(key, AES.MODE_EAX)
nonce = cipher.nonce
ciphertext, tag = cipher.encrypt_and_digest(data.encode())

print(" nonce : ", nonce)
print(" tag : ", tag)
print(" enkripsi : ", ciphertext)
```

Dan berikut hasil dari enkripsi (`ciphertext`) beserta dua kunci enkripsi lainnya (`nonce` dan `tag`).

```
nonce :  b'\xa9\xbeq]H\xfcF\xe7\xe9iR\xc0\x80gcj'
tag :  b'\xb7`\x8aZ\x15I" \xeb\xd9b\x00\xfe \x0eK'
enkripsi :  b'3\xdbGx\xd2\x8b\xe6}&\xd0\x1f\x84g\x01\xb1\x0b\x7f\xd7d\xdf/\x98\x12\xaf6\x0e'
```

Lalu untuk dekripsi data, kita juga perlu memiliki ketiga enkripsi data tersebut (`chipertext`, `nonce`dan `tag`) agar kita dapat mengetahui data aslinya. 

```Python
# decryption
key = b'1n1kuNc1k174h3h3' # 16 block size

cipher = AES.new(key, AES.MODE_EAX, nonce)
data = cipher.decrypt(ciphertext)
try:
    cipher.verify(tag)
    print(data.decode())
except ValueError:
    print("Kunci salah atau data korup!")
```

Jika ketiga data tersebut benar, maka output yang dihasilkan juga akan benar.

```
Data ini akan di enkripsi!
```

Akan tetapi jika salah satu dari ketiga data atau kunci untuk membuka enkripsi data itu **salah**. Maka dekripsi tidak bisa dilakukan dan akan muncul error seperti ini.

```
Kunci salah atau data korup!
```

Inilah yang membuat AES menjadi standarisasi enkripsi dikarenakan menggunakan lebih dari satu kunci serta menguji keaslian data.

<br>

### Blowfish

<hr>

**Blowfish** adalah algoritma blok simetris yang didesain oleh *Bruce Schneier*. Memiliki blok data tetap sebesar **8 byte** dan memiliki panjang kunci (*key*) yang bervariasi, mulai dari **32** sampai **448 byte**.

Blowfish dipercaya sangat cepat dan aman. Namun, kunci yang dimiliki oleh algoritma ini cukup besar untuk menahan serangan *brute force*.

Berikut contoh penerapannya di Python.

```Python
from Crypto.Cipher import Blowfish
from struct import pack

key = b'KeyIniSangatlahPanjang'
data = b'Mari kita enkripsi!'

bs = Blowfish.block_size

cipher = Blowfish.new(key, Blowfish.MODE_CBC)

plen = bs - len(data) % bs

padding = [plen]*plen
padding = pack('b'*plen, *padding)
msg = cipher.iv + cipher.encrypt(data + padding)

print(msg)
```

Dan ini hasil enkripsinya

```
b'\xfc\xd90\xb8\x8b*\x9f@ZX\xf3?\x86\xd5jcV\xe9I\x9fA\x95]#\xa4b\xa3\x00-[M\x8f'
```

<br>

### RSA 

<hr>

**RSA** (*Rivest–Shamir–Adleman*) adalah algoritma untuk generate *public key* paling populer didunia. Algoritma ini telah bertahan dari serangan selama lebih dari 30 tahun, dan oleh karena itu dianggap cukup aman untuk standar sistem keamanan data.

Algoritma ini biasa digunakan dalam mengamankan data konfidensial (enkripsi) dan autentikasi (*digital signature*). RSA juga menggunakan kedua *private* dan *public key* saat proses enkripsi dan dekripsi.

Contoh penerapan RSA menggunakan Python : 

```Python
from Crypto.PublicKey import RSA

secret_code = "AnibDevIsKey"
key = RSA.generate(1024)
private_key = key.export_key(passphrase=secret_code, pkcs=8,
                             protection="scryptAndAES128-CBC")
public_key = key.publickey().export_key()
```

Pada kode diatas, akan terdapat 2 data yang di*generate* pertama ***private key*** serta ***public key***. 

* ***private key*** adalah data yang nantinya akan dikirim.
* ***public key*** adalah data yang digunakan untuk verifikasi.

Untuk yang penasaran hasil generate *private key* dan *public key* dari kode diatas bisa dilihat [disini](https://jpst.it/2rwl0).

Dan untuk mendekripsi *private key*, sama seperti algoritma lainnya kita juga perlu kunci untuk membukanya. Bedanya, kalau yang tadi `export_key` kalau ini `import_key`.

```Python
secret_code = "AnibDevIsKey"
key = RSA.import_key(encrypted_key, passphrase=secret_code)
public_key = key.publickey().export_key()
```

RSA bisa diibaratkan seperti koper yang akan dikirim, *private key* adalah kopernya dan *public key* adalah isi dari koper tersebut. Ketika koper sudah sampai, kunci yang digunakan untuk membuka dan menutup tetap sama.

<center> . . . </center>

Baiklah kawan, mungkin sampai disini dulu anbi bahasnya, kemungkinan artikel ini akan anbi update lagi atau anbi buat part 2 nya, karena memang masih banyak yang belum anbi sampaikan tentang macam - macam kriptografi di artikel ini.