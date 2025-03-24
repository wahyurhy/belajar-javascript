# Penjelasan Null dan Undefined di JavaScript

Kode berikut menunjukkan bagaimana JavaScript membedakan nilai `null` dan `undefined` dalam kondisi `if`.

```html
<script>
    let firstName = null;

    if (firstName === undefined) {
        alert("UNDEFINED");
    } else if (firstName == null) {
        alert("NULL");
    } else {
        alert(firstName);
    }
</script>
```

## Penjelasan

### Baris demi Baris:

1. `let firstName = null;`  
   - Variabel `firstName` diinisialisasi dengan nilai `null`.

2. `if (firstName === undefined)`  
   - Mengecek apakah `firstName` **strictly equal** (`===`) dengan `undefined`.  
   - Karena nilai `firstName` adalah `null`, maka kondisi ini **false**.

3. `else if (firstName == null)`  
   - Mengecek apakah `firstName` **longgar sama** (`==`) dengan `null`.  
   - Dalam perbandingan longgar (`==`), `null` **sama dengan** `undefined`, sehingga kondisi ini **true**.

4. Maka, yang dijalankan adalah:
   ```javascript
   alert("NULL");
   ```

## Perbedaan `null` dan `undefined`

| Nilai       | Arti                                                       |
|-------------|------------------------------------------------------------|
| `null`      | Nilai yang secara eksplisit menyatakan "tidak ada nilai".  |
| `undefined` | Variabel belum diberi nilai sama sekali.                   |

## Perbedaan `==` vs `===`

- `==` → perbandingan longgar (dapat mengkonversi tipe)
- `===` → perbandingan ketat (harus sama tipe dan nilai)

Contoh:
```javascript
null == undefined     // true
null === undefined    // false
```

## Kesimpulan

- Gunakan `===` untuk membandingkan secara ketat agar menghindari bug akibat konversi tipe otomatis.
- `null` dan `undefined` sering digunakan untuk merepresentasikan tidak adanya nilai, tapi dengan makna yang berbeda.
