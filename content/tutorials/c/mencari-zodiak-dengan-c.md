+++
authors = "hamid"
cover = "/post/sampul.png"
date = 2021-04-19T17:00:00Z
description = "Belajar cara menentukan atau mencari zodiak berdasarkan tanggal dan bulan"
series = "More C"
shortcode = "Zodiak"
status = "publish"
sumber = ["https://technotip.com/7207/c-program-to-display-zodiac-sign-for-given-date-of-birth/"]
tags = ["c"]
title = "Mencari Zodiak dengan C"
tutorials = ["c"]
type = ["tutorial"]
url = "zodiak-c"
[author]
images = "/img/hamid.jpg"
name = "hamid"

+++
**Zodiak** dalam Bahasa Yunani berarti lingkaran hewan, atau **mintakulburuj** dalam Bahasa Arab, yakni garis lengkung di langit, yang terbagi menjadi 12 bagian, setiap bagian diberi nama menurut rasi bintang. Setiap manusia yang lahir, menyandang zodiak dalam biodatanya. 

Zodiak ini disandang berdasarkan kedudukan Matahari saat berada di wilayah rasi bintang tertentu pada tanggal kelahirannya. Contohnya jika lahir pada `15 April 2000`, maka akan berzodiak `Aries` karena pada tanggal tersebut Matahari sedang berada di wilayah rasi bintang Aries.Pada artikel hari ini, Anbi akan menjelaskan _step by step_ membuat program menentukan zodiak atau rasi bintang. 

> **Perlu diperhatikan** artikel kali ini sifatnya hanya untuk kebutuhan akademis, tim AnbiDev tidak berhubungan sedikitpun dengan Pembuatan Aplikasi Ramalan Horoscope atau Zodiak atau kepercayaan yang kuat kepada ramalan zodiak. Oke, langsung saja kita akan pelajari terlebih dahulu logikanya.

<br>

### Logika

<hr>

Karena Zodiak ditentukan berdasarkan **`tanggal lahir`**, program yang akan kita buat dimulai dengan melakukan input tanggal lahir. Kita hanya input data **tanggal** dan **bulan** saja, karena untuk tahun tidak berpengaruh pada penentuan zodiak. Kita akan menggunakan banyak `pengkondisian` untuk menyesuaikan kondisi jarak bulan dan tanggal rasi bintang. Berikut Anbi berikan tabel rasi bintang atau zodiak, kita akan ikuti tabel dibawah ini:
<br>

| Zodiak | Tanggal |
| --- | --- |
| Aries | 21 Maret – 19 April |
| Taurus | 20 April – 20 Mei |
| Gemini | 21 Mei – 20 Juni |
| Cancer | 21 Juni – 22 Juli |
| Leo | 23 juli – 22 Agustus |
| Virgo | 23 Agustus – 22 September |
| Libra | 23 September – 22 Oktober |
| Scorpio | 23 Oktober – 21 November |
| Sagitarius | 22 November – 21 Desember |
| Carpicorn | 22 Desember  – 19 Januari |
| Aquarius | 20 januari – 18 Februari |
| Pisces | 19 Februari – 20 Maret |

<br>

### Tahap 1 - Input Biodata

<hr>

Pertama kita buat terlebih dahulu input untuk tanggal. Anbi akan membuat input untuk nama.

```c
#include <stdio.h>

char nama[30], bulan[10];
int tanggal;

int main() { 
    printf("Masukkan Nama: "); scanf(" %[^\n]s", &nama);
    printf("Masukkan Tanggal: "); scanf(" %d %s", &tanggal, &bulan);

    return 0;
}
```

Disini Anbi menaruh variable untuk nama, tanggal, dan bulan diluar `fungsi main`. Agar fungsi main lebih rapi, Anbi mau membuat fungsi lain untuk mencari zodiak, jadi variable yang ada diluar fungsi main tetap bisa diakses dari fungsi yang lain (`Global Variable`).

<br>

### Tahap 2 - Fungsi Mencari Zodiak

<hr>
Pada tahap ini kita akan membuat fungsi baru. Kedepannya di fungsi inilah, zodiak ditentukan. Untuk saat ini, kita hanya membuat output dari nama dan tanggal lahir yang telah kita input. Jangan lupa juga kita deklarasikan fungsi `void cariZodiak()` terlebih dahulu diawal agar tidak keluar warning. Kita juga siapkan variabel `bintang` untuk menampung nama zodiak

