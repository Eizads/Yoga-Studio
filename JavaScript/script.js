

// window.onload= function(){
//     var push = document.getElementById('hambar');
//
//     push.onclick = function(){
//     var el = document.getElementById('dropDown');
//     if (el.style.display === "none") {
//             el.style.display = "block";
//         } else {
//             el.style.display = "none";
//         }
//     }
// }

// both ways work!corrected! dropDown{display:none}--------------------
// window.onload=function(){
//     var x=document.getElementById('hambar');
//     x.addEventListener('click', myFunction, false);
// }
//
//     function myFunction(){
//     var el = document.getElementById('dropDown');
//     if (el.style.display == "block") {
//             el.style.display = "none";
//         } else {
//             el.style.display = "block";
//         }
//     }

// based on height
// window.onload=function(){
//     var x=document.getElementById('hambar');
//     x.addEventListener('click', myFunction, false);
//  }

    // function myFunction(){
    // var el = document.getElementById('dropDown');
    // var maxH= '396px';
    // if (el.style.height == maxH) {
    //         el.style.height = "0px";
    //     } else {
    //         el.style.height = maxH;
    //     }
    // }

// based on height function if statement as ternary operator
    window.onload=function(){
        var x=document.getElementById('hambar');
        x.addEventListener('click', myFunction, false);
     }
    function myFunction(){
    var el = document.getElementById('dropDown');
    var maxH= '396px';
     (el.style.height == maxH) ? el.style.height = "0px": el.style.height = maxH;
        }
