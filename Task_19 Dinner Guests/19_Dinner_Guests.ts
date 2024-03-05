// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.





let Guest_List : string[] = ['Virat','Babar','Williamson'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party.\n\nThank You!`)
// }

let absent_Guest : string = 'Williamson' ;
let new_Guest : string = 'Rohit sharma' ;

Guest_List[2] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party.\n\nThank You!`)

// }

// console.log(`${absent_Guest} is not coming to the party. `);
// console.log('Good News! Here we find a big table so we are are inviting more guests in our party.')


//array me 3 mehman add kaya aaahin
Guest_List.unshift('Jason Roy') ;
Guest_List.splice(2 , 0 , 'Naseem Shah');
Guest_List.push('Shaheen Shah Afridi');

// hite 6 mehmananje array khe print kayam 
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party.\n\nThank You!`)

// }

// sorry mehmano tohwa khe dawat na dinam
// console.log('\nsorry we can not arrange big table, only two people will be invited.')

// hite mehman remove kare chadya aaahin
while(Guest_List.length > 2){
  let remove_Guest =  Guest_List.pop();
//   console.log(`Sorry Mr.${remove_Guest}, You are not invited for dinner`);
}
// bakaya 2 mehman jeh khe invite kayam
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + `\n\nYou are still invited.\n\nThank You!`)

// }

// sada guest remove kayam
Guest_List.splice(0, 2);
console.log(Guest_List);



// Exercise 19

// print a message indicating the number of people you are inviting to dinner.

console.log(`Total Number of Guest Are: ${Guest_List.length}`);