// const error = new Error("Terjadi error");
// console.error(error);



// const price = 100;
// const paid = 80;

// if (paid < price) {
//     throw new Error("Pembayaran Kurang Boy");
// }



// try {
//     console.log("Memulai program");
//     console.log("Mengakhiri program");
// } catch (err) {
//     console.log("Karena tidak ada error, blok ini akan diabaikan");
// }



// try {
//     console.log("Memulai program");
//     throw new Error("Error: Program berhenti");
//     console.log("Mengakhiri program");
// } catch (err) {
//     console.log("Karena ada error, blok ini akan dieksekusi");
// }



// try {
//     console.log("Ini try block");
// } catch (err) {
//     console.log("Ini catch block");
// } finally {
//     console.log("Ini finally block")
// }



// try {
//     console.log("Ini try block");
//     throw new Error("Error: Program berhenti");
// } catch (err) {
//     console.log("Ini catch block");
// } finally {
//     console.log("Ini finally block");
// }

// const formatRupiah = new Intl.NumberFormat('id-ID', {
//     style: 'currency',
//     currency: 'IDR',
// });


// function processPayment(price, paid) {
//     try {
//         if (paid < price) {
//             throw new Error("Pembayaran Kurang Bosku");
//         }
//         else if (paid > price) {
//             const change = paid - price;
//             console.log(`Pembayaran diterima. Kembalian Anda : ${formatRupiah.format(change).replace(/,00$/g, '')}`);
//         }
//         else {
//             console.log("Pembayaran diterima. tidak ada kembalian.");
//         }
//     } catch (err) {
//         console.error(err.message);
//     } finally {
//         console.log("Terima kasih telah berbelanja.");
//     }
// }

// processPayment(100000, 90000);

// processPayment(100000, 100000);

// processPayment(100000, 120000)



const formatRupiah = (number) => {
    const formattedNumber = new Intl.NumberFormat('id-Id', {
        style: 'currency',
        currency: 'IDR',
    }).format(number);

    return formattedNumber.replace(/,00$/g, '');
}


function processPayment(price, paid) {
    try {
        if (paid < price) {
            throw new Error("Pembayaran Kurang Bosku");
        }
        else if (paid > price) {
            const change = paid - price;
            console.log(`Pembayaran diterima. Kembalian Anda : ${formatRupiah(change)}`);
        }
        else {
            console.log("Pembayaran diterima. tidak ada kembalian.");
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        console.log("Terima kasih telah berbelanja.");
    }
}

processPayment(100000, 90000);

processPayment(100000, 100000);

processPayment(100000, 120000)