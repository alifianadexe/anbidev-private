+++
authors = "J3ndra"
tutorials = ["android"]
cover = "/post/web-layoutandro.jpg"
date = 2021-01-29T15:00:00Z
description = "Berkenalan dengan cara layouting pada Android Studio"
series = "Android 101"
shortcode = "Layouting"
status = "publish"
sumber = ["https://developer.android.com/guide/topics/ui/declaring-layout?hl=id"]
tags = ["kotlin", "android-studio"]
title = "Layouting Pada Android Studio"
type = ["tutorials", "tutorial"]
url = "/layouting-pada-android-studio"
[author]
images = "/img/j3ndra.jpg"
name = "J3ndra"

+++
Dalam kesempatan kali ini, kita akan belajar tentang **Layouting** atau tata letak pada Android Studio yang dimana Layout menjadi UI pada tampilan Android kita.

<br>

## Membuat Project Baru

1. Buat terlebih dahulu project Android Studio dengan nama yang Anda inginkan.

   ![](/post/new-project.png)
2. Jika ketika Anda membuka Android Studio dan menampilkan halaman utama Android Studio, klik saja **_Start a new Android Studio Project_**.
3. Pada halaman **_Create New Project_**, pada Tab **_Phone and Tablet_**, pilih **_Empty Activity_**. Klik **_Next_**.

   ![](/post/select-a-project-template.PNG)
4. Pada halaman selanjutnya, buat parameternya seperti dibawah ini. Lalu klik **_Finish_**

   | Attribute | Value |
   | --- | --- |
   | Name | TentangSaya |
   | Package name | com.anbidev.tentangsaya |
   | Save Location | C:\\Users${pcname}\\AndroidStudioProjects\\TentangSaya |
   | Language | Kotlin |
   | Minimum SDK | API 21: Android 5.0 (Lollipop) |

   ![](/post/configure-your-project-tentangsaya.png)
5. Tunggu hingga Android Studio selesai membuat file untuk project siap digunakan
6. Coba jalankan Aplikasi Anda, maka Anda akan melihat String "Hello World" pada tampilan

> Jika kalian tidak suka tampilan Dark Mode yang disediakan oleh Android Studio, kalian bisa menonaktifkannya melalui `res/values/themes/themes.xml` lalu ubah parent dari style menjadi `Theme.MaterialComponents.Light.DarkActionBar`. Begitu juga `themes.xml (night)`.

Yang berarti dimana **_Empty Activity_** template membuat single **_Empty Activity_**, `MainActivity.kt`. Template tersebut juga membuat layout file bernama `activity_main.xml`. Layout tersebut memiliki `ConstraintLayout`yang menjadi root pada sebuah `ViewGroup`, dan memiliki satu `TextView` sebagai content didalamnya.

<br>

## Merubah Root Layout menjadi LinearLayout

<hr>

### View Groups

`ViewGroup` adalah view yang dapat memiliki _child_ views, seperti views dan view groups.

Pada `LinearLayout` view group, element UI dapat di ubah menjadi Horizontal maupun Vertical.

![](/post/linearlayout.png)

Mari kita ubah root layout yang dimana kita akan menggunakan `LinearLayout` view group:

1. Pada panel **Project** -> **Android**. didalam `app/res/layout` folder, buka file `activity_main.xml`.
2. Pilih **Text** atau **Code** tab dan ubah root view group dari `ContraintLayout` menjadi `LinearLayout`.
3. Singkirkan `TextView` dan pada element `LinearLayout` tambahkan attribute `android:orientation` dan beri nilai `vertical`.

**Sebelum**

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

**Sesudah**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">

