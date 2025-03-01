let currentPage = localStorage.getItem('currentPage') || 1;

window.onload = function() {
    showPage(currentPage); 
};

function showPage(pageNumber) {
    const imageContainer = document.getElementById('pageImageContainer');
    const imageUrl = `https://quran.ksu.edu.sa/png_big/${pageNumber}.png`;
    
    localStorage.setItem('currentPage', pageNumber);
    
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Page ${pageNumber}" style="max-width: 100%; height: auto;" loading="lazy" />`;
}

function loadPage() {
    const pageNumber = document.getElementById('pageNumber').value;
    if (pageNumber) {
        currentPage = parseInt(pageNumber);
        showPage(currentPage);
    }
}

function navigatePage(direction) {
    currentPage += direction;
    showPage(currentPage);
}

// وظيفة فتح الفهرس
function openIndex() {
    const indexContent = document.getElementById('indexContent');
    indexContent.innerHTML = `
        <ul>
            <li>1. الفاتحة - 1</li>
            <li>2. البقرة - 2</li>
            <li>3. آل عمران - 50</li>
            <li>4. النساء - 77</li>
            <li>5. المائدة - 106</li>
            <li>6. الأنعام - 128</li>
            <li>7. الأعراف - 151</li>
            <li>8. الأنفال - 177</li>
            <li>9. التوبة - 187</li>
            <li>10. يونس - 208</li>
            <li>11. هود - 221</li>
            <li>12. يوسف - 235</li>
            <li>13. الرعد - 249</li>
            <li>14. إبراهيم - 255</li>
            <li>15. الحجر - 262</li>
            <li>16. النحل - 267</li>
            <li>17. الإسراء - 282</li>
            <li>18. الكهف - 293</li>
            <li>19. مريم - 305</li>
            <li>20. طه - 312</li>
            <li>21. الأنبياء - 322</li>
            <li>22. الحج - 332</li>
            <li>23. المؤمنون - 342</li>
            <li>24. النور - 350</li>
            <li>25. الفرقان - 359</li>
            <li>26. الشعراء - 367</li>
            <li>27. النمل - 377</li>
            <li>28. القصص - 385</li>
            <li>29. العنكبوت - 396</li>
            <li>30. الروم - 404</li>
            <li>...</li>
        </ul>
    `;
    document.getElementById('indexModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('indexModal').style.display = 'none';
}
    // هنا يمكنك ربط صفحة الفهرس أو فهرس الأقسام للقرآن الكريم


// وظيفة لعرض معلومات المطور
function openDeveloperInfo() {
    const confirmed = confirm("المطور: علي الطائي 🌹✔️✨\nهل تريد الانتقال إلى صفحة المطور؟");
    if (confirmed) {
        window.location.href = "https://www.ali-altaee.free.nf";
    }
}
function tspehat() {
    const confirmed = confirm("موقع تسبيحات دينية كتسبيح فاطمة الزهرا عليها السلام . \n هل انت متأكد للانتقال لهذا الموقع ، اذا كنت متأكد اضغط ok ✔️✨");
    if (confirmed) {
        window.location.href = "https://altaee.praise-my.free.nf";
    }
}
