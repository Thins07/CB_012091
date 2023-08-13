// mobile number and country from ICONIFY
const countries = [
    { name:"Afghanistan", code:"AF", phone: 93 },
    { name: "American Samoa", code: "AS", phone: 1684 },
    { name: "Antarctica", code: "AQ", phone: 672 },
    { name: "Argentina", code: "AR", phone: 54 },
    { name: "Australia", code: "AU", phone: 61 },
    { name: "Austria", code: "AT", phone: 43 },
    { name: "Bahamas", code: "BS", phone: 1242 },
    { name: "Bangladesh", code: "BD", phone: 880 },
    { name: "Barbados", code: "BB", phone: 1246 },
    { name: "Belarus", code: "BY", phone: 375 },
    { name: "Belgium", code: "BE", phone: 32 },
    { name: "Bhutan", code: "BT", phone: 975 },
    { name: "Brazil", code: "BR", phone: 55 },
    { name: "Bulgaria", code: "BG", phone: 359 },
    { name: "Cambodia", code: "KH", phone: 855 },
    { name: "Canada", code: "CA", phone: 1 },
    { name: "China", code: "CN", phone: 86 },
    { name: "Colombia", code: "CO", phone: 57 },
    { name: "Costa Rica", code: "CR", phone: 506 },
    { name: "Croatia", code: "HR", phone: 385 },
    { name: "Cuba", code: "CU", phone: 53 },
    { name: "Curacao", code: "CW", phone: 599 },
    { name: "Cyprus", code: "CY", phone: 357 },
    { name: "Denmark", code: "DK", phone: 45 },
    { name: "Egypt", code: "EG", phone: 20 },
    { name: "El Salvador", code: "SV", phone: 503 },
    { name: "Equatorial Guinea", code: "GQ", phone: 240 },
    { name: "Ethiopia", code: "ET", phone: 251 },
    { name: "Fiji", code: "FJ", phone: 679 },
    { name: "Finland", code: "FI", phone: 358 },
    { name: "France", code: "FR", phone: 33 },
    { name: "Georgia", code: "GE", phone: 995 },
    { name: "Germany", code: "DE", phone: 49 },
    { name: "Greece", code: "GR", phone: 30 },
    { name: "Greenland", code: "GL", phone: 299 },
    { name: "Hong Kong", code: "HK", phone: 852 },
    { name: "Hungary", code: "HU", phone: 36 },
    { name: "Iceland", code: "IS", phone: 354 },
    { name: "India", code: "IN", phone: 91 },
    { name: "Indonesia", code: "ID", phone: 62 },
    { name: "Iran, Islamic Republic of", code: "IR", phone: 98 },
    { name: "Iraq", code: "IQ", phone: 964 },
    { name: "Ireland", code: "IE", phone: 353 },
    { name: "Isle of Man", code: "IM", phone: 44 },
    { name: "Israel", code: "IL", phone: 972 },
    { name: "Italy", code: "IT", phone: 39 },
    { name: "Jamaica", code: "JM", phone: 1876 },
    { name: "Japan", code: "JP", phone: 81 },
    { name: "Jersey", code: "JE", phone: 44 },
    { name: "Jordan", code: "JO", phone: 962 },
    { name: "Kazakhstan", code: "KZ", phone: 7 },
    { name: "Kenya", code: "KE", phone: 254 },
    { name: "Kuwait", code: "KW", phone: 965 },
    { name: "Kyrgyzstan", code: "KG", phone: 996 },
    { name: "Lebanon", code: "LB", phone: 961 },
    { name: "Liberia", code: "LR", phone: 231 },
    { name: "Madagascar", code: "MG", phone: 261 },
    { name: "Malaysia", code: "MY", phone: 60 },
    { name: "Maldives", code: "MV", phone: 960 },
    { name: "Mexico", code: "MX", phone: 52 },
    { name: "Mongolia", code: "MN", phone: 976 },
    { name: "Morocco", code: "MA", phone: 212 },
    { name: "Nepal", code: "NP", phone: 977 },
    { name: "Netherlands", code: "NL", phone: 31 },
    { name: "Netherlands Antilles", code: "AN", phone: 599 },
    { name: "New Zealand", code: "NZ", phone: 64 },
    { name: "Nigeria", code: "NG", phone: 234 },
    { name: "Norway", code: "NO", phone: 47 },
    { name: "Oman", code: "OM", phone: 968 },
    { name: "Pakistan", code: "PK", phone: 92 },
    { name: "Peru", code: "PE", phone: 51 },
    { name: "Philippines", code: "PH", phone: 63 },
    { name: "Poland", code: "PL", phone: 48 },
    { name: "Portugal", code: "PT", phone: 351 },
    { name: "Puerto Rico", code: "PR", phone: 1787 },
    { name: "Qatar", code: "QA", phone: 974 },
    { name: "Reunion", code: "RE", phone: 262 },
    { name: "Romania", code: "RO", phone: 40 },
    { name: "Russian Federation", code: "RU", phone: 7 },
    { name: "Saint Pierre and Miquelon", code: "PM", phone: 508 },
    { name: "Saint Vincent and the Grenadines", code: "VC", phone: 1784 },
    { name: "Saudi Arabia", code: "SA", phone: 966 },
    { name: "Senegal", code: "SN", phone: 221 },
    { name: "Serbia", code: "RS", phone: 381 },
    { name: "Serbia and Montenegro", code: "CS", phone: 381 },
    { name: "Singapore", code: "SG", phone: 65 },
    { name: "Somalia", code: "SO", phone: 252 },
    { name: "South Africa", code: "ZA", phone: 27 },
    { name: "South Sudan", code: "SS", phone: 211 },
    { name: "Spain", code: "ES", phone: 34 },
    { name: "Sri Lanka", code: "LK", phone: 94 },
    { name: "Sudan", code: "SD", phone: 249 },
    { name: "Sweden", code: "SE", phone: 46 },
    { name: "Switzerland", code: "CH", phone: 41 },
    { name: "Syrian Arab Republic", code: "SY", phone: 963 },
    { name: "Taiwan, Province of China", code: "TW", phone: 886 },
    { name: "Thailand", code: "TH", phone: 66 },
    { name: "Turkey", code: "TR", phone: 90 },
    { name: "Ukraine", code: "UA", phone: 380 },
    { name: "United Kingdom", code: "GB", phone: 44 },
    { name: "United States", code: "US", phone: 1 },
    { name: "Virgin Islands, British", code: "VG", phone: 1284 },
    { name: "Virgin Islands, U.s.", code: "VI", phone: 1340 },
    { name: "Western Sahara", code: "EH", phone: 212 },
    { name: "Yemen", code: "YE", phone: 967 },
    { name: "Zambia", code: "ZM", phone: 260 },
    { name: "Zimbabwe", code: "ZW", phone: 263 }
],


    select_box = document.querySelector('.options'),
    search_box = document.querySelector('.search-box'),
    input_box = document.querySelector('input[type="tel"]'),
    selected_option = document.querySelector('.selected-option div');

