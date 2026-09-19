/* =========================================================
   AI LEARNING ACADEMY
   Main JavaScript
   File: /script.js
   ========================================================= */

"use strict";


/* =========================================================
   COURSE DATA
   ========================================================= */

const COURSE_LEVELS = [

    {
        level: 0,
        title: "Digital & Computer Fundamentals",
        description: "Computer aur digital world ki foundation.",
        chapters: [
            ["Computer Basic Knowledge"],
            ["Internet & Digital Work"],
            ["AI Learning Method"]
        ]
    },

    {
        level: 1,
        title: "Artificial Intelligence Fundamentals",
        description: "Artificial Intelligence ki core foundation.",
        chapters: [
            ["AI Fundamentals"],
            ["Machine Intelligence"],
            ["AI Systems"],
            ["AI Models"],
            ["AI Applications"],
            ["AI Learning Foundation"]
        ]
    },

    {
        level: 2,
        title: "AI को पहली बार इस्तेमाल करना सीखें",
        description: "AI tools ko practically use karna.",
        chapters: [
            ["AI Tools Introduction"],
            ["AI Chat Interfaces"],
            ["AI Questions & Answers"],
            ["AI for Learning"],
            ["AI for Everyday Work"],
            ["Practical AI Usage"]
        ]
    },

    {
        level: 3,
        title: "Prompt Engineering",
        description: "AI se better aur controlled output lena.",
        chapters: [
            ["Prompt Fundamentals"],
            ["Basic Prompting"],
            ["Context & Instructions"],
            ["Prompt Engineering Frameworks"],
            ["Zero-Shot और Few-Shot Prompting"],
            ["Advanced Prompting Techniques"],
            ["AI से बेहतर Output करवाना"],
            ["Professional Prompt Engineering"],
            ["Prompt Engineering के Practical Projects"],
            ["Personal AI Master Prompt System"]
        ]
    },

    {
        level: 4,
        title: "AI से वास्तविक काम करवाना",
        description: "AI ko real-world tasks aur workflows mein use karna.",
        chapters: [
            ["AI for Real Work"],
            ["AI Content Workflow"],
            ["AI Research Workflow"],
            ["AI Productivity"],
            ["AI Data Work"],
            ["AI Business Work"],
            ["AI Workflow Projects"]
        ]
    },

    {
        level: 5,
        title: "AI Image, Video, Voice & Creative Tools",
        description: "Generative AI aur creative workflows.",
        chapters: [
            ["AI Image Fundamentals"],
            ["AI Image Generation"],
            ["AI Image Editing"],
            ["AI Video Generation"],
            ["AI Voice & Audio"],
            ["AI Creative Projects"]
        ]
    },

    {
        level: 6,
        title: "AI Automation & Productivity Systems",
        description: "AI workflows aur automation systems.",
        chapters: [
            ["Automation Fundamentals"],
            ["AI Productivity Systems"],
            ["Workflow Design"],
            ["AI Automation Projects"],
            ["Personal AI Productivity"]
        ]
    },

    {
        level: 7,
        title: "Python की शुरुआत",
        description: "AI development ke liye Python foundation.",
        chapters: [
            ["Python Fundamentals"],
            ["Python Variables & Data Types"],
            ["Python Operators"],
            ["Python Conditions"],
            ["Python Loops"],
            ["Python Functions"],
            ["Python Data Structures"],
            ["Python Modules"],
            ["Python Practical Programming"],
            ["Python Projects"]
        ]
    },

    {
        level: 8,
        title: "AI APIs और AI Application Development",
        description: "AI models ko applications se connect karna.",
        chapters: [
            ["API Fundamentals"],
            ["Python से API का उपयोग"],
            ["AI Model और AI Application"],
            ["अपना पहला AI Chatbot"],
            ["AI Application Development"],
            ["AI Application Projects"]
        ]
    },

    {
        level: 9,
        title: "AI के अंदर की Technology",
        description: "Modern AI models ke technical foundations.",
        chapters: [
            ["Data और Machine Learning की नींव"],
            ["Machine Learning Fundamentals"],
            ["Machine Learning Algorithms"],
            ["Model Training"],
            ["Model Evaluation"],
            ["AI Technology Projects"]
        ]
    },

    {
        level: 10,
        title: "Deep Learning & Neural Networks",
        description: "Neural networks aur deep learning ki foundation.",
        chapters: [
            ["Neural Networks Fundamentals"],
            ["Perceptron और Neurons"],
            ["Forward Propagation"],
            ["Backpropagation"],
            ["Activation Functions"],
            ["Loss Functions"],
            ["Deep Learning Projects"]
        ]
    },

    {
        level: 11,
        title: "Generative AI & Large Language Models",
        description: "Generative AI aur LLM ecosystem.",
        chapters: [
            ["Generative AI Fundamentals"],
            ["Language Models"],
            ["Large Language Models"],
            ["LLM Applications"],
            ["LLM Prompting"],
            ["Generative AI Projects"]
        ]
    },

    {
        level: 12,
        title: "RAG",
        description: "Retrieval-Augmented Generation systems.",
        chapters: [
            ["RAG Fundamentals"],
            ["Knowledge Base"],
            ["Embeddings और Vector Databases"],
            ["RAG Pipeline"],
            ["Advanced RAG"],
            ["RAG Projects"]
        ]
    },

    {
        level: 13,
        title: "AI Agents और Tool-Using AI",
        description: "Tools aur multi-step AI workflows.",
        chapters: [
            ["AI Agents Fundamentals"],
            ["AI Agents के Components"],
            ["Tool Calling और Function Calling"],
            ["AI Agent Workflows"],
            ["Advanced AI Agents"],
            ["AI Agent Projects"]
        ]
    },

    {
        level: 14,
        title: "Advanced AI Application Development",
        description: "Real AI-powered applications ki architecture.",
        chapters: [
            ["AI Application Architecture"],
            ["AI Application Backend"],
            ["AI Application Frontend"],
            ["AI Application Database"],
            ["AI Application Security"],
            ["Advanced AI Application Testing"],
            ["AI Application Deployment"]
        ]
    },

    {
        level: 15,
        title: "AI Security, Ethics & Responsible AI",
        description: "Safe, ethical aur responsible AI systems.",
        chapters: [
            ["AI Security Fundamentals"],
            ["AI Ethics"],
            ["Responsible AI"]
        ]
    },

    {
        level: 16,
        title: "AI Projects: Beginner to Professional",
        description: "Complete practical project journey.",
        chapters: [
            ["Beginner AI Projects"],
            ["Intermediate AI Projects"],
            ["Advanced AI Projects"],
            ["Build Your Own AI Learning Assistant"]
        ]
    },

    {
        level: 17,
        title: "AI Career, Portfolio & Freelancing",
        description: "AI skills ko career aur portfolio mein convert karna.",
        chapters: [
            ["AI Career Options"],
            ["AI Portfolio बनाना"],
            ["AI Interview Preparation"],
            ["AI Freelancing"]
        ]
    },

    {
        level: 18,
        title: "AI Learning की Advanced दिशा",
        description: "Advanced development aur AI research direction.",
        chapters: [
            ["Advanced Machine Learning"],
            ["Advanced Deep Learning"],
            ["Advanced LLM Engineering"],
            ["AI Research और Experimentation"]
        ]
    }

];


