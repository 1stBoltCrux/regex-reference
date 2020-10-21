// matches any character within in the brackets in no particular order
const stringOne = "edwin";
console.log(stringOne.match(/[abce]/));
// match all characters from a to z, with global flag (match all instances)
// also works with numbers, capital letters
console.log(stringOne.match(/[a-z]/g));
// ^ is the negation character - this will match anthing BUT a, b or c
// worth noting special characters in brackets are (generally) escaped automatically
console.log(stringOne.match(/[^abc]dwin/));

const stringTwo = "edwin123@gmail.com Edwin Diaz";
// \d matches all digits
console.log(stringTwo.match(/\d/g));
// matches all letters, all numbers, case insensitive (w = word)
console.log(stringTwo.match(/\w/g));
// matches all white spaces
console.log(stringTwo.match(/\s/g));
// this would match all spaces/returns/new lines/tabs
console.log(stringTwo.match(/[ \t\r\n]/g));
// uppercase version of 'word' gives us all non-words
console.log(stringTwo.match(/\W/g));
// uppercase version of 'digit' gives us all non-digits
console.log(stringTwo.match(/\D/g));
// uppercase version of 'space' gives us all non-whitespaces
console.log(stringTwo.match(/\S/g));
// matches everything - basically saying match all non-digits (including whitespaces)
// and match all non-whitespaces (including digits!) so you get everything
console.log(stringTwo.match(/\D\S/g));
// matches all non-digits and non-whitespaces - a little confusing but
// this is how the negate flag works
console.log(stringTwo.match(/[^\d\s]/g));
// matches instances of 2 any digits next to one another
console.log(stringTwo.match(/\d\d/g));

// QUANTIFIERS

const stringThree = "file___.php";

// match any file with at least one underscore - the asterisk matches the
// previous character zero to infinite times
console.log(stringThree.match(/file_*\.php/));
// the + symbol matches the previous character AT LEAST once to infinitum
console.log(stringThree.match(/file_+\.php/));
// the ? symbol matches the previous character zero, or one time, not multiples
console.log(stringThree.match(/file_?\.php/));

// PARAMETERS

const stringFour = "11218-4566 21123412314-1234234 3-3333";
// match a 5 digit sequence, followed by a heiphen followed by a four digit sequence
// basically you select a literal you want to match (in this case \d)
// then number of repetitions you'd like to match in the params
console.log(stringFour.match(/\d{5}-\d{4}/g));
// match all single and double occurances of '1'
console.log(stringFour.match(/1{1,2}/g));

// RELUCTANT QUANTIFIERS

// these are confusing - basically they match things as few times as possible

const stringFive = "<h1>Edwin</h1><h1>Diaz</h1>";
// matches anything, at least once, as few times as possible - so we get
// ['<h1>Edwin</h1>', '<h1>Diaz></h1>']
// without the ? we get - ['<h1>Edwin</h1><h1>Diaz></h1>']
console.log(stringFive.match(/<h1>.+?<\/h1>/g));

const stringSix = "toaaaaast toaast";
// ?? matches previous element zero or one time, but as few times as possible
// returns ['a', 'a', 'a', 'a', 'a', 'a', 'a']
console.log(stringSix.match(/aa??/g));
// this would return ['to', 'to]
console.log(stringSix.match(/toa??/g));
// +? matches the previous element one or more times but as few times as possible
// returns ['toa', 'toa']
console.log(stringSix.match(/toa+?/g));
// *? matches the prev element zero or more times, but as few times as possible
// returns ['to', 'to']
console.log(stringSix.match(/toa*?/g));

// GROUPING

const stringSeven = "happy and unhappy person";
// sets the 'un' into a group and sets it as option
// returns ['happy', 'unhappy']
console.log(stringSeven.match(/(un)?happy/g));

// PIPING (or operator)

const stringEight = "super market";
// matches either super or market - left side always takes precedent
// returns ['super', 'market']
console.log(stringEight.match(/super|market/g));
const stringNine = "file204_export.sql";
// note - using the asterisk is heavy performance wise - in this case
// if you knew how many digits, or what range of digits to expect it would
// be better to set that explicitly vs using the asterisk
// returns ['file204']
console.log(stringNine.match(/(file\d*)/g));

