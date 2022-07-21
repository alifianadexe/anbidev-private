+++
authors = "adexe"
cover = "/post/web-textospeech-js.jpg"
date = 2021-02-22T00:00:00Z
description = "Membuat program text to speech dengan javascript tanpa menggunakan koneksi Internet atau offline"
series = "More Javascript"
shortcode = "Text-To-Speech"
status = "publish"
sumber = []
tags = ["javascript", "voice-over"]
title = "Membuat Text-To-Speech Dengan Javascript"
tutorials = ["javascript"]
type = ["tutorials", "tutorial"]
url = "/javascript-text-to-speech/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++
Senang bertemu dengan kalian *anbies*, sekarang anbi bakal membahas tentang program ***text-to-speech*** (**TTS**), yaitu program untuk mengubah sebuah teks atau tulisan menjadi sebuah ucapan suara secara otomatis. 

Nah, disini anbi bakal membuat program *text-to-speech* menggunakan bahasa sejuta umat, yaitu **JavaScript**. Bagaimana caranya? yuk simak disini.

<br>

## Web Speech API

<hr>

Didalam javascript terdapat sebuah API yang digunakan untuk memanipulasi sebuah suara atau perkataan menjadi sebuah text atau sebaliknya, yaitu **Web Speech API**.

Dalam artikel ini kita akan mencoba mengkonversi **teks** menjadi sebuah **suara** dengan salah satu API tersebut.

> **Web Speech API** itu library bawaan, jadi tidak usah repot - repot install, dan tidak semua browser support API ini, disini [list browser yang compatible](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#browser_compatibility)

Nah, yang mari kita mulai dengan 3 baris kode sederhana :

```javascript
let msg = new SpeechSynthesisUtterance();
msg.text = "Hello, Anbies Here!";
window.speechSynthesis.speak(msg);
```

Dalam kode diatas, akan menghasilkan suara seperti ini.

<center>
<audio controls>
  <source src="/post/javascript-text-to-speech.mp3" type="audio/mp3">
Your browser does not support the audio element.
</audio>
</center>

Mari kita bahas satu persatu baris kode tersebut.

1. Menginisialisasi object `SpeechSynthesisUtterance` pada variabel `msg`. Modul `SpeechSynthesisUtterance` ini digunakan untuk mewakili yang text akan dikonversi menjadi suara. 

2. Lalu *attribute* `msg.text` kita isi nilai nya dengan teks yang ingin kita konversi ke suara.

3. `window.speechSynthesis.speak()` nah fungsi inilah yang nantinya mengkonversi nilai.

Kode dasar text-to-speech menggunakan javascript seperti itu. Gimana, mudah banget kan?

> Note : **Text-To-Speech** bukan berarti **Speech-To-Text** yaa, itu beda lagi, bakal anbi bahas di artikel berikutnya.

<br>

## Modifikasi Suara

<hr>

Selanjutnya mari kita manipulasi suara yang dikeluarkan dari API tersebut. Apa yang bisa kita manipulasi? Kita dapat memanipulasi **pitch**, **volume** serta **kecepatan** bacanya.

Berikut adalah contoh kode penerapannya : 

```javascript
let msg = new SpeechSynthesisUtterance();
msg.volume = 1;   // 0.1 sampai 1
msg.rate = 3;     // 0.1 sampai 10
msg.pitch = 2;    // 0 sampai 2
msg.text = "This Website Called AnbiDev!";

window.speechSynthesis.speak(msg);
```

Kira - kira hasilnya akan seperti ini : 

<center>
<audio controls>
  <source src="/post/javascript-text-to-speech-01.mp3" type="audio/mp3">
Your browser does not support the audio element.
</audio>
</center>

Dikarenakan kode diatas, suara yang dihasilkan akan sedikit lebih melengking dan sedikit lebih cepat dari biasanya. Kalian dapat memodifikasi sesuai keinginan kalian.

<br>

## Ganti Suara Narator

<hr>

Kita tidak ingin suara ucapan seorang wanita, kita ingin yang bersuara laki - laki. Untuk mengubah suara yang dihasilkan, pertama kita harus mengecek terlebih dahulu *voice library* yang tersedia di OS kita.

Caranya seperti berikut : 

```javascript
speechSynthesis.getVoices().forEach(function(voice) {
  console.log(voice.name, voice.default ? voice.default :'');
});
```

Hasil output ***list voice library*** :

```
Microsoft David Desktop - English (United States) <empty string>
Microsoft Zira Desktop - English (United States) <empty string>
```

Standarnya, setiap OS (*Windows* atau *MacOS*) memiliki paling tidak 2 *voice library* bawaan di setiap sistemnya, yaitu suara laki - laki dan perempuan.

Karena di voice library anbi cuman ada yang *default*, maka kita coba ganti ke suara laki - laki. Caranya seperti ini :

```javascript
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();

// 1 - Cewek     0 - Cowok 
msg.voice = voices[0]; 
msg.text = "Hei! This Is Anbies Male Version!";
speechSynthesis.speak(msg);
```

Dan ***boom!*** hasilnya suara nya bakal jadi laki - laki :

<center>
<audio controls>
  <source src="/post/javascript-text-to-speech-02.mp3" type="audio/mp3">
Your browser does not support the audio element.
</audio>
</center>

Penjelasan : 

1. `speechSynthesis.getVoices()` digunakan untuk mengambil daftar list *voice library* apa saja di OS kita.
2. `msg.voice` adalah *attribute* yang digunakan untuk mengganti aksen saat berucap, dan diisi dengan library `voices` tadi.
3. `voices[0]` kenapa pilih index ke-`0`? karena berdasarkan ***list voice library*** tadi, Microsoft David Desktop berada diurutan pertama, atau index ke `0`.

Jika ingin ucapan dengan aksen yang lain, misal aksen indonesia atau jepang, kita bisa menginstall *voice library* secara mandiri. Untuk yang *windows*, cara installnya bisa dilihat [disini](https://support.microsoft.com/en-us/topic/how-to-download-text-to-speech-languages-for-windows-10-d5a6b612-b3ae-423f-afa5-4f6caf1ec5d3?ui=en-us&rs=en-us&ad=us)

!["Cara Install Voice Library Tambahan"](/post/javascript-text-to-speech-01.jpg "Cara Install Voice Library Tambahan")

Nah kalau sudah kita bisa mengganti suara yang dihasilkan sesuai *voice library* yang kita inginkan. Caranya sama pertama liat list *voice library* nya dulu, lalu pilih berdasarkan `index` nya.


<br>

## Intermezo

<hr>

Bagi kalian yang ingin melihat program *text-to-speech* menggunakan Javascript yang sudah jadi, bisa langsung kalian coba di link berikut ini :

[Test Speech Synthesiser](https://mdn.github.io/web-speech-api/speak-easy-synthesis/)

Lalu untuk source code nya bisa kalian lihat disini : 

:octopus: [https://github.com/mdn/web-speech-api/tree/master/speak-easy-synthesis](https://github.com/mdn/web-speech-api/tree/master/speak-easy-synthesis)


Oke sekian.