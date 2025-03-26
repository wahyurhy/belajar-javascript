# Penjelasan Anonymous Function di JavaScript

Kode berikut menunjukkan bagaimana **anonymous function** digunakan dalam JavaScript, baik sebagai variabel maupun sebagai callback.

```html
<script>
    let say = function(name) {
        document.writeln(`<p>Hello ${name}</p>`);
    }

    say('Eko');

    function giveMeName(callback) {
        callback("Wahyu");
    }

    giveMeName(say);
    
    giveMeName(function(name) {
        document.writeln(`<p>Hello ${name}</p>`);
    });
</script>
```

## Penjelasan

### 1. Apa Itu Anonymous Function?

- **Anonymous function** adalah fungsi **tanpa nama** yang bisa disimpan dalam variabel atau dipakai langsung sebagai argumen.
- Berbeda dengan **function declaration**, fungsi ini **tidak memiliki nama eksplisit**.

### 2. Fungsi dalam Variabel

```javascript
let say = function(name) {
    document.writeln(`<p>Hello ${name}</p>`);
}
```

- Fungsi ini disimpan dalam variabel `say`, lalu dipanggil dengan `say('Eko')`.
- Output: `<p>Hello Eko</p>`

### 3. Fungsi Sebagai Callback

```javascript
function giveMeName(callback) {
    callback("Wahyu");
}
```

- `giveMeName` menerima parameter `callback`, yang berupa **fungsi**.

### 4. Memanggil Callback dengan Variabel Fungsi

```javascript
giveMeName(say);
```

- Sama dengan `say("Wahyu")`, sehingga outputnya:
  ```html
  <p>Hello Wahyu</p>
  ```

### 5. Anonymous Function Langsung sebagai Callback

```javascript
giveMeName(function(name) {
    document.writeln(`<p>Hello ${name}</p>`);
});
```

- Fungsi ini **langsung diberikan** sebagai argumen tanpa disimpan dalam variabel.
- Output: `<p>Hello Wahyu</p>`

### Kesimpulan

- Anonymous function berguna untuk **callback function** yang hanya dipakai sekali.
- Memungkinkan **penulisan kode yang lebih ringkas dan fleksibel**.
- Bisa digantikan dengan **arrow function** untuk kode yang lebih singkat.

Contoh dengan arrow function:
```javascript
giveMeName((name) => document.writeln(`<p>Hello ${name}</p>`));
```
