const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Taras',
        //     age: 26
        // });
        reject('Something went wrong.')
    }, 1500);
});

console.log('Before');

promise.then((data) => {
    console.log('1', data);
}).catch((e) => {
    console.log('Error', e)
});

console.log('after');