+++
authors = "hamid"
cover = "/post/web-cepp.jpg"
date = 2021-02-16T17:00:00Z
description = "Belajar variable dan tipe data pada C++"
series = "Dasar C++"
shortcode = "Variable"
status = "publish"
sumber = ["https://www.tutorialspoint.com/Reserved-keywords-in-Cplusplus", "https://www.w3schools.com/cpp/cpp_variables.asp"]
tags = ["c++"]
title = "Variable pada C++"
tutorials = ["c++"]
type = ["tutorials", "tutorial"]
url = "variable-cpp"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Sebelumnya kita sudah membahas tentang [syntax dasar pada C++](https://www.anbidev.com/syntax-cpp/ "Syntax Dasar C++"). Selanjutnya Anbi akan bahas tentang variable. `Variable` adalah tempat untuk menyimpan nilai. Penulisan variable terdapat dua langkah, `deklarasi` dan `inisialisasi`. Lalu kita juga akan mendeklarasi variable beserta tipe datanya. Anbi akan bahas masing-masing pengertian keyword tadi.

<br>

### Tipe Data

<hr>

Data dibagi bermacam-macam sesuai dengan penggunaannya. Berikut masing-masing tipe data yang ada pada C++:

* `int` (integer), semua angka bulat tanpa desimal, contohnya 123, -123
* `double`, angka pecahan, contohnya 19.99, -19.99
* `char`, tipe data huruf, hanya satu karakter contohnya 'a' atau 'B'. Isi dari char ditulis dengan petik satu (single quote)
* `string`, tipe data huruf juga namun langsung menjadi sebuah kata atau kalimat, contohnya "Hello World". Isi dari string ditulis dengan petik dua (double quote)
* `boolean`, isinya hanya dua: true or false

<br>

### Deklarasi

<hr>

`Deklarasi` adalah proses dalam pembuatan variable, disini kita akan menuliskan juga tipe data agar dikenali oleh system. Bentuknya adalah sebagai berikut:

```c++
tipe_data nama_variabel;
```

Contoh dari deklarasi beserta masing-masing tipe data:

```c++
int myNum = 4; // Integer (whole number without decimals)
double myFloatNum = 3.77; // Floating point number (with decimals)
char myChar = ‘A’; // Character
string myText = “Hello Anbi!”; // String (text)
bool myBoolean = true; // Boolean (true or false)
```

Jika ada variable yang memiliki ntipe data yang sama, maka bisa juga ditulis satu baris seperti:

```c++
int firstNum, lastNum, minNum, maxNum;
```

Kita harus pastikan jika variable yang akan dideklarasi sudah ditulis. `Error` yang sering terjadi jika variable tidak dideklarasikan adalah

```sh
error: ‘myNum’ was not declared in this scope
```

<br>

### Inisialisasi

<hr>

Inisialisasi adalah proses pemberian nilai awal dari sebuah variable. Sama seperti dalam pelajaran Matematika, kita menggunakan operator sama dengan `=` untuk memberikan nilai. Bentuknya adalah sebagai berikut:

```c++
nama_variable = isi_variable;
```

Contoh dari inisialisasi variable beserta masing-masing tipe data:

```c++
myNum = 4;my
FloatNum = 3.77;
myChar = ‘A’;
myText = “Hello Anbi!”;
myBoolean = true;
```

<br>

### Constant

<hr>

Jika tidak ingin orang lain atau kita sendiri merubah dengan cara menimpa isi variable, maka kita bisa gunakan constant. Dengan menggunakan `constant`, maka variable tidak akan bisa diubah dan bersifat `read-only`. Contoh syntax nya adalah sebagai berikut:

```c++
const int independenceDay = 1945;
// independenceDay akan selalu 1945
    
independenceDay = 1947;
// error: assignment of read-only variable 'independenceDay'
```

<br>

### Identifier

<hr>

Variable pada C++ harus ditulis menggunakan `nama unik` agar tidak tertukar. Nama unik ini disebut identifier. Identifier dapat ditulis dengan satu huruf seperti `x` dan `y`atau juga bisa ditulis lebih rinci seperti `myName` atau `myNumber`. Anbi rekomendasikan juga untuk menggunakan nama yang lebih rinci agar kita tidak lupa kegunaan dari variable yang kita tulis, jadi variable lebih mudah untuk dimengerti.

```c++
int minutes = 60;
// Baik
    
int m = 60;
// OK, tapi tidak mudah dimengerti apa maksud dari m
```

<br>

### Ketentuan

<hr>

Beberapa ketentuan yang perlu diperhatikan dalam menulis variable pada C++ adalah:

* Isi dari Nama Variable `dapat berupa` huruf, angka dan underscores
* Namun Nama Variable `hanya boleh diawali` oleh huruf dan underscores
* Nama Variable bersifat `Case Sensitive` (myNum dan mynum adalah variable yang berbeda)
* Nama Variable `tidak boleh` berisi spasi atau karakter spesial seperti !, #, %, dll.
* Nama Variable tidak boleh sama seperti `reserved word` pada C++ (Reserverd Word adalah kata yang tidak bisa digunakan sebagai identifier, karena sudah digunakan oleh syntax atau kode pada C++).

Berikut adalah contoh - contoh **reversed word** :

| Contoh                       | Contoh                      | Contoh                    |
| ---------------------------- | --------------------------- | ------------------------- |
| `alignas`                    | `alignof`                   | `and`                     |
| `and`                        | `and_eq`                    | `asm`                     |
| `atomic_cancel`              | `atomic_commit`             | `atomic_noexcept`         |
| `auto`                       | `bitand`                    | `bitor`                   |
| `bool`                       | `break`                     | `case`                    |
| `catch`                      | `char`                      | `char16_t`                |
| `char32_t`                   | `class`                     | `compl`                   |
| `concept`                    | `const`                     | `constexpr`               |
| `const_cast`                 | `continue`                  |  `co_await`               |
| `co_return`                  | `co_yield`                  | `decltype`                |
| `default`                    | `delete`                    | `do`                      |
| `double`                     | `dynamic_cast`              | `else`                    |
| `enum`                       | `explicit`                  | `export`                  |
| `extern`                     | `0`                         | `float`                   |
| `for`                        | `friend`                    | `goto`                    |
| `if`                         | `import`                    | `inline`                  |
| `int`                        | `long`                      | `module`                  |
| `mutable`                    | `namespace`                 | `new`                     |
| `noexcept`                   | `not`                       | `not_eq`                  |
| `nullptr`                    | `operator`                  | `or`                      |
| `or_eq`                      | `private`                   | `protected`               |
| `public`                     | `register`                  | `reinterpret_cast`        |
| `requires`                   | `return`                    | `short`                   |
| `signed`                     | `sizeof`                    | `static`                  |
| `static_assert`              | `static_cast`               | `struct`                  |
| `switch`                     | `synchronized`              | `template`                |
| `this`                       | `thread_local`              | `throw`                   |
| `1`                          | `try`                       | `typedef`                 |
| `typeid`                     | `typename`                  | `union`                   |
| `unsigned`                   | `using`                     | `virtual`                 |
| `void`                       | `volatile`                  | `wchar_t`                 |
| `while`                      | `xor`                       | `xor_eq`                  |


<br>

Sekian materi C++ atau CPP kali ini.