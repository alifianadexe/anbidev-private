+++
authors = "hamid"
cover = "/post/web-pengenalan-c.jpg"
date = 2021-09-08T17:00:00Z
description = "Penjelasan dan Perbedaan Break dan Continue pada C"
series = "Dasar C"
shortcode = "Break & Continue"
status = "publish"
sumber = ["https://www.w3schools.com/cpp/cpp_break.asp", "https://www.tutorialspoint.com/cprogramming/c_break_statement.htm", "https://www.programiz.com/c-programming/c-break-continue-statement"]
tags = ["c"]
title = "Break dan Continue pada C"
tutorials = ["c"]
type = ["tutorial"]
url = "break-continue-c"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Pada artikel ini, Anbi akan membahas tentang statement `Break` dan `Continue` pada Bahasa C. Walaupun keduanya memiliki kegunaan yang sama, yakni `mengubah alur` dari program, namun masih memiliki perbedaan diantara keduanya. Oke, mari kita bahas

<br>

### Break Statement

<hr>

Statement yang kita bahas pertama adalah `Break`. Break digunakan untuk `keluar` dari perulangan dimana statement ini berada. Untuk lebih jelasnya perhatikan contoh berikut:

```c
#include <stdio.h>

int main()
{
    int i = 0;
	for (int i = 0; i < 5; i++) {
		if (i == 3)
			break;

		printf("%d ", i);
	}

	return 0;
}
```

Output:

```sh
0 1 2
```

Pembahasan:

Untuk nilai dari variable i adalah 0, dan selama nilainya kurang dari 5 maka nilai i bertambah 1. Lalu, Anbi berikan sebuah kondisi, dimana jika `variable i bernilai 3` maka akan menjalankan statement break, sehingga keluar dari perulangan for dan outputnya hanya `0 1 2`.

Contoh dengan perulangan while:

```c
#include <stdio.h>
 
int main () {
    int i = 0;
    while(i < 5) {
        if( i == 3) {
            break;
        }
      
        printf("%d", i);
        i++;
   }
 
   return 0;
}
```

Output:

```sh
0 1 2
```

Pembahasan:

Selama variable i bernilai kurang dari 5 maka perulangan while dijalankan. Anbi berikan sebuah kondisi, dimana jika `variable i bernilai 3` maka akan menjalankan statement break, sehingga  keluar dari perulangan dan outputnya hanya `0 1 2`.

<br>

### Continue

<hr>

Selanjutnya,adalah statement `Continue`. Continue akan menyebabkan sebuah perulangan untuk `melewati` proses dibawahnya dan `kembali` ke iterasi berikutnya. Untuk lebih jelasnya lihat contoh berikut:

```c
#include <stdio.h>

int main()
{
    int i = 0;
	for (int i = 0; i < 5; i++) {
		if (i == 3)
			continue;

		printf("%d ", i);
	}

	return 0;
}
```

Output:

```sh
0 1 2 4
```

Pembahasan:

Untuk variable i bernilai `0`, selama nilainya kurang dari `5`, maka variable i akan bertambah `1`, dan akan mencetak nilai dari i. Anbi berikan pengkondisian didalamnya, jika nilai i sama dengan `3`, maka statement Continue `dijalankan`. Sehingga Outputnya adalah `0 1 2 4`, dimana angka angka 3 dilewati dan tidak dicetak. Program akan lanjut ke iterasi berikutnya (i sama dengan 4).

Contoh dengan menggunakan perulangan while:

```c
#include <stdio.h>
 
int main () {
    int i = 0;
    while(i < 5) {
        i++;
        
        if(i == 3) {
            continue;
        }
        
        printf("%d ", i);
   }
 
   return 0;
}
```

Output:

```sh
1 2 4 5
```

Pembahasan:

Anbi definisikan nilai variable `i = 0`. Selama variable i bernilai kurang dari 5, nilainya akan bertambah `1`. Anbi berikan pengkondisian, jika nilai `i` sama dengan `3` maka statement `continue` akan dijalankan dan nilai dari variable i tidak akan dicetak. Sehingga outputnya menjadi `1 2 4 5`.

<br>

#### Kesimpulan

<hr>
 
Perbedaan dari Break dan Continue adalah, dimana Break akan menghentikan perulangan atau iterasi dan keluar dari perulangan, sedangkan Continue akan secara otomatis menghentikan iterasi yang sedang berjalan dan lanjut ke iterasi berikutnya.

Oke sekian artikel tentang perbedaan Break dan Continue pada Bahasa C. Terimakasih semoga bermanfaat.