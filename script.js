document.addEventListener('DOMContentLoaded', () => {
    const langEnBtn = document.getElementById('lang-en');
    const langJpBtn = document.getElementById('lang-jp');
    const downloadPdfBtn = document.getElementById('download-pdf');

    const content = {
        en: {
            name: 'Sasha Tran',
            email: 'sasha.tran@example.com',
            linkedin: 'linkedin.com/in/sashatran',
            github: 'github.com/sashatran',
            summaryTitle: 'Summary',
            summaryText: 'Experienced Full Stack Engineer with a passion for creating beautiful and functional web applications.',
            experienceTitle: 'Work Experience',
            jobTitle1: 'Full Stack Engineer',
            company1: 'ABC Company, San Francisco, CA',
            date1: 'Jan 2020 - Present',
            jobDesc1: [
                'Developed and maintained web applications using React, Node.js, and PostgreSQL.',
                'Collaborated with cross-functional teams to deliver high-quality products.',
            ],
            educationTitle: 'Education',
            degree1: 'Bachelor of Science in Computer Science',
            university1: 'University of California, Berkeley',
            educationDate1: '2016 - 2020',
            skillsTitle: 'Skills',
            skillsList: [
                'JavaScript (React, Node.js)',
                'Python (Django, Flask)',
                'HTML/CSS',
                'SQL (PostgreSQL, MySQL)',
                'Git',
            ],
        },
        jp: {
            name: 'サーシャ・トラン',
            email: 'sasha.tran@example.com',
            linkedin: 'linkedin.com/in/sashatran',
            github: 'github.com/sashatran',
            summaryTitle: '概要',
            summaryText: '美しく機能的なWebアプリケーションを作成することに情熱を注ぐ、経験豊富なフルスタックエンジニア。',
            experienceTitle: '職務経歴',
            jobTitle1: 'フルスタックエンジニア',
            company1: '株式会社ABC、サンフランシスコ、カリフォルニア州',
            date1: '2020年1月 - 現在',
            jobDesc1: [
                'React、Node.js、PostgreSQLを使用してWebアプリケーションを開発・保守。',
                '部門横断的なチームと協力して、高品質の製品を提供。',
            ],
            educationTitle: '学歴',
            degree1: 'コンピュータサイエンス理学士',
            university1: 'カリフォルニア大学バークレー校',
            educationDate1: '2016年 - 2020年',
            skillsTitle: 'スキル',
            skillsList: [
                'JavaScript (React, Node.js)',
                'Python (Django, Flask)',
                'HTML/CSS',
                'SQL (PostgreSQL, MySQL)',
                'Git',
            ],
        },
    };

    function updateContent(lang) {
        document.documentElement.lang = lang;
        const data = content[lang];
        document.getElementById('name').textContent = data.name;
        document.getElementById('email').textContent = data.email;
        document.getElementById('linkedin').textContent = data.linkedin;
        document.getElementById('github').textContent = data.github;
        document.getElementById('summary-title').textContent = data.summaryTitle;
        document.getElementById('summary-text').textContent = data.summaryText;
        document.getElementById('experience-title').textContent = data.experienceTitle;
        document.getElementById('job-title-1').textContent = data.jobTitle1;
        document.getElementById('company-1').textContent = data.company1;
        document.getElementById('date-1').textContent = data.date1;
        const jobDesc1 = document.getElementById('job-desc-1');
        jobDesc1.innerHTML = '';
        data.jobDesc1.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            jobDesc1.appendChild(li);
        });
        document.getElementById('education-title').textContent = data.educationTitle;
        document.getElementById('degree-1').textContent = data.degree1;
        document.getElementById('university-1').textContent = data.university1;
        document.getElementById('education-date-1').textContent = data.educationDate1;
        document.getElementById('skills-title').textContent = data.skillsTitle;
        const skillsList = document.getElementById('skills-list');
        skillsList.innerHTML = '';
        data.skillsList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            skillsList.appendChild(li);
        });
    }

    langEnBtn.addEventListener('click', () => {
        updateContent('en');
        langEnBtn.classList.add('active');
        langJpBtn.classList.remove('active');
    });

    langJpBtn.addEventListener('click', () => {
        updateContent('jp');
        langJpBtn.classList.add('active');
        langEnBtn.classList.remove('active');
    });

    downloadPdfBtn.addEventListener('click', () => {
        const element = document.querySelector('.container');
        const opt = {
            margin:       1,
            filename:     'Sasha_Tran_CV.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    });

    // Initial content load
    updateContent('en');
});
