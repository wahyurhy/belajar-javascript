
# Penjelasan Kode JavaScript: `with-statement`

## Kode Program
```javascript
<script>
    const person = {
        firstName: 'Wahyu',
        middleName: undefined,
        lastName: 'Rahayu'
    };

    const firstName = person.firstName;
    const middleName = person.middleName ?? "";
    const lastName = person.lastName ?? "";

    // document.writeln(firstName + " " + middleName + " " + lastName);

    with(person) {
        document.writeln(firstName + " " + middleName + " " + lastName);
    }
</script>
```

## Penjelasan Kode

### 1. Pembuatan Object `person`
```javascript
const person = {
    firstName: 'Wahyu',
    middleName: undefined,
    lastName: 'Rahayu'
};
```
- `person` adalah sebuah object yang memiliki tiga properti: `firstName`, `middleName`, dan `lastName`.
- `middleName` diisi dengan `undefined`.

### 2. Destructuring dan Nullish Coalescing
```javascript
const firstName = person.firstName;
const middleName = person.middleName ?? "";
const lastName = person.lastName ?? "";
```
- `firstName` diisi dengan nilai `person.firstName`, yaitu `'Wahyu'`.
- `middleName` menggunakan operator `??` (nullish coalescing) untuk memberikan nilai kosong (`""`) jika `person.middleName` adalah `null` atau `undefined`.
- `lastName` juga menggunakan `??` untuk memastikan jika `person.lastName` null/undefined, maka nilainya menjadi string kosong.

### 3. Penggunaan `with`
```javascript
with(person) {
    document.writeln(firstName + " " + middleName + " " + lastName);
}
```
- `with(person)` digunakan untuk mempersingkat akses properti dari object `person`.
- Namun, dalam contoh ini, `firstName`, `middleName`, dan `lastName` sudah dideklarasikan sebagai variabel di luar blok `with`, sehingga `with(person)` tidak berdampak besar.
- `document.writeln()` akan menulis gabungan `firstName`, `middleName`, dan `lastName` ke dalam halaman HTML.

### 4. Catatan Penting
- Penggunaan `with` **tidak disarankan** dalam penulisan JavaScript modern karena:
  - Menyulitkan proses debugging.
  - Membuat kode sulit dibaca dan dipahami.
  - Dapat menyebabkan ambiguitas dalam scope variabel.

## Output
```
Wahyu undefined Rahayu
```
`middleName` bernilai `undefined`, karena data yang diakses adalah data yang berasal dari object `person`.

---

## Kesimpulan
Kode ini mencontohkan penggunaan `with` dan nullish coalescing (`??`). Namun, best practice dalam JavaScript modern **tidak merekomendasikan** `with`. Lebih baik gunakan cara eksplisit untuk memperjelas scope variabel.

