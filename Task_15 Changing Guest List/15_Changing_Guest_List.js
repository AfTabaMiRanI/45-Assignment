"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let Guest_List = ['Virat', 'Babar', 'Williamson'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party.\n\nThank You!`);
}
let absent_Guest = 'Williamson';
let new_Guest = 'Rohit sharma';
Guest_List[2] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party.\n\nThank You!`);
}
console.log(`${absent_Guest} is not coming to the party. `);