/* =========================================================
   SUPPORT RESOURCE DATA
   ========================================================= */

const SUPPORT_RESOURCES = [
    {
        title: "AI Glossary",
        file: "glossary.html"
    },
    {
        title: "Prompt Library",
        file: "prompt-library.html"
    },
    {
        title: "Practice Lab",
        file: "practice-lab.html"
    },
    {
        title: "Projects Library",
        file: "projects.html"
    },
    {
        title: "Interview Preparation",
        file: "interview.html"
    },
    {
        title: "Learning Progress",
        file: "progress.html"
    }
];


/* =========================================================
   BUILD CHAPTER INDEX
   ========================================================= */

function buildCourseIndex() {

    let chapterNumber = 1;

    const normalizedLevels = COURSE_LEVELS.map(level => {

        const chapters = level.chapters.map(chapter => {

            const item = {
                number: chapterNumber,
                title: chapter[0],
                file:
                    `chapter-${String(chapterNumber).padStart(2, "0")}.html`
            };

            chapterNumber += 1;

            return item;
        });

        return {
            ...level,
            chapters
        };
    });

    return normalizedLevels;
}


const COURSE = buildCourseIndex();


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initHeader();

    initMobileNavigation();

    initFAQ();

    initRoadmap();

    initChapterSearch();

    initRevealAnimations();

    initSmoothScrolling();

    initProgressSystem();

    initCurrentYear();

    initKeyboardShortcuts();

});


/* =========================================================
   HEADER
   ========================================================= */

function initHeader() {

    const header = document.getElementById("site-header");

    if (!header) {
        return;
    }

    const updateHeader = () => {

        if (window.scrollY > 12) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );
}


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function initMobileNavigation() {

    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("main-nav");

    if (!toggle || !nav) {
        return;
    }

    const closeNav = () => {

        nav.classList.remove("open");

        toggle.setAttribute(
            "aria-expanded",
            "false"
        );

        toggle.setAttribute(
            "aria-label",
            "Open navigation"
        );
    };

    toggle.addEventListener("click", () => {

        const isOpen =
            toggle.getAttribute("aria-expanded") === "true";

        toggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        nav.classList.toggle("open", !isOpen);

        toggle.setAttribute(
            "aria-label",
            !isOpen
                ? "Close navigation"
                : "Open navigation"
        );
    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", closeNav);

    });


    document.addEventListener("click", event => {

        if (
            nav.classList.contains("open") &&
            !nav.contains(event.target) &&
            !toggle.contains(event.target)
        ) {
            closeNav();
        }

    });


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeNav();
        }

    });

}


