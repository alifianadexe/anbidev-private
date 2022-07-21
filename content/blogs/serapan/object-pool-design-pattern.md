+++
aliases = ["/blogs/design-pattern-singleto/"]
authors = "adexe"
categories = ["serapan"]
draft=true
cover = "/post/web-singleton.jpg"
date = 2022-02-01T00:00:00Z
dateUpdate = ""
description = "Disini saya akan menjelaskan lebih jauh tentang design pattern object pool "
series = "Serapan"
status = "publish"
tags = ["blog", "serapan", "design-pattern"]
title = "Ragam Design Pattern : Object Pool"
type = ["blogs", "blog"]
url = "/design-pattern-object-pool/"
[author]
images = "/img/adexe.jpg"
name = "AlifianAdexe"

+++

Kali ini anbi akan coba share topik terkait salah satu cara mengoptimalkan pemanfaatan sumber daya yang bisa dilakukan oleh sebuah aplikasi komputer dengan memanfaatkan **Pool**.

Server merupakan sumber daya yang sangat terbatas yang harus dioptimalkan pemanfaatannya sehingga bisa memberikan manfaat secara maksimal. Prosesor, Memori, Disk, Ethernet, Database bahkan Lisensi pun bisa dikatkan sebagai sumber daya yang harus optimal pemanfaatannya. Lalu apa saja masalah disetiap sumber daya pada server? berikut kita bahas satu persatu.

<br>

### CPU

Mulai dari CPU, benar bahwa perkembangan teknologi saat ini CPU bisa mencapai 96 bahkan 128 core, dan server bisa mensupport pemanfaatan lebih dari satu prosesor untuk setiap mesinnya. Benar bahwa untuk setiap core CPU juga dilengkapi dengan fitur _Hyperthread_ yang memungkinkan 2 eksekusi thread berjalaan bersamaan untuk setiap core-nya.

Namun jumlah tersebut tidak cukup berarti dibandingkan dengan jumlah user yang harus dilayani oleh server tersebut yang apabila thread yang berjalan tidak dikontrol maka sudah pasti yang terjadi adalah kisruh dalam memperebutkan sumber daya CPU untuk menyelesaikan eksekusi tiap-tiap threadnya.

Benar bahwa sistem operasi akan menggunakan sejumlah alogoritma terbaiknya untuk bisa membagi penggunaan CPU secara adil, namun artinya semakin banyak jumlah thread berjalan, unjuk kerja sistem secara keseluruhan akan menjadi semakin lambat, menyebabkan fungsi server menjadi _unresponsive_.

### Memory

Memory, benar bahwa server umumnya dilengkapi dengan besar memory yang lebih besar daripada client, 24 gb, 32, 64, 256, atau bahkan 1TB, namun jumlah tersebut tidak berarti apa apa jika pemanfaatannya tidak dikontrol sedemikain rupa. Setiap eksekusi thread pasti melibatkan alokasi sejumlah memori dalam prosesnya, apabila tidak ada pengaturan pemanfaatannya maka bisa dipastikan server akan mudah menjadi crash karena kehabisan resource memori, menjadikan server _vulnerable_ terhadap _denial of service_ (DOS).

### Disk

Disk, meski SSD saat ini sudah umum digunakan, aplikasinya masih cukup terbatas karena harga SSD server yang masih cukup mahal, sehingga banyak server masih menggunakan kombinasi antara SAS Disk dan SSD secara bersama sama. Namun apapun bentuknya disk memiliki batas kecepatan, apabila tidak dikontrol penggunaannya semakin banyak thread yang melakukan akses terhadap disk secara langsung bisa menyebabkan turunnya performa secara drastis, dan lebih parahnya lagi potensi terjadi deadlock, ataupun corruption akan menjadi lebih besar.

### Database

Database, setiap koneksi database membutuhkan pre-proses untuk melakukan otentikasi dan pengecekan otorisasi akses terhadap layanan yang ada, apabila setiap thread selalu melakukan inisiasi koneksi pada eksekusinya, bisa ditebak sistem yang dibuat tidak akan mampu menangani jumlah request yang besar karena latensi yang disebabkan kareana pre-proses yang dibutuhkan oleh database.

<hr>

Object Pool Design Pattern merupakan cara yang umum digunakan oleh enterprise app untuk memastikan reliabilitas sistem saat runtime yang memungkinkan sistem mengontrol pemanfaatan sumber daya yang terbatas secara lebih optimal dengan cara membatasi jumlah object berjalan bersamaan yang bisa dikonfigurasikan secara fleksibel.

Terhadap layanan tertentu seperti akses file, network, ataupun koneksi database, pemanfaatan Pool memberikan tambahan keuntungan dengan memaintain objek terkait dalam pool kebutuhan untuk senantiasa melakukan inisiasi, sehingga bisa diminimalisir atau bahkan dieliminir.

Hanya saja untuk memungkinkan pool berfungsi secara optimal dalam sistem di sisi server yang umumnya melibatkan banyak thread, tentunya harus dipastikan bahwa hanya satu pool aktif untuk memastikan pool tersebut _manageable_.

