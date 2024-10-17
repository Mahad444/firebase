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

//get collection data 


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
