// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

//euro to dollar
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

//dollar to yen
test("One dollar should be 134.3 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3.5)

    // if 1 dollar are 134.3 yens, then 3.5 dollars should be (3.5 * 134.3)
    const expected = 2 * 134.3; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(2)).toBe(268.6); //1 dollar are 134.3 yens, then 3.5 dollars should be = (3.5 * 134.3)
})

//yen to pound
test("One yen should be 0.006 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(3.5)

    // if 1 yen are 0.006 pounds, then 3.5 yen should be (3.5 * 0.006)
    const expected = 100 * 0.006; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(100)).toBe(0.6); //1 yen are 0.006 pounds, then 3.5 euros should be = (3.5 * 0.006)
})