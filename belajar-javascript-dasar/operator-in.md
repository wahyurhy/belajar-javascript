# Penjelasan Operator `in` di JavaScript

Kode berikut menjelaskan penggunaan operator `in` di JavaScript untuk mengecek keberadaan properti dalam objek atau indeks dalam array.

```html
<script>
    const person = {
        firstName: "Wahyu",
        lastName: "Rahayu"
    };

    if ("firstName" in person) {
        alert(`Hello ${person.firstName}`);
    } else {
        alert('Hello');
    }

    const student = {
        firstName: "Wahyu",
        middleName: undefined,
        lastName: "Rahayu"
    };

    if ("middleName" in student) {
        alert(`Hello ${student.middleName}`);
    } else {
        alert("Hello Student");
    }

    const names = [null, "Rahayu", null];
    const result = 0 in names;
    document.writeln(`<p>${result}</p>`);
</script>
```

## Penjelasan

### Operator `in`

- Digunakan untuk mengecek apakah sebuah **property (key)** ada di dalam objek atau array.
- Format: `"propertyName" in object`

### Studi Kasus

#### 1. `person` object
```javascript
const person = { firstName: "Wahyu", lastName: "Rahayu" };
```

- `"firstName" in person` → `true`, karena properti tersebut memang ada.
- Maka yang dijalankan:
  ```javascript
  alert("Hello Wahyu");
  ```

#### 2. `student` object
```javascript
const student = {
    firstName: "Wahyu",
    middleName: undefined,
    lastName: "Rahayu"
};
```

- `"middleName" in student` → `true`, walaupun nilainya `undefined`.
- Artinya yang dicek adalah **keberadaan property-nya**, bukan nilainya.
- Maka hasilnya:
  ```javascript
  alert("Hello undefined");
  ```

#### 3. `names` array
```javascript
const names = [null, "Rahayu", null];
const result = 0 in names;
```

- `0 in names` → `true`, karena index `0` memang ada (walaupun nilainya `null`).
- Output: `<p>true</p>`

## Kesimpulan

- Operator `in` mengecek **apakah property atau index ada**, **bukan nilainya**.
- Cocok digunakan saat ingin memastikan sebuah key/index tersedia sebelum mengakses nilainya, bahkan jika nilainya `null` atau `undefined`.
