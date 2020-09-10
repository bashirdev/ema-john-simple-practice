// import React from 'react';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// export const initializeLoginrFramework = () => {
//     firebase.initializeApp(firebaseConfig)
// }

//  export const handleSignin=()=>{
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//     .then(res => {
//       const {displayName, photoURL,email} =res.user;
//       const signedInUser={
//         isSignIn: true,
//         name:displayName,
//         email:email,
//         photo:photoURL
       
//       }
//       setUser(signedInUser)
//     }).catch(err => {
//       console.log(err);
//       console.log(err.message);
//     })
//      }

//      export const handleSignOut=()=>{
//         firebase.auth().signOut()
//         .then(res =>{
//             const signedOutuser={
//               isSignIn:false,
//               name:'',
//               email:'',
//               photo:'',
//               error:'',
//               success:''
//             }
//             setUser(signedOutuser)
//         }).catch(err=>{
//           console.log(err);
//         })
//       }
// export const createUserAndPassword=()=>{
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//     .then(res=>{
//       const newUserInfo={...user};
//       newUserInfo.error='';
//       newUserInfo.success=true;
//       setUser(newUserInfo);
//       updateUserInfo(user.name)
//     })
//     .catch(error => {
//       // Handle Errors here.
//       const newUserInfo={...user};
//       newUserInfo.error=error.message;
//       newUserInfo.success=false;
//       setUser(newUserInfo);
     
    
//       // ...
//     });
// }



// export const signInWithandPassword=()=>{
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//     .then(res=>{
//       const newUserInfo={...user};
//       newUserInfo.error='';
//       newUserInfo.success=true;
//       setUser(newUserInfo);
//       setLoggedInUser(newUserInfo);
//       history.replace(from);
//       console.log('sign in user info', res.user);
//     })
//     .catch(error=> {
//       // Handle Errors here.
//       const newUserInfo={...user};
//       newUserInfo.error=error.message;
//       newUserInfo.success=false;
//       setUser(newUserInfo);
     
//       // ...
//     });
// }


