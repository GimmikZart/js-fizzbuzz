// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1 a 100
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz”

// listare i numeri da 1 a 100
for(var numero = 1; numero <= 100; numero++) {
  // Se è multiplo di 3 allora stampo FizzBuzz
  if(numero % 15 == 0) {
      console.log("FizzBuzz");
  } else if (numero % 3 == 0){
      console.log("Fizz");
  } else if(numero % 5 == 0) {
      console.log("Buzz");
  } else {
      console.log(numero);
  }

}