</LinearLayout>
```

<br>

## Menambahkan TextView dengan Layout Editor

<hr>

[Layout Editor](https://developer.android.com/studio/write/layout-editor) adalah tool visual-design yang tersedia oleh Android Studio. Daripada menulis code XML, Anda bisa menggunakan Layout Editor dengan drag element UI kedalam design editor.

Untuk melihat Layout Editor, click tab **Design**. Lihat contoh dibawah

![](/post/layout-editor.png)

1. **Design Editor** : Menampilkan halaman visual dari layout Anda.
2. **Toolbar** : Menyediakan alat untuk mengedit tampilan pada design editor dan mengubah beberapa attribute layout. Sebagai contoh, coba tekan drop-down menu **Select Design Surface** ![](/post/select-design-surface.PNG)
   * **Design** untuk melihat langsung tampilan dari layout yang Anda buat.
   * **Blueprint** untuk melihat hanya outline dari masing-masing view.
   * **Design + Blueprint** untuk melihat keduanya.
3. **Palette** : Menyediakan list dari views dan juga view groups yang dapat anda drag ke layout Anda atau ke **Component Tree**.
4. **Attributes** : Menampilkan attributes yang saat ini berada di sebuah view atau view group.
5. **Component Tress** : Menampilkan hirarki dari layout views sebagai tress. **Component Tree** sangat bermanfaat ketika Anda memiliki view yang kecil, tersembunyi/hidden, atau bahkan overlapping sehingga views tidak dapat ditampilkan pada design editor.

### Menambahkan TextView

1. Buka file `res/layout/activity_main.xml`.
2. Pindah ke tab **Code** ![](/post/code-tab.PNG) dan coba amati code tersebut. `activity_main.xml` memiliki `LinearLayout` sebagai root view group.

   `LinearLayout` memiliki attributes utama yang harus diisi, yaitu `layout_height`, `layout_weight`, `orientation`, yang dimana orientation akan ter set secara default di `vertical`.
3. Pindah ke tab **Design**.

> **Note** : Tab **Design** dan tab **Code** menampilkan layout yang sama, hanya saja dengan cara yang berbeda.

1. Drag `TextView` dari panel **Palette** ke design editor.

   ![](/post/drag-from-palette.png)
2. Coba perhatikan **Component Tree**. `TextView` berada di child element dari parent view group `LinearLayout`.

   ![](/post/component-tress.png)
3. Buka panel **Attributes**, dan buat attributes `TextView` menjadi seperti dibawah

   | Attribute | Value |
   | --- | --- |
   | ID | name_text |
   | text | Tulis nama Anda |
   | textAppearance > textSize | 20sp |
   | textAppearance > textColor | @android:color/bacl |
   | textAppearance > textAlignment | Center |

### Membuat string resource

Pada **Component Tree**, setelah `TextView` Anda akan melihat warning icon berupa segitiga kuning. Untuk melihat lebih detail, click icon tersebut atau hanya drag pointer ke icon warning, seperti contoh dibawah.

![](/post/warning-hardcoded.png)

Untuk mengatasi masalah seperti di atas, buatlah string resource:

1. Click warning icon pada **Component Tree**, lalu akan ada tulisan **Suggested Fix** dan click saja tombol **Fix**.
2. Setelah itu akan keluar halaman **Extract Resource**. Silahkan isi parameter sesuai dengan yang Anda inginkan.

   ![](/post/extract-resource.PNG)
3. Lalu coba buka file `res/values/string.xml` maka akan terbuat string baru dengan nama yang barusan Anda berikan.

   ```xml
   <string name="welcome_to_anbidev">Welcome to AnbiDev</string>
   ```

   ### Menambahkan dimension resource
   1. Pada tab `activity_main.xml`, pindah ke pilihan `code`.
   2. Lalu pada attributes `textSize` pada view `TextView`, click pada angka 20 (sesuai dengan size yang Anda berikan tadi) lalu click `alt` + `enter` (`Option` + `Enter` pada Mac) -> **Extrack dimension resource** maka akan keluar halaman **Extract Resource**.
   3. Pada **Extract Resource**, beri attribute **Resource name** berupa `text_size`, lalu click **OK**.

      ![](/post/textsize.PNG)
   4. Maka pada `res/values` akan terbuat file baru berupa `dimens.xml`. Maka kalian akan melihat hasil dari extract resource `text_size`.

      ```xml
      <dimen name="text_size">20sp</dimen>
      ```

### Merubah tampilan dari TextView

Ketika Anda melihat tampilan Layout, maka `TextView` berada di pojok atas. Sekarang, mari kita tambahkan margin dan juga padding.

#### Padding? Margin?

Padding adalah space di dalam dari sebuah view. Sebagai contoh bisa lihat dibawah ini.

![](/post/padding-margin.png)

Contoh attributes dari Padding:

* `android:padding` menambahkan padding ke semua sisi.
* `android:paddingLeft` menambahkan padding ke sisi kiri.
* `android:paddingRight` menambahkan padding ke sisi kanan.
* `android:paddingTop` menambahkan padding ke sisi atas.
* `android:paddingStart` menambahkan padding ke sisi awal sebuah view.
* `android:paddingEnd` menambahkan padding ke sisi akhir sebuah view.

Sedangkan Margin menambahkan space di luar sisi view. Untuk contoh attributes sama dengan Padding, hanya saja berbeda sedikit seperti `android:layout_marginEnd`.

> ##### **IMPORTANT!**
>
> **Right/Left or Start/End?**
>
> Right dan Left selalu menunjukkan sisi kanan dan kiri dari sebuah screen, apakah aplikasi yang anda buat menggunakan left-to-right (LTR) flow atau right-to-left (RTL) flow. Start dan End selalu melihatnya sebagai awal dan akhir dari flow.
>
> * Untuk LTR flow, start = kiri dan end = kanan.
> * Untuk RTL flow, start = kanan dan end = kiri.
>
> Jika aplikasi anda memiliki target API 17 (Android 4.2) atau lebih tinggi:
>
> * Gunakan Start dan End daripada Left dan Right.
> * Sebagai contoh, `android:layout_marginLeft` harus menjadi `android:layout_marginStart` untuk mensupport RTL.
>
> Jika Anda menginginkan aplikasi Anda bekerja pada versi yang lebih rendah dari 4.2 atau `targetSdkVersion` atau `minSdkVersion` adalah 16 atau mungkin lebih rendah, gunakan:
>
> * Tambahkan Start dan End sebagai tambahan dari Left dan Right
> * Sebagai contoh, gunakan `android:paddingLeft` dan juga `android:paddingStart`.

### Menambahkan Padding

Untuk menambahkan space antara nama dan sisi atas Layout, tambahkan padding atas.

1. Buka `res/values/dimens.xml`.
2. Lalu buat `dimen` baru bernama `small_padding` dengan nilai attributes `8dp`

   ```xml
   <dimen name="small_padding">8dp</dimen>
   ```

### Menambahkan Margin

1. Tetap berada di `res/values/dimens.xml`
2. Buat `dimen` baru bernama `layout_margin` dan beri nilai attributes `16dp`.

   ```xml
   <dimen name="layout_margin">16dp</dimen>
   ```

### Menambahkan Font

1. Buka `res/layout/activity_main.xml` dan pilih **Design** tab.
2. Pada **Component Tree** click `TextView` dan pada panel **Attributes** cari `fontFamily` dan click tombol drop-down, scroll hingga paling bawah lalu click **More Fonts**.
3. Pada halaman **Resource**, cari `roboto` dan pilih **Roboto**. Pada list **Preview**, pilih **Regular**.
4. Pilih **Add font to project**, lalu click **OK**.

   ![](/post/font-family.PNG)

Maka pada folder `res` akan terbuat folder baru yaitu `font` yang berisikan `roboto.ttf`. Lalu tinggal tambahkan `@font/robot` pada attribute `TextView` kita.

### Menambahkan style

1. Klik kanan pada folder `res/values` -> `Value Resource Files`. Lalu beri **File name** berupa `styles`.
2. Lalu tambahkan semuanya tadi menjadi satu style, seperti contoh dibawah.

   ```xml
   <style name="WelcomeStyle">
       <item name="android:layout_marginTop">@dimen/layout_margin</item>
       <item name="android:fontFamily">@font/roboto</item>
       <item name="android:paddingTop">@dimen/small_padding</item>
       <item name="android:textColor">@android:color/black</item>
       <item name="android:textSize">@dimen/text_size</item>
   </style>
   ```
3. Lalu pada `res/layout/activity_main.xml` dan tab **Code**. Ubah `TextView` menggunakan `style="@style/WelcomeStyle"`. Seperti contoh dibawah.

   ```xml
   <TextView
       android:id="@+id/textView"
       android:layout_width="match_parent"
       android:layout_height="wrap_content"
       android:text="@string/welcome_to_anbidev"
       android:textAlignment="center"
       style="@style/WelcomeStyle"/>
   ```
4. Setelah itu coba jalankan Aplikasi yang Anda buat.

   ![](/post/tentangsaya.PNG)

### Menambahkan ImageView

`ImageView` adalah view yang dipergunakan untuk menampilkan resources gambar. Seperti contoh, `ImageView` dapat menampilkan `Bitmap` resources seperti PNG, JPG, GIF, atau WebP dan juga `Drawable` resources seperti gambar Vector.

1. Coba kalian download gambar atau icon apa saja dari internet. Setelah itu taruh gambar pada `res/drawable/` dan beri nama `ic_nama_gambar`.
2. Setelah itu pada `res/layout/activity`_`main.xml` tambahkan view `ImageView` dan beri attributes seperti dibawah. (`android:layout_height="128dp"` bisa anda sesuaikan dengan ukuran asli gambar Anda.)

   ```xml
   <ImageView
       android:id="@+id/imageView"
       android:layout_width="match_parent"
       android:layout_height="128dp"
       app:srcCompat="@drawable/ic_anbidev_logo"/>
   ```
3. Coba Anda perhatikan pada tab **Design** -> **Component Tree**, maka kalian akan melihat Warning pada `ImageView` yang kita buat kehilangan sebuah `contentDescription`, yang dimana akan digunakan oleh [screen readers](https://en.wikipedia.org/wiki/Screen_reader) untuk dijelaskan kepada users.
4. Beri attributes `android:contentDescription="Nama Desc"` untuk memberi `contentDescription`. Jika ada warning hardEncoded, jangan lupa untuk di extract resource stringnya, bisa langsung Anda lakukan dengan menaruh pointer pada `contentDescription` lalu `alt` + `enter` (`Option` + `Enter` pada Mac).
5. Dan juga berikan margin atas pada `ImageView` dengan nilai attributes `16dp` dan extract margin tersebut ke `dimens.xml`. Maka `ImageView` kita akan menjadi seperti dibawah ini.

   ```xml
   <ImageView
       android:id="@+id/imageView"
       android:layout_width="match_parent"
       android:layout_height="128dp"
       app:srcCompat="@drawable/ic_anbidev_logo"
       android:layout_marginTop="@dimen/margin_logo"
       android:contentDescription="@string/anbidev_logo" />
   ```

### Menambahkan ScrollView

`ScrollView` adalah view group yang mengijinkan child view didalamnya dapat di scroll, jika coba Anda membuat text yang sangat panjang menggunakan lorem ipsum dan hanya menggunakan LinearLayout maka kalian tidak dapat menscroll layout tersebut. Maka dari itu `ScrollView` sangat dibutuhkan disini. Berikut adalah gambaran menggunakan `ScrollView`.

![](/post/scrollview.png)

#### Menambahkan ScrollView yang berisikan TextView

1. Buka `activity_main.xml` dan pada tab **Design**.
2. Taruh `ScrollView` dengan menariknya dari **Palette** menuju ke **Component Tree** tepat dibawah `ImageView`.

   ![](/post/scrollviewcomponenttree.PNG)
3. Lalu beri `id` pada `ScrollView` dengan nama `scroll_view`. Lalu singkirkan `LinearLayout` yang berada di `ScrollView` karena tidak akan kita gunakan.
4. Setelah itu masukkan `TextView` didalam `ScrollView`, dan set `id` menjadi `text_scroll`.
5. Tambahkan `res/values/dimens.xml` baru _`<`_`dimen name="layout_padding"`_`>`_`16dp`_`</`_`dimen`_`>`_ untuk style baru bagi `text_scroll`.
6. Tambahkan style baru di `res/values/styles.xml`. Berikut contoh codenya.

   ```xml
   <style name="ScrollText">
       <item name="android:lineSpacingMultiplier">1.2</item>
       <item name="android:fontFamily">@font/roboto</item>
       <item name="android:paddingEnd">@dimen/layout_padding</item>
       <item name="android:paddingStart">@dimen/layout_padding</item>
       <item name="android:textColor">@android:color/black</item>
       <item name="android:textSize">@dimen/text_size</item>
   </style>
   ```
7. Lalu `TextView` pada `activity_main.xml` tinggal kita beri attributes style dan juga string yang ingin kita gunakan. (Disini Anbi menggunakan Lorem Ipsum, biar cepat xixi.) Berikut adalah contoh string dari Lorem Ipsum.

   ```xml
   <string name="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales ac erat at convallis. Phasellus finibus nulla ornare volutpat fringilla. Quisque blandit, nunc ut venenatis efficitur, est nulla aliquam risus, quis pharetra velit sapien eu velit. Suspendisse pharetra est elit, vel aliquam diam accumsan vitae. Sed varius mollis commodo. Sed condimentum felis at risus vehicula porttitor. Suspendisse eros diam, tincidunt in lobortis ac, fermentum sit amet mauris.
   
           \n\nNam hendrerit massa tellus, sed gravida massa interdum eu. Vestibulum felis neque, hendrerit id libero nec, suscipit iaculis nisl. Maecenas nisl massa, feugiat eu tristique ac, tristique vel risus. Nam sed pretium mi. Duis nec eleifend eros. Fusce cursus nulla magna, et euismod eros pharetra ac. Cras in velit metus. Duis eu nulla at nibh pharetra efficitur.
   
           \n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eu dictum enim. Pellentesque et justo id lorem tempor feugiat non ac sapien. Praesent non velit lobortis, scelerisque nunc in, ornare elit. Nullam sodales pellentesque diam non mattis. Proin in ex ut mauris ornare maximus. Sed justo neque, molestie tempus laoreet at, suscipit quis nulla. Vestibulum suscipit pulvinar pellentesque. Donec finibus ipsum facilisis erat sollicitudin semper.
   
           \n\nSed ut dolor dolor. Fusce vel blandit leo. Vestibulum mi odio, scelerisque id bibendum in, egestas vitae leo. Mauris in mi tortor. Fusce malesuada faucibus elit non iaculis. Duis vitae auctor metus. In ullamcorper facilisis egestas. Mauris sit amet magna nulla. Integer congue cursus arcu eget molestie. Aliquam erat volutpat.
   
           \n\nDonec tempus porttitor magna, ullamcorper pretium nisi vulputate in. Etiam sit amet tortor neque. Phasellus condimentum ornare interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed bibendum id purus ac ultricies. In efficitur euismod consequat. Aliquam semper massa nunc, ac efficitur lorem venenatis suscipit. Duis porta, enim a sollicitudin luctus, arcu turpis posuere felis, ac ullamcorper justo magna ullamcorper nisl. Curabitur viverra risus eget nunc porttitor, eu ultricies enim eleifend. Curabitur metus justo, tristique quis mollis at, sollicitudin eu nulla.</string>
   ```

   > **Note**:
   > * Gunakan `\n` untuk line break.
   > * Jika Anda menggunakan `'`, kalian harus mengakalinya dengan backslash. Sebagai contoh `"You mustn\\'t forget the backslash."`.
   > * Untuk bold text, gunakan `<b>...</b>`. dan untuk italic `<i>...</i>`. Sebagai contoh `"Ini adalah text <b>Bold</b> sedangkan ini adalah text <i>Italic</i>."`

   `TextView` didalam ScrollView.

   ```xml
   <TextView
       android:id="@+id/text_scroll"
       android:layout_width="match_parent"
       android:layout_height="wrap_content"
       style="@style/ScrollText"
       android:text="@string/lorem" />
   ```
8. Setelah itu, coba jalankan Aplikasi yang dibuat dan amati hasilnya.

   ![](/post/tentangsayascrollview.PNG)

<br>

## Done!

<hr>

yap! Untuk sementara ini dulu materi dari Layouting pada Android Studio.

> Happy Code y'all!