// (1)
function reverseThisString(string)
{
    return string.split("").reverse().join("");
    //or
    //      function reverseThisString(string){
    //      var stringSplint = string.split("");
    //      var reverse = stringSplint.reverse();
    //      var joinSplit = reverse.join("");
    //      return joinSplit;
    //      }
}
console.log(reverseThisString('Hello'));

// (2)
    function swapCase(string) 
    {
        var swap = string.split("");
        for (var i = 0; i < swap.length; i++)
            {
                if(swap[i] == swap[i].toLowerCase())
                {
                    swap[i] = swap[i].toUpperCase();
                }
                    else if (swap[i] == swap[i].toUpperCase())
                    {
                        swap[i] = swap[i].toLowerCase();   
                    } 
            } 
            return swap = swap.join("");
    }
    console.log(swapCase('Hello World'));

// (3)
    // function toCelcius(array)
    // {
    //     var fahrenheitTemp = array;
    //     var fahrenheitToCelcius = (fahrenheitTemp - 32) * (5 / 9);
    //     return fahrenheitToCelcius;
    // }
    // console.log(toCelcius(23), toCelcius(32), toCelcius(41), toCelcius(50), toCelcius(59));
//different way of 3)
    function toCelcius2(array)
    {
        var fahrenheitTemp = array;
        var fahrenheitToCelcius = (fahrenheitTemp - 32) * (5 / 9);
        return fahrenheitToCelcius;
    }
    var numbers = [23, 32, 41, 50, 59];
    var array2 = numbers.map(toCelcius2);
    console.log(array2);

// (4)
    function passOrFail(array)
    {
        var bool = array;
            if(bool >= 75)
            {
                return true;
            } 
            else if (bool < 75)
            {
                return false;
            }
    }

    var numbers2 = [20, 30, 50, 80, 90, 100];
    var array2 = numbers2.map(passOrFail);
    console.log(array2);

// (5)
    function germanNumbers()
    {
        const cardinalNumbers = [2,3,4,5,6];
        const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
        var a =[];
        for( var i = 0; i < cardinalNumbers.length; i++)
        {
            a[i]= cardinalNumbers[i] + ' is ' + germanNumbers[i];
        }
        return a;
    }
    var german = germanNumbers();
    console.log(german);

// (6)
function returnPrimeNumbers(num)
{  
        for(var i = 2; i < num; i++) 
        {
          if(num % i === 0) 
          {
            return false;
          }
        }
        return num !== 1;
}    
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var primes = numbersArray.filter(returnPrimeNumbers);
console.log(primes);

// (7)
function LoopNumbers(num)
{
    let i = 0;
    while (i < num )
    {
        i++;
        if ((i % 3 == 0) && (i % 5 == 0))
        {
            console.log('CSC225 RULES I LOVE JAVASCRIPT');   
        }
        else if(i % 3 == 0)
        {
            console.log('CSC225 Rules');
        }
        else if (i % 5 == 0)
        {
            console.log('I LOVE JAVASCRIPT');  
        }
        else
        {
            console.log(i);
        }
    }   
}
console.log(LoopNumbers(100));