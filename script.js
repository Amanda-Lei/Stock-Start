var button = $('.buttonOne')
var edittedText = $('.newMessage')

var quotes = ["ncjds", "nkcodls", "fkewaclm", "cdljds"]

button.on("click", pickQuote);

function pickQuote() {
  event.preventDefault();
  console.log("You clicked me");
  var random = Math.random() * quotes.length;
  var rounded = Math.floor(random);
  var newQuote = quotes[rounded];
  edittedText.text(newQuote);
}

var sharePrice;
var buyPrice;
var sellPrice;
let sharePrices = [];
var funds = 100;
var hold = true;
const costs = 100;

//iSharePrice = document.getElementById(id).innerHTML;
//adds prev month share price to the graph array
//sharePrice.push();

//Next Month function
/*function fluctuate(id) {
  //sharesBought * buyPrice;
 // hold = true;

  while(hold){
    //prev month stock cost
    iSharePrice = document.getElementById(id).innerHTML;
    
    //calculating current stock price
    if (Math.random() > 0.5) {
      document.getElementById(id).innerHTML = parseInt(num + (Math.random() * (-25)) + 1);
    } else {
      document.getElementById(id).innerHTML = parseInt(num + (Math.random() * 25) + 1);
    }

    fSharePrice = document.getElementById(id).innerHTML;
  
    if (document.getElementById(id).innerHTML < 0) {
     document.getElementById(id).innerHTML = 0;
    }
  
    document.getElementById('display').innerHTML = (fSharePrice - iSharePrice);

    /**adds final share price to the graph array
    //sharePrice.push(fSharePrice);

    //graph(fSharePrice);*/
   // await new Promise(r => setTimeout(r, 2000));

    if(document.getElementById('selling'). clicked == true)
    { 
      break;
    }
  }
  
  var proceeds = sharesBought * sellPrice;
  document.getElementById('score').innerHTML = cost - proceeds;
}

function addOne(cmp){
  sharePrice = document.getElementById(cmp).innerHTML;
  sharePrice++;
   document.getElementById(cmp).innerHTML = sharePrice;
  /*if(sharePrice * iSharePrice > funds){
    document.getElementById(cmp).innerHTML = sharePrice;
  }*/
}

function minusOne(cmp){
  sharePrice = document.getElementById(cmp).innerHTML;
  sharePrice--;
  document.getElementById(cmp).innerHTML = sharePrice;
  /**if(sharePrice < 0){
    document.getElementById(cmp).innerHTML = sharePrice;
  }else{
    document.getElementById(cmp).innerHTML = sharePrice;
  }*/
}




//COMPANY GRAPHS
var companyOne = $('#first ')
var companyTwo = $('#second ')
var companyThree = $('#third ')

var newMessageOne = $('.newMessage1')
var newMessageTwo = $('.newMessage2')
var newMessageThree = $('.newMessage3')

companyOne.on("click", showGraph(newMessageOne));
companyTwo.on("click", showGraph(newMessageTwo));
companyThree.on("click", showGraph(newMessageThree));

function showGraph() {
  event.preventDefault();
  newMessageOne.text("boo");
}

/**function fluctuate(id){
  if (Math.random() > 0.5) {
      document.getElementById(id).innerHTML = parseInt(num + (Math.random() * (-25)) + 1);
    } else {
      document.getElementById(id).innerHTML = parseInt(num + (Math.random() * 25) + 1);
    }
}*/
