# Penjelasan Kode JavaScript Console

Kode berikut menggunakan berbagai metode dari `console` di JavaScript untuk menampilkan pesan di *developer console* (biasanya dibuka dengan F12 di browser).

```html
<script>
    console.debug('Debuging');
    console.info('Hello World');
    console.warn('Ini Peringatan');
    console.error('Ini error');
</script>
```

## Penjelasan Baris per Baris

1. `console.debug('Debuging');`  
   - Menampilkan pesan log dengan level **debug**.
   - Biasanya digunakan untuk informasi debugging selama pengembangan.
   - Beberapa browser mungkin menyembunyikan log `debug` secara default.

2. `console.info('Hello World');`  
   - Menampilkan pesan log informatif dengan level **info**.
   - Cocok untuk memberi tahu informasi umum yang tidak dianggap sebagai peringatan atau kesalahan.

3. `console.warn('Ini Peringatan');`  
   - Menampilkan pesan peringatan dengan level **warn**.
   - Pesan ini biasanya ditampilkan dengan ikon tanda seru kuning di console.
   - Digunakan untuk memberi tahu potensi masalah atau hal yang perlu diperhatikan.

4. `console.error('Ini error');`  
   - Menampilkan pesan kesalahan dengan level **error**.
   - Pesan ini biasanya ditampilkan dengan ikon silang merah.
   - Digunakan untuk menandai terjadinya kesalahan yang signifikan.

## Kesimpulan

Perintah `console` sangat berguna untuk keperluan debugging, pelacakan proses, serta identifikasi masalah dalam pengembangan aplikasi berbasis web. Level-level log ini membantu pengembang memfilter dan memahami jenis pesan yang muncul dalam console browser.
