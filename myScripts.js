// 5 تا شی پیدا کن  همه ویژگی هاشو در بیار همه ویژگی ها رو توی تگ های وختلف چاپ کن
function main() {

    let person={name:'class7',height:100,_Number:15,color:'red',usechair:true,userwindow:true,usemarkerbord:false};
    print(person);

}
function main2(){
    let rayane={name:'laptab',height:200,_Number:10,color:'gray',userlight:true,userkebord:true,userpaper:false};
    print(rayane);

}

function main3() {
    let move={name:'car',wight:100,color:'colory',userwindow:true,userdoor:true,_tireNumber:4};
    print(move);

} 

function main4(){
    let light={name:'lamp',height:50,color:'Red',_Number:12,userelectrice:true,userglass:true,USERMETAL:false};
    print(light);

}

function main5(){
    let air={name:'hairderayer',height:90,color:'black',_Numberpart:3,USERMETAL:true,userWATER:false};
    print(air);
}

function printperson(x) {
document.getElementById('book').innerHTML=x.color;
document.getElementById('book').innerHTML=x.name;
}

function printrayane(y){
document.getElementById('book').innerHTML=x.color;
document.getElementById('book').innerHTML=x.name;
}

function printmove(t){
document.getElementById('book').innerHTML=y.color;
document.getElementById('book').innerHTML=y.name;
}

function printlight(p) {
document.getElementById('book').innerHTML=p.color;
document.getElementById('book').innerHTML=p.name;
}

function printair(f) {
document.getElementById('book').innerHTML=f.color;
document.getElementById('book').innerHTML=f.name;
}