/* =========================================================
   FAQ
   ========================================================= */

function initFAQ() {

    const faqItems =
        document.querySelectorAll(".faq-item");

    if (!faqItems.length) {
        return;
    }

    faqItems.forEach(item => {

        const button =
            item.querySelector(".faq-question");

        if (!button) {
            return;
        }

        button.addEventListener("click", () => {

            const wasOpen =
                item.classList.contains("open");


            faqItems.forEach(otherItem => {

                if (otherItem !== item) {

                    otherItem.classList.remove("open");

                    const otherButton =
                        otherItem.querySelector(".faq-question");

                    if (otherButton) {
                        otherButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );
                    }
                }

            });


            item.classList.toggle(
                "open",
                !wasOpen
            );

            button.setAttribute(
                "aria-expanded",
                String(!wasOpen)
            );

        });

    });

}


/* =========================================================
   ROADMAP RENDER
   ========================================================= */

function initRoadmap() {

    const container =
        document.getElementById("roadmap-list");

    if (!container) {
        return;
    }

    renderRoadmap(COURSE, container);

}


function renderRoadmap(levels, container) {

    container.innerHTML = "";


    if (!levels.length) {

        container.innerHTML = `
            <div class="empty-state">
                No chapters found.
            </div>
        `;

        return;
    }


    levels.forEach((level, index) => {

        const levelElement =
            document.createElement("article");

        levelElement.className = "level-card";


        const chaptersHTML =
            level.chapters.map(chapter => {

                return `
                    <a
                        class="chapter-item"
                        href="chapters/${chapter.file}"
                        data-chapter-number="${chapter.number}"
                        data-chapter-title="${escapeAttribute(chapter.title)}"
                    >

                        <span class="chapter-number">
                            ${String(chapter.number).padStart(2, "0")}
                        </span>

                        <span class="chapter-info">

                            <strong>
                                Chapter ${chapter.number}: ${escapeHTML(chapter.title)}
                            </strong>

                            <small>
                                Open lesson →
                            </small>

                        </span>

                        <span class="chapter-arrow">
                            →
                        </span>

                    </a>
                `;

            }).join("");


        levelElement.innerHTML = `

            <div
                class="level-header"
                role="button"
                tabindex="0"
                aria-expanded="${index === 0 ? "true" : "false"}"
            >

                <span class="level-number">
                    ${String(level.level).padStart(2, "0")}
                </span>

                <span class="level-meta">

                    <span class="level-label">
                        LEVEL ${level.level}
                    </span>

                    <strong class="level-title">
                        ${escapeHTML(level.title)}
                    </strong>

                    <span class="level-description">
                        ${escapeHTML(level.description)}
                    </span>

                </span>

                <span class="level-count">
                    ${level.chapters.length} Chapters
                </span>

                <span class="level-chevron">
                    ↓
                </span>

            </div>


            <div class="chapter-list">
                ${chaptersHTML}
            </div>
        `;


        if (index === 0) {
            levelElement.classList.add("open");
        }


        const header =
            levelElement.querySelector(".level-header");


        const toggleLevel = () => {

            const open =
                levelElement.classList.toggle("open");

            header.setAttribute(
                "aria-expanded",
                String(open)
            );

        };


        header.addEventListener(
            "click",
            toggleLevel
        );


        header.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    toggleLevel();
                }

            }
        );


        container.appendChild(levelElement);

    });

}


/* =========================================================
   CHAPTER SEARCH
   ========================================================= */

function initChapterSearch() {

    const input =
        document.getElementById("chapter-search");

    const container =
        document.getElementById("roadmap-list");

    if (!input || !container) {
        return;
    }

    input.addEventListener(
        "input",
        debounce(() => {

            const query =
                input.value
                    .trim()
                    .toLowerCase();

            if (!query) {

                renderRoadmap(
                    COURSE,
                    container
                );

                return;
            }


            const filtered = COURSE
                .map(level => {

                    const levelMatches =
                        level.title
                            .toLowerCase()
                            .includes(query);


                    const chapters =
                        level.chapters.filter(chapter =>
                            chapter.title
                                .toLowerCase()
                                .includes(query)
                        );


                    if (
                        levelMatches &&
                        chapters.length === 0
                    ) {
                        return level;
                    }


                    if (
                        levelMatches ||
                        chapters.length
                    ) {

                        return {
                            ...level,
                            chapters:
                                chapters.length
                                    ? chapters
                                    : level.chapters
                        };
                    }


                    return null;

                })
                .filter(Boolean);


            renderRoadmap(
                filtered,
                container
            );


            if (filtered.length) {

                container
                    .querySelectorAll(".level-card")
                    .forEach(card =>
                        card.classList.add("open")
                    );

            }

        }, 180)
    );

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function initRevealAnimations() {

    const elements =
        document.querySelectorAll(".reveal");

    if (!elements.length) {
        return;
    }


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            element =>
                element.classList.add("visible")
        );

        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -30px 0px"
            }
        );


    elements.forEach(
        element =>
            observer.observe(element)
    );

}


