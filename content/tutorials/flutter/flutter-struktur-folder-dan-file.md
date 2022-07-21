+++
authors = "hamid"
tutorials = ["flutter"]
cover = "/post/flutterdrifile.png"
date = 2020-12-12T17:00:00Z
description = "Masing-masing kegunaan dari folder dan file pada Project Flutter"
series = "flutter 101"
shortcode = "struktur folder & file"
status = "publish"
sumber = ["https://medium.com/codingthesmartway-com-blog/getting-started-with-flutter-2-project-structure-8066bde05270", "https://www.quora.com/What-is-README-MD-file-and-why-do-I-need-it", "https://dart.dev/guides/packages#upgrading-a-dependency", "https://dart.dev/tools/pub/package-layout", "https://flutter.dev/docs/deployment/ios", "https://pub.dev/packages/permission_handler", "https://icevanila.com/question/why-are-there-android-and-ios-folders-in-the-flutter-project", "https://www.jetbrains.com/help/idea/creating-and-managing-projects.html#directory-based"]
tags = ["dart", "flutter"]
title = "Struktur Folder dan File pada Flutter"
type = ["tutorials", "tutorial"]
url = "flutter-folder-dan-file"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Dalam pembuatan project baru, bisa kita lihat bahwa struktur folder dan file pada flutter cukup simpel. Bagi yang belum tahu apa itu direktori, `direktori` sama artinya dengan `folder`, jadi Anbi mungkin akan menggunakan kedua kata tersebut. Anbi akan jelaskan, masing-masing kegunaan dari direktori dan file yang dibuat otomatis dan akan sedikit Anbi tambahin sesuai pengalaman Anbi.

## Direktori atau Folder

### .dart_tool

![.dart](/post/darttool.PNG ".dart_tool")

Muncul pada `Dart 2`, digunakan oleh pub dan tools lainnya. Direktori ini menggantikan direktori `.pub` setelah SDK 2.0.0-dev.32.0 rilis. Tidak perlu mengubah isi direktori ini.

### .idea

![.idea](/post/idea.PNG ".idea")

Perlu kita ketahui terlebih dahulu, pada Intellij IDEA terdapat dua tipe format untuk konfigurasi Project disimpan, yakni File-based format dan Directory-based format. Flutter menganut yang kedua (Directory-based format). Nah, di direktori `.idea` ini setiap pengaturan Project disimpan secara spesifik dalam bentuk `xml`. Pada sistem operasi macOS dan Linux, direktori .idea akan ter hidden secarta default. Kita tidak perlu mengubah-ubah isi dari direktori ini. Jika menggunakan git, direktori `.idea/` akan ditulis pada .gitignore secara otomatis.

### android

![android](/post/android-1.PNG "android")

Merupakan Folder yang penting, isi dari folder ini diperlukan untuk proses build menjadi aplikasi native ke `platform android`. Didalamnya ada file `build.gradle`, disini tempat untuk menentukan versi Sdk dari aplikasi. Dan pada file `AndroidManifest.xml` berguna untuk mengatur permissions, untuk meminta ijin menggunakan camera, file explorer, sound recording, dsb. Folder utama didalam android adalah folder main.

### ios

![ios](/post/ios-1.PNG "ios")

Fungsinya sama seperti folder android, folder ini diperlukan jika kita ingin menjalankan aplikasi ke `platform iOS`. Walaupun dalam penerapannya, kita memerlukan sistem operasi macOS dengan XCode nya agar bisa build menjadi aplikasi ke iPhone. Jika kita tidak memiliki device nya, kita bisa menyewa Cloud Service yang menggunakan macOS.

### lib

![lib](/post/lib.PNG "lib")

Ini adalah folder utama, dan merupakan code dari aplikasi Flutter mu. Pada awalnya, akan ada file `main.dart` yang dibuatkan secara otomatis. File main.dart adalah file root dari aplikasi Flutter mu, jadi Anbi beri saran untuk kamu membuat folder baru didalam folder lib. Nah, nanti main.dart diarahkan ke file-file didalam folder baru itu.

### test

![test](/post/test.PNG "test")

Folder ini diatur untuk testing dari kode yang kamu tulis.

### assets

![assets](/post/assets-1.PNG "assets")

Folder satu ini tidak ada secara default dan hanya merupakan tambahan yang sering Anbi gunakan. Fungsinya untuk menyimpan `images` atau `font` tambahan. Anbi sarankan untuk kita tetap menjaga struktur direktori mudah ditemukan agar tidak pusing saat ingin maintenance.

## File

![file](/post/file.PNG "file")

### .gitignore

File ini berisi daftar file, extensi, dan folder yang akan diabaikan oleh Git, jika kita menggunakan Git. Dalam awal pembuatan Project Flutter baru, file ini sudah terisi dengan baik mana file atau folder yang akan diabaikan. Kamu tidak perlu mengubah isinya kecuali memang ada yang ingin ditambahkan.

### .metadata

File ini dikelola oleh Flutter secara otomatis digunakan untuk melacak properties dari Project Flutter. Juga untuk menilai kemampuan dan menjalankan upgrade. File ini tidak di edit secara manual.

### .packages

Isi dari file ini di generate secara otomatis oleh Flutter SDK dan digunakan untuk mendata dependencies dari Project Flutter mu. File ini tidak di edit secara manual.

### nama_project.iml

File ini akan dinamai sesuai dengan nama project dan berisi pengaturan dari Project Flutter. File ini tidak di edit secara manual.

### pubspec.yaml

File ini merupakan file konfigurasi dari Project Flutter yang akan sering kamu gunakan. Hal-hal yang bisa kita konfigurasi dari file ini adalah:

* nama, deskripsi dan versi dari project
* dependencies yang digunakan
* asset seperti gambar dan font

### pubspec.lock

Pada awal kita menggunakan dependencies baru untuk sebuah package, pub akan mendownload versi paling baru dan cocok. Lalu pub akan mengunci package untuk selalu digunakan dengan membuat pubspec.lock. File ini akan mendata secara spesifik versi dari setiap dependency yang digunakan package. Saat kamu ingin upgrade dependencies ke versi paling baru, gunakan command

    $ pub upgrade

### README.md

File ini biasanya berguna sebagai guide bagi developer baru yang bergabung ke tim pengembangan Project Flutter mu. Kamu bisa tuliskan langkah awal untuk menjalankan aplikasi beserta lingkup dependencies yang perlu diperhatikan.