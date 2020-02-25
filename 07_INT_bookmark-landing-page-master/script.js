const element = document.querySelector('.tab_ul');
const tab_content = document.querySelectorAll('.tab_content');
const elems = document.getElementsByClassName('tab_link');
const accordions = document.getElementsByClassName('faq-question');
const contactBtn = document.getElementById('contactBtn');
const email = document.getElementById('email');
const span = document.getElementById('span');
const message = document.getElementById('err_message');
const hhr = document.querySelector(".hhr");

const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");

element.addEventListener('click', onTabClick, false);

window.onload = (function () {
    if (elems.length) {
        // add 'active' classs to the first element in the array
        elems[0].classList.add('feature_active');
        tab_content[0].classList.add('tab_active');
    }
})();

function onTabClick(event) {

    let activeTabs = document.querySelectorAll('.feature_active');
    activeTabs.forEach(tab => tab.className = tab.className.replace('feature_active', ''));

    event.target.className += " feature_active";

    tab_content.forEach(tab => tab.className = tab.className.replace(' tab_active', ''));
    document.querySelector("." + event.target.href.split("#")[1]).className += " tab_active";


    if (tab1.classList[2] == 'tab_active') {
        hhr.style.left = "-470px";
        hhr.style.width = "25%";
    } else if (tab2.classList[2] == 'tab_active') {
        hhr.style.left = "50px";
        hhr.style.width = "23%";
    } else if (tab3.classList[2] == 'tab_active') {
        hhr.style.left = "520px";
        hhr.style.width = "20%";
    }
}

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', onAccordionClick);
}

function onAccordionClick(e) {
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.classList.add('is-closed');
        this.classList.remove('is-open');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        this.classList.add('is-open');
        this.classList.remove('is-closed');
    }
}



contactBtn.addEventListener('click', verifyEmail);
email.addEventListener('focus', cancelErr);

function verifyEmail(e) {
    const data = email.value.toLowerCase();
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    if (!regex.test(data)) {
        span.className = 'error';
        message.style.display = 'inline-block';
        email.style.borderColor = 'hsl(0, 94%, 66%)'

    } else {
        email.value = null;
        alert("Thank You!");
    }
}

function cancelErr() {
    if (span.classList = 'error') {
        span.classList.remove('error');
        message.style.display = 'none';
        email.style.borderColor = '#fff';
    }
}