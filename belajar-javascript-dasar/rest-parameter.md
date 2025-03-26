# Penjelasan Rest Parameter di JavaScript

Kode berikut menunjukkan bagaimana menggunakan **rest parameter (`...`)** untuk menangani jumlah argumen yang tidak tetap dalam sebuah fungsi.

```html
<script>
    function sum(name, ...data) {
        let total = 0;
        for (const value of data) {
            total += value;
        }
        document.writeln(`<p>Total ${name} is ${total}</p>`);
    }

    sum("Orange", 1, 2, 3);
    sum("Apple", 10, 20, 30, 40, 50);
    sum("Banana", 100, 200, 300, 400, 500);

    const values = [1, 2, 3, 4, 5];
    sum("Grape", ...values);
</script>
```

## Penjelasan

### Apa Itu Rest Parameter (`...`)

- Rest parameter (`...`) memungkinkan fungsi menerima **jumlah argumen yang tidak terbatas** dan mengumpulkannya dalam bentuk array.
- Ditulis dengan `...namaParameter`, contohnya:  
  ```javascript
  function sum(name, ...data) { ... }
  ```

### Fungsi `sum()`

```javascript
function sum(name, ...data) {
    let total = 0;
    for (const value of data) {
        total += value;
    }
    document.writeln(`<p>Total ${name} is ${total}</p>`);
}
```

- `name` adalah parameter pertama, yang tetap (bukan bagian dari rest parameter).
- `...data` adalah rest parameter, yang mengumpulkan semua angka setelah parameter `name` dalam bentuk array.
- Loop `for...of` digunakan untuk menjumlahkan seluruh angka di dalam array `data`.

### Contoh Penggunaan

```javascript
sum("Orange", 1, 2, 3);  
// Output: Total Orange is 6

sum("Apple", 10, 20, 30, 40, 50);  
// Output: Total Apple is 150

sum("Banana", 100, 200, 300, 400, 500);  
// Output: Total Banana is 1500
```

- Setiap pemanggilan fungsi `sum()`, semua angka setelah parameter pertama (`name`) akan dikumpulkan ke dalam `data`.

### Menggunakan Spread Operator (`...`)

```javascript
const values = [1, 2, 3, 4, 5];
sum("Grape", ...values);
```

- `...values` digunakan untuk **menyebarkan elemen array** sebagai argumen individu.
- Sama seperti jika kita memanggil `sum("Grape", 1, 2, 3, 4, 5);`

## Kesimpulan

- **Rest parameter (`...`)** mengumpulkan banyak argumen dalam bentuk array.
- **Spread operator (`...`)** menyebarkan array menjadi elemen individu.
- Rest parameter cocok untuk fungsi yang perlu menangani jumlah argumen yang dinamis.
