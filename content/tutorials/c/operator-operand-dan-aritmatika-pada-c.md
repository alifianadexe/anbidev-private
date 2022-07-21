+++
authors = "hamid"
cover = "/post/web-pengenalan-c.jpg"
date = 2021-04-28T17:00:00Z
description = "Belajar tentang macam-macam operator dalam bahasa C"
series = "Dasar C"
shortcode = "Operator"
status = "publish"
sumber = []
tags = ["c"]
title = "Operator, Operand dan Aritmatika pada C"
tutorials = ["c"]
type = ["tutorial"]
url = "operator-c"
[author]
images = "/img/hamid.jpg"
name = "hamid"

+++
Setelah sebelumnya sudah belajar tentang masing-masing tipe data, sekarang kita akan belajar tentang `operator` dan `operand`. Pertama kita perlu pahami kosa-katanya. `Operand` adalah sebuah nilai yang bisa berupa constant, variable atau hasil dari function. Sedangkan `Operator` adalah simbol yang digunakan untuk melakukan operasi aritmatika, relasi atau logic.

<br>

### Macam-Macam Operator

<hr>

Ada banyak macam operator, yakni assignment, arithmetic, relational, conditional ternary, logic, dan bitwise. Kita akan pelajari masing-masing kegunaannya.

<br>

### Operator Assignment

<hr>

Operator `assignment` adalah operasi pemberian nilai ke suatu variable. Simbol yang digunakan adalah tanda sama dengan (`=`). Operand sebelah kiri operator berupa variable (`L-value`), bisa juga berupa konstan (Variable yang nilainya tidak berubah) .Sedangkan operand sebelah kanan operator berupa expression yang nilainya belum ditetapkan (`R-value`), artinya r-value ini bisa terletak disebelah kanan operator tapi tidak bisa disebelah kiri operator. Berikut contoh dari operasi assignment:

```c
// Operand1 = Operand2;

x = 5; // konstan
y = x; // variable y nilainya akan sama dengan variable x (5)
```

<br>

### Operator Aritmatika

<hr>

Seperti namanya, operator aritmatika adalah operator yang digunakan untuk melakukan operasi aritmatika atau matematika seperti penjumlahan, pengurangan, perkalian, pembagian, modulo (sisa bagi) dan scope (tanda kurung untuk menentukan prioritas penyelesaian). Berikut tabel dari operator aritmatika yang bisa digunakan pada bahasa pemrogaman c:

| Simbol | Kegunaan | Contoh |
| :---: | :---: | :---: |
| + | Penjumlahan | a = 1 + 1; |
| - | Pengurangan | b = 4 - a; |
| * | Perkalian | c = a * 8; |
| / | Pembagian | d = 4 / b; |
| % | Modulo | e = c % 2; |
| ++ | Increment | a++; |
| -- | Decrement | b--; |
| () | Scope | a = (b+c) * (d-e); |

Anbi jelaskan sedikit yang selain yang sudah `familiar` (tambah, kurang, kali, bagi). Anbi akan bahas tentang modulo, increment dan decrement.

<br>

#### Modulo

<hr>

Modulo adalah `sisa hasil bagi`, contohnya adalah 9 dibagi 3 hasilnya 3 sisanya akan 0, sedangkan untuk 10 dibagi 3 hasilnya 3 dan sisanya adalah 1. Contoh penerapan pada kode adalah sebagai berikut:

```c
if (number%2 == 0) {
	printf("%d genap", number);
} else if (number%2 == 1) {
	printf("%d ganjil", number);
}
```

Program diatas digunakan untuk menentukan bilangan ganjil atau genap. Jika variable number dibagi 2 sisanya 0 maka variable number bernilai genap, namun jika variable number dibagi 2 sisanya 1 maka variable number bernilai ganjil.

<br>

#### Increment dan Decrement

<hr>

Increment disimbolkan dengan tanda `++`, sedangkan decrement disimbolkan dengan tanda  `--` . Kedua operasi ini adalah penjumlahan dan pengurangan yang `memainkan angka 1` disetiap akumulasinya. Jadi 1++ bisa juga diartikan `1+1`, sedangkan 1 -- , dapat diartikan `1–1`. Berikut contoh programnya:

```c
int x = 1, y = 3;

x++;
printf("x = %d", x);

y--;
printf("y = %d", y);
```

Output dari x dan y adalah 2. Disini x yang awalnya bernilai 1 ditambah dengan 1. Dan y yang awalnya 3 dikurangi 1.

<br>

### Operator Relational

<hr>

Operator relational atau `operator pembanding` adalah operator yang digunakan untuk membandingkan 2 nilai yang sejenis. Kedua operandnya dapat berupa konstanta atau variable. Jika hasil perbandingannya benar maka nilainya adalah 1 (`True`), dan jika salah adalah 0 (`False`). Berikut tabel dari operator relational yang bisa digunakan pada bahasa pemrogaman c:

