const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// 1. Sayfa yüklendiğinde LocalStorage'da veri varsa al
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const { email, message } = JSON.parse(savedData);
  form.elements.email.value = email || '';
  form.elements.message.value = message || '';
}

// 2. Kullanıcı her yazdığında LocalStorage'a kaydet
form.addEventListener('input', () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 3. Form gönderildiğinde veriyi işle ve temizle
form.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (!emailValue || !messageValue) {
    return alert('Lütfen tüm alanları doldurun!');
  }

  console.log({
    email: emailValue,
    message: messageValue,
  });

  // LocalStorage ve formu temizle
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
