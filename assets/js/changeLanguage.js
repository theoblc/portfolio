function changeLanguage(language) {
    fetch(`assets/lang/${language}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.title').textContent = data.title;
            document.querySelector('#menu li:nth-child(1) a').textContent = data.menu_home;
            document.querySelector('#menu li:nth-child(2) a').textContent = data.menu_cv;
            document.querySelector('#menu li:nth-child(3) a').textContent = data.menu_contact;
            document.querySelector('#menu li:nth-child(4) a').textContent = data.menu_elements;
            document.querySelector('header h1').innerHTML = data.header_title;
            document.querySelector('header p').textContent = data.header_description;
        });
}

// Set default language on page load
document.addEventListener("DOMContentLoaded", function() {
    changeLanguage('fr');
});