/* =========================================================
   SMOOTH INTERNAL LINKS
   ========================================================= */

function initSmoothScrolling() {

    document.addEventListener(
        "click",
        event => {

            const link =
                event.target.closest(
                    'a[href^="#"]'
                );

            if (!link) {
                return;
            }


            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }


            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}


/* =========================================================
   PROGRESS SYSTEM
   ========================================================= */

const ProgressSystem = {

    storageKey:
        "ai-learning-academy-progress",

    totalChapters:
        109,


    getProgress() {

        try {

            const raw =
                localStorage.getItem(
                    this.storageKey
                );

            if (!raw) {
                return {};
            }

            const parsed =
                JSON.parse(raw);

            return (
                parsed &&
                typeof parsed === "object"
            )
                ? parsed
                : {};

        } catch {
            return {};
        }

    },


    saveProgress(progress) {

        try {

            localStorage.setItem(
                this.storageKey,
                JSON.stringify(progress)
            );

        } catch (error) {

            console.warn(
                "Progress could not be saved.",
                error
            );

        }

    },


    isCompleted(number) {

        const progress =
            this.getProgress();

        return Boolean(
            progress[String(number)]
        );

    },


    markComplete(number) {

        const progress =
            this.getProgress();

        progress[String(number)] = {
            completed: true,
            completedAt:
                new Date().toISOString()
        };

        this.saveProgress(progress);

        this.updateUI();

    },


    markIncomplete(number) {

        const progress =
            this.getProgress();

        delete progress[String(number)];

        this.saveProgress(progress);

        this.updateUI();

    },


    getCompletedCount() {

        return Object.keys(
            this.getProgress()
        ).length;

    },


    getPercentage() {

        return Math.round(
            (
                this.getCompletedCount() /
                this.totalChapters
            ) * 100
        );

    },


    updateUI() {

        const completed =
            this.getCompletedCount();

        const percentage =
            this.getPercentage();


        document
            .querySelectorAll(
                "[data-progress-percent]"
            )
            .forEach(element => {

                element.textContent =
                    `${percentage}%`;

            });


        document
            .querySelectorAll(
                "[data-progress-completed]"
            )
            .forEach(element => {

                element.textContent =
                    completed;

            });


        document
            .querySelectorAll(
                "[data-progress-bar]"
            )
            .forEach(element => {

                element.style.width =
                    `${percentage}%`;

            });


        document
            .querySelectorAll(
                ".progress-bar"
            )
            .forEach(element => {

                element.style.width =
                    `${percentage}%`;

            });

    }

};


function initProgressSystem() {

    ProgressSystem.updateUI();

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

function initCurrentYear() {

    const year =
        new Date().getFullYear();


    document
        .querySelectorAll(
            "[data-current-year]"
        )
        .forEach(element => {

            element.textContent = year;

        });

}


/* =========================================================
   KEYBOARD SHORTCUTS
   ========================================================= */

function initKeyboardShortcuts() {

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "/" &&
                !isTypingTarget(event.target)
            ) {

                const search =
                    document.getElementById(
                        "chapter-search"
                    );

                if (search) {

                    event.preventDefault();

                    search.focus();

                }

            }

        }
    );

}


/* =========================================================
   UTILITIES
   ========================================================= */

function debounce(
    callback,
    delay = 200
) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout =
            setTimeout(
                () => callback(...args),
                delay
            );

    };

}


function isTypingTarget(element) {

    if (!element) {
        return false;
    }

    const tag =
        element.tagName?.toLowerCase();

    return (
        tag === "input" ||
        tag === "textarea" ||
        tag === "select" ||
        element.isContentEditable
    );

}


function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


function escapeAttribute(value) {

    return escapeHTML(value);

}


/* =========================================================
   GLOBAL DEBUG INFO
   ========================================================= */

console.log(
    "%cAI Learning Academy",
    "font-size:18px;font-weight:800;"
);

console.log(
    `Course loaded: ${COURSE.length} levels / ${ProgressSystem.totalChapters} chapters`
);