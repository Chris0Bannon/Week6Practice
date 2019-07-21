console.log("Yo");


$ ( document ).ready( readyNow );

function readyNow (){
  console.log("JQ");
  $ ('#sayHelloButton').on( 'click', sayHello )
} // end readyNow

function sayHello(){
  // target the input element by ID
  // get the value of the text input
  let userName = $('#nameInput').val();
  console.log( 'Hello', userName );
  // empty out the input field
  $('#nameInput').val('');
}// end sayHello
