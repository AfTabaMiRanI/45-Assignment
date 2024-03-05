// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.






let Guest_List : string[] = ['Virat','Babar','Williamson'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party.\n\nThank You!`)

// }

let absent_Guest : string = 'Williamson' ;

let new_Guest : string = 'Rohit sharma' ;

Guest_List[2] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party.\n\nThank You!`)

}

console.log(`${absent_Guest} is not coming to the party. `);

console.log('Good News! Here we find a big table so we are are inviting more guests in our party.')


Guest_List.unshift('Jason Roy') ;
Guest_List.splice(2 , 0 , 'Naseem Shah');
Guest_List.push('Shaheen Shah Afridi');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party.\n\nThank You!`)

}

