// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let arr = inventors.filter(inventor => inventor.year>1500);
let giveInventorData = ({first,last,year,passed})=>{
    return `<b>Inventor Data</b><br>
    First Name  :${first}<br>
    Last Name   :${last}<br>
    Birth Date  :${year}<br>
    Passed      :${passed}<hr>
    `;
}

let writeToTheDiv =(writeWhat) =>{
    document.querySelector('#queryResults' ).innerHTML+=writeWhat;
}
arr.forEach((inven)=> writeToTheDiv(giveInventorData(inven)));
//===============================================================================================================================

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
let arr2 = inventors.map((inventor)=> {return [inventor.first, inventor.last]});
console.log(arr2);


//===============================================================================================================================
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let arr3 = inventors.sort((a,b)=> a.year-b.year)
console.log(arr3)
//===============================================================================================================================
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
let totalYears = inventors.reduce(
    (accu,inventor) =>{ return accu + (parseInt(inventor.passed)-parseInt(inventor.year))},
    0);
console.log('Total years:'+totalYears)
//===============================================================================================================================
// 5. Sort the inventors by years lived
let arr4 = inventors.sort((a,b) => (a.passed-a.year)-(b.passed-b.year));
console.log(arr4);
//===============================================================================================================================
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

let arrayOfParis = ["Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", "Wall of Philip II Augustus", "City gates of Paris", "Haussmann's renovation of Paris", "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard de Rochechouart", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"];
let arr5 = arrayOfParis.filter((boulv) => boulv.indexOf('de')>-1);
console.log(arr5.join(', '));

//===============================================================================================================================
// 7. sort Exercise
// Sort the people alphabetically by last name
// For inventors (object type)
let arr6 = inventors.sort((a,b)=> {
    let A = a.last.toUpperCase();
    let B = b.last.toUpperCase();
    if(A<B){
        return -1;
    }else if(A>B){
        return 1;
    }else{
        return 0;
    }
});
console.log(arr6)
// For people (array type)
let pp = people.sort((first, second) => {

    let firstParts = first.split(', ');
    let secondParts = second.split(', ');
    if(firstParts[1]<secondParts[1]){
        return 1;
    }
    if(firstParts[1]>secondParts[1]){
        return -1;
    }
    if(firstParts[1]==secondParts[1]){
        return 0;
    }

});

console.log(pp);



//===============================================================================================================================
// 8. Reduce Exercise
//===============================================================================================================================
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

let arr7 = data.reduce(
    (obj,vech) => {
                    if(!obj[vech]) obj[vech]=0;
                    obj[vech]++;
                    return obj;
                    },
    {}
);
console.log(arr7);

//--
let newObj={};
data.forEach((vech) => {
    if(!newObj[vech]){
        newObj[vech]=0;
    }
    newObj[vech]++;
})
console.log(newObj);
