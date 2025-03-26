# Penjelasan `arguments` Object di JavaScript

Kode berikut menunjukkan bagaimana menggunakan **`arguments` object** dalam fungsi JavaScript sebelum adanya rest parameter (`...`).

```html
<script>
    function oldSum() {
        let total = 0;
        for (const value of arguments) {
            total += value;
        }
        document.writeln(`<p>Total is ${total}</p>`);
    }

    oldSum(1, 2, 3, 4, 5);
    oldSum(10, 20, 30, 40, 50);
    oldSum(100, 200, 300, 400, 500);
</script>
```

## Penjelasan

### Apa Itu `arguments`?

- `arguments` adalah **objek bawaan** dalam JavaScript yang tersedia di dalam fungsi.
- Berisi semua **argumen yang dikirimkan ke fungsi**, meskipun fungsi tidak memiliki parameter eksplisit.
- `arguments` bukan array, tapi **array-like object**, sehingga bisa di-loop tapi tidak bisa menggunakan metode array seperti `.map()` atau `.filter()` langsung.

### Fungsi `oldSum()`

```javascript
function oldSum() {
    let total = 0;
    for (const value of arguments) {
        total += value;
    }
    document.writeln(`<p>Total is ${total}</p>`);
}
```

- Tidak ada parameter eksplisit, tapi fungsi tetap bisa menangkap semua argumen yang dikirimkan.
- Menggunakan `for...of` untuk menjumlahkan semua nilai dalam `arguments`.

### Contoh Pemanggilan

```javascript
oldSum(1, 2, 3, 4, 5);  
// Output: Total is 15

oldSum(10, 20, 30, 40, 50);  
// Output: Total is 150

oldSum(100, 200, 300, 400, 500);  
// Output: Total is 1500
```

### Perbedaan `arguments` vs Rest Parameter (`...`)

| `arguments` (Object)            | Rest Parameter (`...`)  |
|---------------------------------|------------------------|
| Hanya tersedia di function biasa | Bisa digunakan di arrow function |
| Tidak benar-benar array          | Berbentuk array sesungguhnya |
| Tidak bisa langsung pakai `.map()` | Bisa menggunakan metode array |

### Alternatif Modern (Rest Parameter)

Saat ini, lebih disarankan menggunakan **rest parameter (`...`)** daripada `arguments`:

```javascript
function sum(...data) {
    let total = 0;
    for (const value of data) {
        total += value;
    }
    document.writeln(`<p>Total is ${total}</p>`);
}
```

## Kesimpulan

- `arguments` adalah cara lama untuk menangkap semua argumen fungsi sebelum adanya rest parameter.
- Tidak bisa digunakan di **arrow function**.
- Direkomendasikan menggunakan rest parameter (`...`) untuk kode yang lebih bersih dan fleksibel.