```c
char *bintang;

void cariZodiak();

int main() { 
    printf("Masukkan Nama: "); scanf(" %[^\n]s", &nama);
    printf("Masukkan Tanggal: "); scanf(" %d %s", &tanggal, &bulan);

    cariZodiak();

    return 0;
}
void cariZodiak() {
    printf("\nNama: %s\n", nama);
    printf("Bintang: %s\n", bintang);
    printf("Tanggal Lahir: %d %s\n", tanggal, bulan);
}
```

Jika kita jalankan, saat ini akan keluar output dari nama dan tanggal+bulan lahir. Untuk bintang masih dalam keadaan `null`.

<br>

### Tahap 3 -  Perulangan

<hr>

![](/post/fc-dowhile.png)

Tahap ini sifatnya opsional ya, kalian boleh ikuti atau tidak. Disini Anbi ingin membuat **pertanyaan** apakah user mau melakukan input data lagi atau tidak. Anbi menggunakan perulangan `do while`.

```c
char pilihan = 'y';

do {
    printf("Masukkan Nama: "); scanf(" %[^\n]s", &nama);
    printf("Masukkan Tanggal Lahir: "); scanf(" %d %s", &tanggal, &bulan);

    caribintang(tanggal, bulan);

    printf("\nApakah  mau mengulang?\n");
    printf("Jawab (y/t): ");
    scanf(" %c", &pil);
    printf("\n"); 
} while (pilihan == 'y');
```

<br>

### Tahap 4 - Pengkondisian

<hr>
Disini sudah mulai agak ribet dengan pengkondisian. Logika yang akan kita gunakan adalah seperti ini. Jika **bulan yang diinput oleh user** sesuai dengan **bulan dari rasi bintang tertentu** dan jika **masih dalam jarak tanggal** dari rasi bintang tertentu maka kita tentukan zodiaknya. 

![](/post/fc-dowhile-2.png)

Untuk kode dari pengkondisiannya adalah sebagai berikut (didalam fungsi cariZodiak):

```c
if ((strcmp(bulan, "Januari") == 0) || (strcmp(bulan, "januari") == 0))  {
    if (tanggal >= 1 && tanggal <= 20) {
        bintang = "Carpicron"; 
    } else if (tanggal >= 20 && tanggal <= 31) {
        bintang = "Aquarius";
    } else {
        printf("Tanggal tidak sampai %d\n", tanggal);
        bintang = "-";
    }
    } else {
        printf("Format Bulan Salah\n");
        bintang = "-";
}
```

Kode diatas akan kita ulang sebanyak jumlah zodiak. Sesuaikan juga Bulan, Tanggal dan nama Zodiaknya. Disini Anbi menggunakan `strcmp` (String Compare). Cukup kompleks ya, disini Anbi juga menggunakan pengkondisian jika user memberikan input menggunakan huruf kapital diawal kata atau huruf kecil semua.

<br>

### Tahap 5 - Selesai

Berikut Source Code lengkap dari kode diatas, silakan sesuaikan jika ada perbedaan

