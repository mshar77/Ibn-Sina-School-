// ===== بيانات نماذج الاختبارات =====
const examsData = [
    // ===== نماذج الرياضيات =====
    {
        id: 'math1',
        subject: 'math',
        title: 'نموذج رياضيات 1',
        region: 'الرياض',
        year: 1446,
        questions: 20,
        info: 'نموذج اختبار نهائي لمادة الرياضيات من منطقة الرياض - الفصل الدراسي الثاني 1446هـ',
        questions_data: [
            { q: 'ما عدد حلول النظام: ص = 5س – 7 ، 5س – ص = 7؟', a: 'عدد لا نهائي من الحلول' },
            { q: 'حل النظام الممثل بيانياً بمستقيمين متوازيين؟', a: 'لا يوجد حل' },
            { q: 'أي عدد غير الصفر مرفوع للقوة صفر يساوي؟', a: '1' },
            { q: 'ناتج الضرب (2س – 5)(2س + 5) هو؟', a: '4س² - 25' },
            { q: 'مجموعة حل المعادلة: ب(ب + 17) = 0 هي؟', a: '{0, -17}' },
            { q: 'أوجد (ق.م.أ) لوحيدتي الحد 24أ، 32ب؟', a: '8' },
            { q: 'حل المعادلة 6(ن – 11) = 12 + 4(2ن – 3)؟', a: 'ن = 10' },
            { q: 'عددان مجموعهما 41 والفرق بينهما 11، فما العدد الأكبر؟', a: '26' },
            { q: 'الزوج المرتب الذي يحقق: س = 3ص، 2س = 7ص؟', a: '(0, 0)' },
            { q: 'ناتج الضرب (2ن – 3)(ن – 4) هو؟', a: '2ن² - 11ن + 12' }
        ]
    },
    {
        id: 'math2',
        subject: 'math',
        title: 'نموذج رياضيات 2',
        region: 'جدة',
        year: 1446,
        questions: 20,
        info: 'نموذج اختبار نهائي لمادة الرياضيات من منطقة مكة المكرمة - الفصل الدراسي الثاني 1446هـ',
        questions_data: [
            { q: 'حل النظام: س – ص = 5، س + ص = 3 بطريقة الحذف؟', a: 'س = 4، ص = -1' },
            { q: 'حل النظام: س + 2ص = 1، 2س + 5ص = 3 بطريقة التعويض؟', a: 'س = -1، ص = 1' },
            { q: 'أي ثلاثية حدود تشكل مربعاً كاملاً؟', a: 'أ² + 2أب + ب²' },
            { q: 'إذا كان عدد حلول النظام لا نهائي، يسمى النظام؟', a: 'غير مستقل' },
            { q: 'يستعمل التمثيل البياني لحل نظام معادلتين لـ؟', a: 'تقدير الحلول' },
            { q: 'الثابت هو وحيدة حد تمثل؟', a: 'عدداً حقيقياً' },
            { q: 'ما قيمة 5⁰؟', a: '1' },
            { q: 'حل المعادلة: 3س + 5 = 14؟', a: 'س = 3' },
            { q: 'ما مساحة مربع طول ضلعه 5 سم؟', a: '25 سم²' },
            { q: 'حل المعادلة: 2(س - 3) = 10؟', a: 'س = 8' }
        ]
    },
    {
        id: 'math3',
        subject: 'math',
        title: 'نموذج رياضيات 3',
        region: 'الدمام',
        year: 1447,
        questions: 20,
        info: 'نموذج اختبار نهائي لمادة الرياضيات من المنطقة الشرقية - الفصل الدراسي الثاني 1447هـ',
        questions_data: [
            { q: 'ما حل المعادلة: س² - 9 = 0؟', a: 'س = ±3' },
            { q: 'أوجد ناتج: (س + 3)²؟', a: 'س² + 6س + 9' },
            { q: 'حل المعادلة: 4س - 8 = 0؟', a: 'س = 2' },
            { q: 'ما قيمة 2³؟', a: '8' },
            { q: 'أوجد الجذر التربيعي للعدد 16؟', a: '4' },
            { q: 'حل النظام: 2س + ص = 5، س - ص = 1؟', a: 'س = 2، ص = 1' },
            { q: 'ما مجموع زوايا المثلث؟', a: '180 درجة' },
            { q: 'أوجد محيط مربع طول ضلعه 4 سم؟', a: '16 سم' },
            { q: 'ما قيمة 10⁻¹؟', a: '0.1' },
            { q: 'حل المعادلة: 5س + 3 = 18؟', a: 'س = 3' }
        ]
    },

    // ===== نماذج العلوم =====
    {
        id: 'science1',
        subject: 'science',
        title: 'نموذج علوم 1',
        region: 'الرياض',
        year: 1446,
        questions: 20,
        info: 'نموذج اختبار نهائي لمادة العلوم من منطقة الرياض - الفصل الدراسي الثاني 1446هـ',
        questions_data: [
            { q: 'ما هي الوحدة الوظيفية للوراثة المحمولة على الكروموسوم؟', a: 'الجين' },
            { q: 'انحراف الضوء عن مساره عند انتقاله بين وسطين شفافين يسمى؟', a: 'الانكسار' },
            { q: 'ما هي وحدة قياس القوة؟', a: 'النيوتن' },
            { q: 'عملية تحول الغاز إلى سائل تسمى؟', a: 'التكثف' },
            { q: 'ما هو الحمض النووي الذي يحمل الصفات الوراثية؟', a: 'DNA' },
            { q: 'كم عدد الكروموسومات في الخلية الآدمية؟', a: '46 كروموسوم' },
            { q: 'ما هي سرعة الضوء في الفراغ؟', a: '3 × 10⁸ م/ث' },
            { q: 'الحركة التي تتكرر في فترات زمنية متساوية تسمى؟', a: 'الحركة الدورية' },
            { q: 'ما هو الفرق بين الموجات الطولية والمستعرضة؟', a: 'اتجاه اهتزاز الجزيئات' },
            { q: 'كم درجة حرارة الجسم الطبيعية للإنسان؟', a: '37 درجة مئوية' }
        ]
    },
    {
        id: 'science2',
        subject: 'science',
        title: 'نموذج علوم 2',
        region: 'جدة',
        year: 1446,
        questions: 20,
        info: 'نموذج اختبار نهائي لمادة العلوم من منطقة مكة المكرمة - الفصل الدراسي الثاني 1446هـ',
        questions_data: [
            { q: 'ما هي عملية البناء الضوئي؟', a: 'تحويل الضوء إلى طاقة كيميائية' },
            { q: 'كم عدد أيام السنة الميلادية؟', a: '365 يوم' },
            { q: 'ما هو أكبر كوكب في المجموعة الشمسية؟', a: 'المشتري' },
            { q: 'ما هي درجة غليان الماء؟', a: '100 درجة مئوية' },
            { q: 'كم عدد أنواع الدم الرئيسية؟', a: '4 أنواع' },
            { q: 'ما هي أصغر وحدة حية في الكائن الحي؟', a: 'الخلية' },
            { q: 'ما هي عملية التنفس الخلوي؟', a: 'تحرير الطاقة من المواد الغذائية' },
            { q: 'كم عدد عظام جسم الإنسان البالغ؟', a: '206 عظمة' },
            { q: 'ما هو الفرق بين الفيروس والبكتيريا؟', a: 'البكتيريا كائنات حية والفيروس ليس كذلك' },
            { q: 'ما هي أنواع الحركة في الفيزياء؟', a: 'انتقالية ودورانية واهتزازية' }
        ]
    },
    {
        id: 'science3',
        subject: 'science',
        title: 'نموذج علوم 3',
        region: 'الدمام',
        year: 1447,
        questions: 20,
        info: 'نموذج اختبار نهائي لمادة العلوم من المنطقة الشرقية - الفصل الدراسي الثاني 1447هـ',
        questions_data: [
            { q: 'ما هي الطاقة المتجددة؟', a: 'الطاقة التي لا تنفد ويمكن تجديدها' },
            { q: 'كم عدد أشهر السنة الهجرية؟', a: '12 شهر' },
            { q: 'ما هو الغلاف الجوي؟', a: 'طبقة الهواء المحيطة بالأرض' },
            { q: 'ما هي أنواع الصخور الثلاثة؟', a: 'نارية وراسبية ومتحولة' },
            { q: 'كم عدد فقرات العمود الفقري؟', a: '33 فقرة' },
            { q: 'ما هي عملية الإخصاب؟', a: 'اتحاد الحيوان المنوي مع البويضة' },
            { q: 'ما هو الفرق بين الحيوان والنبات؟', a: 'النبات ينتج غذاءه والحيوان يتناول غذاءه' },
            { q: 'كم عدد أيام دوران الأرض حول الشمس؟', a: '365.25 يوم' },
            { q: 'ما هي الخلية الحمراء؟', a: 'خلايا تحمل الأكسجين في الدم' },
            { q: 'ما هو الفرق بين الحمض والقاعدة؟', a: 'الحمض له طعم حامض والقاعدة قلوية' }
        ]
    },

    // ===== نماذج لغتي =====
    {
        id: 'arabic1',
        subject: 'arabic',
        title: 'نموذج لغتي 1',
        region: 'الرياض',
        year: 1446,
        questions: 20,
        info: 'نموذج اختبار نهائي لمادة لغتي من منطقة الرياض - الفصل الدراسي الثاني 1446هـ',
        questions_data: [
            { q: 'يصاغ اسم الزمان من الفعل الثلاثي المعتل الآخر على وزن؟', a: 'مَفْعَل' },
            { q: '"كم" الاستفهامية تحتاج إلى؟', a: 'جواب وتعيين' },
            { q: 'اسم الآلة من الفعل "فتح" هو؟', a: 'مفتاح' },
            { q: 'ما الوظيفة النحوية لكلمة "الطالب" في الجملة "الطالب يدرس"؟', a: 'مبتدأ' },
            { q: 'ما نوع الجملة: "هل أنت مستعد؟"؟', a: 'جملة استفهامية' },
            { q: 'أين يقع الفاعل في الجملة الفعلية؟', a: 'بعد الفعل' },
            { q: 'ما الفرق بين الاسم والفعل والحرف؟', a: 'الاسم يدل على معنى مستقل والفعل على حدث والحرف على معنى في غيره' },
            { q: 'كم عدد أنواع الخبر؟', a: 'ثلاثة أنواع' },
            { q: 'ما علامات الترقيم الأساسية؟', a: 'النقطة والفاصلة والفاصلة المنقوطة' },
            { q: 'ما هو المصدر؟', a: 'اسم يدل على الحدث مجرداً من الزمن' }
        ]
    },
    {
        id: 'arabic2',
        subject: 'arabic',
        title: 'نموذج لغتي 2',
        region: 'جدة',
        year: 1446,
        questions: 20,
        info: 'نموذج اختبار نهائي لمادة لغتي من منطقة مكة المكرمة - الفصل الدراسي الثاني 1446هـ',
        questions_data: [
            { q: 'ما هي أنواع الجموع؟', a: 'جمع مذكر سالم وجمع مؤنث سالم وجمع تكسير' },
            { q: 'كم عدد حروف الجر؟', a: '20 حرف' },
            { q: 'ما الفرق بين الاسم الموصول والاسم الإشارة؟', a: 'الموصول يحتاج إلى جملة والإشارة لا تحتاج' },
            { q: 'ما هو الفعل اللازم؟', a: 'الفعل الذي لا يحتاج إلى مفعول به' },
            { q: 'كم عدد أنواع الأفعال؟', a: 'ثلاثة: ماضي ومضارع وأمر' },
            { q: 'ما هي الجملة الاسمية؟', a: 'جملة تبدأ باسم' },
            { q: 'ما هو النعت؟', a: 'اسم يتبع الاسم قبله لتوضيح معناه' },
            { q: 'كم عدد أنواع الإضافة؟', a: 'نوعان: إضافة معنوية وإضافة لفظية' },
            { q: 'ما هو الحال؟', a: 'اسم نعت يبين هيئة الفاعل أو المفعول' },
            { q: 'ما الفرق بين الفاعل والمفعول به؟', a: 'الفاعل يقوم بالفعل والمفعول به يقع عليه الفعل' }
        ]
    },
    {
        id: 'arabic3',
        subject: 'arabic',
        title: 'نموذج لغتي 3',
        region: 'الدمام',
        year: 1447,
        questions: 20,
        info: 'نموذج اختبار نهائي لمادة لغتي من المنطقة الشرقية - الفصل الدراسي الثاني 1447هـ',
        questions_data: [
            { q: 'ما هو التمييز؟', a: 'اسم نكرة يوضح المراد من اسم قبله' },
            { q: 'كم عدد أنواع الضمائر؟', a: 'ثلاثة: منفصلة ومتصلة ومستترة' },
            { q: 'ما هو البدل؟', a: 'اسم يأتي بعد اسم آخر ليعيد تعريفه أو تخصيصه' },
            { q: 'ما الفرق بين الفعل الماضي والفعل المضارع؟', a: 'الماضي حدث في الزمن الماضي والمضارع يحدث الآن أو في المستقبل' },
            { q: 'ما هو العطف؟', a: 'ربط كلمة أو جملة بأخرى بحرف عطف' },
            { q: 'كم عدد حروف العطف؟', a: '10 أحرف' },
            { q: 'ما هو الاستثناء؟', a: 'إخراج اسم من حكم ما قبله بحرف استثناء' },
            { q: 'ما هي أدوات الاستثناء؟', a: 'إلا وغير وسوى وخلا وعدا' },
            { q: 'ما هو التوكيد؟', a: 'تقوية الكلام وتأكيد معناه' },
            { q: 'كم عدد أنواع التوكيد؟', a: 'نوعان: لفظي ومعنوي' }
        ]
    },

    // ===== نماذج الإنجليزي =====
    {
        id: 'english1',
        subject: 'english',
        title: 'English Model 1',
        region: 'Riyadh',
        year: 1446,
        questions: 20,
        info: 'Final exam model for English from Riyadh region - Second semester 1446H',
        questions_data: [
            { q: 'What is the past tense of "go"?', a: 'went' },
            { q: 'She _______ (play) tennis every weekend.', a: 'plays' },
            { q: 'Which one is a comparative adjective?', a: 'faster' },
            { q: 'What is the plural of "child"?', a: 'children' },
            { q: 'He _______ (be) to London three times.', a: 'has been' },
            { q: 'What is the opposite of "hot"?', a: 'cold' },
            { q: 'I _______ (study) English for 5 years.', a: 'have been studying' },
            { q: 'What is the meaning of "vocabulary"?', a: 'words and their meanings' },
            { q: 'She will _______ (go) to the party tomorrow.', a: 'go' },
            { q: 'What is the superlative form of "good"?', a: 'best' }
        ]
    },
    {
        id: 'english2',
        subject: 'english',
        title: 'English Model 2',
        region: 'Jeddah',
        year: 1446,
        questions: 20,
        info: 'Final exam model for English from Makkah region - Second semester 1446H',
        questions_data: [
            { q: 'What is the present perfect tense?', a: 'have/has + past participle' },
            { q: 'They _______ (not/like) spicy food.', a: 'do not like' },
            { q: 'What is the meaning of "fluent"?', a: 'able to speak smoothly' },
            { q: 'He _______ (work) here since 2020.', a: 'has been working' },
            { q: 'What is the plural of "person"?', a: 'people' },
            { q: 'I would _______ (help) you if I could.', a: 'help' },
            { q: 'What is the meaning of "curious"?', a: 'eager to know or learn' },
            { q: 'She _______ (not/see) that movie yet.', a: 'has not seen' },
            { q: 'What is the opposite of "easy"?', a: 'difficult' },
            { q: 'They _______ (arrive) tomorrow at 5 PM.', a: 'will arrive' }
        ]
    },
    {
        id: 'english3',
        subject: 'english',
        title: 'English Model 3',
        region: 'Dammam',
        year: 1447,
        questions: 20,
        info: 'Final exam model for English from Eastern region - Second semester 1447H',
        questions_data: [
            { q: 'What is the past participle of "eat"?', a: 'eaten' },
            { q: 'If I _______ (be) rich, I would travel.', a: 'were' },
            { q: 'What is the meaning of "ambitious"?', a: 'having a strong desire to succeed' },
            { q: 'She _______ (study) hard for the exam.', a: 'is studying' },
            { q: 'What is the plural of "mouse"?', a: 'mice' },
            { q: 'I _______ (not/understand) this lesson.', a: 'do not understand' },
            { q: 'What is the meaning of "patient"?', a: 'able to wait calmly' },
            { q: 'They _______ (play) football when it rained.', a: 'were playing' },
            { q: 'What is the opposite of "expensive"?', a: 'cheap' },
            { q: 'He _______ (finish) his homework before dinner.', a: 'finished' }
        ]
    }
];

