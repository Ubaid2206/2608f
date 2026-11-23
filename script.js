// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

// Cart count
let count = 0;
const cartCount = document.getElementById('cartCount');
const status = document.getElementById('status');
document.querySelectorAll('.add').forEach(btn => {
  btn.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = count;
    status.textContent = `${btn.dataset.name} added to cart.`;
  });
});

// Newsletter signup
const form = document.getElementById('signup');
const email = document.getElementById('email');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', e => {
  e.preventDefault();
  msg.classList.remove('error');
  if (!email.validity.valid || !email.value.trim()) {
    msg.classList.add('error');
    msg.textContent = 'Enter a valid email address, like you@example.com.';
    email.focus();
    return;
  }
  // TODO: send email.value to your email provider here.
  msg.textContent = 'You’re subscribed. Check your inbox for your discount.';
  form.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
