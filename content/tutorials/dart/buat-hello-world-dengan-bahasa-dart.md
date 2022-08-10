+++
authors = "Handika"
cover = "/post/photo_2022-08-10_09-23-27.jpg"
date = 2022-08-04T17:00:00Z
description = "kali ini akan mengulas mengenai cara instalasi Dart SDK dan membuat program “Hello World”"
series = "Dart Dasar"
shortcode = "Hello World"
status = "publish"
sumber = ["https://dart.dev/get-dart"]
tags = ["dart"]
title = "Buat Hello World dengan Bahasa Dart"
tutorials = ["dart"]
type = ["tutorials", "tutorial"]
url = "dart-hello-world"
[author]
images = "/img/handika.jpg"
name = "Handika"

+++
Apa saja sih yang harus disiapkan untuk memulai pemograman Dart? Lalu text editor mana saja yang biasa digunakan untuk membuat program dengan Dart? Pada artikel kali ini akan mengulas mengenai cara instalasi Dart SDK dan membuat program `“Hello World”` sebagai permulaan awal, oke tidak lama-lama mari kita mulai, _Here We Go._

## Dart SDK

Hal pertama yang harus dilakukan saat ingin menjalankan Dart ke device atau perangkat lokal kita, maka perlu **`menginstal Dart SDK`** terlebih dahulu. Singkatnya SDK ini adalah `kit` atau `tools` yang digunakan untuk mengembangkan perangkat lunak, SDK ini sendiri berisi seperti _`debugger`, `library`_ dan _`command-line tools`_.

Dart memiliki 3 (tiga) versi rilis yakni _stable, beta_ dan _dev_.

![](/post/3versionrelease.png)

Mengutip dari dokumentasi Dart bahwa perbedaan ketiga versi tersebut berada pada jangka pembaruan (_`update`_), Anbi sendiri menyarankan untuk menggunakan versi yang _`stable` _karena memang siap untuk produksi dan meminimalisir adanya _`bug`_. Namun anda juga bisa menggunakan versi _`Beta` _dan _`Dev` _untuk mendapatkan fitur yang baru.

## Instalasi Dart SDK

Pada materi kali ini kita akan melakukan instalasi menggunakan _operating system `Windows`_, untuk _operating system_ lainnya bisa mengikuti arahan dari dokumentasi resmi. Bisa dibaca di link berikut: [https://dart.dev/get-dart](https://dart.dev/get-dart "https://dart.dev/get-dart")

### Instalasi Dart SDK

Pertama masuk ke link berikut : [https://gekorm.com/dart-windows/](https://gekorm.com/dart-windows/ "https://gekorm.com/dart-windows/")

![Dart for Windows](/post/picture2.png "Dart for Windows")

Maka akan menampilkan halaman tersebut, lalu pilih sesuai kebutuhan pada materi ini memilih yang versi _`Stable`_

Setelah itu jalankan file `.exe` untuk melanjutkan ke proses instalasi.

![file instalasi dart](/post/fileexe.png "file instalasi dart")

Setelah itu pilih _`I accept the agreement`_ untuk menyetujui perjanjian penggunaan produk dan selanjutnya next-next aja.

![Setup downloading resource](/post/downloading_dart.png "Setup downloading resource")

Setelah itu akan menjalankan proses unduh, setelah semuanya telah selesai. Maka langkah selanjutnya perlu untuk mengecek Dart SDK tersebut, caranya buka `terminal` / `command prompt` / `git bash`![dart --version](/post/dart_cmd.png "dart --version")

Nah, gunakan command `dart --version` untuk mengecek versinya. Pada saat artikel ini ditulis, versi dart yang Anbu gunakan adalah `2.17.6 (stable)`

Apabila perintah tersebut tidak berfungsi maka harus melakukan setting tambahan yakni menambahkan lokasi SDK ke dalam `PATH`

### Menambahkan Dart SDK kedalam PATH

_By Default_ lokasi SDK berada di C:\\tools\\dart-sdk.

![dart sdk location](/post/dart_sdk_location.png "dart sdk location")

Pertama search `env` terlebih dahulu di windows search box, lalu pilih `Edit the system environment variables`

![](/post/dart_system_environment_variables.png)

Selanjutnya memasukkan lokasi Dart SDK ke dalam PATH, pilih `Environment Variables`

![](/post/dart_system_properties-1.png)

Setelah itu double klik pada Path untuk mengedit dan menambahkan lokasi Dart SDK

![](/post/dart_environment_variables.png)

Lalu pilih New dan masukkan lokasi Dart SDK tadi.

![](/post/dart_path.png)

Buka command prompt lagi, lalu gunakan command `dart --version` untuk mengecek versinya.

## Text Editor untuk Dart

Setidaknya ada 3 (tiga) text editor yang paling sering digunakan, di antaranya :

### DartPad

Jika kalian yang langsung menjalankan kode Dart tanpa perlu unduh ini itu, dan ingin yang versi `online`, maka pilihannya menggunakan `DartPad`

![](/post/dart_dartpad.png)

Anda sudah langsung bisa membuat kode Dart dan menjalankannya di situ. Fleksibel bukan?

### Visual Studio Code

Kita juga bisa menggunakan VS Code sebagai text editor untuk Dart. Adapun persyaratan yang harus diketahui untuk menggunakan text editor ini, sebagai berikut :

![Persyaratan Penggunaan VS Code](/post/dart_vscode.png "Persyaratan Penggunaan VS Code")

Selanjutnya download terlebih dahulu extension Dart

![Dart Extension](/post/dart_extention.png "Dart Extension")

Setelah itu mari kita buat projek dengan Dart. Langkah pertama buka command pallete (`ctrl + shift + p`). Lalu pilih `Dart: New Project`

Setelah itu pilih folder yang ingin dituju.

![](/post/dart_folder.png)

Setelah itu muncul pop-up untuk memberikan nama projek, terserah beri nama apa saja.

> _Best practice_: gunakan lowercase dan jika lebih dari satu kata gunakan underscore, contoh `dart_application`

Pilih yang `console application`

## Hello World

Setelah instalasi Dart SDK, text editor dan juga pembuatan projek. Selanjutnya menjalankan kode Dart.

```dart
import 'package:dart_application_1/dart_application_1.dart' as dart_application_1;
 
void main(List<String> arguments) {
  print('Hello world: ${dart_application_1.calculate()}!');
}
```

Secara bawaan kode Dart akan seperti ini (cek pada _`directory bin`_), untuk menjalankannya anda bisa mengklik tulisan run di atas function main. Maka otomatis kode Dart akan dijalankan. Maka hasilnya akan seperti ini :

![](/post/dart_hello_world.png)

Baik cukup sudah materi kali ini, tidak perlu risau apabila ada beberapa kode di atas yang belum anda pahami, kita akan pelajari di materi selanjutnya.