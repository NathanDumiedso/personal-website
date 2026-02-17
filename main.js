document.addEventListener('DOMContentLoaded', () => {
    fetch('content.json')
        .then(res => res.json())
        .then(data => {
            renderHeader(data.header);
            renderNav(data.nav);
            renderAbout(data.about);
            renderExperience(data.experience);
            renderExperiences(data.experiences);
            renderExperiencesMap();
            renderSkills(data.skills);
            renderAchievements(data.achievements);
            renderLanguages(data.languages);
            renderLearning(data.learning);
            renderGifts(data.gifts);
            renderContact(data.contact);
            renderFooter(data.footer);
            initScrollAnimations();
            initNavToggle();
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

function renderExperiences(experiences) {
    const section = document.getElementById('experiences');
    section.querySelector('h2').innerHTML = `<i class="${experiences.icon}"></i> ${experiences.heading}`;
    const grid = section.querySelector('.achievements-grid');
    grid.innerHTML = experiences.cards.map(card =>
        `<div class="achievement-card">
            <div class="achievement-icon"><i class="${card.icon}"></i></div>
            <h3>${card.title}</h3>
            <ul>${card.items.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>`
    ).join('');
}

function renderExperiencesMap() {
    const container = document.getElementById('experiences-map');
    const width = 700;
    const height = 380;

    const highlightedIds = new Set(['250', '643', '840', '124', '203']);
    const highlightColor = '#0984e3';

    const svg = d3.select(container)
        .append('svg')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');

    const projection = d3.geoNaturalEarth1()
        .scale(130)
        .translate([width / 2, height / 2 + 10]);

    const path = d3.geoPath().projection(projection);

    d3.json('https://unpkg.com/world-atlas@2/countries-110m.json').then(world => {
        const countries = topojson.feature(world, world.objects.countries);

        svg.selectAll('path')
            .data(countries.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', d => highlightedIds.has(d.id) ? highlightColor : '#dfe6e9')
            .attr('stroke', '#b2bec3')
            .attr('stroke-width', 0.4);

        const legend = svg.append('g')
            .attr('transform', `translate(${width - 310}, ${height - 30})`);

        legend.append('rect')
            .attr('width', 14)
            .attr('height', 14)
            .attr('rx', 2)
            .attr('fill', highlightColor);

        legend.append('text')
            .attr('x', 20)
            .attr('y', 11)
            .attr('font-size', '11px')
            .attr('fill', '#2d3436')
            .text('Country where I worked or studied > 6 months');
    });
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

function renderGifts(gifts) {
    const section = document.getElementById('gifts');
    section.querySelector('h2').innerHTML = `<i class="${gifts.icon}"></i> ${gifts.heading}`;
    const grid = section.querySelector('.gifts-grid');
    grid.innerHTML = gifts.items.map(item => {
        if (item.url) {
            return `<a class="gift-link" href="${item.url}" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                <span>${item.label}</span>
            </a>`;
        }
        return `<a class="gift-link" href="${item.file}" download>
            <i class="fa-solid fa-download"></i>
            <span>${item.label}</span>
        </a>`;
    }).join('');
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

function initNavToggle() {
    document.getElementById('nav-list').addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        e.preventDefault();

        const href = link.getAttribute('href');
        const sections = document.querySelectorAll('main > section');

        if (href === '#about') {
            sections.forEach(s => s.classList.remove('section-hidden'));
        } else {
            sections.forEach(s => s.classList.add('section-hidden'));
            const target = document.querySelector(href);
            if (target) {
                target.classList.remove('section-hidden');
            }
        }

        const scrollTarget = document.querySelector(href);
        if (scrollTarget) {
            scrollTarget.scrollIntoView({ behavior: 'smooth' });
        }
    });
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
