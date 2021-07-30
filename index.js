// Your code here
function saturdayFun(say="roller-skate"){
return `This Saturday, I want to ${say}!`
}

function mondayWork(say='go to the office'){
return `This Monday, I will ${say}.`
}   

function wrapAdjective(say1='*'){
     
   return function (str="a hard woker"){
    return `You are ${say1}${str}${say1}!`
}
}
wrapAdjective(("||")("a dedicated programmer"))