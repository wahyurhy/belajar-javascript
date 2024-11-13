import { doSomething } from "./async-await-utils.mjs";

async function promiseWithAsyncAwait() {
    try {
        console.log('Start.');
        
        const result = await doSomething();
        console.log(result);

        console.log('End.');
    } catch (error) {
        console.log(error.message);
    }
}

promiseWithAsyncAwait();