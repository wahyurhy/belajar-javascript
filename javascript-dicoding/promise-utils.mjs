function promiseExecutor(resolve, reject) {
    setTimeout(() => {
        console.log('Melakukan sesuatu sebelum Promise diselesaikan.');

        // penentuan hasil dari proses asinkron
        const number = Math.random();

        // nilai fulfillment dari Promise
        if (number > 0.5) {
            resolve('You did it!');
        }

        // nilai rejection dari Promise
        else {
            reject(new Error('Sorry, something went wrong!'));
        }
    }, 2000);
}

export function doSomething() {
    return new Promise(promiseExecutor);
}