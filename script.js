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
    alert("فهرس القرآن الكريم مع أرقام الصفحات: \n" +
        "1. الفاتحة - 1 \n" +
        "2. البقرة - 2 \n" +
        "3. آل عمران - 50 \n" +
        "4. النساء - 77 \n" +
        "5. المائدة - 106 \n" +
        "6. الأنعام - 128 \n" +
        "7. الأعراف - 151 \n" +
        "8. الأنفال - 177 \n" +
        "9. التوبة - 187 \n" +
        "10. يونس - 208 \n" +
        "11. هود - 221 \n" +
        "12. يوسف - 235 \n" +
        "13. الرعد - 249 \n" +
        "14. إبراهيم - 255 \n" +
        "15. الحجر - 262 \n" +
        "16. النحل - 267 \n" +
        "17. الإسراء - 282 \n" +
        "18. الكهف - 293 \n" +
        "19. مريم - 305 \n" +
        "20. طه - 312 \n" +
        "21. الأنبياء - 322 \n" +
        "22. الحج - 332 \n" +
        "23. المؤمنون - 342 \n" +
        "24. النور - 350 \n" +
        "25. الفرقان - 359 \n" +
        "26. الشعراء - 367 \n" +
        "27. النمل - 377 \n" +
        "28. القصص - 385 \n" +
        "29. العنكبوت - 396 \n" +
        "30. الروم - 404 \n" +
        "31. لقمان - 411 \n" +
        "32. السجدة - 415 \n" +
        "33. الأحزاب - 418 \n" +
        "34. سبأ - 428 \n" +
        "35. فاطر - 434 \n" +
        "36. يس - 440 \n" +
        "37. الصافات - 446 \n" +
        "38. ص - 453 \n" +
        "39. الزمر - 458 \n" +
        "40. غافر - 467 \n" +
        "41. فصلت - 477 \n" +
        "42. الشورى - 483 \n" +
        "43. الزخرف - 489 \n" +
        "44. الدخان - 496 \n" +
        "45. الجاثية - 499 \n" +
        "46. الأحقاف - 502 \n" +
        "47. محمد - 507 \n" +
        "48. الفتح - 511 \n" +
        "49. الحجرات - 515 \n" +
        "50. ق - 518 \n" +
        "51. الذاريات - 520 \n" +
        "52. الطور - 523 \n" +
        "53. النجم - 526 \n" +
        "54. القمر - 528 \n" +
        "55. الرحمن - 531 \n" +
        "56. الواقعة - 534 \n" +
        "57. الحديد - 537 \n" +
        "58. المجادلة - 542 \n" +
        "59. الحشر - 545 \n" +
        "60. الممتحنة - 549 \n" +
        "61. الصف - 551 \n" +
        "62. الجمعة - 553 \n" +
        "63. المنافقون - 554 \n" +
        "64. التغابن - 556 \n" +
        "65. الطلاق - 558 \n" +
        "66. التحريم - 560 \n" +
        "67. الملك - 562 \n" +
        "68. القلم - 564 \n" +
        "69. الحاقة - 566 \n" +
        "70. المعارج - 568 \n" +
        "71. نوح - 570 \n" +
        "72. الجن - 572 \n" +
        "73. المزمل - 574 \n" +
        "74. المدثر - 575 \n" +
        "75. القيامة - 577 \n" +
        "76. الإنسان - 578 \n" +
        "77. المرسلات - 580 \n" +
        "78. النبأ - 582 \n" +
        "79. النازعات - 583 \n" +
        "80. عبس - 585 \n" +
        "81. التكوير - 586 \n" +
        "82. الإنفطار - 587 \n" +
        "83. المطففين - 587 \n" +
        "84. الإنشقاق - 589 \n" +
        "85. البروج - 590 \n" +
        "86. الطارق - 591 \n" +
        "87. الأعلى - 591 \n" +
        "88. الغاشية - 592 \n" +
        "89. الفجر - 593 \n" +
        "90. البلد - 594 \n" +
        "91. الشمس - 595 \n" +
        "92. الليل - 595 \n" +
        "93. الضحى - 596 \n" +
        "94. الشرح - 596 \n" +
        "95. التين - 597 \n" +
        "96. العلق - 597 \n" +
        "97. القدر - 598 \n" +
        "98. البينة - 598 \n" +
        "99. الزلزلة - 599 \n" +
        "100. العاديات - 599 \n" +
        "101. القارعة - 600 \n" +
        "102. التكاثر - 600 \n" +
        "103. العصر - 601 \n" +
        "104. الهمزة - 601 \n" +
        "105. الفيل - 601 \n" +
        "106. قريش - 602 \n" +
        "107. الماعون - 602 \n" +
        "108. الكوثر - 602 \n" +
        "109. الكافرون - 603 \n" +
        "110. النصر - 603 \n" +
        "111. المسد - 603 \n" +
        "112. الإخلاص - 604 \n" +
        "113. الفلق - 604 \n" +
        "114. الناس - 604");
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
