document.addEventListener('DOMContentLoaded', () => {
    const langEnBtn = document.getElementById('lang-en');
    const langJpBtn = document.getElementById('lang-jp');
    const downloadPdfBtn = document.getElementById('download-pdf');

    const content = {
        en: {
            name: 'Bumbu Shoji',
            currentAffiliation: 'The University of Tokyo, Graduate School of Medicine, Department of Medical Informatics',
            hobbies: 'Dance, Vibe Coding',
            email: 'bumbu.shoji@gmail.com',
            linkedin: 'https://www.linkedin.com/in/bumbuboon',
            github: 'https://github.com/bumbuboon',
            summaryTitle: 'Mission',
            summaryText: 'To create a society where everyone can live a healthy life, both physically and mentally, while balancing scientific curiosity and social contribution.',
            selfIntroTitle: 'Self-Introduction',
            selfIntroText: 'I am currently aiming to start a business within this fiscal year and am exploring various ideas. I believe that the ability to launch my own business is indispensable for realizing my mission of \'balancing curiosity and social contribution.\'<br><br>At the university, while studying a wide range of public health fields, I am exploring ways to contribute to improving people\'s health and well-being using AI.<br><br>In terms of research, I am deeply interested in technologies that simulate human behavior using large language models (LLMs) and AI, and I see great potential in the intersection of technology and society. I hope to further enhance my ability to conduct autonomous research by advancing to a doctoral program.',
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
            researchContent: `Bachelor's thesis: 'Simulation of behavioral trends during the COVID-19 pandemic using large-scale language models.' I tested whether LLM can reproduce the results of social surveys. Specifically, I used data from a questionnaire on 'preventive behaviors for COVID-19' conducted for Japanese people, and evaluated the answers created by LLM by comparing them with the actual survey answers.<br><br>Currently, I am also interested in Multi-Agent Simulation in public health using AI.`,
            languagesTitle: 'Languages',
            languages: 'Japanese: Native<br>English: Business level'
        },
        jp: {
            name: '庄司文武',
            currentAffiliation: '東京大学医学系研究科 医療情報学教室',
            hobbies: 'ダンス、バイブコーディング',
            email: 'bumbu.shoji@gmail.com',
            linkedin: 'https://www.linkedin.com/in/bumbuboon',
            github: 'https://github.com/bumbuboon',
            summaryTitle: 'Mission',
            summaryText: '好奇心と社会貢献を両立させながら、すべての人が心身ともに健やかに生活できる社会を創る',
            selfIntroTitle: '自己紹介',
            selfIntroText: `今年度中の起業を目指しており、現在様々なアイディアを検証中です。自ら事業を立ち上げる力は、自分のMissionである「好奇心と社会貢献を両立すること」を実現する上で不可欠だと考えています。
            <br><br>大学では公衆衛生の幅広い分野を学びながら、AIを活用して人々の健康やウェルビーイング向上に貢献する方法を模索しています。
            <br><br>また、研究面では、人間の行動を大規模言語モデル（LLM）やAIを使ってシミュレーションする技術に強い関心を持っており、テクノロジーと社会が交わる領域に大きな可能性を感じています。博士課程への進学を通じ、自律的に研究を進める能力をさらに高めていきたいと思っています。`,
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
            researchContent: `学士卒業研究「大規模言語モデルを活用したコロナ禍における行動傾向のシミュレーション」<br>LLMを使って「社会調査の結果」を再現できるかどうかを試しました。具体的には、日本人を対象に行われた「COVID‑19の予防行動」に関するアンケートのデータを用い、LLMが作る回答と実際の調査回答を比べて評価しました。<br><br>現在は、AIを用いた公衆衛生上のMultiAgentSimulationに興味があります。`,
            languagesTitle: '言語',
            languages: '日本語: 母語<br>英語: ビジネスレベル'
        }
    };


    function updateContent(lang) {
        document.documentElement.lang = lang;
        const data = content[lang];
        document.getElementById('name').textContent = data.name;
        document.getElementById('current-affiliation').textContent = data.currentAffiliation;
        document.getElementById('hobbies').textContent = data.hobbies;
        document.getElementById('email').textContent = data.email;
        document.getElementById('linkedin').textContent = data.linkedin;
        document.getElementById('github').textContent = data.github;
        document.getElementById('summary-title').textContent = data.summaryTitle;
        document.getElementById('summary-text').textContent = data.summaryText;

        document.getElementById('self-intro-title').textContent = data.selfIntroTitle;
        document.getElementById('self-intro-text').innerHTML = data.selfIntroText;

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