let options = null;

for (country of countries) {
    const option = `
    <li class="option">
        <div>
            <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
            <span class="country-name">${country.name}</span>
        </div>
        <strong>+${country.phone}</strong>
    </li> `;

    select_box.querySelector('ol').insertAdjacentHTML('beforeend', option);
    options = document.querySelectorAll('.option');
}

function selectOption() {
    console.log(this);
    const icon = this.querySelector('.iconify').cloneNode(true),
        phone_code = this.querySelector('strong').cloneNode(true);

    selected_option.innerHTML = '';
    selected_option.append(icon, phone_code);

    input_box.value = phone_code.innerText;

    select_box.classList.remove('active');
    selected_option.classList.remove('active');

    search_box.value = '';
    select_box.querySelectorAll('.hide').forEach(el => el.classList.remove('hide'));
}

function searchCountry() {
    let search_query = search_box.value.toLowerCase();
    for (option of options) {
        let is_matched = option.querySelector('.country-name').innerText.toLowerCase().includes(search_query);
        option.classList.toggle('hide', !is_matched)
    }
}


selected_option.addEventListener('click', () => {
    select_box.classList.toggle('active');
    selected_option.classList.toggle('active');
})

options.forEach(option => option.addEventListener('click', selectOption));
search_box.addEventListener('input', searchCountry);

//form
    function validateForm() {
    // Clear previous error messages
    clearErrors();

    var fullName = document.getElementById('fullName').value;
    var mobileNumber = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;
    var gender = document.getElementById('gender').value;

    var isValid = true;

    if (fullName.trim() === '') {
        showError('fullName', 'Please add the full name');
        isValid = false;
    }

    if (mobileNumber.trim() === '' || mobileNumber.length > 12) {
        showError('phone', 'Add a valid mobile number');
        isValid = false;
    }

    if (email.trim() === '') {
        showError('email', 'Add a valid email ID');
        isValid = false;
    }

    if (confirmEmail.trim() === '' || confirmEmail !== email) {
        showError('confirmEmail', 'Add a valid email ID');
        isValid = false;
    }

    // Display a single error message if only one input field is filled
    if (!isValid) {
        showError('allFields', 'Please fill in all required fields');
    } else {
        window.location.href = 'payment.html'; // Navigate to payment page
    }
    
    localStorage.setItem("fullname" , fullName);
    localStorage.setItem("mobileNumber", mobileNumber);
    localStorage.setItem("email", email);
    localStorage.setItem("confirmEmail", confirmEmail);
    localStorage.setItem("gender", gender);
}

    function showError(inputId, errorMessage) {
    var errorElement = document.querySelector('#' + inputId + ' + .error');
    errorElement.textContent = errorMessage;
}

    function clearErrors() {
    var errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (element) {
        element.textContent = '';
    });
}

window.addEventListener("DOMContentLoaded" , ()=>{
    let recapTable = document.getElementById("recapTable");
    recapTable.innerHTML = localStorage.getItem("table");
})


const booknowbtn =document.getElementById("booknowbtn");
booknowbtn.addEventListener("click" , ()=>{
    let recapTable = document.getElementById("recapTable");
    let rows = recapTable.getElementsByTagName("tr");
    let tbody = document.createElement("tbody");
    
    for (let i = 3; i < rows.length; i++) { // Start from the 4th row
      let newRow = document.createElement("tr");
      newRow.innerHTML = rows[i].innerHTML;
      tbody.appendChild(newRow);
    }
    
    localStorage.setItem("newrecaptable", tbody.innerHTML);
})