// NESTING

const stringTen = "super market super bowl bmw 325i bmw 335i";
//returns ['super market', 'super bowl']
console.log(stringTen.match(/(super (market|bowl))/g));
// matches everything in the string ['super market, 'super bowl' etc...]
console.log(stringTen.match(/(super (market|bowl)|bmw (325i|335i))/g));

// ANCHORS - refers to the position, not the character itself

// ^ is the 'starts with' anchor - match must start at the beginning of the string
// or line
const stringEleven = "How about we have ourselves a real ho-dowNNN";
// returns ['H']
console.log(stringEleven.match(/^H/g));
// return any capital letter at the beginning of the string/line
// returns ['H']
console.log(stringEleven.match(/^[A-Z]/g));
// returns ['N']
console.log(stringEleven.match(/[A-Z]$/g));
// returns ['NNN']
console.log(stringEleven.match(/[A-Z]+$/g));

// WORD BOUNDARIES

// word boundaries are basically the beggining and ending boundary of a word
// also they exist between special characters like in 'semi-rigid' or "don't"
const stringTwelve = "My name is Hoopy Horace and I was born to boop.";
// returns everything between word boundaries - ['My','name','is','Hoopy',
// 'Horace','and','I','was','born','to','boop']
console.log(stringTwelve.match(/\b\w+\b/g));
//uppercase returns everything NOT adjacent to a word boundary
// returns [ 'am', 'oop', 'orac', 'n', 'a', 'or', 'oo' ]
console.log(stringTwelve.match(/\B\w+\B/g));

// BACKREFERENCES & CAPTURING

const para = "Hey look a paragraph."

const pattern = /(\w+)/;

// replaces what is matched by the regular expression with "Horse Face"
// global flag is off so only the first word in our paragraph is replaced

const newString = para.replace(pattern, "Horse Face");

console.log(newString);

// our groups are placed into variables automatically that we can refer to
// like this - $1, $2 etc

const newPattern = /(\w+)\s(\w+)/;
// this will replace our second var ($2, the second word) with the first ($1)
const evenNewerString = para.replace(newPattern, "$1");
console.log(evenNewerString);

// NON-CAPTURING GROUP EXPRESSIONS

// by default the regex engine saves groups in variables, up to about 9
// you can disable this by adding :? in your group - ie (?:thing)

// POSITIVE AND NEGATIVE LOOK-AHEAD

// positive look-ahead assertion

const stringThirteen = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti blanditiis unde corrupti fugit. Blanditiis optio laboriosam repellendus, vero adipisci veritatis labore ad voluptates, tempore sed error assumenda, quis voluptas doloribus?"
// match all words immediately followed by a comma
// returns [ 'amet', 'repellendus', 'voluptates', 'assumenda' ]
console.log(stringThirteen.match(/[A-Za-z]+(?=,)/g));
// with the not operator in place of the '=' we get just the entire string, except
// for the letters immediately followed by a comma
console.log(stringThirteen.match(/[A-Za-z]+(?!,)/g));

// HELPFUL EXAMPLES

// match a zip code

const zip = '11214-4526';
// contains beginning and ending anchors (^ and $) to ensure a certain length
// first digit set is 5 digits then an (optional with ? symbol) group of a hyphen
// and four digits, then an anchor at the final position to keep from matching beyond
// our character limit

console.log(zip.match(/^\d{5}(-\d{4})?$/g));

// password validation

const password = '$eCr3T';

// uses look-ahead to check for at least one capital letter, lowercase letter,
// digit and selection of symbols, white spaces are excluded as well

console.log(password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*\-\\])\S{6,20}$/g))

// date validation

const date = '12-30-1985\n08-08-1975\n8-8-1986\n10/30/1985';
// anchors at the beginning and end for new-line matching - 'm' flag at the end 
// denotes 'new line' matching for anchors - lots of 'or' statements for all
// the ways to write a date, other than that pretty clear 
console.log(date.match(/^(0?[1-9]|1[0-2])[-/](0?[1-9]|3?[0-1]|[1-2][0-9])[-/]\d{4}$/gm))
