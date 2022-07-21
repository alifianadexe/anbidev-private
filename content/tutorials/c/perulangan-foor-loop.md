+++
authors = "hamid"
cover = "/post/web-pengenalan-c.jpg"
date = 2021-05-26T17:00:00Z
description = "Perulangan dasar menggunakan for loop"
series = "Dasar C"
shortcode = "For Looping"
status = "publish"
sumber = []
tags = ["c"]
title = "Perulangan : For Loop"
tutorials = ["c"]
type = ["tutorial"]
url = "c-for-loop"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Pada pemrogaman kita perlu mengenal istilah `program control`. Apa itu Program Control? Program Control atau kadang juga disebut `Flow Control` adalah istilah pemrogaman untuk instruksi yang akan diberikan kepada mesin atau komputer saat program yang dijalankan bertemu suatu kondisi tertentu. Anbi bahas program kontrol tentang pengkondisian dan perulangan. Setelah sebelumnya kita belajar tentang pengkondisian menggunakan if, sekarang kita akan belajar perulangan.

### Pengenalan

Perulangan, atau dikenal juga dengan looping, adalah struktur pemrogaman yang digunakan untuk mengulang kode program selama sebuah kondisi terpenuhi. Kode program akan diulang sekian kali dan berhenti saat kondisinya sudah tidak terpenuhi.

Pada kehidupan sehari-hari, pendekatannya adalah sama seperti saat kita berhitung. Misal Anbi disuruh menghitung dari angka satu hingga lima, maka Anbi akan mengucap angka satuu, duua, tiiga, eempat, liima dan stop. Angka enam, tujuh, dan seterusnya tidak akan Anbi ucapkan karena hanya disuruh dari angka satu hingga lima”

### for loop

```c
for (initState; testExpression; updateState)
{
    // code
}
```

Anbi jelaskan pengertian dari rumus sederhana diatas. initState disini adalah kondisi awal. testExpression adalah proses evaluasi apakah kondisi sudah dan masih terpenuhi (hasilnya bisa True atau False). updateState adalah kondisi terbaru setelah code dijalankan. Agar lebih mudah dimengerti, perhatikan contoh kode program sederhana dibawah:

```c
// Print numbers from 1 to 5
#include <stdio.h>

int main() {
    int i;
    
    for (i = 1; i <= 5; i++) {
    	printf("%d ", i);
    }
    
    return 0;
}
```

Output dari kode diatas adalah `1 2 3 4 5`. Pertama Anbi deklarasikan variable bernama i dan bertipe data integer. Pada blok kode perulangan for kita cocokkan dengan rumus diatas:

Perhatikan didalam tanda kurung, initState ditempati oleh `i = 1`, dibaca “i sama dengan satu”, yang artinya `nilai awal` dari variable `i` adalah `1`.

Selanjutnya, `testExpression` tadi ditempati oleh `i ≤ 5`, dibaca “i kurang dari sama dengan lima”. Atau Anbi juga sering membacanya begini “selama i kurang dari sama dengan lima”.

Pada, `updateState` ditempati oleh `i++`, dibaca “i ditambah satu" atau “nilai i bertambah satu”.

Jadi perulangan for diatas bisa dibaca “i sama dengan satu, selama nilai i kurang dari sama dengan lima, nilai i bertambah satu”. Kode didalam blok perulangan ini berisi `printf(“%d”, i);` yang digunakan untuk mengeluarkan nilai dari variable i. Karena \`selama i kurang dari sama dengan lima, i nya akan bertambah\`, maka outputnya akan menulis dari angka 1 hingga 5. 

Kenapa hanya sampai angka 5? Karena nilainya dievaluasi oleh testExpression (i ≤ 5), dan hasilnya akan `False` (tidak terpenuhi) jika nilai dari i lebih dari 5.

Oke sekian dasar perulangan hari ini, masih ada lagi perulangan lain. Anbi bagi jadi dua bagian agar tidak membingungkan pembaca. Sekian, Terimakasih, Semoga bermanfaat.