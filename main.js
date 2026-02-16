document.addEventListener('DOMContentLoaded', () => {
    fetch('content.json')
        .then(res => res.json())
        .then(data => {
            renderHeader(data.header);
            renderNav(data.nav);
            renderAbout(data.about);
            renderExperience(data.experience);
            renderSkills(data.skills);
            renderAchievements(data.achievements);
            renderLanguages(data.languages);
            renderLearning(data.learning);
            renderContact(data.contact);
            renderFooter(data.footer);
            initScrollAnimations();
        });
});

function renderHeader(header) {
    document.getElementById('header-name').textContent = header.name;
    document.getElementById('header-title').textContent = header.title;
    document.getElementById('header-subtitle').textContent = header.subtitle;
    document.getElementById('header-location').textContent = ' ' + header.location;
}

function renderNav(nav) {
    const ul = document.getElementById('nav-list');
    ul.innerHTML = nav.map(link =>
        `<li><a href="${link.href}">${link.label}</a></li>`
    ).join('');
}

function renderAbout(about) {
    const section = document.getElementById('about');
    section.querySelector('h2').innerHTML = `<i class="${about.icon}"></i> ${about.heading}`;
    section.querySelector('p').textContent = about.text;
}

function renderExperience(experience) {
    const section = document.getElementById('experience');
    section.querySelector('h2').innerHTML = `<i class="${experience.icon}"></i> ${experience.heading}`;
    section.querySelector('h3').textContent = experience.role.title;
    section.querySelector('.company').textContent = experience.role.company;
    section.querySelector('.period').textContent = experience.role.period;
}

function renderSkills(skills) {
    const section = document.getElementById('skills');
    section.querySelector('h2').innerHTML = `<i class="${skills.icon}"></i> ${skills.heading}`;
    const grid = section.querySelector('.skills-grid');
    grid.innerHTML = skills.items.map(skill =>
        `<div class="skill-tag">${skill}</div>`
    ).join('');
}

function renderAchievements(achievements) {
    const section = document.getElementById('achievements');
    section.querySelector('h2').innerHTML = `<i class="${achievements.icon}"></i> ${achievements.heading}`;
    const grid = section.querySelector('.achievements-grid');
    grid.innerHTML = achievements.cards.map(card =>
        `<div class="achievement-card">
            <div class="achievement-icon"><i class="${card.icon}"></i></div>
            <h3>${card.title}</h3>
            <ul>${card.items.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>`
    ).join('');
}

function renderLanguages(languages) {
    const section = document.getElementById('languages');
    section.querySelector('h2').innerHTML = `<i class="${languages.icon}"></i> ${languages.heading}`;
    const list = section.querySelector('.languages-list');
    list.innerHTML = languages.items.map(lang =>
        `<li>
            <span class="lang-name">${lang.name}</span>
            <span class="lang-level ${lang.levelClass}">${lang.level}</span>
        </li>`
    ).join('');
}

function renderLearning(learning) {
    const section = document.getElementById('learning');
    section.querySelector('h2').innerHTML = `<i class="${learning.icon}"></i> ${learning.heading}`;
    const grid = section.querySelector('.learning-grid');
    grid.innerHTML = learning.items.map(item =>
        `<div class="learning-card">
            <i class="${item.icon}"></i>
            <span>${item.label}</span>
        </div>`
    ).join('');
}

function renderContact(contact) {
    const section = document.getElementById('contact');
    section.querySelector('h2').innerHTML = `<i class="${contact.icon}"></i> ${contact.heading}`;
    const list = section.querySelector('.contact-list');
    list.innerHTML = contact.items.map(item => {
        const attrs = item.external ? ' target="_blank" rel="noopener"' : '';
        return `<li><i class="${item.icon}"></i> <a href="${item.href}"${attrs}>${item.label}</a></li>`;
    }).join('');
}

function renderFooter(footer) {
    document.getElementById('footer-text').textContent = footer.text;
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
