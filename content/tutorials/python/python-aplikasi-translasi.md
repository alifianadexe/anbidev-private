+++
title = "Aplikasi Penerjemah Dengan Python Dan Googletrans"
description = "Membuat program penerjemah dengan python dan bantuan library googletrans"
type = ["tutorials","tutorial"]
status = "publish"
tags = [
    "python",
    "funcode"
]
draft=false
date = "2021-02-28"
tutorials = [
    "python"
]
series = "Fun Code"
authors = "adexe"
shortcode = "Penerjemah"
url = "/python-aplikasi-translate/"
cover = "/post/fun-code-python.jpg"
sumber = []
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Kembali lagi di python FunCode sekarang Anbi bakal share tentang cara membuat aplikasi penerjemah bahasa menggunakan python dan library gooogletrans.

Apa itu **googletrans**?

Bagaimana aplikasi ini bekerja? pertama user akan menginputkan terlebih dahulu kata/kalimat yang ingin ditranslasi. Kemudian `googletrans` akan mendeteksi dari bahasa apa kata/kalimat yang diinput.


Mari langsung saja kita mulai cara bikinnya.

<br>

## Install dan Pakai!
 
<hr>

Pertama, mari kita install terlebih dahulu library **googletrans** menggunakan [PIP](https://anbidev.com/python-pip).


Disini anbi bakal pakai versi paling baru yang juga masih *betha*.

```bash
pip install googletrans==3.1.0a0
```

Nah, ketika selesai install, cara menggunakan library ini juga cukup mudah. Hanya dengan import library, buat object, lalu mulai translate!.

```python
>>> from googletrans import Translator
>>> translator = Translator()
>>> translator.translate('안녕하세요.')
# <Translated src=ko dest=en text=Good evening. pronunciation=Good evening.>
>>> translator.translate('안녕하세요.', dest='ja')
# <Translated src=ko dest=ja text=こんにちは。 pronunciation=Kon'nichiwa.>
>>> translator.translate('veritas lux mea', src='la')
# <Translated src=la dest=en text=The truth is my light pronunciation=The truth is my light>
```

<br>

## Buat Program Simpel!

<hr>

Oke intro nya sudah, mari kita masuk ke dalam kode.

Dari sini mari kita buat sebuah program yang sangat simpel, dimana ia akan mentranslasikan text yang kita inputkan ke bahasa yang kita inginkan. 

```python
from googletrans import Translator, LANGUAGES

translator = Translator()
text = input("Masukkan Text : ")
bahasa = input("Terjemahkan ke Bahasa :")  
hasil = translator.translate(text, dest = bahasa)

print("Dari ", LANGUAGES[hasil.src], " : ", text)
print("Ke ", LANGUAGES[hasil.dest], " : ", hasil.text)
print("Pronounsiasi : ", hasil.pronunciation)
```

Mari kita coba kode diatas 

```
Masukkan Text : I will always love you Mikasa!
Terjemahkan ke Bahasa : id
Dari  english  :  I will always love you Mikasa!
Ke  indonesian  :  Aku akan selalu mencintaimu Mikasa!
Pronounsiasi :  Aku akan selalu mencintaimu Mikasa!
```

Untuk kode bahasa, kalian bisa melihat kode list bahasa [disini](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) atau kalian bisa melihatnya pada variabel `googletrans.LANGUAGES` atau `googletrans.LANGCODES`.

```python
print(googletrans.LANGUAGES)
```

Kita coba lagi dengan bahasa yang lain, misal jepang dengan kode `ja`.

```
Masukkan Text : I will always love you Mikasa!
Terjemahkan ke Bahasa : ja
Dari  english  :  I will always love you Mikasa!
Ke  japanese  :  私はいつもあなたを愛しますミカサ！
Pronounsiasi :  Watashi wa itsumo anata o aishimasu mikasa!
```

Itulah program penerjemah paling simple menggunakan python dengan library googletrans.

<br>

## Lebih Jauh Dengan Googletrans!

<hr>

Jika kita eksplor lebih jauh tentang library ini, banyak hal yang bisa kita ambil manfaatnya.

Misal kita ingin mendeteksi *"sumber kalimat ini dari bahasa apa?"*. Kita bisa tahu kalimat ini dari bahasa mana dengan kode berikut.

```python
from googletrans import Translator, LANGUAGES

translator = Translator()

kalimat = '이 문장은 한글로 쓰여졌습니다.'

detection = translator.detect(kalimat)

print("Kalimat ini berasal dari bahasa", LANGUAGES[detection.lang])
print("Dengan kemiripan sebesar", (detection.confidence * 100), "%")
```

Nih outputnya :

```
Kalimat ini berasal dari bahasa korean
Dengan kemiripan sebesar 100.0 %
```




