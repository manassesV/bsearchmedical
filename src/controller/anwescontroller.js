import firebase from 'firebase'


export default class AnswersController{
   



    create(value, question, next, errorcode){
        // Get a reference to the database service
        var user = firebase.auth().currentUser;
        uid = user.uid
        console.log(value);
        firebase.database().ref(uid).ref.child(question).set({
          resposta: value, 
        });
        next("next");
      }





       
        // console.log(uid);


        // var database = firebase.database();
        // var user = 12455;
        // var ref = database.ref(uid);
        // var postsRef = ref.child("resposta2");

        // var newPostRef = postsRef.push();
        // newPostRef.set({
        //   respostas: value,
        // });
        // 
      
    }
