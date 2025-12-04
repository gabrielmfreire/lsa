document.addEventListener('DOMContentLoaded', () => {
    const chaptersContainer = document.getElementById('chapters-container');
    const chapterDetail = document.getElementById('chapter-detail');
    const detailTitle = document.getElementById('detail-title');
    const closeDetailBtn = document.getElementById('close-detail');
    const relatosList = document.getElementById('relatos-list');
    const relatosTitle = document.getElementById('relatos-title');

    // Mock Data for 16 Chapters
    const chaptersData = Array.from({ length: 16 }, (_, i) => ({
        id: i + 1,
        relatos: generateRelatos(i + 1),
        videos: {
            "relato-biblico": { title: "Vídeo do Relato Bíblico", color: "linear-gradient(45deg, #2b2b2b, #4a4a4a)" },
            argumentos: { title: "Vídeo del Argumentos", color: "linear-gradient(45deg, #1a4bd0, #0d2b80)" },
            creditos: { title: "Vídeo de los Créditos", color: "linear-gradient(45deg, #ffbf00, #b38600)" }
        }
    }));

    let activeChapterId = null;
    let activeTabId = 'relato-biblico'; // Default tab

    // Initialize Grid
    renderChaptersGrid();

    // Event Listeners
    closeDetailBtn.addEventListener('click', closeDetail);

    // Tab Logic
    const tabs = document.querySelectorAll('[role="tab"]');
    tabs.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
        tab.addEventListener('keydown', handleTabKeydown);
    });

    function renderChaptersGrid() {
        chaptersContainer.innerHTML = '';
        chaptersData.forEach(chapter => {
            const btn = document.createElement('button');
            btn.className = 'chapter-btn';
            btn.textContent = chapter.id;
            btn.setAttribute('aria-label', `Capítulo ${chapter.id}`);
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-controls', 'chapter-detail');

            if (activeChapterId === chapter.id) {
                btn.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }

            btn.addEventListener('click', () => toggleChapter(chapter.id));
            chaptersContainer.appendChild(btn);
        });
    }

    function toggleChapter(id) {
        if (activeChapterId === id) {
            // Keep open
        } else {
            activeChapterId = id;
            // Reset to default tab when opening new chapter
            activeTabId = 'relato-biblico';
            resetTabs();
            openDetail(id);
        }
        renderChaptersGrid();
    }
    let activeRelatoRange = null;

    function openDetail(id) {
        const chapter = chaptersData.find(c => c.id === id);
        if (!chapter) return;

        // Default to first relato
        activeRelatoRange = chapter.relatos[0].range;

        // Update Content
        updateTitles(id, activeRelatoRange);
        relatosTitle.textContent = `Relatos bíblicos | Capítulo ${id}`;

        updateMainVideo(chapter, activeTabId);

        // Render Pericopes
        relatosList.innerHTML = '';
        chapter.relatos.forEach((p, index) => {
            const pBtn = document.createElement('button');
            pBtn.className = 'relato-btn';

            if (index === 0) pBtn.classList.add('active');

            pBtn.textContent = p.range;
            pBtn.setAttribute('aria-label', `Versículos ${p.range}`);

            pBtn.addEventListener('click', () => {
                document.querySelectorAll('.relato-btn').forEach(b => b.classList.remove('active'));
                pBtn.classList.add('active');

                activeRelatoRange = p.range;
                updateTitles(id, activeRelatoRange);
                updateMainVideo(chapter, activeTabId);
            });

            relatosList.appendChild(pBtn);
        });

        // Show Detail
        chapterDetail.classList.remove('hidden');
        chapterDetail.setAttribute('aria-hidden', 'false');

        chapterDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeDetailBtn.focus();
    }

    function updateTitles(chapterId, range) {
        detailTitle.textContent = `Capítulo ${chapterId} - Relato Bíblico ${range}`;
    }

    function updateMainVideo(chapter, type) {
        const videoData = chapter.videos[type];
        const videoPlaceholder = document.querySelector('.video-placeholder');

        // Update visual mock
        videoPlaceholder.style.background = videoData.color;

        let title = videoData.title;
        if (type === 'relato-biblico' && activeRelatoRange) {
            title = `Vídeo do Relato Bíblico ${activeRelatoRange}`;
        }

        videoPlaceholder.querySelector('p').textContent = title;
    }

    function closeDetail() {
        activeChapterId = null;
        chapterDetail.classList.add('hidden');
        chapterDetail.setAttribute('aria-hidden', 'true');
        renderChaptersGrid();
    }

    // Helper to generate mock relatos
    function generateRelatos(chapterId) {
        const count = chapterId === 1 ? 9 : Math.floor(Math.random() * 5) + 5;
        const relatos = [];
        let start = 1;
        for (let i = 0; i < count; i++) {
            let end = start + Math.floor(Math.random() * 5) + 2;
            relatos.push({ range: `${start}-${end}` });
            start = end + 1;
        }
        return relatos;
    }

    // Tab Functions
    function handleTabClick(e) {
        const targetTab = e.target;
        activateTab(targetTab);
    }

    function handleTabKeydown(e) {
        const key = e.key;
        const currentTab = e.target;
        const allTabs = Array.from(document.querySelectorAll('[role="tab"]'));
        const index = allTabs.indexOf(currentTab);

        let nextTab = null;
        if (key === 'ArrowRight') {
            nextTab = allTabs[(index + 1) % allTabs.length];
        } else if (key === 'ArrowLeft') {
            nextTab = allTabs[(index - 1 + allTabs.length) % allTabs.length];
        }

        if (nextTab) {
            nextTab.focus();
            activateTab(nextTab);
        }
    }

    function activateTab(tab) {
        // Deselect all
        document.querySelectorAll('[role="tab"]').forEach(t => {
            t.setAttribute('aria-selected', 'false');
        });
        document.querySelectorAll('[role="tabpanel"]').forEach(p => {
            p.hidden = true;
        });

        // Select target
        tab.setAttribute('aria-selected', 'true');
        const panelId = tab.getAttribute('aria-controls');
        document.getElementById(panelId).hidden = false;

        // Update Video
        // Extract type from id: tab-relato-biblico -> relato-biblico
        const type = tab.id.replace('tab-', '');
        activeTabId = type;

        if (activeChapterId) {
            const chapter = chaptersData.find(c => c.id === activeChapterId);
            if (chapter) {
                updateMainVideo(chapter, type);
            }
        }
    }

    function resetTabs() {
        const defaultTab = document.getElementById('tab-relato-biblico');
        if (defaultTab) activateTab(defaultTab);
    }
});
