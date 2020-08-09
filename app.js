// var questions = [{
//     id: 1,
//     question: "Who is the inventor of JavaScript?",
//     answer: "Brendan Eich",
//     options: [
//         "Dennis Ritchie",
//         "Brendan Eich",
//         "James Gosling",
//         "Guido van Rossum"
//     ]


// },
// {
//     id: 2,
//     question: "Who is the inventor of Apple?",
//     answer: "Steve Jobs",
//     options: [
//         "Dennis Ritchie",
//         "Steve Jobs",
//         "James Gosling",
//         "Guido van Rossum"
//     ]

// },
// {
//     id: 3,
//     question: "Who is the founder of Google?",
//     answer: "Larry Page",
//     options: [
//         "Dennis Ritchie",
//         "Steve jobs",
//         "Larry Page",
//         "Guido van Rossum"
//     ]

// },
// {
//     id: 4,
//     question: "Who is the inventer of Samsung?",
//     answer: "Lee Byung-chul",
//     options: [
//         "Dennis Ritchie",
//         "Steve jobs",
//         "Larry Page",
//         "Lee Byung-chul"
//     ]

// }

// ]

// var question_count=0;
// function next(){
//     question_count++;
//     console.log(question_count);
// }

// function show(){
//     var quest=document.getElementById("question");
// 

var score=0;
var ans=document.getElementById("result");
function submit(q){
   
    var corr_ans1=document.getElementById("q1-a");
    var q1_corr=document.getElementById("q1-b");
    var q1_ans3=document.getElementById("q1-c");
    var q1_ans4=document.getElementById("q1-d");

    if(q1_corr.checked==true){
        score++;
        alert ( q1="q1 answer is correct")
    }
    if(q1_ans4.checked==true || q1_ans4.checked==true ||corr_ans1.checked==true){
        alert(q1="q1 anwswer is wrong");
    }
    var corr_ans2=document.getElementById("q2-a");
    var q2_ans2=document.getElementById("q2-b");
    var q2_ans3=document.getElementById("q2-c");
    var q2_corr=document.getElementById("q2-d");

    if(q2_corr.checked==true){
        score++;
        alert (q2="q2 answer is correct")
    }
if(q2_ans3.checked==true || q2_ans2.checked==true ||corr_ans2.checked==true){
        alert(q2="q2 anwswer is wrong");
    }
    var corr_ans3=document.getElementById("q3-a");
    var q3_corr=document.getElementById("q3-b");
    var q3_ans3=document.getElementById("q3-c");
    var q3_ans4=document.getElementById("q3-d");

    if(q3_corr.checked==true){
        score++;
        alert ("q3 answer is correct")
    }
    if(q3_ans3.checked==true || q3_ans4.checked==true ||corr_ans3.checked==true){
        alert("3 anwswer is wrong");
    }
    var corr_ans4=document.getElementById("q4-a");
    var q4_corr=document.getElementById("q4-b");
    var q4_ans3=document.getElementById("q4-c");
    var q4_ans4=document.getElementById("q4-d");

    if(q4_corr.checked==true){
        score++;
        alert ("q4 answer is correct")
    }
    if(q4_ans3.checked==true || q4_ans4.checked==true ||corr_ans4.checked==true){
        alert("q4 anwswer is wrong");
    }

    var corr_ans5=document.getElementById("q5-a");
    var q5_corr=document.getElementById("q5-b");
    var q5_ans3=document.getElementById("q5-c");
    var q5_ans4=document.getElementById("q5-d");

    if(corr_ans5.checked==true){
        score++;
        alert ("q5 answer is correct")
    }
    if(q5_ans3.checked==true || q5_ans4.checked==true ||q5_corr.checked==true){
        alert("q5 anwswer is wrong");
    }
    
    var ans=document.getElementById("result");
    ans.value="your score is"+"  "+score;
    

}
var flag;

   var min=0;
   var sec=0;
   var mill=0;
   var interval;
   var minhead=document.getElementById("min");
   var sechead=document.getElementById("sec");
   var millisechead=document.getElementById("millisec");

  function timer(){
    mill++;
    millisechead.innerHTML=":"+mill;
     if (mill==100) {
         sec++;
         sechead.innerHTML=":"+sec;
         mill=0;
     }
     if (sec==60) {
         min++;
         minhead.innerHTML=min;
         sec=0;
         
     }
    //  if(q==1){
    //     clearInterval(interval);
    //     minhead.innerHTML=0;
    //     sechead.innerHTML=0;
    //     millisechead.innerHTML=0; 
    //  }
     if(min>=1) {
        clearInterval(interval);
         millisechead.innerHTML=":"+0;
         sechead.innerHTML=":"+0;
         ans.value="your time is over please stop";



        
    }
     
}
interval=setInterval(timer,10);   
