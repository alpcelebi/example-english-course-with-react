export interface Program {
    id: string;
    title: string;
    ageRange: string;
    description: string;
    duration: string;
    features: string[];
    image: string;
    category: 'kids' | 'teens' | 'adults';
}

export const PROGRAMS: Program[] = [
    {
        id: "preschool",
        title: "Okul Öncesi İngilizce",
        ageRange: "4-6 Yaş",
        description: "Oyunlar, şarkılar ve aktivitelerle İngilizceye eğlenceli bir başlangıç.",
        duration: "Haftada 2 Gün / 4 Saat",
        features: ["Oyun Tabanlı Öğrenme", "Yabancı Eğitmen Desteği", "Motor Beceri Gelişimi"],
        image: "/images/preschool.jpg",
        category: "kids"
    },
    {
        id: "primary",
        title: "İlkokul Grubu",
        ageRange: "7-10 Yaş",
        description: "Okul müfredatına destek ve konuşma pratiği ağırlıklı eğitim.",
        duration: "Haftada 2 Gün / 4 Saat",
        features: ["Kelime Hazinesi", "Okuma & Yazma", "Speaking Club"],
        image: "/images/primary.jpg",
        category: "kids"
    },
    {
        id: "middle",
        title: "Ortaokul Hazırlık",
        ageRange: "11-14 Yaş",
        description: "LGS hazırlık desteği ve akıcı konuşma odaklı program.",
        duration: "Haftada 2 Gün / 6 Saat",
        features: ["Sınav Hazırlık", "Grammar & Speaking", "Proje Bazlı Öğrenme"],
        image: "/images/middle.jpg",
        category: "teens"
    },
    {
        id: "speaking-club",
        title: "Speaking Club",
        ageRange: "7-14 Yaş",
        description: "Sadece İngilizce konuşulan, aktivite dolu hafta sonu kulübü.",
        duration: "Haftada 1 Gün / 3 Saat",
        features: ["Ana Dili İngilizce Olan Eğitmenler", "Drama & Tiyatro", "Sosyal Aktiviteler"],
        image: "/images/speaking.jpg",
        category: "kids"
    },
    {
        id: "adults",
        title: "Yetişkin İngilizcesi",
        ageRange: "18+ Yaş",
        description: "İş veya seyahat için hızlı ve etkili İngilizce.",
        duration: "Esnek Saatler",
        features: ["Birebir Ders İmkanı", "Business English", "Esnek Program"],
        image: "/images/adults.jpg",
        category: "adults"
    }
];
