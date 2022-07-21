+++
authors = "adexe"
categories = ["serapan"]
cover = "/post/web-solid.jpg"
date = 2021-06-18T00:00:00Z
description = "Mengenali serta belajar apa itu prinsip SOLID pada pemrograman berbasis objek serta penerapannya menggunakan bahasa Python"
series = "serapan"
status = "publish"
sumber = ["https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#single-responsibility-principle"]
tags = ["blog", "serapan", "code-life", "python"]
title = "Prinsip S.O.L.I.D Dalam Pemrograman Berorientasi Objek"
type = ["blogs", "blog"]
url = "/prinsip-solid/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
Dalam membuat sebuah aplikasi menggunakan paradigma pemrograman berbasis objek, sering kali kita menerapkan kode seadanya, yang penting bisa jalan dan sesuai kaidah.

Tapi pernahkah kalian berfikir untuk membuat kode yang mudah dimengerti, dikelola, dan dikembangkan. Didalam pemrograman berbasis objek terdapat prinsip bernama SOLID, yang bertujuan untuk membantu kalian dalam membuat program yang mudah pahami dan dikelola.

Penasaran tentang prinsip SOLID ini? mari kita bahas lebih dalam.

<br>

## Apa itu S.O.L.I.D ?

<hr>

**SOLID** adalah sebuah akronim dari lima prinsip _object-oriented design_ (OOD) oleh **Robert C. Martin**. Prinsip ini biasa diterapkan pada saat berkecimpung dalam pemrograman berorientasi objek.

Kelima prinsip ini adalah praktek dalam mengembangkan sebuah program dengan mempertimbangkan pemeliharaan serta pengembangan lebih lanjut agar kode mudah dirawat, mudah dimengerti serta fleksibel.

Mengadopsi prinsip ini dapat membantu kalian dalam menghindari _bad code_, membantu dalam _refactoring code_ serta pengembangan aplikasi secara Agile atau Adaptive.

Singkatan dari SOLID sendiri adalah :

- **S** - Solid-Responsibility Principle
- **O** - Open-Closed Principle
- **L** - Liskov Substitution Principle
- **I** - Interface Segregation Principle
- **D** - Dependency Inversion Principle

Nah, sekarang mari kita bahas satu setiap prinsip pada SOLID dengan contoh penerapannya menggunakan bahasa Python.

> Walaupun anbi pakai bahasa **Python**, tapi prinsip ini bisa dipakai untuk bahasa mana saja.

<br>

## 1. Single-Responsibility Principle

<hr>

Pada prinsip yang pertama, menyatakan bahwa :

> Setiap class hanya memiliki satu tugas, sehingga alasan untuk merubah class tersebut hanya satu, yaitu merubah tugas yang diberikan kepadanya.

Contoh, kita buat aplikasi untuk mencari luas dari bentuk bangun datar seperti _Lingkaran_ atau _Persegi_.

Lalu, kita buat class sesuai masing - masing bangunan dan sebuah fungsi _constructor_ untuk menyiapkan parameter yang diperlukan.

Nah, untuk class **`Lingkaran`** kode nya seperti ini:

```python
class Lingkaran:

    def __init__(self, radius):
        self.radius = radius
```

Sedangkan untuk class **`Persegi`** kodenya kita buat seperti ini:

```python
class Persegi:

    def __init__(self, panjang):
        self.panjang = panjang
```

Selanjutnya kita akan membuat _class_ **`Kalkulasi`** yang memiliki tugas untuk mengkalkulasi luas dari bangun datar yang tersedia.

```python
class Kalkulasi:

    def __init__(self, *args):
        self.bangunDatar = args

    def calculate(self):
        listLuas = []
        for objek in self.bangunDatar:
            luas = 0
            if type(objek).__name__ == 'Persegi':
                luas = math.pow(objek.panjang, 2)
            elif type(objek).__name__ == 'Lingkaran':
                luas = math.pi * math.pow(objek.radius, 2)
            listLuas.append(luas)

        return sum(listLuas)

    def output(self):
        return self.calculate()
```

Untuk menggunakan _class_ `Kalkulasi`, kamu perlu menginisialisasi kelas tersebut dan berikan beberapa array dari object lingkaran atau persegi.

Contohnya seperti ini :

- Sebuah Lingkaran yang memiliki radius 2
- Sebuah Persegi yang memiliki panjang 5
- Sebuah Persegi lain yang memiliki panjang 6

```python
if __name__ == "__main__":

    result = Kalkulasi(
        Lingkaran(2),
        Persegi(5),
        Persegi(6)
    )

    print("Jumlah luas dari bangunan ", result.output())
```

Output :

```
Jumlah luas dari bangunan  73.56637061435917
```

