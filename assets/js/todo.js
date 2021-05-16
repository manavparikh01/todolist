var firebaseConfig = {
    apiKey: "AIzaSyArdMmWnre6wMjkP-jElLmkp1QZpNdJIiE",
    authDomain: "jsfire-ea4c8.firebaseapp.com",
    projectId: "jsfire-ea4c8",
    storageBucket: "jsfire-ea4c8.appspot.com",
    messagingSenderId: "610319658281",
    appId: "1:610319658281:web:ad6f6c07def73101841b38",
    measurementId: "G-W44X6GT3JL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  

//   li.forEach(function(findLi) {
//       var lis = findLi
//   })

  window.onload = function() { 
    //$(document.body).on('click', function() {
    //     var todoData = firebase.database().ref('todo/');
    //     todoData.on('value', (snapshot) => {
    //     const data = snapshot.val();
    //     $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + " " + data.todo + "</li>");
    //     //updateStarCount(postElement, data);
    // });
    // console.log(li)

//     $numItems = count($arr);
// $i = 0;
// foreach($arr as $key=>$value) {
//   if(++$i === $numItems) {
//     echo "last index!";
//   }
// }    

// .orderByChild('currentTime')

    var todoData = firebase.database().ref('todo/todos/');
    //console.log(todoData.text)
    // if (todoData == undefined) {
    //     console.log('no data')
    //     todoData.on('value', function(snapshot) {
        
    //         snapshot.forEach(function(childSnapshot) {
                
    //                 var childData = childSnapshot.val()
              
    //           $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + " " + childData.todo + "</li>");
    //             })
              
              
              
    //         })
    // } else {
        todoData.on('value', function(snapshot) {
        
            snapshot.forEach(function(childSnapshot) {
                
                    var childData = childSnapshot.val()
              
              $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + " " + childData.todo + "</li>");
                })
              
              
              
            })
    //}
    

    //})
   }


$("ul").on("click","li", function() {
    $(this).toggleClass("striked");
})

$("ul").on("click","li span", function(event) {
    console.log(this)
    $(this).parent().fadeOut("slow", function() {
        //console.log(this)
        var message = $(this).text()
        //console.log(message)
        var todoData = firebase.database().ref('todo/todos/');
        todoData.on('value', function(snapshot) {
        // console.log(snapshot)
            snapshot.forEach(function(childSnapshot) {
                //console.log(childSnapshot)
                var childData = childSnapshot.val()
                //console.log(childData)
                // console.log("message" + message.trim())
                // console.log("otherpart" + childData.todo)
                //if (message.trim() == childData.todo.trim()) {
                    // var deleteMan = 'todo/todos/'+childData.todo+'/'+childData.todo
                    // console.log(deleteMan)
                    firebase.database().ref('todo/todos/'+message.trim()).remove(),  (error) => {
                        if (error) {
                            alert('Some error occured')
                            console.log(error)
                            console.log('Some problem')
                        } else {
                            console.log('No problem')
                        }
                    }
                    $("li").remove()
                    window.onload()
                
                //}
                //else {
                //    
                //}
            })
        })
        //window.onload()
        $(this).remove();
    });
    
    //event.stopPropogation();
})

$("input[type='text']").keypress(function(event) {
    if (event.which === 13)
    {
        var todoText = $(this).val();
        $(this).val("");
        //$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + " " + todoText + "</li>");
        // var todoData = firebase.database().ref('todo/');
        // todoData.on('value', (snapshot) => {
        // const data = snapshot.val();
        // console.log(data)})
        // var current = new Date();
        // var currentTime = current.toLocaleString()
        var todoTesting = todoText.trim()
        firebase.database().ref('todo/todos/'+todoTesting).set({
            todo: todoText,
            //time: currentTime,
        }),  (error) => {
            if (error) {
                alert('Some error occured')
                console.log(error)
              console.log('Some problem')
            } else {
              console.log('No problem')
            }
          }
          $("li").remove()
          window.onload()
          
          
            //event.stopPropogation();
        
    }
})



$("#addtodo").on("click", function() {
    $("input[type='text']").fadeToggle("slow");
})

// var li = document.querySelectorAll('li')
//   console.log(li)

//   var printLi = function(childData) {
//     li.forEach(function(findLi) {
//         var lis = findLi.innerHTML
//         console.log(lis)
//         if (lis != childData.todo) {
//             $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + " " + childData.todo + "</li>");
//         }
//         else {
//             console.log('Some problem')
//         }
//     })
//   }