```c
#include <stdio.h>
#include <string.h>

char nama[30];
char bulan[10];
int tanggal=0;
char *bintang;

void caribintang();

int main () {
	char pilihan = 'y';
	
	do {
		printf("Masukkan Nama: "); scanf(" %[^\n]s", &nama);
		printf("Masukkan Tanggal Lahir: "); scanf(" %d %s", &tanggal, &bulan);
		
		caribintang(tanggal, bulan);
		
		printf("\nApakah  mau mengulang?\n");
	    printf("Jawab (y/t): ");
	    scanf(" %c", &pil);
		printf("\n");	
		
	} while (pilihan == 'y');
	
	return 0;	
}

void caribintang() {
	if ((strcmp(bulan, "Januari") == 0) || (strcmp(bulan, "januari") == 0))  {
		if (tanggal >= 1 && tanggal <= 20) {
			bintang = "Carpicron";	
		} else if (tanggal >= 20 && tanggal <= 31) {
			bintang = "Aquarius";
		} else {
			printf("Tanggal tidak sampai %d\n", tanggal);
			bintang = "-";
		}
	} else if ((strcmp(bulan, "Februari") == 0) || (strcmp(bulan, "februari") == 0)) {
		if (tanggal > 0 && tanggal < 19) {
			bintang = "Aquarius";	
		} else if (tanggal > 18 && tanggal < 29) {
			bintang = "Pisces";
		} else {
			printf("Tanggal tidak sampai %d\n", tanggal);
			bintang = "-";
		}
	} else if ((strcmp(bulan, "Maret") == 0) || (strcmp(bulan, "maret") == 0))  {
		if (tanggal > 0 && tanggal < 21) {
			bintang = "Pisces";	
		} else if (tanggal > 20 && tanggal < 32) {
			bintang = "Aries";
		} else {
			printf("Tanggal tidak sampai %d\n", tanggal);
			bintang = "-";
		}
	} else if ((strcmp(bulan, "April") == 0) || (strcmp(bulan, "april") == 0)) {
		if (tanggal > 0 && tanggal < 20) {
			bintang = "Aries";	
		} else if (tanggal > 20 && tanggal < 31) {
			bintang = "Taurus";
		} else {
			printf("Tanggal tidak sampai %d\n", tanggal);
			bintang = "-";
		}
	} else if ((strcmp(bulan, "Mei") == 0) || (strcmp(bulan, "mei") == 0)) {
		if (tanggal > 0 && tanggal < 21) {
			bintang = "Taurus";	
		} else if (tanggal > 20 && tanggal < 31) {
			bintang = "Gemini";
		} else {
			printf("Tanggal tidak sampai %d\n", tanggal);
			bintang = "-";
		}
	} else if ((strcmp(bulan, "Juni") == 0) || (strcmp(bulan, "juni") == 0))  {
		if (tanggal > 0 && tanggal < 21) {
			bintang = "Gemini";	
		} else if (tanggal > 20 && tanggal < 31) {
			bintang = "Cancer";
		} else {
			printf("Tanggal tidak sampai %d\n", tanggal);
			bintang = "-";
		}
	} else if ((strcmp(bulan, "Juli") == 0) || (strcmp(bulan, "juli") == 0))  {
		if (tanggal > 0 && tanggal < 23) {
			bintang = "Cancer";	
		} else if (tanggal > 22 && tanggal < 32) {
			bintang = "Leo";
		} else {
			printf("Tanggal tidak sampai %d\n", tanggal);
			bintang = "-";
		}
	} else if ((strcmp(bulan, "Agustus") == 0) || (strcmp(bulan, "agustus") == 0))  {
		if (tanggal > 0 && tanggal < 23) {
			bintang = "Leo";	
		} else if (tanggal > 22 && tanggal < 32) {
			bintang = "Virgo";
		} else {
			printf("Tanggal tidak sampai %d\n", tanggal);
			bintang = "-";
		}
	} else if ((strcmp(bulan, "September") == 0) || (strcmp(bulan, "september") == 0))  {
		if (tanggal > 0 && tanggal < 23) {
			bintang = "Virgo";	
		} else if (tanggal > 22 && tanggal < 31) {
			bintang = "Libra";
		} else {
			printf("Tanggal tidak sampai %d\n", tanggal);
			bintang = "-";
		}
	} else if ((strcmp(bulan, "Oktober") == 0) || (strcmp(bulan, "oktober") == 0))  {
		if (tanggal > 0 && tanggal < 23) {
			bintang = "Libra";	
		} else if (tanggal > 22 && tanggal < 32) {
			bintang = "Scorpio";
		} else {
			printf("Tanggal tidak sampai %d\n", tanggal);
			bintang = "-";
		}
	} else if ((strcmp(bulan, "November") == 0) || (strcmp(bulan, "november") == 0))  {
		if (tanggal > 0 && tanggal < 22) {
			bintang = "Scorpio";	
		} else if (tanggal > 22 && tanggal < 31) {
			bintang = "Sagitarius";
		} else {
			printf("Tanggal tidak sampai %d\n", tanggal);
			bintang = "-";
		}
	} else if ((strcmp(bulan, "Desember") == 0) || (strcmp(bulan, "desember") == 0))  {
		if (tanggal > 0 && tanggal < 22) {
			bintang = "Sagitarius";	
		} else if (tanggal > 21 && tanggal < 32) {
			bintang = "Carpicorn";
		} else {
			printf("Tanggal tidak sampai %d\n", tanggal);
			bintang = "-";
		}
	} else {
		printf("Format Bulan Salah\n");
		bintang = "-";
	}
	
	printf("\nNama: %s\n", nama);
	printf("Bintang: %s\n", bintang);
	printf("Tanggal Lahir: %d %s\n", tanggal, bulan);
}
```

Cukup panjang, semoga tidak bingung. Tapi jika kamu punya ide lain yang lebih efisien untuk merefaktor kodenya, silakan tulis dikolom komentar. Terimakasih, semoga bermanfaat.