Masalah dengan metode ini adalah class `Kalkulasi` hanya menangani logika untuk satu jenis output dari hasil tersebut.

Contoh, jika kita ingin outputnya dalam bentuk JSON, atau kita ingin outputnya dalam bentuk yang lain.

Jika kita menempatkan logika untuk mengubah bentuk output pada class `Kalkulasi`, ini akan menyalahi prinsip **Single-Responsibility**.

Karena class `Kalkulasi` hanya dikhususkan menangani penjumlahan dari kumpulan bangun datar, ia tidak peduli outputnya akan seperti apa, mau itu JSON atau HTML.

Untuk mengatasi hal ini, kita bisa membuat class terpisah bernama `OutputKalkulasi` yang menangani logika untuk bentuk output yang diinginkan.

```python
class OutputKalkulasi:

    def __init__(self, kalkulasi):
        self.kalkulasi = kalkulasi

    def toJSON(self):
        result = {
            "result" : self.kalkulasi.output()
        }
        return json.dumps(result)

    def toText(self):
        with open('result.txt', 'w') as f:
            f.write(self.kalkulasi.output())

    def toBase64(self):
        result = base64.encode(self.kalkulasi.output())
        return result
```

Mari kita implementasikan

```python
if __name__ == "__main__":

    result = Kalkulasi(
        Lingkaran(2),
        Persegi(5),
        Persegi(6)
    )

    print("Jumlah luas dari bangunan ", result.output())

    calc_output = OutputKalkulasi(result)
    print("Dalam Bentuk JSON : ", calc_output.toJSON())
```

Dan ini adalah outputnya

```
Jumlah luas dari bangunan  73.56637061435917
Dalam Bentuk JSON :  {"result": 73.56637061435917}
```

Sekarang, logic untuk menangani bentuk dari output data sudah ditangani oleh class `OutputKalkulasi`, Dengan tetap menggunakan prinsip Single-Responsibility.

<br>

## 2. Open-Closed Principle

<hr>

Open-Close Principle adalah prinsip yang menyatakan bahwa Objek atau entitas itu terbuka untuk ekstensi tetapi tertutup untuk modifikasi.

Singkatnya, sebuah class harus bisa dikembangkan tanpa memodifikasi kelas itu sendiri.

Mari kita kembali ke kode kelas `Kalkulasi`, sekarang kita fokus pada fungsi `calculate`.

```python
class Kalkulasi:

    def __init__(self, *args):
        self.bangunDatar = args

    def calculate(self):
        listLuas = []
        for objek in self.bangunDatar:
            luas = 0
            if type(objek).__name__ == 'Persegi':
                luas = math.pow(objek.panjang, 2)
            elif type(objek).__name__ == 'Lingkaran':
                luas = math.pi * math.pow(objek.radius, 2)
            listLuas.append(luas)

        return sum(listLuas)

    def output(self):
        return self.calculate()
```

Misal kita ingin menambahkan tipe bangun datar yang lain, seperti hexagonal, segitiga atau jajar genjang.

Otomatis kita akan terus mengedit kelas `Kalkulasi` dan menambahkan `if/else` untuk setiap tipe bangun datar. Ini menyalahi prinsip Open-Closed Principle.

Maka, untuk membuat method `calculate` ini lebih baik adalah dengan menghapus logic `if/else` dan untuk setiap kelas bangun datar, kita buat satu fungsi khusus untuk menghitung luas.

Contoh, fungsi `luas` untuk menghitung kelas `Persegi`:

```python
class Persegi:

    def __init__(self, panjang):
        self.panjang = panjang

    def luas(self):
        return pow(self.panjang, 2)
```

Lalu untuk kelas `Lingkaran` kita tambahkan fungsi luas seperti ini :

```python
class Lingkaran:

    def __init__(self, radius):
        self.radius = radius

    def luas(self):
        return math.pi * pow(self.radius, 2)
```

Sehingga fungsi `calculate` bisa kita tulis ulang seperti ini :

```python
class Kalkulasi:
    # ...

    def calculate(self):
        listLuas = []
        for objek in self.bangunDatar:
            luas = objek.luas()
            listLuas.append(luas)

        return sum(listLuas)

    # ...
```

Dengan begini kita bisa membuat class tipe bangun datar yang lain tanpa harus mengubah kode pada class `Kalkulasi`

Tetapi ada permasalahan yang lain. Bagaimana cara kita mengetahui bahwa objek yang diberikan ke kelas `Kalkulasi` adalah objek tipe bangun datar serta memiliki fungsi `luas()`?.

Solusinya adalah dengan membuat **interface**, karena ini adalah bagian dari SOLID.

Buat sebuah kelas interface dengan nama `BangunDatar` :

```python
class BangunDatar:

    def luas():
        pass
```

