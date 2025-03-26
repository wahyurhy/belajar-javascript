# Penjelasan Rekursi (Recursive Function) di JavaScript

Kode berikut menunjukkan dua cara menghitung faktorial dalam JavaScript: **tanpa rekursi** (menggunakan loop) dan **dengan rekursi**.

```html
<script>
    function factorialTanpaRecursive(value) {
        let result = 1;
        for (let i = 1; i <= value; i++) {
            result *= i;
        }
        return result;
    }

    document.writeln(factorialTanpaRecursive(7));

    function factorialRecursive(value) {
        if (value === 1) {
            return 1;
        } else {
            return value * factorialRecursive(value - 1);
        }
    }

    document.writeln(factorialRecursive(7));
</script>
```

## Penjelasan

### 1. Faktorial Tanpa Rekursi (Menggunakan Loop)

```javascript
function factorialTanpaRecursive(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}
```

- Menggunakan **perulangan `for`** untuk menghitung faktorial.
- Untuk `factorialTanpaRecursive(7)`, prosesnya:
  ```
  1 × 2 × 3 × 4 × 5 × 6 × 7 = 5040
  ```
- **Kelebihan:** Mudah dipahami dan efisien dalam penggunaan memori.
- **Kekurangan:** Kode lebih panjang dibandingkan rekursi.

### 2. Faktorial dengan Rekursi

```javascript
function factorialRecursive(value) {
    if (value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}
```

- **Fungsi memanggil dirinya sendiri** sampai mencapai nilai dasar (`value === 1`).
- Untuk `factorialRecursive(7)`, prosesnya:
  ```
  7 × factorialRecursive(6)
  6 × factorialRecursive(5)
  5 × factorialRecursive(4)
  4 × factorialRecursive(3)
  3 × factorialRecursive(2)
  2 × factorialRecursive(1) → return 1
  ```
  Sehingga hasil akhirnya tetap `5040`.

### 3. Perbedaan Rekursi vs Loop

| Metode                  | Kelebihan                                         | Kekurangan                     |
|-------------------------|--------------------------------------------------|--------------------------------|
| **Loop (`for`)**        | Lebih cepat, tidak membebani memori stack        | Kode lebih panjang             |
| **Rekursi**             | Kode lebih ringkas & mudah dibaca                | Bisa menyebabkan stack overflow jika terlalu dalam |

## Kesimpulan

- **Gunakan loop** untuk perhitungan sederhana dan efisien.
- **Gunakan rekursi** jika masalah lebih cocok diselesaikan dengan pembagian kecil, seperti **tree traversal, searching, atau algoritma berbasis divide & conquer**.
