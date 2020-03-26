// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1 a 100
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz”

// listare i numeri da 1 a 100

var cifre = "";;


for(var numero = 1; numero <= 100; numero++) {
  // Se è divisibile per 15 FizzBuzz
  if(numero % 15 == 0) {
      console.log("FizzBuzz");
      cifre = cifre + "<div>FizzBuzz</div>";

      // se è multiplo di 3 scrivo Fizz
  } else if (numero % 3 == 0){
      console.log("Fizz");
      cifre = cifre + " <div> Fizz </div>";

      // se è multiplo di 5 scrivo buzz
  } else if(numero % 5 == 0) {
      console.log("Buzz");
      cifre = cifre + "<div>  Buzz </div> ";

      // in tutti gli altri casi scrivo il numero
  } else {
      console.log(numero);
      cifre = cifre + "<div>" + numero + "</div>" ;
  }

}

document.getElementById("stampa").innerHTML = cifre;
