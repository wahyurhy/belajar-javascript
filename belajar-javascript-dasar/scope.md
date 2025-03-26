# Penjelasan Scope di JavaScript

Kode berikut menunjukkan bagaimana **scope (cakupan variabel)** bekerja dalam JavaScript.

```html
<script>
    // Global Scope
    let counter = 0;

    function hitme() {
        // Local Scope
        counter++;
    }

    hitme();
    hitme();

    document.writeln(counter);

    function first() {
        // Local Scope
        let firstVariable = "First";

        function firstNested() {
            // Local Scope
            document.writeln(firstVariable);
            const firstNestedVariable = "First Nested";
        }

        firstNested();
        document.writeln(firstNestedVariable); // ReferenceError: firstNestedVariable is not defined
    }

    function second() {
        // Local Scope
        let secondVariable = "Second";
    }

    // global scope
    document.writeln(firstVariable); // ReferenceError: firstVariable is not defined
    document.writeln(secondVariable); // ReferenceError: secondVariable is not defined
</script>
```

## Penjelasan

### 1. **Global Scope**
```javascript
let counter = 0;
```
- `counter` dideklarasikan di luar fungsi, sehingga bisa diakses **dari mana saja** dalam skrip.
- Variabel dalam **global scope** tersedia di seluruh kode.

### 2. **Local Scope dalam Fungsi**
```javascript
function hitme() {
    counter++;
}
```
- Fungsi `hitme()` dapat mengakses `counter` karena `counter` ada di **global scope**.
- Setiap kali `hitme()` dipanggil, `counter` bertambah.

```javascript
hitme();
hitme();
document.writeln(counter); // Output: 2
```

### 3. **Local Scope dalam Fungsi Bersarang**
```javascript
function first() {
    let firstVariable = "First";

    function firstNested() {
        document.writeln(firstVariable);
        const firstNestedVariable = "First Nested";
    }

    firstNested();
    document.writeln(firstNestedVariable); // ReferenceError
}
```
- `firstVariable` hanya tersedia dalam `first()`.
- `firstNested()` bisa mengakses `firstVariable`, karena masih dalam cakupan `first()`.
- `firstNestedVariable` **tidak bisa diakses dari luar `firstNested()`**.

### 4. **ReferenceError pada Variabel Lokal**
```javascript
document.writeln(firstVariable); // ReferenceError
document.writeln(secondVariable); // ReferenceError
```
- `firstVariable` hanya ada dalam fungsi `first()`, tidak bisa diakses secara global.
- `secondVariable` hanya ada dalam fungsi `second()`.

## Kesimpulan

| Scope          | Bisa Diakses Dari | Contoh                  |
|---------------|------------------|--------------------------|
| **Global**    | Seluruh skrip     | `let counter = 0;`       |
| **Local**     | Hanya dalam fungsi yang mendeklarasikannya | `let firstVariable = "First";` |
| **Nested**    | Fungsi dalam bisa mengakses variabel fungsi induknya | `firstNested()` bisa membaca `firstVariable` |

- **Global scope** bisa diakses dari mana saja.
- **Local scope** hanya bisa diakses di dalam fungsi tempat variabel itu dideklarasikan.
- **Nested function** bisa mengakses variabel fungsi induknya, tapi tidak sebaliknya.