// ===== DOM Elements =====
const examsGrid = document.getElementById('examsGrid');
const examModal = document.getElementById('examModal');
const closeModal = document.getElementById('closeModal');
const navButtons = document.querySelectorAll('.nav-btn');
const downloadBtn = document.getElementById('downloadBtn');
const printBtn = document.getElementById('printBtn');

let currentExam = null;
let currentFilter = 'all';

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderExams('all');
    setupEventListeners();
});

// ===== Setup Event Listeners =====
function setupEventListeners() {
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            navButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.subject;
            renderExams(currentFilter);
        });
    });

    closeModal.addEventListener('click', () => {
        examModal.classList.remove('active');
    });

    examModal.addEventListener('click', (e) => {
        if (e.target === examModal) {
            examModal.classList.remove('active');
        }
    });

    downloadBtn.addEventListener('click', downloadExam);
    printBtn.addEventListener('click', printExam);
}

// ===== Render Exams =====
function renderExams(filter) {
    examsGrid.innerHTML = '';
    
    const filteredExams = filter === 'all' 
        ? examsData 
        : examsData.filter(exam => exam.subject === filter);

    filteredExams.forEach((exam, index) => {
        const card = createExamCard(exam);
        examsGrid.appendChild(card);
        
        // Add stagger animation
        setTimeout(() => {
            card.style.opacity = '1';
        }, index * 100);
    });
}

