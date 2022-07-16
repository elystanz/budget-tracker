let db;
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

