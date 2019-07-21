console.log("Yo");


$ ( document ).ready( readyNow );

function readyNow (){
  console.log("JQ");
  $ ('#sayHelloButton').on( 'click', sayHello );
  $ ('h2').mouseenter(h2MouseEnter );
  $ ('h2').mouseleave( h2MouseLeave );
  $ ('.clicker').on('click', changeTextColor);
} // end readyNow

function changeTextColor(){
  $( this ).css('color', 'purple');
}// end changeTextColor

function h2MouseEnter(){
  $( this ).css('background-color', 'red');
} //end h2MouseEnter

function h2MouseLeave(){
  $ ( this ).css('background-color', 'white');
}

function sayHello(){
  // target the input element by ID
  // get the value of the text input
  let outputText = 'Hello ' + $('#nameInput').val();
  console.log( outputText );
  //display outputText on the DOM
  // target the outputelement
  let outputEL = $( '#helloOut');
  //empty the output element
  outputEL.empty();
  //append the outputText in it
  outputEL.append( outputText );
  // empty out the input field

  $('#nameInput').val('');
}// end sayHello
