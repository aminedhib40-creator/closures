//    function compteur(conter){
//        return function (){
//            conter++
//            return conter
//        }
   
//    }
//    let contr= compteur(1)
//    console.log(contr ())
//    console.log( contr())
//    console.log(contr ())

// function creezCounter (compteur){
//     return function () {
//         compteur++
//         return compteur

//     }

// }
// let cntr = creezCounter(100)
// console.log(cntr())

function pow(exponent) {
  return function(base) {
   return  base**exponent
    
  }
}
let caré = pow(2)
let cube = pow(3)
let power4 = pow(4)
console.log(caré(5))
console.log(cube(3))
console.log(power4(4))
