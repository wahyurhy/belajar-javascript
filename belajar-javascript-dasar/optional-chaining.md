# Penjelasan Optional Chaining (`?.`) di JavaScript

Kode berikut menunjukkan bagaimana menggunakan **optional chaining** (`?.`) untuk mengakses properti dalam objek secara aman tanpa menimbulkan error.

```html
<script>
    const person = {
        address: {
            country: "Indonesia"
        }
    };

    let country = person?.address?.country;

    // if (person.address !== undefined && person.address !== null) {
    //     country = person.address.country;
    // }

    document.writeln(`<p>${country}</p>`);
    document.writeln(`SUKSES`);
</script>
```

## Penjelasan

### Apa itu Optional Chaining?

- `?.` adalah operator yang digunakan untuk **mengakses properti dari objek secara aman**.
- Jika properti sebelum `?.` **tidak ada (undefined atau null)**, maka ekspresi langsung bernilai `undefined` tanpa menimbulkan error.

### Contoh di Kode

```javascript
let country = person?.address?.country;
```

- Kode ini akan mencoba mengakses `person.address.country`.
- Jika `person` **ada** dan `address` juga **ada**, maka hasilnya `"Indonesia"`.
- Jika salah satu dari `person` atau `address` **tidak ada**, maka `country` akan menjadi `undefined` dan tidak menyebabkan error.

### Versi Tanpa Optional Chaining

Jika tidak menggunakan `?.`, maka perlu melakukan pengecekan manual seperti:

```javascript
if (person.address !== undefined && person.address !== null) {
    country = person.address.country;
}
```

### Output

- Karena `person.address.country` ada, maka yang ditampilkan adalah:
  ```html
  <p>Indonesia</p>
  SUKSES
  ```

## Kapan Menggunakan Optional Chaining?

Gunakan `?.` ketika:
- Struktur objek bersifat **dinamis atau opsional**.
- Menghindari error seperti `Cannot read property 'X' of undefined`.

## Kesimpulan

Optional chaining (`?.`) menyederhanakan penulisan kode yang harus mengakses properti bersarang tanpa perlu mengecek satu per satu. Ini meningkatkan keandalan dan keterbacaan kode JavaScript.
