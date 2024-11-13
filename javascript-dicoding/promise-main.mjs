import { doSomething } from './promise-utils.mjs';

function onFulfilled(doSomethingData) {
    // do your jobs when "fullfilled" happens...
    console.log(doSomethingData);
}

function onRejected(doSomethingError) {
    // do your jobs when "rejected" happens...
    console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);