function get1(){
let a1 = [[40,50,60,[70,80,90,100]], 10,20,30];
let a2 = [...a1[0][3]];
console.log(a2);
let parent1 = document.getElementById("parent1");
parent1.innerHTML +="<br>" + a2;
let button1 = document.getElementById("button1");
button1.disabled = true;
}

function get2(){
let obj1 = {
    class1 : {
        student1 : {
         name: "Muqads" ,
         age : 22 ,
         gender : "Female" ,
         city : "Karachi"
        } ,
        student2 : {
            name: "Sadaf" ,
            age : 20 ,
            gender : "Female" ,
            city : "Karachi"
           } 
      }  ,
      class2 : {
        student1 : {
         name: "Sania" ,
         age : 22 ,
         gender : "Female" ,
         city : "Karachi"
        } ,
        student2 : {
            name: "Abiha" ,
            age : 22 ,
            gender : "Female" ,
            city : "Karachi"
           } 
      } ,
      class3 : {
        student1 : {
         name: "Ali" ,
         age : 20 ,
         gender : "Male" ,
         city : "Karachi"
        } ,
        student2 : {
            name: "Sohail" ,
            age : 22 ,
            gender : "Male" ,
            city : "Karachi"
           } 
      } 
}
let obj2 = {...obj1["class1"]["student1"]};
// let obj3 = {...obj1.class1.sectionA};     /2nd Method
console.log(obj2)
let parent2 = document.getElementById("parent2");
parent2.innerHTML +="<br>" + `Name:${obj2.name}</br>Age:${obj2.age}</br>Gender:${obj2.gender}</br>City:${obj2.city}`;

let button2 = document.getElementById("button2");
button2.disabled = true;
}
