+++
authors = "hamid"
tutorials = ["flutter"]
cover = "/post/colrow.png"
date = 2020-11-14T17:00:00Z
description = "Mengenal Widget Column dan Row pada Flutter"
draft = true
series = "widget"
shortcode = "row & column"
status = "draft"
sumber = ["https://flutter.dev/docs/development/ui/layout"]
tags = ["flutter"]
title = "Column dan Row"
type = ["tutorials", "tutorial"]
url = "/flutter-row-dan-column"
[author]
images = "/img/hamid.jpg"
name = "Hamid"

+++
## Row

<hr>

Row adalah widget yang digunakan untuk menyajikan widget lain dalam bentuk horizontal. Widget ini tidak mampu melakukan scroll, jadi juga kita ingin melakukan scroll kita harus menggunakan ListView. Kita coba menggunakan Row dibawah body secara langsung:

```dart
    Row(
      children: [
        Container(
          color: Colors.yellow,
          child: FlutterLogo(
            size: 60.0,
          ),
        ),
        Container(
          color: Colors.orange,
          child: FlutterLogo(
            size: 60.0,
          ),
        ),
        Container(
          color: Colors.red,
          child: FlutterLogo(
            size: 60.0,
          ),
        ),
      ],
    ),
```

![Row Widget](/post/screenshot_1605326850.png "Row Widget")

<br>

## Column

<hr>

Kebalikan dari row, Column adalah widget yang digunakan untuk menyajikan widget lain dalam bentuk vertikal. Kita coba menggunakan Column dibawah body secara langsung:

```dart
    Column(
      children: [
        Container(
          color: Colors.yellow,
          child: FlutterLogo(
            size: 60.0,
          ),
        ),
        Container(
          color: Colors.orange,
          child: FlutterLogo(
            size: 60.0,
          ),
        ),
        Container(
          color: Colors.red,
          child: FlutterLogo(
            size: 60.0,
          ),
        ),
      ],
    ),
```

![Column Widget](/post/screenshot_1605327237.png "Column Widget")

<br>

## Center

<hr>

Widget ini akan membuat widget child yang ada didalamnya berada ditengah. Kita akan mencoba membungkus Row dan Column kedalam Widget Center.

<br>

#### Center (Row)

```dart
    Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Container(
            color: Colors.yellow,
            child: FlutterLogo(
              size: 60.0,
            ),
          ),
          Container(
            color: Colors.orange,
            child: FlutterLogo(
              size: 60.0,
            ),
          ),
          Container(
            color: Colors.red,
            child: FlutterLogo(
              size: 60.0,
            ),
          ),
        ],
      ),
    ),
```

![Widget Center + Row](/post/screenshot_1605328340.png "Widget Center + Row")

<br>

#### Center (Column)

```dart
    Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Container(
            color: Colors.yellow,
            child: FlutterLogo(
              size: 60.0,
            ),
          ),
          Container(
            color: Colors.orange,
            child: FlutterLogo(
              size: 60.0,
            ),
          ),
          Container(
            color: Colors.red,
            child: FlutterLogo(
              size: 60.0,
            ),
          ),
        ],
      ),
    ),
```

![Widget Center + Column](/post/screenshot_1605328361.png "Widget Center + Column")