Mari kita modifikasi kelas yang lain untuk mengimplementasikan interface :

Untuk yang kelas `Persegi` kita update seperti ini :

```python
class Persegi(BangunDatar):
    # ...
```

Dan juga untuk yang kelas `Lingkaran` kita update seperti ini :

```python
class Persegi(Interface):
    # ...
```

Lalu untuk fungsi `calculate` di kelas `Kalkulasi` kita tambahkan validasi apakah objek yang diberikan ini adalah implementasi dari interface kelas `BangunDatar` atau tidak. Jika tidak maka kita throw error.

```python
class Kalkulasi:
    # ...

    def calculate(self):
        listLuas = []
        for objek in self.bangunDatar:
            if isinstance(objek, BangunDatar):
                luas = objek.luas()
                listLuas.append(luas)
                continue

            raise Exception("This Object (",object,") Not Implementation of BangunDatar")

    # ...
```

Dengan begitu prinsip Open-Closed kita terapkan.

<br>

## 3.Liskov Substiution Principle

<hr>

Liskov-Substitution adalah prinsip yang menyatakan bahwa ketika terdapat kelas X yang diturunin dari class Y, maka objek yang berasal dari kelas Y harus bisa menggantikan dengan objek dari kelas X.

Singkatnya, setiap kelas turunan harus bisa menjadi pengganti untuk _base class_ atau kelas _parent_ nya.

Contoh paling sederhananya seperti ini :

### Bad Example

```python
class Burung:

    def __init__(self):
        pass

    def terbang(self):
        ''' Logic untuk terbang '''
        return True


class Elang(Burung):

    def __init__(self):
        pass
```

Berdasarkan skenario diatas sudah benar jika `Elang` bisa terbang karena turunan dari `Burung`.
Tapi bagaimana dengan skenario ini :

```python
class Penguin(Burung):

    def __init__(self):
        pass
```

Oke, memang benar `Penguin` itu `Burung`, tetapi apakah penguin **bisa terbang**? Tidak. Maka dari itu, penguin tidak bisa menggunakan method `terbang()`, yang berarti kita merusak prinsip LSP.

### Good Example

Sehingga untuk memperbaikinya, kita ubah sedikit skenario dalam kode tersebut. Dengan membedakan jenis burung setiap class.

```python
class Burung:

    def __init__(self):
        pass

class BurungTerbang(Burung):

    def __init__(self):
        pass

    def terbang(self):
        ''' Logic untuk terbang '''
        return True
```

Nah, lalu implementasinya untuk setiap tipe burung, bisa kita bedakan seperti ini :

```python
class Elang(BurungTerbang):
    def __init__(self):
        pass

class Penguin(Burung):
    def __init__(self):
        pass
```

Kira - kira contoh implementasi prinsip Liskov Substitution seperti itu.

<br>

## 4. Interface Segregation Principle

<hr>

Interface Segragation adalah prinsip yang menyatakan bahwa sebuah objek client tidak boleh dipaksa untuk mengimplementasikan sebuah interface yang tidak ia gunakan. Atau objek client tidak boleh bergantung pada metode yang tidak ia gunakan.

Sebuah interface tidak boleh menyediakan semua service untuk client objek. Satu interface hanya memiliki satu tugas spesifik untuk tiap clientnya.

Mari kita kembali ke kode kelas interface `BangunDatar`. Sekarang kebutuhan kita semakin berkembang, dan ingin menambahkan tipe bangun yang lain seperti `Kubus` dan `Tabung` dimana yang dicari adalah **volume**.

Coba kita lihat apa yang terjadi jika kita memodifikasi interface `BangunDatar` sesuai dengan skenario diatas.

```python
class BangunDatar:

    def luas():
        pass

    def volume():
        pass
```

Nah, yang terjadi adalah setiap class tipe bangunan harus mengimplementasikan method `volume()`. Padahal, bangun datar itu tidak memiliki volume. Sehingga kelas `Persegi` akan dipaksa untuk mengimplementasikan method `volume()`, kan lucu, gaada gunanya.

Secara koding, itu benar, tetapi secara prinsip dan konsep itu melanggar **Interface Segregation**. Maka lebih baiknya kita buat interface lain, yang memiliki sifat berbeda dengan ini.

```python
class BangunDatar:

    def luas():
        pass

class BangunRuang:

    def volume():
        pass

class Persegi(BangunDatar):

    def __init__(self, panjang):
        self.panjang = panjang

    def luas(self):
        return pow(self.panjang, 2)

class Kubus(BangunDatar, BangunRuang):

    def __init__(self, sisi):
        self.sisi = sisi

    def luas(self):
        return pow(self.sisi, 2)

    def volume(self):
        return pow(self.sisi, 3)
```

