// ============================================================
//  Ancient Yemeni Languages — Educational Data
// ============================================================

// --- Types ---
export interface MusnadLetter {
  musnad: string;
  arabic: string;
  group: string;
}

export interface MusnadWord {
  musnad: string;
  arabic: string;
  meaning?: string;
}

export interface MusnadSentence {
  musnad: string;
  arabic: string;
  source: string;
}

export interface Dialect {
  name: string;
  kingdom: string;
  region: string;
  period: string;
  description: string;
}

export interface Source {
  title: string;
  description: string;
  icon: string;
}

// --- Musnad Letters (29 letters in 4 groups) ---

export const letterGroups: Record<string, string> = {
  "أساسية": "الحروف الأساسية",
  "ملتبسة": "الحروف الملتبسة",
  "نادرة": "الحروف النادرة",
  "رموز": "الرموز",
};

export const musnadLetters: MusnadLetter[] = [
  // أساسية (11)
  { musnad: "𐩠", arabic: "ه", group: "أساسية" },
  { musnad: "𐩡", arabic: "ل", group: "أساسية" },
  { musnad: "𐩢", arabic: "ح", group: "أساسية" },
  { musnad: "𐩣", arabic: "م", group: "أساسية" },
  { musnad: "𐩤", arabic: "ق", group: "أساسية" },
  { musnad: "𐩥", arabic: "و", group: "أساسية" },
  { musnad: "𐩦", arabic: "ش", group: "أساسية" },
  { musnad: "𐩧", arabic: "ر", group: "أساسية" },
  { musnad: "𐩨", arabic: "ب", group: "أساسية" },
  { musnad: "𐩪", arabic: "س", group: "أساسية" },
  { musnad: "𐩫", arabic: "ك", group: "أساسية" },
  { musnad: "𐩬", arabic: "ن", group: "أساسية" },
  // ملتبسة (8)
  { musnad: "𐩭", arabic: "خ", group: "ملتبسة" },
  { musnad: "𐩮", arabic: "ص", group: "ملتبسة" },
  { musnad: "𐩯", arabic: "س³", group: "ملتبسة" },
  { musnad: "𐩰", arabic: "ف", group: "ملتبسة" },
  { musnad: "𐩱", arabic: "أ", group: "ملتبسة" },
  { musnad: "𐩲", arabic: "ع", group: "ملتبسة" },
  { musnad: "𐩳", arabic: "ض", group: "ملتبسة" },
  { musnad: "𐩴", arabic: "ج", group: "ملتبسة" },
  // نادرة (9)
  { musnad: "𐩵", arabic: "د", group: "نادرة" },
  { musnad: "𐩶", arabic: "غ", group: "نادرة" },
  { musnad: "𐩷", arabic: "ط", group: "نادرة" },
  { musnad: "𐩸", arabic: "ز", group: "نادرة" },
  { musnad: "𐩹", arabic: "ذ", group: "نادرة" },
  { musnad: "𐩺", arabic: "ي", group: "نادرة" },
  { musnad: "𐩻", arabic: "ث", group: "نادرة" },
  { musnad: "𐩼", arabic: "ظ", group: "نادرة" },
  { musnad: "𐩩", arabic: "ت", group: "نادرة" },
  // رموز (2)
  { musnad: "𐩽", arabic: "فاصل كلمات", group: "رموز" },
  { musnad: "𐩾", arabic: "رقم 50", group: "رموز" },
];

// --- Dialects (4) ---

