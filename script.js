document.addEventListener('DOMContentLoaded', () => {
    const langEnBtn = document.getElementById('lang-en');
    const langJpBtn = document.getElementById('lang-jp');
    const downloadPdfBtn = document.getElementById('download-pdf');

    const content = {
        en: {
            name: 'Bumbu Shoji',
            email: 'bumbu.shoji@gmail.com',
            linkedin: 'linkedin.com/in/bumbu-shoji-31a799270/',
            github: 'github.com/bumbuboon',
            summaryTitle: 'Mission',
            summaryText: 'To create a society where everyone can live a healthy life, both physically and mentally, while balancing scientific curiosity and social contribution.',
            experienceTitle: 'Work Experience',
            jobs: [
                {
                    title: 'Contract Researcher/R&D',
                    company: 'Matsuo Lab, The University of Tokyo',
                    period: 'June 2025 - Present',
                    description: '- Development of Medical LLM<br>- Development of Database AI Agent'
                },
                {
                    title: 'Intern/R&D',
                    company: 'Karakuri Inc.',
                    period: 'July 2024 - Present',
                    description: '- Research and implementation of LLM-related papers<br>- Writing papers on computer use'
                },
                {
                    title: 'Intern/Machine Learning Engineer',
                    company: 'Zeroboard Inc.',
                    period: 'September 2023 - June 2024',
                    description: '- Improvement of a chatbot using RAG on the company website<br>- Research and implementation of LLM-related papers'
                }
            ],
            educationTitle: 'Education',
            schools: [
                {
                    degree: 'Master of Public Health, Department of Medical Informatics',
                    school: 'The University of Tokyo',
                    period: 'April 2025 - Present'
                },
                {
                    degree: 'Bachelor of Health Sciences, Department of Integrated Health Sciences',
                    school: 'The University of Tokyo',
                    period: 'April 2023 - March 2025'
                },
                {
                    degree: 'Natural Sciences I, College of Arts and Sciences',
                    school: 'The University of Tokyo',
                    period: 'April 2021 - March 2023'
                }
            ],
            researchTitle: 'Research',
            researchContent: 'Bachelor\'s thesis: \'Simulation of behavioral trends during the COVID-19 pandemic using large-scale language models.\' I tested whether LLM can reproduce the results of social surveys. Specifically, I used data from a questionnaire on \'preventive behaviors for COVID-19\' conducted for Japanese people, and evaluated the answers created by LLM by comparing them with the actual survey answers.',
            languagesTitle: 'Languages',
            languages: 'Japanese: Native<br>English: Business level'
        },
        jp: {
            name: '庄司文武',
            email: 'bumbu.shoji@gmail.com',
            linkedin: 'linkedin.com/in/bumbu-shoji-31a799270/',
            github: 'github.com/bumbuboon',
            summaryTitle: 'Mission',
            summaryText: '科学的好奇心と社会貢献を両立させながら、すべての人が心身ともに健やかに生活できる社会を創る',
            experienceTitle: '職歴',
            jobs: [
                {
                    title: '業務委託/R&D',
                    company: '東大松尾研究室',
                    period: '2025年6月〜現在',
                    description: '- 医療LLMの開発<br>- データベースAIエージェントの開発'
                },
                {
                    title: 'インターン/R&D',
                    company: '株式会社カラクリ',
                    period: '2024年7月〜現在',
                    description: '- LLMに関する論文調査および実装<br>- コンピューターユースに関する論文執筆'
                },
                {
                    title: 'インターン/機械学習エンジニア',
                    company: '株式会社ゼロボード',
                    period: '2023年9月〜2024年6月',
                    description: '- 自社サイト内でのRAGを用いたチャットボットの改善<br>- LLMに関する論文調査及び実装'
                }
            ],
            educationTitle: '学歴',
            schools: [
                {
                    degree: '東京大学医学系研究科公共健康医学専攻',
                    school: '',
                    period: '2025年4月〜現在'
                },
                {
                    degree: '東京大学医学部健康総合科学科',
                    school: '',
                    period: '2023年4月〜2025年3月'
                },
                {
                    degree: '東京大学前期教養課程理科Ⅰ類',
                    school: '',
                    period: '2021年4月 ~ 2023年3月'
                }
            ],
            researchTitle: '研究内容',
            researchContent: '学士卒業研究「大規模言語モデルを活用したコロナ禍における行動傾向のシミュレーション」<br>LLMを使って「社会調査の結果」を再現できるかどうかを試しました。具体的には、日本人を対象に行われた「COVID‑19の予防行動」に関するアンケートのデータを用い、LLMが作る回答と実際の調査回答を比べて評価しました。',
            languagesTitle: '言語',
            languages: '日本語: 母語<br>英語: ビジネスレベル'
        }
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

        // Work Experience
        document.getElementById('experience-title').textContent = data.experienceTitle;
        const experienceList = document.getElementById('experience-list');
        experienceList.innerHTML = '';
        data.jobs.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.classList.add('job');
            jobDiv.innerHTML = `
                <h3>${job.title}</h3>
                <p class="company">${job.company}</p>
                <p class="date">${job.period}</p>
                <ul>
                    <li>${job.description}</li>
                </ul>
            `;
            experienceList.appendChild(jobDiv);
        });

        // Education
        document.getElementById('education-title').textContent = data.educationTitle;
        const educationList = document.getElementById('education-list');
        educationList.innerHTML = '';
        data.schools.forEach(school => {
            const educationDiv = document.createElement('div');
            educationDiv.classList.add('education');
            educationDiv.innerHTML = `
                <h3>${school.degree}</h3>
                <p class="university">${school.school}</p>
                <p class="date">${school.period}</p>
            `;
            educationList.appendChild(educationDiv);
        });

        // Research
        document.getElementById('research-title').textContent = data.researchTitle;
        document.getElementById('research-content').innerHTML = data.researchContent;

        // Languages
        document.getElementById('languages-title').textContent = data.languagesTitle;
        document.getElementById('languages-content').innerHTML = data.languages;
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
