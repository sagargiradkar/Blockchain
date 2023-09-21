let student = new Object();
student.name = "Sagar";
student.qualification = "HSSC";
student.age = 23;
student.rollno = 3351;
student.yop = 2022;
student.marks = {math :95 , sci:25 ,hist :65};
student.mark = [100,95,89,80]
student.subjects = ['Mathematics',"science"]
console.log(student)

function Student(name,rollno,age,yop,high_qu,dob){
    this.name = name;
    this.age = age;
    this.rollno = rollno;
    this.yop = yop;
    this.high_qu = high_qu;
    this.dob = dob
}


let obj = new Object();

obj.name = "Sagar";
obj.age = 23;
obj.yop = 2022;
obj.high_qu = "B.Tech";
obj.dob = 1998;

console.log(obj);

let student1 = new Student("Sagar",3051,21,2002,2022,"B.Tech",2004);

console.log(student1);
console.log(student1.age)
console.log(student1.name)
console.log(student1.dob)
console.log(student1.yop)
console.log(student1.high_qu)

let student2 = new Student("Pavan",3051,21,2003,2003,"B.Tech",2004);

let student3 = new Student("Abhishek",3051,21,2002,2022,"B.Tech",2004);

let student4 = new Student("aniket",3051,21,2002,2022,"B.Tech",2004);

let student6 = new Student("Shubham",3051,21,2002,2022,"B.Tech","25 jane 2004");

console.log(student2);
console.log(student3);
console.log(student4);
console.log(student4);
console.log(student6);
console.log(student2);