export const dialects: Dialect[] = [
  {
    name: "السبئية",
    kingdom: "مملكة سبأ",
    region: "مأرب، صرواح",
    period: "القرن 10 ق.م — 6 م",
    description:
      "أشهر اللهجات اليمنية القديمة وأكثرها انتشاراً، كانت لغة مملكة سبأ ودويلاتها. وصلتنا عبر آلاف النقوش التي توثق الحياة الدينية والسياسية والاقتصادية في مأرب وصرواح.",
  },
  {
    name: "المعينية",
    kingdom: "مملكة معين",
    region: "الجوف",
    period: "القرن 8 ق.م — 2 ق.م",
    description:
      "لهجة مملكة معين في منطقة الجوف، تميّزت ببعض الاختلافات الصوتية والصرفية. اشتهرت المملكة بتجارتها البرية بين اليمن وبلاد الشام.",
  },
  {
    name: "الحضرمية",
    kingdom: "مملكة حضرموت",
    region: "وادي حضرموت",
    period: "القرن 8 ق.م — 4 م",
    description:
      "لهجة مملكة حضرموت في وادي حضرموت، تشبه اللهجة السبئية مع فروق طفيفة. عُرفت المملكة بإنتاج اللبان والتجارة به شرقاً وغرباً.",
  },
  {
    name: "القتبانية",
    kingdom: "مملكة قتبان",
    region: "وادي بيحان",
    period: "القرن 8 ق.م — 2 م",
    description:
      "لهجة مملكة قتبان في وادي بيحان، تتميّز بخصائص لغوية فريدة. ازدهرت المملكة في الطرق التجارية الموصلة بين السواحل والداخل.",
  },
];

// --- Sources (5 categories) ---

export const sources: Source[] = [
  {
    title: "الآثار",
    description:
      "المعابد والسدود والقصور والمدن الأثرية مثل معبد أوام ومحرم بلقيس وسد مأرب العظيم، وهي شواهد مادية على حضارة اليمن القديم.",
    icon: "Landmark",
  },
  {
    title: "النقوش",
    description:
      "آلاف النقوش المسندية على الحجر والبرونز، إضافة إلى الزبور وهو خط آخر منفصل عن المسند يُكتب على أدوات خشبية بالخطّ المائل للكتابة اليومية.",
    icon: "Scroll",
  },
  {
    title: "الكتب السماوية",
    description:
      "القرآن الكريم أهمها، حيث وردت فيه إشارات إلى سبأ وبلقيس وقصة مملكة سبأ، بالإضافة إلى بعض الكتب السماوية الأخرى.",
    icon: "BookOpen",
  },
  {
    title: "الكتابات الكلاسيكية",
    description:
      "كتابات اليونان والرومان عن اليمن وطرق التجارة، من أهمها كتابات بلينيوس وسترابو وبطليموس التي وثّقت أحوال العرب الجنوبيين.",
    icon: "Library",
  },
  {
    title: "الكتب الأخبارية",
    description:
      "مؤلفات المؤرخين العرب مثل الهمداني في «الإكليل» والطبري والمسعودي، التي نقلت أخبار اليمن القديم وممالكه وملوكه.",
    icon: "BookText",
  },
];

// --- Words (Musnad → Arabic, from real inscriptions) ---

