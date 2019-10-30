import firebase from 'firebase'


export default class AnswersController{


    create(value, next, errorcode){

        // Get a reference to the database service
       var database = firebase.database();

        var ref = database.ref("notification-1b2fc");
        var postsRef = ref.child("users");

        var newPostRef = postsRef.push();
        newPostRef.set({
          respostas: value,
        });
        next("next");
      
    }
}