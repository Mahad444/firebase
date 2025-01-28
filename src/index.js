import {initializeApp} from "firebase/app";

import { getFirestore,collection,onSnapshot,
    addDoc,deleteDoc,doc,query,where,orderBy,
    serverTimestamp,getDoc
    
} from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxgxVWyui3SKxwNA8LpBNaZ8JEvYBxcQI",
    authDomain: "mahad-firebase.firebaseapp.com",
    projectId: "mahad-firebase",
    storageBucket: "mahad-firebase.appspot.com",
    messagingSenderId: "446663644553",
    appId: "1:446663644553:web:a58dd55c7cd09ba7d2bd58",
    measurementId: "G-3HZGZSVJSX"
  };

// initializing firebase
  initializeApp(firebaseConfig)

//   init service
const db = getFirestore();

//collection ref

const colRef = collection(db,"books")

// //get collection data 

getDocs(colRef)
.then((snapshot)=>{
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id:doc.id})
    })
    console.log(books) 
})
.catch(err => {
    console.log(err.message)
})

// get collection data with where clause

const que = query(colRef,where('author','==','mahad'))
// calling the query
getDocs(que)
.then((snapshot)=>{
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id:doc.id})
    })
    console.log(books) 
})

// next we will use onSnapshot to listen to changes in the database

onSnapshot(colRef, (snapshot)=>{
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id:doc.id})
    })
    console.log(books) 
}
)

// ordering data
onSnapshot(colRef, (snapshot)=>{
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id:doc.id})
    })
    console.log(books) 
}
)

// ordering data
onSnapshot(colRef, (snapshot)=>{
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id:doc.id})
    })
    console.log(books) 
}
)



// query
const q = query(colRef,orderBy('createdAt'))

onSnapshot(q, (snapshot)=>{
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id:doc.id})
    })
    console.log(books) 
})


// adding documents

const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit' , (e)=>{
    e.preventDefault()

    addDoc(colRef, {
        title: addBookForm.title.value,
        author:addBookForm.author.value,
        createdAt: serverTimestamp()
    })
    .then(()=>{
        addBookForm.reset()
    })
})

const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit' , (e)=>{
    e.preventDefault()

    const docRef = doc(db, 'books',  deleteBookForm.id.value)

    deleteDoc(docRef)
    .then(()=>{
        deleteBookForm.reset()
    })
})

// geeting a single document
 const docRef = doc(db, 'books', 'vsY6TgQOl6ciu7Jb0zPb')

 getDoc(docRef)
    .then((doc)=>{
        console.log(doc.data(), doc.id)
    })

// updating a document
updateForm.addEventListener('submit' , (e)=>{
    e.preventDefault()

    const docRef = doc(db, 'books',  updateForm.id.value)

    updateDoc(docRef, {
        title: updateForm.title.value
        })  ,
        updateDoc(docRef, {
    })
})

// connection to backend
import { getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firestore";

// get collection data
getDocs(collection(db, 'books'))
.then((snapshot)=>{
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id:doc.id})
    })
    console.log(books) 
})

// updating a document
const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit' , (e)=>{
    e.preventDefault()

    const docRef = doc(db, 'books',  updateForm.id.value)

    updateDoc(docRef, {
        title: updateForm.title.value
        })  ,
        updateDoc(docRef, {
    })
})

// deleting documents
const deleteForm = document.querySelector('.delete')
deleteForm.addEventListener('submit' , (e)=>{
    e.preventDefault()

    const docRef = doc(db, 'books',  deleteForm.id.value)

    deleteDoc(docRef)
    .then(()=>{
        deleteForm.reset()
    })
})

// the delete is just a trash icon that will delete the document temporarily

// temporarily delete a document (soft delete)
const trashIcon = document.querySelector('.trash-icon')
trashIcon.addEventListener('click', (e) => {
    const docId = e.target.getAttribute('data-id')
    const docRef = doc(db, 'books', docId)

    updateDoc(docRef, {
        deleted: true
    })
    .then(() => {
        console.log(`Document with ID ${docId} marked as deleted`)
    })
    .catch(err => {
        console.log(err.message)
    })
})


 

