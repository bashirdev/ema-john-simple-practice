// import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginrFramework = () => {
 if(firebase.apps.length ===0){
    firebase.initializeApp(firebaseConfig)
 }
}

 export const handleSignin=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res => {
      const {displayName, photoURL,email} =res.user;
      const signedInUser={
        isSignIn: true,
        name:displayName,
        email:email,
        photo:photoURL,
        success: true
       
      }
      return signedInUser;
    }).catch(err => {
      console.log(err);
      console.log(err.message);
    })
     }

     export const handleSignOut=()=>{
       return firebase.auth().signOut()
        .then(res =>{
            const signedOutuser={
              isSignIn:false,
              name:'',
              email:'',
              photo:'',
              error:'',
              success:''
            }
            return signedOutuser;
        }).catch(err=>{
          console.log(err);
        })
      }
export const createUserAndPassword=(name, email, password)=>{
   return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res=>{
      const newUserInfo=res.user;
      newUserInfo.error='';
      newUserInfo.success=true;
      updateUserInfo(name);
      return newUserInfo;
    })
    .catch(error => {
      // Handle Errors here.
      const newUserInfo={};
      newUserInfo.error=error.message;
      newUserInfo.success=false;
      return newUserInfo;
     
    
      // ...
    });
}



export const signInWithEmailAndPassword=(email,password)=>{
 return   firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res=>{
      const newUserInfo=res.user;
      newUserInfo.error='';
      newUserInfo.success=true;
      return newUserInfo;
    //   console.log('sign in user info', res.user);
    })
    .catch(error=> {
      // Handle Errors here.
      const newUserInfo={};
      newUserInfo.error=error.message;
      newUserInfo.success=false;
      return newUserInfo;
     
      // ...
    });
}

const updateUserInfo= name =>{
    const user = firebase.auth().currentUser;
   user.updateProfile({
  displayName: name

}).then(function() {
  console.log('user name updete successfully');
}).catch(function(error) {
  console.log(error);
});
  }

