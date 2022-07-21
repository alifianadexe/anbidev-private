+++
title = "Membuat Speech Recognition Dengan Javascript"
description = "Membuat program speech recognition dengan javascript tanpa menggunakan koneksi Internet"
type = ["tutorials","tutorial"]
status = "publish"
draft=true
tags = [
    "javascript",
    "voice-over"
]
date = "2021-02-22"
tutorials = [
    "javascript"
]
series = "More Javascript"
authors = "adexe"
shortcode = "Text-To-Speech"
url = "/javascript-text-to-speech/"
cover = "/post/fun-code-python.jpg"
sumber = []
[ author ]
  name = "AlifianAdexe"
  images = "/img/adexe.jpg"
+++

Kemarin anbi sudah membahas tentang [text-to-speech](https://anbidev.com/javascript-text-to-speech), yaitu mengkonversi *text* (tulisan) menjadi suara ucapan. Sekarang kita akan melakukan kebalikannya yaitu **mengkonversi suara ucapan menjadi text** dengan menggunakan teknik yang disebut ***Speech Recognition***.

Apa itu *Speech Recognition*? ***Speech Recognition*** adalah sebuah teknik pengembangan yang membuat komputer dapat mengidentifikasi dan merespon suara yang dihasilkan manusia.

Disini kita akan membuat *speech recognition* menggunakan JavaScript, dan ini dapat dilakukan tanpa internet (*offline*). 

<br>

## Deteksi Fitur Speech Recognition

<hr>

Mari kita coba cek fitur record ini tersedia dibrowser kalian compatible dengan fitur ini atau tidak. Caranya menggunakan kode dibawah :

```javascript
if ('speechRecognition' in window || 'webkitSpeechRecognition' in window) {
    console.log('Speech recognition support nih! 😊');
    // code to handle recognition here
} else {
    console.log('Yah, Speech recognition ga support! 😢');
    // code to handle error
}
```

Kode diatas digunakan untuk mendeteksi library `speechRecognition` ada atau tidak di browser kita. Untuk tahu daftar browser apa saja yang compatible lihat [disini](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis#browser_compatibility).

Untuk yang

> Disini anbi pakai **Chrome** browser, dikarenakan firefox entah kenapa tidak disupport kembali.

<br>

## Simple Recording

<hr>

Oke, langkah selanjutnya mari kita buat object *Speech Recognition* dan kita test apakah kode kita berhasil menjalankan *voice recognition*. 

```javascript
if ('speechRecognition' in window || 'webkitSpeechRecognition' in window) {
    let recognition = window.webkitSpeechRecognition || new SpeechRecognition();

    // Recognition start event handler
    recognition.onstart = () => { 
      console.log('Voice recognition udah nyala!. Coba deh ngomong di microphone.');
    };
} else {
    console.log('Yah, Speech recognition ga support! 😢');
    // code untuk handle error
};
```

Jika pada console sudah keluar output seperti dibawah : 

```
Voice recognition udah nyala!. Coba deh ngomong di microphone.
```

Maka sudah dipastikan *service* sudah berjalan dengan baik. Sekarang mari kita tambahkan lagi beberapa kode agar program kita dapat menghasilkan output dari suara yang direkam.

```javascript
if ('speechRecognition' in window || 'webkitSpeechRecognition' in window) {
    let ObjectRecognition =  webkitSpeechRecognition || SpeechRecognition;
    let recognition = new ObjectRecognition()
    
    recognition.continuous = true;

    // Recognition start event handler
    recognition.onstart = () => { 
      console.log('Voice recognition udah nyala!. coba deh ngomong di microphone.');
    }

    recognition.onresult = function(event) {
        let transcript = event.results[0][0].transcript;
        console.log(transcript);
    };
    
    // start recognition
    recognition.start();

} else {
    console.log('Yah, Speech recognition ga support! 😢');
    // code untuk handle error
};
```








