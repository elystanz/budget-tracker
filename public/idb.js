// set variables
let db;

// create a budget DB request
const req = indexedDB.open('budget', 1);

req.onupgradeneeded = function (event) {
    db = event.target.result;
    db.createObjectStore('pendingTransac', {autoIncrement: true});
};

req.onsuccess = function (event) {
    db = event.target.result;
    if (window.navigator.onLine) {
        console.log('The window is online!');
        checkIndexdb();
    };
};

req.onerror = function (event) {
    console.log(event.target.error);
};

// open a transaction, get all objects
function checkDb() {
    const db = request.result;

    let transaction = db.transaction('pendingTransac', 'readwrite');
    const store = transaction.objectStore('pendingTransac');

    // set all objects to getAll variable
    const getAll = store.getAll();

    getAll.onsuccess = function() {
        if (getAll.result.length > 0) {
            fetch('/api/transaction/bulk', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers : {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
            })

            // on success, access pending transactions
            .then((response) => response.json())
            .then(() => {
                const transaction = db.transaction(['pendingTransac'], 'readwrite');
                const store = transaction.objectStore('pendingTransac');

                store.clear();
            });
        };
    };


// save transaction object
    function saveRecord(record) {
        const transaction = db.transaction('pendingTransac', 'readwrite');
        const store = transaction.objectStore('pendingTransac');

        store.add(record);
    }
};

window.addEventListener('online', checkDb);