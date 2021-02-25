var databaase=60;   
var networking=75;
var it=80;
var os=80;
var automata=55;


var sum=databaase+networking+it+os+automata;
// document.write("total="+sum+"<br>");

function myfunc(){    
var per=sum/500*100;
document.write("percentage"+""+per+"<br>");

if (per>=80) {

             document.write("grade A-1"+"<br>");
             
}else if(per>=70) {
        
         document.write("grade A"+"<br>");
         
} else if(per>=60) {
        
        document.write("grade B"+"<br>");
      
} else if(per>=50) {
        
         document.write("grade C"+"<br>");
         
}
switch (per) {
    case 80:
        document.write("An Excellent Achievement!");
        break;
        case 70:
        document.write("Good!Keep it up");
        break;
        case 60:
        document.write("Fair! Need improvement");
        break;
        case 59:
        document.write("Poor! Better workhard");
        break;
    default:
    document.write("Sorry!you have failed");
}

}