Atas hal tersebut, implementasi "lock" menjadi sangat penting diperhatikan dalam implementasi sebuah pool. Selain itu pool juga harus dipastikan untuk tetap update (refresh) dan siap untuk digunakan, karenanya membutuhkan manajemen serta pengaturan atas status dari masing - masing object yang tersimpan dalam pool yang dihitung berdasarkan waktu aktif.

Contoh yang akan saya gunakan dalam topik kali ini adalah bagaimana kita membuat sebuah pool secara sederhana sebagai starting point agar konsep dasar yang ada lebih mudah dipahami.

Sebuah object pool secara prinsip melibatkan tiga komponen:

1. **Object Wrapper** sebagai pembungkus dari object yang disimpan di dalam pool yang menyimpan status ataupun timestamp atas status terakhir dari tiap tiap object yang disimpan.
2. **Object Pool** nya itu sendiri
3. **Supporting Object Factory** yang berfungsi membuat instance (create) object yang akan disimpan di dalam pool

Status atas object yang tersimpan dalam pool dalam hal ini terbagi atas:

1.  `STATE_ACTIVE` menandakan object tersebut siap untuk digunakan kembali
2.  `STATE_IDLE` menandakan object berada dalam status non-aktif
3.  `STATE_PENDING_CLOSE` menandakan object sudah terlalu lama berada dalam pool dan perlu ditutup serta refresh

<br>

## Object Wrapper

<hr>

**ObjectWrapper**, pada umumnya, karena sifat pool adalah generik bisa digunakan untuk berbagai macam jenis object, kita harus mengasumsikan bahwa Object yang disimpan sesungguhnya berada di luar kontrol pool tersebut.

Kita berasumsi bahwa object tidak memiliki kelengkapan atribut yang dibutuhkan agar pool bisa berfungsi secara benar. Karena hal tersebut, maka dibutuhkan sebuah object yang akan membungkus object utama yang akan dimaintain oleh pool yang menyediakan atribut atribut yang dibutuhkan. Dalam hal ini:

```python
import time
import threading

POOL_ITEM_STATE_ACTIVE = 0
POOL_ITEM_STATE_IDLE = 1
POOL_ITEM_STATE_PENDING_CLOSE = 2

class ObjectWrapper(object):

    def __init__(self, obj):
        super().__init__()
        self.actual_obj = obj
        self.__status = None
        self.timestamp = 0
        self.status = POOL_ITEM_STATE_ACTIVE

    @property
    def status(self):
        return self.__status

    @status.setter
    def status(self, stat):
        self.__status = stat
        self.timestamp = time.time()

    def get(self):
        return_obj = self.actual_obj
        self.actual_obj = None
        return return_obj

    def elapsed_time(self, tm):
        return tm - self.timestamp
```

Dari kode di atas terlihat, wrapper akan secara otomatis mencatat timestamp pada saat status atas obejct wrapper tersebut berubah.

<br>

## Abstract Base Pool

<hr>

Berikutnya adalah konstruksi _abstract class_ dari Pool, yang menyediakan kerangka dasar fundamen yang dibutuhkan untuk Object Pool yang sesungguhnya, termasuk dalam hal ini menyediakan fungsionalitas memastikan instance pool sebagai singleton object.

```python
class BasePool(object):

    VM_OBJECT_POOL = None

    def __init__(self, factory, max_item, max_active, max_idle):
        super().__init__()
        self.lock = threading.Lock()
        self.max_item = max_item
        self.max_active = max_active
        self.max_idle = max_idle
        self.factory = factory
        self.pool = list()
        self.initialize()

    def initialize(self):
        pass

    def checkout(self):
        pass

    def checkin(self, obj):
        pass

    @classmethod
    def get_instance(cls, factory=None, max_item=4, max_active=300, max_idle=120):
        if not cls.VM_OBJECT_POOL:
            assert factory, "First instantiation factory must not be None"
            cls.VM_OBJECT_POOL = object.__new__(cls)
            cls.VM_OBJECT_POOL.__init__(factory, max_item, max_active, max_idle)
        return cls.VM_OBJECT_POOL
```

Dalam hal ini, fungsi *initialize*, *check-in*, serta *check-out* bersifat abstract dan baru akan kita implementasikan pada class **Object Pool** yang sesungguhnya.

<br>

## Base Object Factory

<hr>

Berikutnya adalah konstruksi dari supporting class factory yang menyediakan kerangka dasar fungsionalitas yang dibutuhkan untuk membuat **object instance** (*create*) dan melakukan tambahan task yang dibutuhkan saat sebuah object akan di destroy, misalnya *closing connection* jika object yang dimaintain oleh pool adalah **Database Connection**.

```python
class BaseObjectFactory(object):

    def create_object(self):
        pass

    def dispose(self, obj):
        pass
```

<br>

## Object Pool

<hr>

