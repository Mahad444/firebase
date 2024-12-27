// firestore is a NoSQL database that stores data in the form of collections and documents.



{
    // get collection data with where clause

    const que = query(colRef, where('author', '==', 'mahad'))
    // calling the query
    getDocs(que)
        .then((snapshot) => {
            let books = []
            snapshot.docs.forEach((doc) => {
                books.push({ ...doc.data(), id: doc.id })
            })
            console.log(books)
        })

    // next we will use onSnapshot to listen to changes in the database

    onSnapshot(colRef, (snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id })
        })
        console.log(books)
    }
    )

    // ordering data
    onSnapshot(colRef, (snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id })
        })
        console.log(books)
    }
    )

    // ordering data
    onSnapshot(colRef, (snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id })
        })
        console.log(books)
    })
    // delete data from firestore temporarily
    onSnapshot(colRef, (snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id })
        })
        console.log(books)
    })
    // delete data from firestore temporarily
    onSnapshot(colRef, (snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id })
        })
        console.log(books)
    })
    // updating data in firestore
    onSnapshot(colRef, (snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id })
        })
        console.log(books)
    })
}