Nah, jika seperti ini mungkin lebih masuk akal dalam implementasi skenario awal. Sekarang mari kita ubah sedikit, agar kita bisa menyesuaikan kalkulasi di masing - masing tipe bangun datar atau bangun ruang dengan kelas `Kalkulasi` kita.

Penyesuaiannya kita lakukan dengan cara menambah kelas `KelolaKalkulasi` untuk menjembatani kelas - kelas bangun datar atau ruang dengan kelas `Kalkulasi`.

```python
class KelolaKalkulasi:
    def calculate(self):
        pass

class Persegi(BangunDatar, KelolaKalkulasi):
    def __init__(self, panjang):
        self.panjang = panjang

    def luas(self):
        return pow(self.panjang, 2)

    def calculate(self):
        return self.luas()

class Kubus(BangunDatar, BangunRuang, KelolaKalkulasi):
    def __init__(self, sisi):
        self.sisi = sisi

    def luas(self):
        return pow(self.sisi, 2)

    def volume(self):
        return pow(self.sisi, 3)

    def calculate(self):
        return self.luas()
```

Sekarang untuk kelas `Kalkulasi`, kita ubah sedikit kode pada fungsi `calculate` supaya semua kompenen yang kita buat diatas kembali terhubung.

```python
class Kalkulasi:

    def __init__(self, *args):
        self.bangunDatar = args

    def calculate(self):
        listLuas = []
        for objek in self.bangunDatar:
            if isinstance(objek, BangunDatar):
                luas = objek.calculate()
                listLuas.append(luas)
                continue

            raise Exception("This Object (",object,") Not Implementation of BangunDatar")

        return sum(listLuas)

    def output(self):
        return self.calculate()
```

Yaps, dengan ini penerapan prinsip **interface segregation** sudah sempurna.

<br>

## 5. Dependency Inversion Principle

<hr>

Dependency Inversion adalah prinsip yang menyetakan bahwa sebuah entitas itu bergantung pada abstraksi. Sehingga sebuah modul tingkat tinggi tidak boleh bergantung pada modul tingkat rendah, tetapi bergantung kepada abstraksi.

Maksud dari level-rendah dan level-tinggi disini adalah :

- modul level-tinggi (_high-level_) adalah interface atau abstraksi yang dikonsumsi secara langsung oleh kelas - kelas eksekutor atau user interface.

- modul level-rendah (_low-level_) adalah kumpulan dari beberapa modul kecil (_subsystem_) yang membantu modul level-tinggi dalam proses pekerjaannya.

Prinsip ini mengajarkan untuk memisahkan setiap modul agar dapat independen.

Oke kita langsung aja ke contohnya. Dibawah ini ada kelas bernama `ModelApp` yang terkoneksi dengan database MySQL :

```python
class MySQLConnection:

    def connect(self):
        # Logic untuk menghandle database connection
        return "Database Connection"


class ModelApp:

    def __init__(self, connection : MySQLConnection):
        # self connection
        self.connection = connection
```

Oke, yang pertama kelas `MySQLConnection` termasuk modul level-rendah, sedangkan kelas `ModelApp` adalah modul dengan level-tinggi.

Menurut prinsip **Dependency Inversion** konsep diatas menyalahi aturan, karena modul dengan level-tinggi() `ModelApp`) dipaksa untuk bergantung pada modul dengan level-rendah (`MySQLConnection`).

Bagaimana jika kita ingin mengganti koneksinya ke database yang lain seperti `DB2` atau `Oracle`?
Harus kalian ganti juga kodenya, kalau kalian ingin mengganti koneksinya. Inilah kenapa skenario diatas tidak memenuhi _Dependency Inversion_.

Maka dari itu, hal yang paling tepat adalah menambahkan sebuah abstraksi, dengan tujuan modul level tinggi tidak lagi bergantung dengan modul level-rendah, disini kita namakan dengan kelas `Koneksi`.

```python
class Koneksi:

    def connect():
        pass
```

Abstraksi / Interface ini akan kita implementasikan ke modul `MySQLConnection`, serta menjadi argument untuk modul `ModelApp`.

Sehingga apapun koneksi databasenya, kita bisa mudah menyesuaikanya tanpa harus mengganti kode inti dan menyalahi prinsip _Open-Close_.

```python
class Koneksi:

    def connect():
        pass

class MySQLConnection(Koneksi):

    def connect():
        # Logic untuk menghandle database connection
        return "Database Connection"

class ModelApp:

    def __init__(self, connection : Koneksi):
        # self connection
        self.connection = connection
```

Lihat, kode diatas membuat modul level-tinggi tidak lagi bergantung pada modul level-rendah, tetapi langsung bergantung pada Abstraksi / Interface.