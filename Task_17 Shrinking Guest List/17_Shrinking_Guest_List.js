"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let Guest_List = ['Virat', 'Babar', 'Williamson'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party.\n\nThank You!`)
// }
let absent_Guest = 'Williamson';
let new_Guest = 'Rohit sharma';
Guest_List[2] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party.\n\nThank You!`)
// }
console.log(`${absent_Guest} is not coming to the party. `);
console.log('Good News! Here we find a big table so we are are inviting more guests in our party.');
//array me 3 mehman add kaya aaahin
Guest_List.unshift('Jason Roy');
Guest_List.splice(2, 0, 'Naseem Shah');
Guest_List.push('Shaheen Shah Afridi');
// hite 6 mehmananje array khe print kayam 
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party.\n\nThank You!`);
}
// sorry mehmano tohwa khe dawat na dinam
console.log('\nsorry we can not arrange big table, only two people will be invited.');
// hite mehman remove kare chadya aaahin
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr.${remove_Guest}, You are not invited for dinner`);
}
// bakaya 2 mehman jeh khe invite kayam
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + `\n\nYou are still invited.\n\nThank You!`);
}
// sada guest remove kayam
Guest_List.splice(0, 2);
console.log(Guest_List);
