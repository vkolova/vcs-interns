// Pluck

// Implement a function, called `pluck` with the following signature
// The function takes an array of objects and a `property` (a string) and returns new array with only the selected `property` from all items in `arr`.

function pluck (property, arr) {

};

const students = [
    { 'name': 'Daniel Taskoff', 'course': 'Frontend JavaScript' },
    { 'name': 'Elena Jeleva', 'course': 'Programming 101' },
    { 'name': 'Luboslava Dimitrova', 'course': 'Frontend JavaScript' },
    { 'name': 'Anton Antonov', 'course': 'Core Java' },
    { 'name': 'Nikola Dichev', 'course': 'Core Java' }
];

console.assert(pluck('name', students) === ['Daniel Taskoff', 'Elena Jeleva', 'Luboslava Dimitrova', 'Anton Antonov', 'Nikola Dichev'])