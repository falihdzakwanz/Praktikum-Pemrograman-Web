// Mendapatkan elemen input dan elemen error
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Validasi username saat keyup
usernameInput.addEventListener('keyup', function () {
    const username = usernameInput.value;
    // Cek apakah username memenuhi syarat
    if (/^[a-zA-Z0-9]{5,20}$/.test(username)) {
        usernameError.textContent = ''; // Kosongkan pesan error
    } else {
        usernameError.textContent = 'Username harus 5-20 karakter dan alfanumerik.';
    }
});

// Validasi email saat change
emailInput.addEventListener('change', function () {
    const email = emailInput.value;
    // Cek format email
    if (/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = ''; // Kosongkan pesan error
    } else {
        emailError.textContent = 'Format email tidak valid.';
    }
});

// Validasi password saat keyup
passwordInput.addEventListener('keyup', function () {
    const password = passwordInput.value;
    // Cek kekuatan password
    if (/(?=.*[0-9])(?=.*[a-zA-Z]).{8,}/.test(password)) {
        passwordError.textContent = ''; // Kosongkan pesan error
    } else {
        passwordError.textContent = 'Password harus minimal 8 karakter dan mencakup angka dan huruf.';
    }
});

// Validasi konfirmasi password saat input
confirmPasswordInput.addEventListener('input', function () {
    const confirmPassword = confirmPasswordInput.value;
    // Cek apakah konfirmasi password cocok
    if (confirmPassword === passwordInput.value) {
        confirmPasswordError.textContent = ''; // Kosongkan pesan error
    } else {
        confirmPasswordError.textContent = 'Konfirmasi password tidak cocok.';
    }
});

// Validasi akhir saat submit form
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman form default
    // Cek apakah semua validasi sudah benar
    if (
        usernameError.textContent === '' &&
        emailError.textContent === '' &&
        passwordError.textContent === '' &&
        confirmPasswordError.textContent === ''
    ) {
        alert('Pendaftaran berhasil!');
    } else {
        alert('Mohon periksa kembali data yang diinput.');
    }
});