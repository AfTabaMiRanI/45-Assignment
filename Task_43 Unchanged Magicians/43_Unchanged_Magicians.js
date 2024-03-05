"use strict";
// Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// const magician: string[] = ["aftab", "azan", "ayeza"];
// show_magicians(magician)
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "  The Great";
    }
}
const magicians2 = ["Aftab", "Meer", "Mirani"];
// make_great(magicians2)
// show_magicians(magicians2)
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " The Great");
    }
    return greatMagicians;
}
const greatMagicians3 = ["Aftab", "Azan", "Ayeza"];
const greatMagicians2 = make_great2(magicians2);
show_magicians(magicians2);
show_magicians(greatMagicians2);
