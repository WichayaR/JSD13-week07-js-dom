// Write your demo code here, section by section.
// The HTML file has matching ids/classes for each topic:
//
// 1. Selecting Elements   -> #main-title, .submit-btn, .task
const mainTitle = document.getElementById('main-title');
const submitBtn = document.querySelector('.submit-btn');
const tasks = document.querySelectorAll('.task');

console.log(mainTitle);
console.log(submitBtn);
console.log(tasks);

// 2. Modifying Content    -> .label, #msg, #card
const label = document.querySelector('.label');
const msg = document.getElementById('msg');
const card = document.getElementById('card');

label.innerText = 'Label text updated';
msg.textContent = 'Message updated!';
card.innerHTML = '<h3>Card Title</h3><p>Card content</p>';

// 3. classList            -> #themeBtn, .card
const themeBtn = document.getElementById('themeBtn');
const cardBox = document.querySelector('.card');

cardBox.classList.add('active');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
// 4. Create & Remove      -> #addTaskBtn, #resetTasksBtn, #tasks
const addTaskBtn = document.getElementById('addTaskBtn');
const resetTasksBtn = document.getElementById('resetTasksBtn');
const tasksList = document.getElementById('tasks');

let count = 1;

addTaskBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.textContent = `Task ${count++}`;
  tasksList.append(li);
});

resetTasksBtn.addEventListener('click', () => {
  tasksList.innerHTML = '';
  count = 1;
});

// 5. Events               -> #click-me, #list, #signupForm, #email, .error
const clickMeBtn = document.getElementById('click-me');
const list = document.getElementById('list');
const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const errorMsg = document.querySelector('.error');

clickMeBtn.addEventListener('click', (e) => {
  console.log(e.type, e.target);
});

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('done');
  }
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (!email.includes('@')) {
    errorMsg.textContent = 'Please enter a valid email';
  } else {
    errorMsg.textContent = '';
    alert(`Success: ${email}`);
  }
});


// 6. Pokémon Card Fetcher -> #fetchBtn, #resetBtn, #gallery
