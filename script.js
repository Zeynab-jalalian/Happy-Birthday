/* 
button click 
if todaydate=birthdate
*/
let button=document.getElementById('checkButton'); //دسترسی به دکمه
let message=document.getElementById('message');//دسترسی به پیغام نهایی
button.addEventListener('click',function(){
    let input=document.getElementById('Birthdate').value; //دسترسی به تاریخ تولد
    let todayDate=new Date(); // تاریخ امروز
    let todayMonth=todayDate.getMonth(); //ماه امروز
    let todayDay=todayDate.getDate(); //روز امروز

    let birthDate=new Date(input); // تاریخ  تولد
    let birthMonth=birthDate.getMonth(); //ماه تولد
    let birthDay=birthDate.getDate(); //روز تولد

    if(birthMonth==todayMonth && birthDay==todayDay){
        message.innerHTML="Happy Birthday!"
    }else{
        message.innerHTML="It's not your birthday!"
    }
})