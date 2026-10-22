let age = 25;
let isMember = true;

if (age < 10) {
    console.log("어린이 요금: 5,000원");
}
else if (age >= 10 && age < 20) {
    if (isMember == true) {
        console.log("청소년 회원 요금: 7,000원");
    }
    else { console.log("청소년 일반 요금: 9,000원"); }
}
else {
    if (isMember == true) {
        console.log("성인 회원 요금: 10,000원");
    }
    else { console.log("성인 일반 요금: 15,000원"); }
}