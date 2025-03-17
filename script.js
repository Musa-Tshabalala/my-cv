document.addEventListener('DOMContentLoaded', () => {

    const traits = [
        {
            id: 'Career Objectives',
            details: [
                'Contribute to organizational success through teamwork, professionalism, and ethical business practices.'
            ]
        },
        {
            id: 'Personal Traits',
            details: [
                'Highly disciplined and consistent.',
                'Self-confident and adaptable.',
                'Results-driven with a strong learning mindset.',
                'Effective interpersonal and teamwork skills.'
            ]
        },
        {
            id: 'Skills',
            details: [
                { category: 'General', items: ['Financial Accounting', 'On-field Sales', 'Numerical Analysis'] },
                { category: 'Frontend', items: ['HTML & CSS', 'JavaScript (ES6+)', 'Bootstrap, jQuery, React, D3, Redux', 'API Integration'] },
                { category: 'Backend', items: ['Express.js', 'Database Schema Design', 'Testing (Chai, Mocha)', 'Node.js', 'Bash Scripting', 'Git & CLI'] },
                { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB (Mongoose)'] }
            ]
        },
    ];

    const schoolsArray = ['Northriding Secondary School', 'DAMELIN College', 'University of Johannesburg'];

    const work = [
        {
            store: 'Rochester',
            tel: '010 133 0470',
            address: 'Ferndale'
        },
        {
            store: 'GAME4U',
            tel: '068 109 9765',
            address: 'Fourways Mall'
        }
    ];

    const certification = [
        {
            id: 0,
            alt: 'Web-design Certificate',
            image: 'certificates/responsive-web-design.jpeg',
            url: 'https://www.freecodecamp.org/certification/Musa_Tshabalala/responsive-web-design'
        },
        {
            id: 1,
            alt: 'JavaScript Certificate',
            image: 'certificates/Javascript.jpeg',
            url: 'https://www.freecodecamp.org/certification/Musa_Tshabalala/javascript-algorithms-and-data-structures-v8'
        },
        {
            id: 2,
            alt: 'FrontEnd Certificate',
            image: 'certificates/FrontEnd.jpeg',
            url: 'https://www.freecodecamp.org/certification/Musa_Tshabalala/front-end-development-libraries'
        },
        {
            id: 3,
            alt: 'Data Vizualization',
            image: 'certificates/Data-Visualization.jpeg',
            url: 'https://www.freecodecamp.org/certification/Musa_Tshabalala/data-visualization'
        },
        {
            id: 4,
            alt: 'Relational Databases',
            image: 'certificates/Relational-Database.jpeg',
            url: 'https://www.freecodecamp.org/certification/Musa_Tshabalala/relational-database-v8'
        },
        {
            id: 5,
            alt: 'Backend and Api\'s',
            image: 'certificates/Backend.jpeg',
            url: 'https://www.freecodecamp.org/certification/Musa_Tshabalala/back-end-development-and-apis'
        }
    ];

    const myProjects = [
        {
            title: 'Markdown Previewer',
            url: 'https://musa-tshabalala.github.io/markdown-previewer/'
        },
        {
            title: 'Basic Drum Machine',
            url: 'https://musa-tshabalala.github.io/my-drum-machine/'
        },
        {
            title: 'JavaScript Calculator',
            url: 'https://musa-tshabalala.github.io/my-calculator/'
        },
        {
            title: 'Timer',
            url: 'https://musa-tshabalala.github.io/my-timer/'
        },
        {
            title: '(D3) GDP Bar Chart',
            url: 'https://musa-tshabalala.github.io/gdp-bar-chart/'
        },
        {
            title: '(D3) Scatter Graph',
            url: 'https://musa-tshabalala.github.io/scatter-graph/'
        },
        {
            title: '(D3) HEAT MAP',
            url: 'https://musa-tshabalala.github.io/heatmap/'
        },
        {
            title: 'Tree Map',
            url: 'https://musa-tshabalala.github.io/treemap/'
        },
        {
            title: 'Choropleth Map',
            url: 'https://musa-tshabalala.github.io/choropleth/'
        },
        
    ]

    const displayDetails = () => {
        const schools = document.getElementById('schools');
        const workXp = document.getElementById('work-experience');

        const container = document.getElementById('personal-traits');

        traits.forEach(trait => {
            const section = document.createElement('section');
            section.innerHTML = `<h2>${trait.id}</h2>`;
    
            if (Array.isArray(trait.details)) {
                const list = document.createElement('ul');
    
                trait.details.forEach(detail => {
                    if (typeof detail === 'string') {
                        // Handle simple array of strings
                        const listItem = document.createElement('li');
                        listItem.textContent = detail;
                        list.appendChild(listItem);
                    } else if (typeof detail === 'object' && detail.category) {
                        // Handle categorized skills
                        const subHeading = document.createElement('h4');
                        subHeading.textContent = detail.category;
                        section.appendChild(subHeading);
    
                        const subList = document.createElement('ul');
                        detail.items.forEach(item => {
                            const subListItem = document.createElement('li');
                            subListItem.textContent = item;
                            subList.appendChild(subListItem);
                        });
                        section.appendChild(subList);
                    }
                });
    
                section.appendChild(list);
            }
    
            container.appendChild(section);
        });

        schools.innerHTML = `
            <h4>School's Attended</h4>
            <ul>
                ${schoolsArray.map(school => `<li>${school}</li>`).join('')}
            </ul>
            <hr>
        `;
        workXp.innerHTML = `
                <h4>Work Experience</h4>
                <p>Became an Individual Contractor as an on-field Sales Agent for Rochester in Ferndale thereby acquiring Sales skills, Sales capturing skills, prospective skills, while studying for BCOM Accounting at Damelin College <strong>-2022</strong></p>
                <p>Further while attending Unviversity of Johannesburg for BCOM Accounting, I got an opportunity to work at GAME4U @fourways for yet another sales position <strong>-2023-2024</strong></p>
            `;

        workXp.innerHTML += `
            <ul>
                ${work.map(each => `<li><strong>REF: ${each.store} (${each.address}) @${each.tel}</strong></li>`).join('')}
            </ul>
        `

        workXp.innerHTML += '<hr>';
    };

    const forCode = () => {
        let index = 0;
        const certificates = document.getElementById('certificates');
        const projects = document.getElementById('projects');
    
        const updateCertificate = () => {
            const currImage = certification.find(image => image.id === index);
            
            certificates.innerHTML = `
                <button type="button" class="btn btn-default change-image" id="prev-button"><i class="fa-solid fa-arrow-left"></i></button>
                <a id="cert-images" href="${currImage.url}" target="_blank">
                    <img src="${currImage.image}" alt="${currImage.alt}" />
                </a>
                <button type="button" class="btn btn-default change-image" id="next-button"><i class="fa-solid fa-arrow-right"></i></button>
            `;
    
            document.getElementById('prev-button').addEventListener('click', prevButton);
            document.getElementById('next-button').addEventListener('click', nextButton);
        };
    
        const prevButton = () => {
            if (index === 0) return;
            index -= 1;
            updateCertificate();
        };
    
        const nextButton = () => {
            if (index >= certification.length - 1) return;
            index += 1
            updateCertificate();
        };
    
        updateCertificate();
    
        projects.innerHTML += `
            <ul id="project-lists">
                ${myProjects.map(project => {
                    return `<li>
                                <a id=project-link href="${project.url}" target="_blank">
                                    ${project.title}
                                </a>
                            </li>`
                }).join('')}
            </ul>
        `
    };
        
    displayDetails();
    forCode()
});

