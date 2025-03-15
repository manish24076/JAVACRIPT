const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; // Change to false to see rejection
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error fetching data.");
        }
    }, 2);
});