export const musnadWords: MusnadWord[] = [
  { musnad: "𐩣𐩫𐩧𐩨", arabic: "مكرب", meaning: "لقب حاكم سبأ" },
  { musnad: "𐩣𐩡𐩫", arabic: "ملك", meaning: "حاكم" },
  { musnad: "𐩱𐩡𐩣𐩤𐩠", arabic: "المقه", meaning: "إله سبأ الأكبر" },
  { musnad: "𐩪𐩨𐩱", arabic: "سبأ", meaning: "مملكة سبأ" },
  { musnad: "𐩣𐩱𐩧𐩨", arabic: "مأرب", meaning: "عاصمة سبأ" },
  { musnad: "𐩮𐩧𐩥𐩢", arabic: "صرواح", meaning: "مدينة أثرية" },
  { musnad: "𐩱𐩨", arabic: "أب", meaning: "والد" },
  { musnad: "𐩱𐩣", arabic: "أم", meaning: "والدة" },
  { musnad: "𐩱𐩭", arabic: "أخ", meaning: "شقيق" },
  { musnad: "𐩨𐩬", arabic: "ابن", meaning: "ولد" },
  { musnad: "𐩱𐩡𐩠", arabic: "إله", meaning: "معبود" },
  { musnad: "𐩨𐩺𐩩", arabic: "بيت", meaning: "منزل / معبد" },
  { musnad: "𐩪𐩡𐩣", arabic: "سلام", meaning: "تحية / أمان" },
  { musnad: "𐩧𐩢𐩣", arabic: "رحم", meaning: "عطف / قرابة" },
  { musnad: "𐩨𐩧𐩫", arabic: "بارك", meaning: "دعا بالخير" },
  { musnad: "𐩬𐩮𐩧", arabic: "نصر", meaning: "عون / تأييد" },
  { musnad: "𐩢𐩧𐩨", arabic: "حرب", meaning: "قتال" },
  { musnad: "𐩴𐩺𐩦", arabic: "جيش", meaning: "جند" },
  { musnad: "𐩤𐩪𐩡𐩣", arabic: "قسيم", meaning: "نصيب" },
  { musnad: "𐩡𐩪𐩣", arabic: "لسم", meaning: "سماء" },
  { musnad: "𐩱𐩧𐩢", arabic: "أرح", meaning: "رحب / واسع" },
  { musnad: "𐩬𐩪𐩡𐩧", arabic: "نسور", meaning: "نصور / حماة" },
  { musnad: "𐩦𐩡𐩧", arabic: "شهر", meaning: "قمر / شهر" },
  { musnad: "𐩬𐩡𐩣", arabic: "نم", meaning: "رعاية" },
  { musnad: "𐩮𐩡𐩪𐩢", arabic: "صلح", meaning: "سلام / اتفاق" },
  { musnad: "𐩣𐩡𐩪𐩧", arabic: "مسر", meaning: "مكان فرح" },
  { musnad: "𐩡𐩠𐩱", arabic: "لهأ", meaning: "ألهى" },
  { musnad: "𐩧𐩠𐩡𐩩", arabic: "رلت", meaning: "بنت" },
  { musnad: "𐩡𐩬𐩱", arabic: "لنأ", meaning: "تأخر" },
  { musnad: "𐩤𐩡𐩮𐩧", arabic: "قصر", meaning: "بناء حصين" },
  { musnad: "𐩬𐩢𐩡𐩪", arabic: "نحس", meaning: "نحس / شؤم" },
  { musnad: "𐩣𐩡𐩧𐩢", arabic: "مرح", meaning: "فرح" },
  { musnad: "𐩡𐩧𐩠𐩡", arabic: "رهل", meaning: "سائل" },
  { musnad: "𐩪𐩡𐩡𐩧", arabic: "سلم", meaning: "سلّم / ألقى السلام" },
  { musnad: "𐩡𐩤𐩡𐩧", arabic: "لقل", meaning: "تكلم قليلاً" },
  { musnad: "𐩣𐩩𐩨", arabic: "متب", meaning: "موت" },
  { musnad: "𐩤𐩡𐩨𐩣", arabic: "قبا", meaning: "قبل" },
  { musnad: "𐩣𐩺𐩪", arabic: "ميس", meaning: "سهولة / يسر" },
  { musnad: "𐩦𐩺𐩢", arabic: "شوح", meaning: "إله الحضارمة" },
  { musnad: "𐩤𐩡𐩪𐩣", arabic: "قسم", meaning: "حظ / نصيب" },
  { musnad: "𐩱𐩣𐩩𐩱", arabic: "أمتأ", meaning: "أمة / جماعة" },
  { musnad: "𐩨𐩡𐩪𐩣", arabic: "بسم", meaning: "باسم / باسم" },
  { musnad: "𐩮𐩢𐩡𐩣", arabic: "صحم", meaning: "قرابة" },
  { musnad: "𐩧𐩺𐩡𐩧", arabic: "ريل", meaning: "جبل مرتفع" },
  { musnad: "𐩪𐩩𐩧", arabic: "ستر", meaning: "غطى / حجب" },
  { musnad: "𐩱𐩩𐩣", arabic: "أتم", meaning: "أكمل" },
  { musnad: "𐩨𐩡𐩢", arabic: "بح", meaning: "بَحَث" },
  { musnad: "𐩮𐩡𐩨𐩠", arabic: "صبه", meaning: "سكب" },
  { musnad: "𐩱𐩨𐩣𐩨", arabic: "أبب", meaning: "أراد" },
  { musnad: "𐩣𐩧𐩣", arabic: "مرم", meaning: "هدف / غاية" },
  { musnad: "𐩱𐩠𐩱𐩡", arabic: "أهل", meaning: "أهل / عائلة" },
];

