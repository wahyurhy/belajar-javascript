# Penjelasan Function dalam Function di JavaScript

Kode berikut menunjukkan bagaimana fungsi dapat dideklarasikan di dalam fungsi lain (**nested function**), dan bagaimana cakupannya bekerja.

```html
<script>
    function outer() {
        function inner() {
            document.writeln('Inner Function');
        }

        inner();
        document.writeln('Outer Function');
    }

    outer();
    inner(); // ReferenceError: inner is not defined
</script>
```

## Penjelasan

### 1. Fungsi Bersarang (Nested Function)

```javascript
function outer() {
    function inner() {
        document.writeln('Inner Function');
    }

    inner();
    document.writeln('Outer Function');
}
```

- `inner()` dideklarasikan **di dalam** fungsi `outer()`, sehingga hanya bisa diakses dari dalam `outer()`.

### 2. Pemanggilan Fungsi

```javascript
outer();
```

- Memanggil `outer()`, yang kemudian memanggil `inner()`, sehingga outputnya:

```html
Inner Function
Outer Function
```

### 3. Cakupan (Scope)

```javascript
inner(); // ReferenceError: inner is not defined
```

- `inner()` tidak bisa dipanggil dari luar `outer()`, karena cakupannya terbatas di dalam fungsi `outer()`.

### Kesimpulan

- Fungsi dapat dideklarasikan di dalam fungsi lain (**nested function**).
- Fungsi dalam hanya bisa diakses dari dalam fungsi induknya.
- Digunakan untuk **membantu fungsi utama** tanpa membuat fungsi tersedia di seluruh program.

### Contoh dengan Return

Jika ingin mengembalikan fungsi untuk digunakan di luar:

```javascript
function outer() {
    function inner() {
        return 'Inner Function';
    }
    return inner;
}

const func = outer();
document.writeln(func()); // Inner Function
```
