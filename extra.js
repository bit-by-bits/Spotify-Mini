let greeting = document.getElementById('greeting');
let currDate = new Date();

if (currDate.getHours() < 10) greeting.innerText = 'Good Morning';
else if (currDate.getHours() >15 && currDate.getHours() < 19) greeting.innerText = 'Good Evening';
else if (currDate.getHours() > 19) greeting.innerText = 'Good Night';