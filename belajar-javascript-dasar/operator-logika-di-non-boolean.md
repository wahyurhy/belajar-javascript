# Operator Logika di Nilai Non-Boolean di JavaScript

Kode berikut menunjukkan bagaimana operator logika `||` dan `&&` bekerja ketika digunakan dengan nilai non-boolean.

```html
<script>
    console.info("Hello" || "");
    console.info("" || []);
    console.info("0" || "NOL");
    console.info(0 || "NOL");
    console.info(null || "NULL");
    console.info(undefined || "UNDEFINED");
    console.info(0 || false);

    const person = {
        firstName: "Wahyu",
        middleName: "",
        lastName: "Rahayu"
    };

    const name = person.firstName || person.middleName || person.lastName;
    document.writeln(`<p>Halo nama saya ${name}!</p>`);

    console.info("HELLO" && "");
    console.info("" && []);
    console.info("0" && "NOL");
    console.info(0 && "NOL");
    console.info(null && "NULL");
    console.info(undefined && "UNDEFINED");
    console.info("undefined" && "null");
</script>
```

## Penjelasan

### Operator OR (`||`)

Operator `||` akan **mengembalikan nilai pertama yang truthy**, atau nilai terakhir jika semua falsy.

Contoh:
- `"Hello" || ""` → `"Hello"` (karena `"Hello"` adalah truthy)
- `"" || []` → `[]` (karena string kosong falsy, array kosong truthy)
- `"0" || "NOL"` → `"0"` (string "0" dianggap truthy)
- `0 || "NOL"` → `"NOL"` (karena 0 adalah falsy)
- `null || "NULL"` → `"NULL"`
- `undefined || "UNDEFINED"` → `"UNDEFINED"`
- `0 || false` → `false` (karena keduanya falsy, yang terakhir dikembalikan)

#### Studi Kasus:
```javascript
const name = person.firstName || person.middleName || person.lastName;
```

- `person.firstName` = `"Wahyu"` → langsung dipakai karena sudah truthy.
- Maka output: `Halo nama saya Wahyu!`

### Operator AND (`&&`)

Operator `&&` akan **mengembalikan nilai pertama yang falsy**, atau nilai terakhir jika semua truthy.

Contoh:
- `"HELLO" && ""` → `""` (karena `""` adalah falsy)
- `"" && []` → `""`
- `"0" && "NOL"` → `"NOL"` (semua truthy)
- `0 && "NOL"` → `0` (karena `0` adalah falsy)
- `null && "NULL"` → `null`
- `undefined && "UNDEFINED"` → `undefined`
- `"undefined" && "null"` → `"null"` (semua dianggap string = truthy)

## Kesimpulan

- `||` berguna untuk memberi **nilai default** saat nilai pertama falsy.
- `&&` berguna untuk melakukan pengecekan berantai, atau mengeksekusi jika semua kondisi terpenuhi.
- JavaScript tidak mengharuskan operand logika `&&` dan `||` berupa boolean, sehingga bisa sangat fleksibel tetapi juga membingungkan jika tidak hati-hati.