| Simbol | Kegunaan | Contoh |
| :---: | :---: | :---: |
| < | Kurang dari | 1 < 2 |
| > | Lebih dari | x > 2 |
| <= | Kurang dari sama dengan | x <= 1 |
| >= | Lebih dari sama dengan | x >= 2 |
| == | Sama dengan | x == 1 |
| != | Tidak sama dengan | x != 2 |

Berikut contoh penerapan kode dengan menggunakan semua simbolnya:

```c
#include <stdio.h>

int main() {
	int x = 3, y = 5;
	
	if(x==y) printf("%d sama dengan %d\n", x, y);
	if(x!=y) printf("%d tidak sama dengan %d\n", x, y);
	if(x<y) printf("%d kurang dari %d\n", x, y);
	if(x>y) printf("%d lebih dari %d\n", x, y);
	if(x<=y) printf("%d kurang dari sama dengan %d\n", x, y);
	if(x>=y) printf("%d lebih dari sama dengan %d\n", x, y);
	
	return 0;
}
```

Output:

```sh
3 tidak sama dengan 5
3 kurang dari 5
3 kurang dari sama dengan 5
```

<br>

### Operator Conditional

<hr>

Conditional Operator atau `operator pengkondisian` hampir mirip dengan if else. Disini kita menggunakan `operator ternary ( : ? )`. Apa itu Ternary, mari kita simak kode berikut

```c
#include <stdio.h>

int main() {
	int max, x = 3, y = 5;
	max = (x > y) ? printf("Max: %d", x) : printf("Max: %d", y);
 
	return 0;
}
```

Kode diatas adalah kode untuk mencari nilai antara x dan y mana yang lebih besar. Rumus dari Ternary adalah sebagai berikut

> kondisi ? jika true : jika false

Jika kondisi terpenuhi maka hasilnya `true` dan keluaran pertama akan dijalankan, sedangkan jika kondisi tidak terpenuhi maka hasilnya `false` dan keluaran kedua yang dijalankan.

<br>

### Operator Logic

<hr>

Operator logic adalah operator yang berkaitan dengan `operasi logika`. Pada mata kuliah `Discrete Math`, Anbi belajar tentang negasi (ingkaran), konjungsi (dan), disjungsi (atau). Berikut ini tabel simbol pada operator logika yang bisa kita gunakan pada Bahasa C:

| Simbol | Kegunaan | Contoh |
| :---: | :---: | :---: |
| ! | Negasi (ingkaran) | !(1>2) true, karena (1>2) false |
| && | Konjungsi (dan) | (2>3) && (6>5) false, karena (2>3) false |
| \|\| | Disjungsi (atau) | (2>3) \|\| (6>5) true, karena (6>5) true |

Berikut contoh implementasi pada kode:

```c
#include <stdio.h>

int main() {
	int a, b, c;
	
	a = !(1 > 2);
	b = (2 > 3) && (6 > 5);
	c = (2 > 3) || (6 > 5);
	
	printf("Nilainya %d\n", a);
	printf("Nilainya %d\n", b);
	printf("Nilainya %d\n", c);
	
	return 0;
}
```

Output:

```sh
Nilainya 1
Nilainya 0
Nilainya 1
```

Disini 1 artinya `True` dan 0 artinya `False`.

<br>

### Operator Bitwise

<hr>

Operator bitwise adalah operator yang memperlakukan operandnya sebagai kuantitas yang `terdiri dari bit-bit`. Berikut tabel operator bitwise yang ada pada Bahasa Pemrogaman C:

| Simbol | Kegunaan | Contoh (Desimal) | Contoh (Biner) | Hasil (Biner) | Hasil (Desimal) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| & | AND | 3 & 5 | 0011 & 0101 | 0001 | 1 |
| \| | OR | 3 \| 5 | 0011 \| 0101 | 0111 | 7 |
| ^ | XOR | 3 ^ 5 | 0011 ^ 0101 | 0110 | 6 |
| >> | Shift Right | 5 >> 2 | 00000101 >> 2 | 00000001 | 1 |
| << | Shift Left | 3 << 2 | 00000011 << 2 | 00001100 | 12 |

Berikut penerapan kode dari tabel diatas:

```c
#include <stdio.h>

int main() {
	int a = 3, b = 5;
	
	printf("%d & %d = %d\n", a, b, a&b);
	printf("%d | %d = %d\n", a, b, a|b);
	printf("%d ^ %d = %d\n", a, b, a^b);
	printf("%d >> 2 = %d\n", b, b>>2);
	printf("%d << 2 = %d\n", a, a<<2);
	
	return 0;
}
```

Output:

```sh
3 & 5 = 1
3 | 5 = 7
3 ^ 5 = 6
5 >> 2 = 1
3 << 2 = 12
```

<br>

Sekian artikel tentang Operator, Operand dan operasi Aritmatika kali ini. Terimakasih, semoga bermanfaat.