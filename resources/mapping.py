
def compareGenerate(old,new):    
    return [old, new]

var = [{'FCMLDVNO': u'USG', 'FCMLLVTP': 10, 'FCMLLVID': 2, 'FCMLLVCD': u'002', 'FCMLCSED': 0, 'FCMLCONO': u'600', 'FCMLCODE': u'C01SM1', 'FCMLLVNM': u'REFEREE', 'FCMLOPTP': 0, 'FCMLACTP': 0}, {'FCMLDVNO': u'USG', 'FCMLLVTP': 20, 'FCMLLVID': 3, 'FCMLLVCD': u'003', 'FCMLCSED': 0, 'FCMLCONO': u'600', 'FCMLCODE': u'C01SM1', 'FCMLLVNM': u'APPROVAL LEVEL 1', 'FCMLOPTP': 1, 'FCMLACTP': 0}]


var1 = [{'FCTLLVNM': u'REFEREE', 'FCTLLVTP': 10, 'FCTLLVID': 2, 'FCTLACTP': 0, 'FCTLOPTP': 0, 'FCTLSQID': u'FAS-202008-0000142', 'FCTLDVNO': u'USG', 'FCTLCONO': u'600', 'FCTLLVCD': u'002', 'FCTLCSED': 0}, {'FCTLLVNM': u'APPROVAL LEVEL 1', 'FCTLLVTP': 20, 'FCTLLVID': 3, 'FCTLACTP': 0, 'FCTLOPTP': 1, 'FCTLSQID': u'FAS-202008-0000142', 'FCTLDVNO': u'USG', 'FCTLCONO': u'600', 'FCTLLVCD': u'003', 'FCTLCSED': 0}]

map_list = list(map(compareGenerate, var, var1))

# print(map_list)


def insertion_sort(array):
    # perulangan pertama 
    for i in range(1, len(array)):
        # ini elemen yang akan kita posisikan
        key_item = array[i]
        # kunci posisi elemen
        j = i - 1
        # lakukan perulangan kedua
        while j >= 0 and array[j] > key_item:
            # menggeser elemen yang lain
            array[j + 1] = array[j]
            j -= 1
        
        # memposisikan elemen
        array[j + 1] = key_item
        
    return array

unordered = [82, 37, 21, 77, 91]
print(insertion_sort(unordered))


