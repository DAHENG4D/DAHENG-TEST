// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Existing code for smooth scrolling and mobile navigation toggle (KEEP THIS) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            const navbarLinks = document.querySelector('.nav-links');
            const hamburgerMenu = document.getElementById('hamburger-menu');
            if (navbarLinks && navbarLinks.classList.contains('active')) {
                navbarLinks.classList.remove('active');
                if (hamburgerMenu) hamburgerMenu.classList.remove('active');
            }
        });
    });

    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbarLinks = document.querySelector('.nav-links');
    if (hamburgerMenu && navbarLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }

    // --- NEW FUNCTION TO CLEAR NUMBERS AND SET A PLACEHOLDER ---
    function resetNumbersToPlaceholder() {
        const allNumberCells = document.querySelectorAll(
            '.prize-number, .results-table.special-table tbody td, .results-table.consolation-table tbody td'
        );
        allNumberCells.forEach(cell => {
            cell.textContent = "-";
        });
    }

    // --- NEW FUNCTION FOR THE SLOW REVEAL EFFECT ---
    function slowReveal(elements, values, delay) {
        let i = 0;
        function revealNext() {
            if (i < elements.length) {
                elements[i].textContent = values[i];
                i++;
                setTimeout(revealNext, delay);
            }
        }
        revealNext();
    }

    // --- YOUR CUSTOM FUNCTION FOR UPDATING DRAW NUMBERS ---
    function updateDrawNumbers() {
        console.log("Updating draw numbers with YOUR GENERATED RESULTS!");

        // Example: Replace these lines with your actual logic
        const newFirstPrize = "1234";
        const newSecondPrize = "5678";
        const newThirdPrize = "9012";
        const newSpecialResults = ["1111", "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999", "0000"];
        const newConsolationResults = ["1010", "2020", "3030", "4040", "5050", "6060", "7070", "8080", "9090", "0101"];
        const newJackpot1 = "RM 7,500,000.00";
        const newJackpot2 = "RM 250,000.00";
        const newDrawDate = "Thu 07-08-2025";
        const newDrawNo = "No.5951/25";

        // Step 1: Update metadata instantly
        document.querySelector('.jackpot-item:nth-child(1) .jackpot-amount').textContent = newJackpot1;
        document.querySelector('.jackpot-item:nth-child(2) .jackpot-amount').textContent = newJackpot2;
        document.querySelector('.draw-date').textContent = newDrawDate;
        document.querySelector('.draw-no').textContent = newDrawNo;
        document.querySelector('.results-main-section .section-description').textContent = `Here are the latest official results for ${newDrawDate} (Draw ${newDrawNo}).`;

        // Step 2: Clear all number fields to placeholder just before the reveal
        resetNumbersToPlaceholder();

        // Step 3: Gather all the elements in the desired reveal order
        const allNumberElements = [
            document.querySelector('.prize-section.top-prizes .prize-row:nth-child(1) .prize-number'),
            document.querySelector('.prize-section.top-prizes .prize-row:nth-child(2) .prize-number'),
            document.querySelector('.prize-section.top-prizes .prize-row:nth-child(3) .prize-number'),
            ...document.querySelectorAll('.results-table.special-table tbody td'),
            ...document.querySelectorAll('.results-table.consolation-table tbody td')
        ];

        // Step 4: Combine the new values into one array in the same order
        const allNewValues = [
            newFirstPrize,
            newSecondPrize,
            newThirdPrize,
            ...newSpecialResults,
            ...newConsolationResults
        ];

        // Step 5: Start the slow reveal with a 5-second delay between each number
        const revealDelay = 5000; // 5000 milliseconds = 5 seconds
        slowReveal(allNumberElements, allNewValues, revealDelay);

        console.log("Draw numbers update process started!");
    }

    // --- Scheduling the Next Result ---
    function scheduleNextResult(hour, minute, second) {
        const now = new Date();
        const updateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, second);

        if (updateTime.getTime() < now.getTime()) {
            updateTime.setDate(updateTime.getDate() + 1);
        }

        const timeToWait = updateTime.getTime() - now.getTime();
        console.log(`Next result update scheduled for: ${updateTime.toLocaleString()} (in ${timeToWait / 1000} seconds)`);

        setTimeout(() => {
            updateDrawNumbers();
            scheduleNextResult(hour, minute, second);
        }, timeToWait);
    }

    // --- NEW: TRANSLATION DICTIONARIES ---
    const translations = {
        en: {
            pageTitle: "DAHENG 4D - Best Lottery Best Prize !",
            brandName: "DAHENG 4D",
            navHome: "Home",
            navResults: "Results",
            navHowToPlay: "How to Play",
            navPrize: "Prize",
            navAbout: "About Us",
            navContact: "Contact",
            heroHeading: "Dream Big, Win Big!",
            heroSubheading: "Check the latest DA-HENG 4D results and play your lucky numbers today.",
            heroHowToPlay: "How to Play",
            heroLatestResults: "Latest Results",
            resultsHeading: "Official DAHENG 4D Results",
            resultsDescription: "Here are the latest official results for Thu 18-09-2025 ",
            prizeLabel1: "1st Prize",
            prizeLabel2: "2nd Prize",
            prizeLabel3: "3rd Prize",
            tableSpecial: "Special",
            tableConsolation: "Consolation",
            jackpotLabel1: "4D jackpot 1",
            jackpotLabel2: "4D jackpot 2",
            viewPastResults: "View Past Results",
            nextDrawCountdown: "Next Draw Countdown",
            howToPlayHeading: "How to Play Daheng 4D",
            step1Heading: "1. Choose Your Numbers",
            step1Description: "Select any 4-digit number from 0000 to 9999. You can also choose 'Lucky Pick' for a randomly generated number.",
            step2Heading: "2. Select Your Bet Type",
            step2Description: "Choose 'Big' (permissible, ordinary, or sum) or 'Small' (permissible only) according to your preference.",
            step3Heading: "3. Place Your Bet",
            step3Description: "Decide on your bet amount for each chosen number and bet type. Minimum bet is RM 1.",
            step4Heading: "4. Check Results",
            step4Description: "Draws are held three times a week. Check back here for the latest results and see if you've won!",
            learnMore: "Learn More",
            newsHeading: "Latest News & Announcements",
            newsItem1Heading: "Exciting New Game Coming Soon!",
            newsItem1Date: "August 5, 2025",
            newsItem1Description: "Stay tuned for an announcement about a brand new lottery game with even bigger jackpots!",
            newsItem2Heading: "Daheng Community Outreach Program",
            newsItem2Date: "July 28, 2025",
            newsItem2Description: "We're proud to support local communities through our latest CSR initiatives. Find out more.",
            readMore: "Read More",
            viewAllNews: "View All News",
            aboutHeading: "About Daheng 4D",
            aboutParagraph1: "Da-Heng 4D is one of the leading lottery operators, committed to providing fair and transparent games. We are dedicated to responsible gaming and contribute significantly to social welfare through our charitable initiatives. Since our inception, we have been a part of millions of dreams and winners' stories.",
            aboutParagraph2: "Our commitment extends beyond just lottery games; we strive to make a positive impact on society, supporting various community projects and welfare organizations.",
            ourStory: "Our Story",
            brandNameFooter: "DAHENG 4D",
            footerTagline: "Dream Big, Win Bigger!",
            footerQuickLinks: "Quick Links",
            navHomeFooter: "Home",
            navResultsFooter: "Latest Results",
            navHowToPlayFooter: "How to Play",
            navNewsFooter: "News & Events",
            footerSupport: "Support",
            supportFAQ: "FAQ",
            supportContact: "Contact Us",
            supportGaming: "Responsible Gaming",
            supportPrivacy: "Privacy Policy",
            footerContactUs: "Contact Us",
            contactAddress: "Lottery Lane, Kuala Lumpur, Malaysia",
            contactEmail: "info@daheng4d.my",
            copyright: "© 2025 Daheng 4D. All Rights Reserved. For 18+ only. Play Responsibly.",
            disclaimer: "Disclaimer: This is a fictional website for demonstration purposes. Actual lottery results and information may vary."
        },
        ms: {
            pageTitle: "DAHENG 4D - Loteri Terbaik, Hadiah Terhebat!",
            brandName: "DAHENG 4D",
            navHome: "Laman Utama",
            navResults: "Keputusan",
            navHowToPlay: "Cara Bermain",
            navPrize: "Hadiah",
            navAbout: "Tentang Kami",
            navContact: "Hubungi Kami",
            heroHeading: "Impian Besar, Menang Besar!",
            heroSubheading: "Semak keputusan 4D DA-HENG terkini dan main nombor bertuah anda hari ini.",
            heroHowToPlay: "Cara Bermain",
            heroLatestResults: "Keputusan Terkini",
            resultsHeading: "Keputusan Rasmi DAHENG 4D",
            resultsDescription: "Berikut adalah keputusan rasmi terkini untuk Khamis 18-09-2025",
            prizeLabel1: "Hadiah Pertama",
            prizeLabel2: "Hadiah Kedua",
            prizeLabel3: "Hadiah Ketiga",
            tableSpecial: "Khas",
            tableConsolation: "Saguh hati",
            jackpotLabel1: "Jackpot 4D 1",
            jackpotLabel2: "Jackpot 4D 2",
            viewPastResults: "Lihat Keputusan Lalu",
            nextDrawCountdown: "Kiraan Detik Cabutan Seterusnya",
            howToPlayHeading: "Cara Bermain Daheng 4D",
            step1Heading: "1. Pilih Nombor Anda",
            step1Description: "Pilih mana-mana nombor 4 digit dari 0000 hingga 9999. Anda juga boleh memilih 'Pilihan Bertuah' untuk nombor yang dijana secara rawak.",
            step2Heading: "2. Pilih Jenis Pertaruhan Anda",
            step2Description: "Pilih 'Besar' (dibenarkan, biasa, atau jumlah) atau 'Kecil' (dibenarkan sahaja) mengikut pilihan anda.",
            step3Heading: "3. Letakkan Pertaruhan Anda",
            step3Description: "Tentukan jumlah pertaruhan anda untuk setiap nombor dan jenis pertaruhan yang dipilih. Pertaruhan minimum ialah RM 1.",
            step4Heading: "4. Semak Keputusan",
            step4Description: "Cabutan diadakan tiga kali seminggu. Semak semula di sini untuk keputusan terkini dan lihat jika anda telah menang!",
            learnMore: "Ketahui Lebih Lanjut",
            newsHeading: "Berita & Pengumuman Terkini",
            newsItem1Heading: "Permainan Baharu yang Menarik Akan Datang!",
            newsItem1Date: "5 Ogos 2025",
            newsItem1Description: "Nantikan pengumuman tentang permainan loteri baharu dengan jackpot yang lebih besar!",
            newsItem2Heading: "Program Jangkauan Komuniti Daheng",
            newsItem2Date: "28 Julai 2025",
            newsItem2Description: "Kami bangga menyokong komuniti tempatan melalui inisiatif CSR terbaru kami. Ketahui lebih lanjut.",
            readMore: "Baca Lebih Lanjut",
            viewAllNews: "Lihat Semua Berita",
            aboutHeading: "Mengenai Daheng 4D",
            aboutParagraph1: "Da-Heng 4D adalah salah satu pengendali loteri terkemuka, komited untuk menyediakan permainan yang adil dan telus. Kami berdedikasi untuk permainan yang bertanggungjawab dan menyumbang secara signifikan kepada kebajikan sosial melalui inisiatif amal kami. Sejak penubuhan kami, kami telah menjadi sebahagian daripada jutaan impian dan kisah pemenang.",
            aboutParagraph2: "Komitmen kami melangkaui sekadar permainan loteri; kami berusaha untuk membuat impak positif kepada masyarakat, menyokong pelbagai projek komuniti dan organisasi kebajikan.",
            ourStory: "Kisah Kami",
            brandNameFooter: "DAHENG 4D",
            footerTagline: "Impian Besar, Menang Lebih Besar!",
            footerQuickLinks: "Pautan Pantas",
            navHomeFooter: "Laman Utama",
            navResultsFooter: "Keputusan Terkini",
            navHowToPlayFooter: "Cara Bermain",
            navNewsFooter: "Berita & Acara",
            footerSupport: "Sokongan",
            supportFAQ: "Soalan Lazim",
            supportContact: "Hubungi Kami",
            supportGaming: "Permainan Bertanggungjawab",
            supportPrivacy: "Dasar Privasi",
            footerContactUs: "Hubungi Kami",
            contactAddress: "Lottery Lane, Kuala Lumpur, Malaysia",
            contactEmail: "info@daheng4d.my",
            copyright: "© 2025 Daheng 4D. Semua Hak Cipta Terpelihara. Untuk 18+ sahaja. Main dengan Bertanggungjawab.",
            disclaimer: "Penafian: Ini adalah laman web fiksyen untuk tujuan demonstrasi. Keputusan loteri sebenar dan maklumat mungkin berbeza."
        },
        zh: {
            pageTitle: "DAHENG 4D - 最好的彩票，最棒的奖品！",
            brandName: "DAHENG 4D",
            navHome: "主页",
            navResults: "开彩成绩",
            navHowToPlay: "如何玩",
            navPrize: "奖金",
            navAbout: "关于我们",
            navContact: "联系我们",
            heroHeading: "梦想越大，中奖越大！",
            heroSubheading: "查询最新的DA-HENG 4D开彩成绩，今天就玩你的幸运号码吧。",
            heroHowToPlay: "如何玩",
            heroLatestResults: "最新开彩",
            resultsHeading: "DAHENG 4D官方开彩成绩",
            resultsDescription: "以下是2025年9月18日星期四 的最新官方开彩成绩。",
            prizeLabel1: "头奖",
            prizeLabel2: "二奖",
            prizeLabel3: "三奖",
            tableSpecial: "特别奖",
            tableConsolation: "安慰奖",
            jackpotLabel1: "4D积宝 1",
            jackpotLabel2: "4D积宝 2",
            viewPastResults: "查看过往成绩",
            nextDrawCountdown: "下一次开彩倒计时",
            howToPlayHeading: "如何玩Daheng 4D",
            step1Heading: "1. 选择你的号码",
            step1Description: "选择任何一个0000到9999之间的4位数号码。您也可以选择'幸运选号'来随机生成号码。",
            step2Heading: "2. 选择你的下注类型",
            step2Description: "根据您的喜好选择“大”（可互换、普通或总和）或“小”（仅限可互换）。",
            step3Heading: "3. 下注",
            step3Description: "决定您为每个选定号码和下注类型下注的金额。最低下注金额为RM 1。",
            step4Heading: "4. 查看成绩",
            step4Description: "每周举行三次开彩。请回到这里查看最新成绩，看看您是否中奖！",
            learnMore: "了解更多",
            newsHeading: "最新消息与公告",
            newsItem1Heading: "激动人心的新游戏即将推出！",
            newsItem1Date: "2025年8月5日",
            newsItem1Description: "敬请期待关于一款全新彩票游戏的公告，奖金将更加丰厚！",
            newsItem2Heading: "大恒社区外展计划",
            newsItem2Date: "2025年7月28日",
            newsItem2Description: "我们很自豪通过最新的企业社会责任（CSR）举措来支持当地社区。了解更多信息。",
            readMore: "阅读更多",
            viewAllNews: "查看所有新闻",
            aboutHeading: "关于Daheng 4D",
            aboutParagraph1: "Da-Heng 4D是领先的彩票运营商之一，致力于提供公平透明的游戏。我们致力于负责任的博彩，并通过我们的慈善活动为社会福利做出重大贡献。自成立以来，我们一直是数百万个梦想和中奖故事的一部分。",
            aboutParagraph2: "我们的承诺不仅仅局限于彩票游戏；我们努力对社会产生积极影响，支持各种社区项目和福利组织。",
            ourStory: "我们的故事",
            brandNameFooter: "DAHENG 4D",
            footerTagline: "梦想越大，中奖越大！",
            footerQuickLinks: "快速链接",
            navHomeFooter: "主页",
            navResultsFooter: "最新开彩",
            navHowToPlayFooter: "如何玩",
            navNewsFooter: "新闻与活动",
            footerSupport: "支持",
            supportFAQ: "常见问题",
            supportContact: "联系我们",
            supportGaming: "负责任博彩",
            supportPrivacy: "隐私政策",
            footerContactUs: "联系我们",
            contactAddress: "彩票巷，吉隆坡，马来西亚",
            contactEmail: "info@daheng4d.my",
            copyright: "© 2025 Daheng 4D。版权所有。仅限18岁以上。负责任博彩。",
            disclaimer: "免责声明：这是一个用于演示目的的虚构网站。实际的彩票结果和信息可能会有所不同。"
        }
    };

    // --- NEW: FUNCTION TO UPDATE TEXT BASED ON LANGUAGE ---
    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Handle special cases that aren't simple textContent updates
        document.title = translations[lang].pageTitle;

        // Special case for results description which includes variables
        const currentDrawDate = document.querySelector('.draw-date').textContent;
        const currentDrawNo = document.querySelector('.draw-no').textContent;
        if (lang === 'en') {
            document.querySelector('.results-main-section .section-description').textContent = `Here are the latest official results for ${currentDrawDate}.`;
        } else if (lang === 'ms') {
            document.querySelector('.results-main-section .section-description').textContent = `Berikut adalah keputusan rasmi terkini untuk ${currentDrawDate}.`;
        } else if (lang === 'zh') {
            document.querySelector('.results-main-section .section-description').textContent = `以下是${currentDrawDate} 的最新官方开彩成绩。`;
        }
    }

    // --- NEW: LANGUAGE SWITCHER EVENT LISTENER ---
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', (event) => {
            setLanguage(event.target.value);
        });
    }

    // --- INITIALIZE THE PAGE WITH THE DEFAULT LANGUAGE (English) ---
    // Get the preferred language from local storage, or default to English
    const userPreferredLang = localStorage.getItem('lang') || 'en';
    setLanguage(userPreferredLang);
    if (langSelect) {
        langSelect.value = userPreferredLang;
    }

    // --- CALL THIS FUNCTION TO SCHEDULE YOUR NEXT DRAW ---
    scheduleNextResult(21, 0, 0); // 9 PM
});
