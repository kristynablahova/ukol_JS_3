const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

  //Vypište do stránky všechna čísla.

  console.log(`Všechna čísla: ${numbers}`)

  //Vypište do stránky druhé mocniny všech čísel.

  const numbersSquared = numbers.map(item => item ** 2)

  console.log(`Druhé mocniny čísel: ${numbersSquared}`)

  //Vypište do stránky pouze záporná čísla.

  const negativeNumbers = numbers.filter((item) => {
    if (item < 0) {
      return item
    }
  })
  
  console.log(`Záporná čísla: ${negativeNumbers}`)

  //Vypište do stránky absolutní hodnotu všech čísel.

  const absoluteNumber = numbers.map(item => Math.abs(item))

  console.log(`Absolutní hodnoty: ${absoluteNumber}`)

  //Vypište do stránky pouze sudá čísla.

  const evenNumbers = numbers.filter(item => {
    if (item % 2 === 0) {
      return item
    }
  })

  console.log(`Sudá čísla: ${evenNumbers}`)

  //Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.

  const absoluteNumberDiv3 = numbers.filter(item => {
    if (item % 3 === 0) {
      return Math.abs(item)
    }
  })

  console.log(`Absolutní hodnoty čísel dělitelné třemi: ${absoluteNumberDiv3}`)

  //Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.

  const numbersDistanceFrom5 = numbers.map(item => Math.abs(item - 5))

  console.log(`Vzdálenost čísel od 5: ${numbersDistanceFrom5}`)

  //Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.

  const numbersDistanceFrom5Squared = numbers.map(item => (item - 5) ** 2)

  console.log(`Druhé mocniny vzdáleností čísel od 5: ${numbersDistanceFrom5Squared}`)

  //Spočítejte, kolik je v seznamu záporných čísel.

  let negativeNumbersCount = 0

  numbers.forEach(item => {
    if (item < 0) {
      return negativeNumbersCount++
    }
  })

  console.log(`Počet záporných čísel je: ${negativeNumbersCount}`)

  //Spočítejte součet všech čísel v poli.

  const initialValue = 0

  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

  console.log(`Součet všech čísel je: ${sum}`)
  
  //Spočítejte průměr všech čísel v poli.

  const average = sum / numbers.length

  console.log(`Průměr všech čísel je: ${average}`)

  //Spočítejte součet všech kladných čísel v poli.

  const positiveNumbers = numbers.filter((item) => {
    if (item > 0) {
      return item
    }
  })

  const sumPositive = positiveNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

  console.log(`Součet všech kladných čísel je: ${sumPositive}`)

  
