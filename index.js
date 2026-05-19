/* Title
Add Task Button include Name Of The Task,Due Date,Priority
Search Bar
List Of Tasks
*/

// 1. Grab both elements
let openFormBtn = document.querySelector('.addTask');
let dialogueBox = document.getElementById('dialogueBox');

// 2. Add the click event listener to the main button
openFormBtn.addEventListener('click', function() {

    // 3. Remove the 'hidden' class to show the box
    dialogueBox.classList.remove('hidden');

});
