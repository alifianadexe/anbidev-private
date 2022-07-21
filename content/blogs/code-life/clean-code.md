+++
authors = "adexe"
categories = ["code-life"]
cover = "/post/clean-code1.jpg"
date = 2021-01-08T00:00:00Z
description = "Belajar cara menulis kode dengan format yang benar, rapi dan mudah dibaca"
series = "wawasan"
status = "publish"
sumber = ["https://medium.com/dot-lab/5-cara-mudah-menerapkan-clean-code-b2e0ec1b860e"]
tags = ["blog", "code-life", "developer"]
title = "Menerapkan Clean Code Pada Script Kita"
type = ["blogs", "blog"]
url = "/clean-code/"
[author]
images = "/img/adexe.jpg"
name = "Adexe"

+++
Saat kita menulis _script code_ untuk aplikasi kita, kebanyakan dari hanya mementingkan kode yang kita buat berjalan dengan lancar. Jarang sekali kita memerhatikan tentang kualitas kode yang kita buat.

Bagaimana cara meningkatkan kualitas kode yang kita buat? caranya adalah dengan menerapkan **_Clean Code_**.

<br>

## Apa itu Clean Code?

<hr>

**Clean code** adalah konsep penulisan kode script aplikasi dengan format yang baik dan benar serta rapi dengan tujuan memudahkan penulis atau orang lain memelihara (*maintanance*) kode yang kita buat.

!["Apa itu Clean Code?"](/post/clean-code-01.jpg "Apa itu Clean Code?")

Orang yang sudah sering menerapkan **_clean code_** akan berfikir untuk membuat kodenya mudah dipahami oleh orang lain. Didalam pikirannya sering berputar pertanyaan seperti.

**_"Apakah kode yang ku buat mudah dibaca?"_**

**_"Apakah orang lain paham tentang kode yang ku buat?"_**

**_"Kode ini tadi buat apa ya? aku kasih penjelasan ga ya?"_**

Saat pertama kali Anbi masuk ke dalam sebuah *team project*, anbi diajarkan tentang konsep clean code ini. Supaya orang - orang dalam *team project* tidak kebingungan atau salah paham tentang kode yang anbi buat.

Maka dari itu dibuatlah sebuah format dan peraturan tentang cara menulis aplikasi yang team anbi develop. Seperti apa penerapan **_Clean Code_** ini? mari kita bahas satu persatu.

<br>

## Penulisan Variabel, Fungsi Dan Class 

<hr>

Ini adalah hal yang paling vital dalam membuat aplikasi bersama team. Dalam memberi nama kita tidak boleh asal. Buatlah nama yang **singkat, jelas dan padat** sesuai konteks variabel atau fungsi tersebut.

**Jangan seperti ini :**

```python
class ini_classku():
    
    def __init__(self, param1, param2, umr1):
        self.param1 = param1
        self.param2 = param2
        self.umr = umr1

    def tampilkan(self):
        print(self.param1, self.param2)
```

**Buatlah seperti ini :**

```python
class Employee():
    
    def __init__(self, firstName, lastName, age):
        self.firstName = firstName
        self.lastName = lastName
        self.age = age

    def getEmployee(self):
        print(self.firstName)
        print(self.lastName)
        print(self.age)
```

Penamaan yang baik meliput penerapan **`camelCase`** dan juga tujuan variabel , fungsi dan class itu dibuat.


<br>

## Indentasi Kode

<hr>

Bagi yang baru belajar ngoding, mereka sering mengabaikan tentang masalah indentasi. Mungkin untuk kalian yang menggunakan bahasa python indentasi ini sangat penting.

Tapi untuk bahasa yang lain, indentasi masih bisa diabaikan. Padahal indentasi diterapkan agar kode kalian bisa lebih rapi dan enak dibaca.

!["Indentasi?"](/post/clean-code-02.jpg "Indentasi?")

### Tips

Agar lebih cepat dalam merapikan kode, coba gunakan **Text Editor** seperti *Visual Studio Code* atau *Sublime*. Lalu gunakan fitur auto format yang mereka miliki :

- Visual Studio Code :
  - <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> => Format Script Otomatis
  - <kbd>Ctrl</kbd> + <kbd>K</kbd> + <kbd>D</kbd> => Indentasi otomatis

