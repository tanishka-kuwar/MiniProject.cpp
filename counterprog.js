let count=0;

const decrement=document.getElementById("dec");
const increment=document.getElementById("inc");
const resetbt=document.getElementById("reset");
const counterlabel=document.getElementById("counterlabel");

increment.onclick = function(){
    count++;
    counterlabel.textContent = count;
}

decrement.onclick = function(){
    count--;
    counterlabel.textContent = count;
}

resetbt.onclick = function (){
    count=0;
    counterlabel.textContent = count ;
}