// --- Sentences (from real inscriptions) ---

export const musnadSentences: MusnadSentence[] = [
  {
    musnad: "𐩣𐩫𐩧𐩨 𐩫𐩧𐩨𐩱𐩺𐩠 𐩥𐩲𐩧",
    arabic: "مكرب كربئيل وتر",
    source: "نقش النصر (RES 3945)",
  },
  {
    musnad: "𐩣𐩡𐩫 𐩪𐩨𐩱 𐩨𐩡𐩪𐩣 𐩱𐩡𐩣𐩤𐩠 𐩣𐩡𐩪𐩧 𐩣𐩱𐩧𐩨",
    arabic: "ملك سبأ بسم المقه مسر مأرب",
    source: "نقش مأرب التذكاري",
  },
  {
    musnad: "𐩨𐩡𐩪𐩣 𐩱𐩡𐩣𐩤𐩠 𐩡𐩠 𐩱𐩧𐩢 𐩮𐩡𐩪𐩢 𐩪𐩡𐩣",
    arabic: "بسم المقه ل أرح صلح سلام",
    source: "نقش دعائي",
  },
  {
    musnad: "𐩱𐩡𐩠 𐩱𐩡𐩣𐩤𐩠 𐩡𐩠 𐩣𐩱𐩧𐩨 𐩨𐩡𐩪𐩣",
    arabic: "إله المقه ل مأرب بسم",
    source: "نقش معبد أوام",
  },
  {
    musnad: "𐩣𐩫𐩧𐩨 𐩫𐩧𐩨𐩱𐩺𐩠 𐩥𐩲𐩧 𐩡𐩠 𐩱𐩡𐩣𐩤𐩠 𐩪𐩨𐩱",
    arabic: "مكرب كربئيل وتر ل المقه سبأ",
    source: "نقش النصر (RES 3945)",
  },
  {
    musnad: "𐩣𐩡𐩫 𐩪𐩨𐩱 𐩪𐩡𐩣 𐩡𐩠 𐩣𐩱𐩧𐩨",
    arabic: "ملك سبأ سلام ل مأرب",
    source: "نقش سياسي",
  },
  {
    musnad: "𐩨𐩡𐩪𐩣 𐩱𐩡𐩣𐩤𐩠 𐩧𐩢𐩣 𐩡𐩠 𐩪𐩨𐩱",
    arabic: "بسم المقه رحم ل سبأ",
    source: "نقش دعائي",
  },
  {
    musnad: "𐩡𐩠 𐩱𐩡𐩣𐩤𐩠 𐩨𐩧𐩫 𐩡𐩠 𐩣𐩱𐩧𐩨 𐩡𐩠 𐩪𐩨𐩱",
    arabic: "ل المقه بارك ل مأرب ل سبأ",
    source: "نقش بركة",
  },
  {
    musnad: "𐩣𐩫𐩧𐩨 𐩫𐩧𐩨𐩱𐩺𐩠 𐩥𐩲𐩧 𐩬𐩮𐩧 𐩢𐩧𐩨 𐩱𐩱𐩣𐩺 𐩱𐩲𐩧𐩣𐩺",
    arabic: "مكرب كربئيل وتر نصر حرب أأميا أعمرا",
    source: "نقش النصر (RES 3945)",
  },
  {
    musnad: "𐩱𐩠𐩱𐩡 𐩣𐩱𐩧𐩨 𐩡𐩠 𐩱𐩡𐩣𐩤𐩠 𐩪𐩡𐩣",
    arabic: "أهل مأرب ل المقه سلام",
    source: "نقش أهالي مأرب",
  },
  {
    musnad: "𐩡𐩠 𐩱𐩡𐩣𐩤𐩠 𐩡𐩠 𐩦𐩺𐩢 𐩡𐩠 𐩮𐩧𐩥𐩢",
    arabic: "ل المقه ل شوح ل ل صرواح",
    source: "نقش حضرمي",
  },
  {
    musnad: "𐩣𐩡𐩫 𐩪𐩨𐩱 𐩨𐩡𐩪𐩣 𐩱𐩡𐩣𐩤𐩠 𐩡𐩠 𐩣𐩱𐩧𐩨",
    arabic: "ملك سبأ بسم المقه ل مأرب",
    source: "نقش تأسيس",
  },
  {
    musnad: "𐩨𐩡𐩪𐩣 𐩱𐩡𐩣𐩤𐩠 𐩣𐩱𐩧𐩨 𐩪𐩡𐩣 𐩡𐩠 𐩪𐩨𐩱",
    arabic: "بسم المقه مأرب سلام ل سبأ",
    source: "نقش بناء",
  },
  {
    musnad: "𐩣𐩫𐩧𐩨 𐩫𐩧𐩨𐩱𐩺𐩠 𐩥𐩲𐩧 𐩡𐩠 𐩱𐩡𐩣𐩤𐩠 𐩪𐩡𐩣 𐩡𐩠 𐩪𐩨𐩱",
    arabic: "مكرب كربئيل وتر ل المقه سلام ل سبأ",
    source: "نقش النصر (RES 3945)",
  },
  {
    musnad: "𐩱𐩠𐩱𐩡 𐩪𐩨𐩱 𐩨𐩡𐩪𐩣 𐩱𐩡𐩣𐩤𐩠 𐩪𐩡𐩣",
    arabic: "أهل سبأ بسم المقه سلام",
    source: "نقش دعائي شعبي",
  },
  {
    musnad: "𐩡𐩠 𐩱𐩡𐩣𐩤𐩠 𐩡𐩠 𐩣𐩱𐩧𐩨 𐩪𐩡𐩣 𐩡𐩠 𐩱𐩠𐩱𐩡 𐩪𐩨𐩱",
    arabic: "ل المقه ل مأرب سلام ل أهل سبأ",
    source: "نقش بركة جماعي",
  },
];

// --- Key Periods (Timeline) ---

export const timelinePeriods = [
  {
    period: "القرن 10 ق.م",
    title: "بداية مملكة سبأ",
    description: "ظهور مملكة سبأ في مأرب وبدء تدوين النقوش بالمسند.",
  },
  {
    period: "القرن 8 ق.م",
    title: "ازدهار الممالك",
    description: "ظهور ممالك معين وحضرموت وقتبان إلى جانب سبأ.",
  },
  {
    period: "القرن 7 ق.م",
    title: "عصر المكاربة",
    description: "حكم المكاربة وازدهار تجارة اللبان والبخور.",
  },
  {
    period: "القرن 1 ق.م",
    title: "تحول سياسي",
    description: "تحول حكم سبأ من المكاربة إلى الملوك وتغيرات في النظام السياسي.",
  },
  {
    period: "القرن 3 م",
    title: "صعود حمير",
    description: "صعود مملكة حمير وبدء تراجع الممالك القديمة تدريجياً.",
  },
  {
    period: "القرن 6 م",
    title: "نهاية المسند",
    description: "انحسار الكتابة بالمسند وانتشار الكتابة بالخط العربي الشمالي.",
  },
];
