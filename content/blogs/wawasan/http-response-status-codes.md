+++
authors = "hamid"
categories = ["wawasan"]
cover = "/post/web-404.jpg"
date = 2021-01-28T17:00:00Z
dateUpdate = 2021-01-28T17:00:00Z
description = "Mengindikasikan apakah request HTTP yang diberikan sudah sukses atau belum"
series = "wawasan"
status = "publish"
tags = ["internet", "wawasan", "internet"]
title = "Kode Status pada HTTP Request"
type = ["blogs", "blog"]
url = "/kode-status-http/"
[author]
images = "/img/hamid.jpg"
name = "hamid"

+++
Adalah `Status Kode` yang mengindikasikan apakah response pada protokol HTTP yang diberikan sudah sukses atau belum. Jenis kesuksesan dan kegagalan dibagi menjadi lima kelas.

1. _Informational responses_ (100–199)
2. _Successful responses_ (200–299)
3. _Redirects_ (300–399)
4. _Client errors_ (400–499)
5. _Server errors_ (500–599)

<br>

## Information Response (1xx)

<hr>

Merupakan status respon yang memberikan informasi jika request telah diterima dan dipahami. Sifatnya sementara, client bisa menunggu hingga proses dilanjutkan.

### 100 (Continue)

Response dari client berjalan dengan lancar dan client bisa melanjutkan proses dan belum ditolak oleh server, tapi abaikan jika proses sudah selesai.

### 101 (Switching Protocols)

Maksudnya client meminta server untuk mengganti protokol yang lebih baik dan server juga akan melakukannya. Contohnya berganti protokol HTTP ke versi yang lebih baru.

<br>

## Successful Responses (2xx)

<hr>

Response dari client telah disampai ke server, dipahami oleh server dan diterima oleh server.

### 200 (OK)

Request dari client telah sukses. Pada status ini, balasan dari server juga beragam tergantung request method yang diberikan (GET, HEAD, POST dan TRACE).

### 201 (Created)

Request dari client sukses diterima, dan telah dibuatkan satu data baru atau mengganti satu data lain. Method yang digunakan adalah POST dan PUT.

### 202 (Accepted)

Request telah diterima, namun proses belum selesai. Request bisa saja selesai atau gagal ditindaklanjuti, atau bisa saja ditolak. Response yang gagal, sebaiknya diberikan penjelasan kenapa request dari client tidak bisa terpenuhi.

### 204 (No Content)

Server telah selesai memproses request dari client dan tidak mengembalikan content apapun. Namun `headers` bisa berguna, jika user ingin mengupdate `cached headers`. Method yang menggunakan status kode ini contohnya DELETE.

<br>

## Redirects (3xx)

<hr>

Diindikasikan jika client perlu mengambil langkah tambahan untuk menyelesaikan request. Banyak dari status kode ini digunakan di `URL Redirection`

### 300 (Multi Choices)

Request dari Client memiliki lebih dari satu response, dan client perlu memilih salah satu. Contohnya adalah, memilih format video yang ingin ditonton.

### 301 (Moved Permanently)

URL yang diminta dari client telah diubah secara permanen. URL baru akan diberikan pada response. Pada status kode ini, sebaiknya response tidak redirect secara otomatis setidaknya sampai ada konfirmasi dari client, karena mungkin ada perubahan term and condition pada URL baru.

### 302 (Found)

Artinya URI yang diminta telah diubah sementara. Mungkin kedepannya akan dibuah, namun karena hanya sementara diharapkan client tetap melakukan request ke URI yang serupa.

### 304 (Not Modified)

Digunakan untuk caching. Diindikasikan jika isi dari response yang diberikan kepada client tidak berubah dan masih menggunakan cache sebelumnya.

<br>

## Client Errors (4xx)

<hr>

Error dengan status kode ini disebabkan karena ada error dari sisi client.

### 400 (Bad Request)

Terjadi di sisi client yang salah menginput atau server tidak bisa memproses perintah client.

### 401 (Unauthorized)

Akses dari client yang ditolak oleh server karena client tidak memiliki akses yang dapat dikenali oleh server. Bisa disebabkan karena client langsung melakukan akses ke URL tertentu namun belum melakukan proses log-in.

### 403 (Forbidden)

Akses dari client yang ditolak oleh server karena client tidak memiliki hak akses untuk masuk ke server. Bedanya dengan error 401 adalah, pada status kode ini identitas client diketahui oleh server (client telah melakukan log-in) namun hak akses yang dimiliki client tidak sesuai dengan yang diminta oleh server sehingga server menolak untuk memberikan response.

### 404 (Not Found)

Request dari client tidak ditemukan disisi client yang mengakibatkan kode ini muncul. Biasanya karena client mengakses URL yang tidak ada di server atau dari sisi server telah menghapus URL tadi.

### 405 (Method Not Allowed)

Status Error ini biasanya disebabkan karena kesalahan method yang digunakan oleh client. Misalnya client mengakses URL yang seharusnya menggunakan method POST namun oleh client diakses menggunakan method GET.

### 408 (Request Time Out)

Diindikasikan jika server tidak menerima request secara lengkap dari client pada batas waktu yang telah ditentukan. Disarankan untuk mengirim perintah untuk menutup request daripada harus menunggu lama.

### 419 (Page Expired)

Terjadi karena session login sudah habis atau CSRF Token tidak ada pada saat submit form. Pengguna Laravel pasti sering mengalami ini.

<br>

## Server Errors (5xx)

<hr>

Error dengan status kode ini disebabkan karena adanya error dari sisi server.

### 500 (Internal Server Error)

Suatu hal bermasalah di sisi server. Masalahnya itu bisa saja disebabkan oleh database, web services, atau perangkat pendukung server lainnya.

### 502 (Bad Gateway)

Server gateway yang diakses tidak menerima respon yang valid dari upstream server atau server luar. Untuk mengatasi ini dengan cara melakukan refresh pada halaman yang diakses dan membersihkan browser cache.

### 503 (Service Unavailable)

Server tidak bisa atau belum siap untuk menangani request dari client. Bisa disebabkan down karena maintenance atau tidak bisa menangani kuota request yang masuk (overload).

### 504 (Gateway Timeout)

Hampir sama dengan kode eror 502 yang mana Server gateway tidak menerima info valid dari sisi upstream.

<br>

## Kesimpulan

<hr>

Dah gitu aja.