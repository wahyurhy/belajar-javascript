# Penjelasan Template String (Template Literal) di JavaScript

Kode berikut menunjukkan penggunaan **template literal** atau **template string** dengan tanda backtick (`` ` ``) di JavaScript.

```html
<script>
    const name = "Wahyu Rahayu";
    const firstName = "Wahyu";
    const lastName = "Rahayu";

    const template = `Nama: ${firstName} ${lastName}`;
    const lama = "Nama: " + firstName + " " + lastName;

    console.info(template);
    console.info(lama);

    const nilai = 80;
    const template2 = `Nama: ${name}, Lulus: ${nilai > 70}`;

    console.info(template2);

    const multiline = \`
    Halo saya Wahyu
    kalau soal bahasa jepang, saya sih
    JAGONYA!\`;

    document.writeln('<pre>');
    document.writeln(multiline);
    document.writeln('</pre>');
</script>
```

## Penjelasan

### Template Literal

- Ditulis dengan backtick: `` `...` ``
- Bisa menyisipkan variabel atau ekspresi menggunakan `${...}`

### Perbandingan

```javascript
const template = \`Nama: \${firstName} \${lastName}\`;
const lama = "Nama: " + firstName + " " + lastName;
```

- Hasil dari keduanya sama: `"Nama: Wahyu Rahayu"`
- Template literal membuat penulisan lebih ringkas dan mudah dibaca.

### Template dengan Ekspresi

```javascript
const template2 = \`Nama: \${name}, Lulus: \${nilai > 70}\`;
```

- Menyisipkan ekspresi langsung di dalam string.
- Jika `nilai = 80`, maka `nilai > 70` menghasilkan `true`.

### Multiline String

```javascript
const multiline = \`
Halo saya Wahyu
kalau soal bahasa jepang, saya sih
JAGONYA!\`;
```

- Template literal mendukung string multi-baris tanpa perlu karakter `\n`.
- Disarankan menggunakan elemen `<pre>` di HTML agar format baris tetap terjaga saat ditampilkan.

## Output

```html
Nama: Wahyu Rahayu
Nama: Wahyu Rahayu
Nama: Wahyu Rahayu, Lulus: true

<pre>
Halo saya Wahyu
kalau soal bahasa jepang, saya sih
JAGONYA!
</pre>
```

## Kesimpulan

- Gunakan template literal untuk membuat string lebih fleksibel dan mudah ditulis.
- Cocok untuk string dinamis, ekspresi logika, dan teks multi-baris.
