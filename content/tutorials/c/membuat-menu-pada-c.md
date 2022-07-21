+++
authors = "hamid"
cover = "/post/c.png"
date = 2021-04-17T17:00:00Z
description = "Menu berguna sebagai navigasi untuk fitur dari aplikasi"
series = "More C"
shortcode = "Menu"
status = "publish"
sumber = []
tags = ["c"]
title = "Membuat Menu pada C"
tutorials = ["c"]
type = ["tutorial"]
url = "menu-c"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
Halo semuanya, mohon maaf karena Anbi lagi sibuk dengan tugas kuliah dan project ditempat kerja jadi baru bisa update artikel tentang bahasa C sekarang. Kali ini Anbi akan bahas sedikit tugas kuliah Anbi yang kadang bikin bingung temen-temen Anbi juga. Artikelnya gak terlalu kompleks, semoga teman-teman semua bisa paham ya.

<br>

### Rumusan Masalah

<hr>

Menu atau navigasi biasanya digunakan pada aplikasi yang memiliki lebih dari satu fitur. Jadi user akan memilih suatu menu untuk menggunakan fitur dari menu tersebut.

<br>

#### Tahap 1 - Output Pilihan Menu

<hr>

Disini dasar awal aplikasi kita, kita akan mengeluarkan output untuk pilihan menu pertama hingga keempat menggunakan `printf`. Khusus untuk menu keempat kita akan gunakan sebagai `exit button`

```c
#include <stdio.h>

int main() { 
	printf("Aplikasi Simulasi Menu\n");
	printf("1. Menu Pertama\n");
	printf("2. Menu Kedua\n");
	printf("3. Menu Ketiga\n");
	printf("4. Keluar\n");

	return 0;
}
```

<br>

#### Tahap 2 - Input Menu

<hr>

Selanjutnya kita deklarasikan dahulu variable `int menu` untuk menampung nilai input menu, disini kita gunakan tipe data integer. Lalu pada bagian bawah menu, Anbi tambahkan output untuk pilihan menu sekaligus dengan inputnya juga menggunakan scanf. Untuk pembatas menu, ini sifatnya opsional untuk kerapian saja.

```c
int main() { 
	int menu;
 
	printf("Aplikasi Simulasi Menu\n");
	printf("1. Menu Pertama\n");
	printf("2. Menu Kedua\n");
	printf("3. Menu Ketiga\n");
	printf("4. Keluar\n");
	printf("========================\n");
	printf("Pilih Menu: "); scanf("%d", &menu);
 
	return 0;
}
```

<br>

#### Tahap 3 - Membuat Perulangan

<hr>

Selanjutnya kita akan membuat perulangan untuk setiap pilihan yang ada. Dan untuk pilihan empat, kita akan exit programnya. Logikanya gini, selama menu yang dipilih tidak sama dengan empat (`menu != 4`), maka program akan dijalankan lagi secara berulang. Disini Anbi menggunakan perulangan `do while`

```c
do {
	printf("Aplikasi Simulasi Menu\n");
	printf("1. Menu Pertama\n");
	printf("2. Menu Kedua\n");
	printf("3. Menu Ketiga\n");
	printf("4. Keluar\n");
	printf("========================\n");
	printf("Pilih Menu: "); scanf("%d", &menu);
	printf("\n"); 
} while (menu != 4);
```

<br>

#### Tahap 4 - Membuat Fungsi

<hr>

Pada tahap ketiga, belum ada output yang muncul jika kita memilih dari angka `1` hingga `3`, dan program juga akan berhenti jika kita memilih empat. Selanjutnya kita akan buat fungsi untuk menu pertama hingga ketiga. Kita deklarasikan dulu diatas fungsi `main` agar tidak ada warning yang muncul jika kita tulis fungsi lain dibawah fungsi main.

```c
void menuSatu();
void menuDua();
void menuTiga();
```

Anbi disini menggunakan `void` ya, untuk perbedaan void dan int akan Anbi bahas pada artikel lainnya. Selanjutnya dibawah fungsi main akan kita buat fungsi yang sudah kita deklarasikan tadi. Untuk outputnya simple saja, kita akan keluarkan text untuk setiap menu yang dipilih.

```c
void menuSatu() {
	printf("Ini Menu Satu\n\n");
}
  
void menuDua() {
	printf("Ini Menu Dua\n\n");
}
  
void menuTiga() {
	printf("Ini Menu Tiga\n\n");
}
```

<br>

#### Tahap 5 - Pengkondisian Menu

<hr>

Jika kode tadi dijalankan kita belum mendapat output dari menunya. Hal ini dikarenakan karena fungsi belum dipanggil oleh menu yang kita pilih. Agar setiap menu yang kita pilih bisa memanggil fungsinya, maka kita perlu buat sebuah kondisi dimana jika menu `1` yang dipilih maka akan memanggil fungsi `menuSatu`. Disini Anbi akan menggunakan `Switch`, ditulis didalam perulangan kita tadi.

```c
switch(menu) {
	case 1:
		menuSatu();
		break;
	case 2:
		menuDua();
		break;
	case 3:
		menuTiga();
		break
	case 4:
		break;
}
```

<br>

#### Tahap 6 - Selesai

<hr>

Pengkondisian tadi menutup finishing dari membuat menu tadi. Source Code lengkapnya adalah sebagai berikut:

```c
#include <stdio.h>

void menuSatu();
void menuDua();
void menuTiga();

int main() {	
	int menu;
	
	do {
		printf("Aplikasi Simulasi Menu\n");
		printf("1. Menu Pertama\n");
		printf("2. Menu Kedua\n");
		printf("3. Menu Ketiga\n");
		printf("4. Keluar\n");
		printf("========================\n");
		printf("Pilih Menu: "); scanf("%d", &menu);
		printf("\n");
		
		switch(menu) {
			case 1:
				menuSatu();
				break;
			case 2:
				menuDua();
				break;
			case 3:
				menuTiga();
				break;
			case 4:
				break;
		}
	} while (menu != 4);
		
	return 0;
}

void menuSatu() {
	printf("Ini Menu Satu\n\n");
}

void menuDua() {
	printf("Ini Menu Dua\n\n");
}

void menuTiga() {
	printf("Ini Menu Tiga\n\n");
}
```

Semoga bermanfaat, sampai jumpa pada artikel selanjutnya.