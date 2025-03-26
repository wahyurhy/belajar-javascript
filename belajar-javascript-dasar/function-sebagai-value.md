# Penjelasan Function sebagai Value di JavaScript

Kode berikut menunjukkan bagaimana **fungsi dapat diperlakukan sebagai nilai** dalam JavaScript, termasuk penggunaan sebagai callback function.

```html
<script>
    function sayHello(name) {
        document.writeln(`<p>Hello ${name}</p>`);
    }

    sayHello('Eko');

    let say = sayHello;
    say('Dwi');

    function giveMeName(callback) {
        callback('Eko'); // sayHello('Eko')
    }

    giveMeName(sayHello);
    giveMeName(say);
</script>
```

## Penjelasan

### 1. Fungsi Bisa Disimpan dalam Variabel

```javascript
let say = sayHello;
say('Dwi');
```

- `sayHello` adalah fungsi yang bisa disimpan dalam variabel `say`.
- Pemanggilan `say('Dwi')` sama dengan `sayHello('Dwi')`.

### 2. Fungsi Sebagai Parameter (Callback)

```javascript
function giveMeName(callback) {
    callback('Eko'); // sama seperti sayHello('Eko')
}
```

- `callback` adalah parameter yang akan menerima sebuah fungsi.
- Saat `giveMeName(sayHello);` dipanggil, fungsi `sayHello('Eko')` dieksekusi.

### 3. Pemanggilan dengan Callback

```javascript
giveMeName(sayHello);
giveMeName(say);
```

- Keduanya sama-sama memanggil `sayHello('Eko')`, karena `say` juga mengacu pada `sayHello`.

### Output

```html
Hello Eko
Hello Dwi
Hello Eko
Hello Eko
```

## Kesimpulan

- Fungsi bisa diperlakukan sebagai **nilai**, disimpan dalam variabel, dan dipanggil dengan nama lain.
- Fungsi dapat digunakan sebagai **parameter** dalam fungsi lain (**callback function**).
- Ini adalah dasar dari konsep **higher-order function** yang sering digunakan dalam JavaScript, terutama dalam event handling dan asynchronous programming.
