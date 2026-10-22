// let arr=new Array();
// console.log(arr);

// let arr1=new Array(1,2,3); //데이터 삽입
// let arr2=new Array(3); //배열의 크기 지정

// console.log(arr1);
// console.log(arr2);

// const fruits= ["사과","바나나","포도","딸기","수박"];
// const result=fruits.slice(1,4);

// const fruits= ["사과","바나나","포도"];
// console.log(fruits.length);

function User(name, age, job){
	this.name = name;
	this.age = age;
	this.job = "의사";
	this.introduce = function(){
		console.log("안녕하세요. 저는 "+name+"이고, "+age+"살입니다");
	}
	this.changeJob = function(job){
		this.job = job;
	}
}

const user=new User("철수",25,"학생");
user.introduce();
user.changeJob("개발자");
console.log(user.job);