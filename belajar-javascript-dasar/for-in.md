# Penjelasan Perulangan `for...in` di JavaScript

Kode berikut menunjukkan penggunaan perulangan `for...in` untuk mengakses properti objek dan indeks array di JavaScript.

```html
<script>
    const person = {
        firstName: "Wahyu",
        middleName: undefined,
        lastName: "Rahayu"
    };

    for (const property in person) {
        document.writeln(`<p>${property}: ${person[property] ?? 'Tidak ada'}</p>`);
    }

    const names = ['Wahyu', 'Rahayu', 'Nur', 'Salim'];
    for (const index in names) {
        document.writeln(`<p>${index}: ${names[index]}</p>`);
    }
</script>
```

## Penjelasan

### 1. `for...in` pada Objek

```javascript
const person = {
    firstName: "Wahyu",
    middleName: undefined,
    lastName: "Rahayu"
};

for (const property in person) {
    document.writeln(`<p>${property}: ${person[property] ?? 'Tidak ada'}</p>`);
}
```

- `for...in` digunakan untuk iterasi semua **property name (key)** dari objek `person`.
- `person[property]` digunakan untuk mengakses nilai berdasarkan nama properti.
- Operator `??` digunakan untuk menampilkan `'Tidak ada'` jika nilainya `undefined` atau `null`.

### Output:
```html
firstName: Wahyu
middleName: Tidak ada
lastName: Rahayu
```

### 2. `for...in` pada Array

```javascript
const names = ['Wahyu', 'Rahayu', 'Nur', 'Salim'];
for (const index in names) {
    document.writeln(`<p>${index}: ${names[index]}</p>`);
}
```

- Meskipun `for...in` bisa digunakan pada array, yang di-loop adalah **index (dalam bentuk string)**, bukan nilai langsung.
- Umumnya, untuk array lebih disarankan menggunakan `for...of`.

### Output:
```html
0: Wahyu
1: Rahayu
2: Nur
3: Salim
```

## Catatan Penting

- `for...in` sebaiknya digunakan untuk **objek**, bukan array.
- Untuk array, gunakan `for...of` atau metode seperti `forEach()` agar lebih aman dan idiomatik.

## Kesimpulan

- `for...in` digunakan untuk mengiterasi properti dalam objek atau indeks dalam array.
- Hati-hati saat menggunakan `for...in` dengan array karena urutan dan jenis property bisa berbeda dengan ekspektasi.