// ===== Create Exam Card =====
function createExamCard(exam) {
    const card = document.createElement('div');
    card.className = 'exam-card';
    card.style.opacity = '0';
    card.style.transition = 'opacity 0.5s ease-out';

    const subjectLabel = getSubjectLabel(exam.subject);
    
    card.innerHTML = `
        <div class="exam-card-header">
            <h3>${exam.title}</h3>
            <p>${subjectLabel}</p>
        </div>
        <div class="exam-card-body">
            <div class="exam-info-row">
                <span class="exam-info-label">المنطقة:</span>
                <span class="exam-info-value">${exam.region}</span>
            </div>
            <div class="exam-info-row">
                <span class="exam-info-label">السنة:</span>
                <span class="exam-info-value">${exam.year}هـ</span>
            </div>
            <div class="exam-info-row">
                <span class="exam-info-label">عدد الأسئلة:</span>
                <span class="exam-info-value">${exam.questions}</span>
            </div>
        </div>
        <div class="exam-card-footer">
            <button class="btn btn-primary">عرض النموذج</button>
            <button class="btn btn-secondary">معلومات</button>
        </div>
    `;

    card.querySelector('.btn-primary').addEventListener('click', () => {
        openExamModal(exam);
    });

    card.querySelector('.btn-secondary').addEventListener('click', () => {
        openExamModal(exam);
    });

    return card;
}