- Sublime :
  - <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> => Untuk Membuka Pallete
  - Ketik "Reindent".

<br>

## Beri Komentar

<hr>

Kita sudah menulis banyak baris kode dan setelah berjalan dengan baik kita meninggalkannya begitu saja. Dan setelah beberapa lama kita kembali ke kode tersebut dan muncul pertanyaan.

***"Kode ini dulu untuk apa ya?"***

Hal ini Sering kali terjadi kepada kita, lupa tentang kode yang sudah kita buat. Maka dari itu alangkah baiknya berikan sedikit penjelasan dengan komentar pada kode, fungsi atau variabel yang kita buat. 


```javascript
/* 
Fungsi untuk mengkalkulasi ledakan nuklir!
:hydrogen -> float
:neutron -> int
*/ 
function calculateNuclear(hydrogen, neutron){
    ...
}
```

Seperlunya saja, yang paling penting orang lain atau kita sendiri dapat terbantu dengan komentar yang kita berikan ketika perlu memelihara (*maintenance*) kode atau mengembangkan aplikasi tersebut.


<br>

##  Efisiensi Kode 

<hr>

Sering kali kita melakukan duplikasi pada kode yang memiliki proses nya sama untuk menghasilkan nilai yang berbeda. Contoh.

```python
for huruf in kata1:
    if huruf == "X":
        print("Ada Kata X")
        break

for huruf in kata2:
    if huruf == "Y":
        print("Ada Kata Y")
        break
```

Memang, kebanyakan dari kita saat melakukan *solving problem* lebih mengutamakan hasil dari pada proses. Tetapi tidak ada salahnya membuat kode lebih simple dan efisien untuk meningkatkan kualitas kode kita.

Dari kode diatas bisa kita buat lebih simple dan efisien dengan mengubahnya seperti ini.

```python
def cariHuruf(siKata, siHuruf):
    for huruf in siKata:
        if huruf == siHuruf:
            print("Ada Kata", siHuruf)
            return
    
cariHuruf(kata1, "X")
cariHuruf(kata2, "Y")
```

Banyak sekali cara mengefisiensikan kode yang kita buat. Cuma ya, sering kali kita bingung *"kode yang perlu efisiensi yang mana ya?"*. Jam terbang dan latihan akan membantumu menemukan jawabannya saudara - saudara.

<br>

## Ambiguitas Pada Kondisi

<hr>

Saat kalian melihat sebuah kondisi, dan disana terdapat **nilai** yang kalian tidak kalian ketahui maksudnya maka bersabarlah. Contoh :

```javascript
if(auth == 4 && dest == 0){
  console.log("Anda Sudah Login!")
}
```

Mungkin kalian paham jika kode diatas bertujuan untuk memberi tahu bahwa kalian sudah login. Tapi, apakah kalian tahu maksud nilai **4** dan **0** yang dibandingkan diatas?

Okelah, jika yang buat pasti paham, tapi jika orang lain yang lihat apakah dia juga paham? Anbi sering dimarahin gara - gara membuat **kondisi yang ambigu**. 

Lebih baik dibuat seperti ini : 

```javascript
const SUCCESS_AUTH = 4
const LOG_IN = 0

if(auth == SUCCESS_AUTH && dest == LOG_IN){
  console.log("Anda Sudah Login!")
}
```

Atau seperti ini : 

```javascript
if(auth.isAuth() && dest.isLogin()){
  console.log("Anda Sudah Login!")
}
```

Nah, lebih jelas kan kondisi yang kita buat, jadi orang lain pun paham maksud dari kondisi diatas walau tidak kita beri komentar.

<center> . . . </center>

Penerapan *Clean Code* tidaklah sulit, kita hanya perlu membiasakan sehingga menjadi kebiasaan kita dalam membuat kode yang berkualitas. 

Banyak sekali manfaat yang bisa kita ambil dari kebiasaan itu, bukan hanya kita sendiri tapi orang lain. Mulai dari kemudahaan pembacaan kode, pemeliharaan aplikasi ataupun esensi kode yang kita buat.

Nah mungkin itu aja yang  bisa Anbi sampaikan, kita mulai terapkan ini yuk!