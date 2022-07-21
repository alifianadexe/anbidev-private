+++
authors = "bagus"
categories = []
cover = "/post/web-otomata.jpg"
date = 2021-05-05T17:00:00Z
dateUpdate = 2021-05-05T17:00:00Z
description = "Sub bab pada teori otomata "
series = ""
status = "publish"
tags = ["dfa", "fsa", "otomata", "teori otomata", "kuliah"]
title = "Konsep Bahasa"
type = []
url = "/konsep-bahasa"
[author]
images = ""
name = "bagus"

+++
**Simbol**

Entitas tunggal yang terdiri dari 1 karakter

• Contoh: a, b, c, 0, 1, 2, …

Alfabet atau Abjad (Σ)

• Himpunan terbatas simbol-simbol

• Contoh:

• Σ = {a, b, c}

• Σ = {0, 3, 8}

• alfabet latin, Σ = {a, b, c, …, z}

• alfabet Yunani, Σ = {α, β, γ, δ, …, ω}

• alfabet biner, Σ = {0, 1}

String atau Untai

• String adalah barisan yang disusun oleh simbol-simbol alfabet.

• Nama lain untuk string adalah “kata” atau word

Contoh: 

 - a, b, 0, 1, aa, bb, 01, …

 - 1011 adalah untai yang berasal dari alfabet Σ = {0, 1}

 - cilok, seblak, pedas; adalah untai yang berasal dari alfabet Σ = {a, b, c, ... , z}

• 111201998765 adalah untai yang berasal dari alfabet Σ = {1, 2, 3, 4, ... , 9}

• String kosong (null string) adalah string yang tidak mempunyai simbol yang berasal dari alfabet

 - Notasi: ε atau λ

• Panjang string adalah jumlah simbol yang membentuk string

Contoh:

 - Panjang string 7418 ditulis |7418| = 4

 - Panjang string “cilok” ditulis |cilok| = 5

 - Panjang string ε ditulis |ε| = 0

Pangkat Alfabet

• Jika Σ = {0, 1}, maka:

• Σ0 = {ε}

• Σ1 = {0, 1}

• Σ2 = {00, 01, 10, 11}

• Σ3 = {000, 001, 010, 011, 100, 101,110, 111}

• Σ* (Kleene Star)

• Himpunan seluruh string mulai dari string kosong sampai string dengan panjang tertentu

• Σ* = Σ0 + Σ1 + Σ2 + … = Σ0 ∪ Σ1 ∪ Σ2 ∪ …

• Σ* = {ε, 0, 1, 00, 01, 10, 11, 000, ...}

• Σ+ (Kleene Plus)

• Himpunan seluruh string tanpa string kosong

• Σ+ = Σ1 + Σ2 + Σ3 +… = Σ1 ∪ Σ2 ∪ Σ3 ∪ …

• Σ+ = {0, 1, 00, 01, 10, 11, 000, ...}

Bahasa Formal (Formal Language)

• Bahasa Formal – selanjutnya disebut bahasa – adalah himpunan bagian dari Σ*

• Jika Σ adalah alfabet, dan L ⊆ Σ* , maka L adalah bahasa.

Contoh: Σ = {0, 1}

 - Himpunan seluruh string dengan panjang untai 2:

	+ L1 = {00, 01, 10, 11}

 - Himpunan seluruh string dengan panjang untai 3:

	+ L2 = {000, 001, 010, 011, 100, 101, 110, 111}

 - Himpunan bilangan biner yang nilainya sama dengan bilangan prima:

	+ L3 = {10, 11, 101, 111, 1011, 1101, …}

Bahasa pemrograman C++, atau Java, termasuk bahasa formal yang berasal dari alfabet

• Σ = {a, b, c, ... , z, A, B, C, ..., Z, 0, 1, 2, …, 9, < , >, =, +, – , *, /, (, ), ., &,!, %, ^, {, }, |, ‘, :, ;}

Tata bahasa (grammar)

• Tata bahasa (grammar) adalah aturan yang digunakan untuk membangkitkan atau mengenali kalimat di dalam suatu bahasa.

• Penulisan suatu kalimat dalam sebuah bahasa, akan mengikuti tata bahasa yang berlaku pada bahasa tersebut

#### Operasi pada Bahasa

**Perangkaian (Concatenation)**

Misal L1 dan L2 merupakan bahasa-bahasa berdasarkan alfabet Σ. Perangkaian L1 dan L2 ditulis : L1 . L2 = {w1.w2 | w1 ∈ L1 dan w2 ∈ L2}

Contoh:

 - L1 = {sandal, paku}

 - L2 = {goreng, rebus}

Maka, L1 . L2 = {sandalgoreng, sandalrebus, pakugoreng, pakurebus}

**Eksponensiasi (Exponentiation)**

Misal L merupakan suatu bahasa berdasarkan alfabet Σ.

Contoh:

Jika L = {xy}, maka:

L0 = {ε}

L1 = L = {xy}

L2 = L . L1 = {xyxy}

L3 = L . L2 = {xyxyxy}

**Gabungan (Union)**

L1 ∪ L2 = {x|x ∈ L1 atau x ∈ L2}

Union terdiri dari semua untai yang muncul sekurang-kurangnya sekali dalam L1 dan L2

Contoh:

Jika Σ = {0, 1}

L1 = {ε, 0, 1, 10, 11}

L2 = {ε, 1, 0110, 11010}

L1 ∪ L2 = {ε, 0, 1, 10, 11, 0110, 11010}

**Irisan (Intersection)**

L1 ∩ L2 = {x|x ∈ L1 dan x ∈ L2}

Irisan terdiri dari semua untai yang muncul baik di L1 maupun L2

Contoh:

Jika Σ = {0, 1}

L1 = {ε, 0, 1, 10, 11}

L2 = {ε, 1, 0110, 11010}

L1 ∩ L2 = {ε, 1}

**Sub Bahasa**

L1 ⊆ L2

Jika semua string di L1 juga merupakan string di L2, maka L1 disebut sub bahasa dari L2

Contoh:

Jika L1 = {0, 00, 000} dan L2 = {0, 00, 000, 0000, 00000}, maka L1 ⊆ L2.

Sama (Equal)

L1 = L2

Dua buah bahasa L1 dan L2 dikatakan sama, jika kedua bahasa tersebut secara persis mempunyai untai-untai yang sama

Contoh:

Jika L1 = {0, 00, 000} dan L2 = {0, 00, 000}, maka L1 = L2.