// ===== Open Exam Modal =====
function openExamModal(exam) {
    currentExam = exam;
    
    document.getElementById('modalTitle').textContent = exam.title;
    document.getElementById('modalSubject').textContent = getSubjectLabel(exam.subject);
    document.getElementById('modalInfo').innerHTML = `
        <strong>المنطقة:</strong> ${exam.region}<br>
        <strong>السنة:</strong> ${exam.year}هـ<br>
        <strong>عدد الأسئلة:</strong> ${exam.questions}<br>
        <strong>الوصف:</strong> ${exam.info}
    `;

    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = '';

    exam.questions_data.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.innerHTML = `
            <strong>السؤال ${index + 1}:</strong>
            <p>${item.q}</p>
            <div class="answer">✓ الإجابة: ${item.a}</div>
        `;
        questionsContainer.appendChild(questionDiv);
    });

    examModal.classList.add('active');
}

// ===== Download Exam =====
function downloadExam() {
    if (!currentExam) return;

    let content = `نموذج اختبار: ${currentExam.title}\n`;
    content += `المنطقة: ${currentExam.region}\n`;
    content += `السنة: ${currentExam.year}هـ\n`;
    content += `عدد الأسئلة: ${currentExam.questions}\n`;
    content += `\n${'='.repeat(50)}\n\n`;

    currentExam.questions_data.forEach((item, index) => {
        content += `السؤال ${index + 1}: ${item.q}\n`;
        content += `الإجابة: ${item.a}\n\n`;
    });

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${currentExam.title}.txt`;
    link.click();
}

// ===== Print Exam =====
function printExam() {
    if (!currentExam) return;

    const printWindow = window.open('', '', 'width=800,height=600');
    
    let content = `
        <html dir="rtl">
        <head>
            <title>${currentExam.title}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; direction: rtl; }
                h1 { color: #0891b2; text-align: center; }
                .info { background: #f0f0f0; padding: 10px; margin-bottom: 20px; }
                .question { margin: 15px 0; padding: 10px; border-right: 4px solid #0891b2; }
                .answer { background: #e0f2f1; padding: 8px; margin-top: 5px; }
            </style>
        </head>
        <body>
            <h1>${currentExam.title}</h1>
            <div class="info">
                <p><strong>المنطقة:</strong> ${currentExam.region}</p>
                <p><strong>السنة:</strong> ${currentExam.year}هـ</p>
                <p><strong>عدد الأسئلة:</strong> ${currentExam.questions}</p>
            </div>
    `;

    currentExam.questions_data.forEach((item, index) => {
        content += `
            <div class="question">
                <strong>السؤال ${index + 1}:</strong> ${item.q}
                <div class="answer"><strong>الإجابة:</strong> ${item.a}</div>
            </div>
        `;
    });

    content += `</body></html>`;

    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
}

// ===== Helper Functions =====
function getSubjectLabel(subject) {
    const labels = {
        'math': 'الرياضيات',
        'science': 'العلوم',
        'arabic': 'لغتي',
        'english': 'الإنجليزية'
    };
    return labels[subject] || subject;
}
