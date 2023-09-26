console.log("Iterator and Generator");

var course = ["JavaScript","React","NodeJs","Blockchain","FULL Stact Java ","Full Stack Data Science"];

/*
for(let i=0 ;i<course.length;i++){
    console.log(course[i]);
}

let x = "Telusko"
for(i in x){
    console.log(x[i]);
}

*/

let d = course[Symbol.iterator]();
console.log(typeof(d));

let firstValue = d.next()
console.log(firstValue);

for(let i=0 ; i<course.length;i++){
    console.log(d.next());
}