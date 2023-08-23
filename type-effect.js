
var txt="content of text here";
var speed=50;
var currentChar=1;
var destination="[not defined]";

var i = 0;





 function typeWriter() {
  
  if (i < txt.length) {
    destination.innerText += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
async function startTyping(textParam, delayParam, destinationParam)
{
  i =0 ;
  txt=textParam;
  speed=delayParam;
  currentChar=1;
  destination=destinationParam;
 await typeWriter();

}
