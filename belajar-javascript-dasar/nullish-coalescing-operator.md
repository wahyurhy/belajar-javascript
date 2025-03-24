# Penjelasan Nullish Coalescing Operator (`??`) di JavaScript

Kode berikut menunjukkan dua cara penanganan nilai `null` atau `undefined` dalam JavaScript — menggunakan kondisi `if` dan operator `??` (nullish coalescing).

```html
<script>
    let parameter;

    let data = parameter;

    if (data === undefined || data === null) {
        data = "Data Default";
    }

    document.writeln(`<p>${data}</p>`);
    
    data = parameter ?? "Data Default";
    document.writeln(`<p>${data}</p>`);
</script>
```

## Penjelasan

### Bagian 1: Penanganan Manual

```javascript
if (data === undefined || data === null) {
    data = "Data Default";
}
```

- Mengecek apakah `data` bernilai `undefined` **atau** `null`.
- Jika iya, maka `data` akan diisi dengan nilai default: `"Data Default"`.

### Bagian 2: Nullish Coalescing Operator (`??`)

```javascript
data = parameter ?? "Data Default";
```

- `??` adalah operator yang mengembalikan nilai di kiri **jika** nilai tersebut **bukan `null` atau `undefined`**.
- Jika `parameter` bernilai `null` atau `undefined`, maka nilai default (`"Data Default"`) akan digunakan.

### Perbedaan dengan Operator `||`

- `||` mengembalikan nilai kanan jika nilai kiri adalah **falsy** (`false`, `0`, `""`, `null`, `undefined`, `NaN`).
- `??` hanya menganggap `null` dan `undefined` sebagai tidak valid.

Contoh:
```javascript
let nilai = 0;
let hasil = nilai || 100;     // hasil = 100 (karena 0 adalah falsy)
let hasil2 = nilai ?? 100;    // hasil2 = 0 (karena 0 bukan null/undefined)
```

## Kesimpulan

- Gunakan `??` untuk memberi nilai default hanya ketika nilai benar-benar **null** atau **undefined**.
- Ini berguna saat nilai seperti `0`, `false`, atau string kosong `""` dianggap valid dan tidak ingin tergantikan oleh nilai default.