Pemanfaatan Object pool selalu melibatkan ***checkout*** untuk retrieve object dari pool, dan ***checkin*** saat task terkait yang melibatkan  object tersebut telah selesai, berikut adalah implementasi ObjectPool sesuai dengan kerangka yang ada pada abstract class BasePool:

```python
class ObjectPool(BasePool):

    def initialize(self):
        # setup initial pool
        self.pool = [self.__wrap_object() for i in range(0, self.max_item)]

    def checkout(self):
        obj = None
        self.lock.acquire(True)
        try:
            if len(self.pool) > 0:
                wrapped_obj = self.pool.pop()
                obj = wrapped_obj.get()
                self.__maintain_pool()
        finally:
            self.lock.release()
        return obj

    def checkin(self, obj):
        if not obj:
            return
        self.lock.acquire(True)
        try:
            self.__maintain_pool()
            if len(self.pool) < self.max_item:
                self.pool.append(self.__wrap_object(obj))
        finally:
            self.lock.release()

    def __wrap_object(self, obj=None):
        if not obj:
            obj = self.__create_object()
        return ObjectWrapper(obj)

    def __create_object(self):
        obj = self.factory.create_object()
        assert obj, "Factory fails to create Object"
        return obj

    def __maintain_pool(self):
        pending_list = list()
        for idx, wrapped_obj in enumerate(self.pool):
            if (wrapped_obj.status == POOL_ITEM_STATE_ACTIVE) and (
                    wrapped_obj.elapsed_time(time.time()) >= self.max_active):
                wrapped_obj.status = POOL_ITEM_STATE_IDLE
            elif (wrapped_obj.status == POOL_ITEM_STATE_IDLE) and (
                    wrapped_obj.elapsed_time(time.time()) >= self.max_idle):
                wrapped_obj.status = POOL_ITEM_STATE_PENDING_CLOSE
            elif wrapped_obj.status == POOL_ITEM_STATE_PENDING_CLOSE:
                pending_list.append(idx)
        for idx in pending_list:
            wrapped_obj = self.pool[idx]
            obj = wrapped_obj.get
            self.factory.dispose(obj)
            wrapped_obj = self.__create_object()
            self.pool[idx] = wrapped_obj
```

Saat checkout, terlihat dalam kode diatas, hanya akan memberikan valid return object jika masih ada object yang disimpan dalam pool, karenanya adalah tugas programmer untuk memastikan bahwa object yang di retrieve dari pool merupakan object valid dan bukan **NULL** (`None`)

Begitu pula saat checkin, sebelum object dimasukkan kembali ke dalam pool, class ObjectPool akan melakukan ***restrospection*** (maintenance) atas semua object yang tersimpan dalam pool tersebut, mengganti status dari AKTIF menjadi IDLE, mengganti status IDLE menjadi PENDING CLOSE terhadap object yang sudah melewati masa aktif masing masing status tersebut, serta membuang dan membuat ulang object yang statusnya PENDING CLOSE untuk memastikan object yang tersimpan dalam pool senantiasa siap untuk digunakan.

Nah sekarang contoh penggunaan. Misal dalam hal ini kita mengasumsikan Console Screen sebagai resource yang harus dimaintain (misalnya), maka terhadap object tersebut kita membutuhkan implementasi atas class  Object Console,  serta Console Object Factory sebagai supporting class yang dibutuhkan berdasarkan kerangka BaseObjectFactory yang sudah terdefinisi di atas.

```python
# implementation
class ConsoleObject(object):

    def __init__(self):
        super().__init__()

    def print(self, str):
        print(str)


class ConsoleObjectFactory(BaseObjectFactory):

    def create_object(self):
        return ConsoleObject()

    def dispose(self, obj):
        obj = None
```

Kemudian untuk test case, kita akan mencoba membuat poolable ConsoleObject dengan maximum item dalam pool sejumlah 4 object. 

```python
pool = ObjectPool.get_instance(ConsoleObjectFactory(), 4)
con1 = pool.checkout()
con2 = pool.checkout()
con3 = pool.checkout()
con4 = pool.checkout()

con1.print("This is Console 1")
con2.print("This is Console 2")
con3.print("This is Console 3")
con4.print("This is Console 4")

con5 = pool.checkout()
try:
    con5.print("This is Console 5")
except Exception as e:
    print(e)
    pool.checkin(con4)
    con5 = pool.checkout()
    con5.print("This is Console 5")
```

Dan output yang didapat adalah sebagai berikut:

```
This is Console 1
This is Console 2
This is Console 3
This is Console 4
'NoneType' object has no attribute 'print'
This is Console 5
```

Kira-kira demikian konsep dasar serta contoh implementasi pemanfaatan Object Pool Design Pattern, tentunya object di atas masih belum ideal penerapannya, sebagai contoh jika object yang tersimpan adalah connection object ke database, bagaimana cara pool memvalidasi saat checkout bahwa connection object tersebut masih aktif dan bukan connection yang sudah diputus secara sepihak oleh RDBMS karena terlalu lama idle misalnya. Namun tentunya itu adalah penerapan spesifik yang sudah berada di luar cakupan topik ini untuk menjelaskan konsep dasarnya.