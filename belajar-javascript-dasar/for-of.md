# Penjelasan Perulangan `for...of` di JavaScript

Kode berikut menunjukkan penggunaan `for...of` untuk mengiterasi isi array, string, dan objek (melalui `Object.keys()`).

```html
<script>
    const names = ['Wahyu', 'Rahayu', 'Nur', 'Salim'];

    for (const name of names) {
        document.writeln(`<p>${name}</p>`);
    }

    const text = 'Belajar Javascript Dasar';
    for (const character of text) {
        document.writeln(`<p>${character}</p>`);
    }

    const person = {
        firstName: "Wahyu",
        middleName: undefined,
        lastName: "Rahayu"
    };

    for (const property of Object.keys(person)) {
        document.writeln(`<p>${property}: ${person[property] ?? 'Tidak ada'}</p>`);
    }
</script>
```

## Penjelasan

### 1. `for...of` pada Array

```javascript
const names = ['Wahyu', 'Rahayu', 'Nur', 'Salim'];
for (const name of names) {
    document.writeln(`<p>${name}</p>`);
}
```

- Mengiterasi langsung **nilai** dari array, bukan index-nya.
- Cocok dan disarankan untuk array.

### 2. `for...of` pada String

```javascript
const text = 'Belajar Javascript Dasar';
for (const character of text) {
    document.writeln(`<p>${character}</p>`);
}
```

- Mengiterasi setiap karakter dalam string.

### 3. `for...of` pada Objek (melalui `Object.keys()`)

```javascript
const person = {
    firstName: "Wahyu",
    middleName: undefined,
    lastName: "Rahayu"
};

for (const property of Object.keys(person)) {
    document.writeln(`<p>${property}: ${person[property] ?? 'Tidak ada'}</p>`);
}
```

- Karena objek **tidak iterable langsung** dengan `for...of`, kita gunakan `Object.keys(person)` untuk mendapatkan array key-nya.
- Kemudian kita iterasi dan akses nilainya.

### Output Singkat

- Nama-nama di array: Wahyu, Rahayu, Nur, Salim
- Setiap karakter dari string "Belajar Javascript Dasar"
- Properti dan nilainya dari objek `person`:
  - `firstName`: Wahyu
  - `middleName`: Tidak ada
  - `lastName`: Rahayu

## Perbedaan `for...of` vs `for...in`

| `for...of`                      | `for...in`                        |
|-------------------------------|----------------------------------|
| Mengiterasi nilai langsung     | Mengiterasi key/index            |
| Cocok untuk array dan string   | Cocok untuk objek                |
| Tidak bisa langsung untuk objek| Bisa langsung untuk objek        |

## Kesimpulan

- Gunakan `for...of` untuk membaca nilai dari struktur data iterable seperti array dan string.
- Untuk objek, kombinasikan `Object.keys()`, `Object.values()`, atau `Object.entries()` dengan `for...of`.
