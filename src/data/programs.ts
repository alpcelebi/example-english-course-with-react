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
        title: "Preschool English",
        ageRange: "4-6 Years",
        description: "A fun start to English with games, songs, and activities.",
        duration: "2 Days / 4 Hours per Week",
        features: ["Game-Based Learning", "Foreign Instructor Support", "Motor Skill Development"],
        image: "/kuzemdilegitim-website/images/preschool.jpg",
        category: "kids"
    },
    {
        id: "primary",
        title: "Primary School Group",
        ageRange: "7-10 Years",
        description: "Education focused on speaking practice and school curriculum support.",
        duration: "2 Days / 4 Hours per Week",
        features: ["Vocabulary", "Reading & Writing", "Speaking Club"],
        image: "/kuzemdilegitim-website/images/primary.jpg",
        category: "kids"
    },
    {
        id: "middle",
        title: "Middle School Prep",
        ageRange: "11-14 Years",
        description: "High school entrance exam support and fluent speaking focused program.",
        duration: "2 Days / 6 Hours per Week",
        features: ["Exam Preparation", "Grammar & Speaking", "Project-Based Learning"],
        image: "/kuzemdilegitim-website/images/middle.jpg",
        category: "teens"
    },
    {
        id: "speaking-club",
        title: "Speaking Club",
        ageRange: "7-14 Years",
        description: "Activity-filled weekend club where only English is spoken.",
        duration: "1 Day / 3 Hours per Week",
        features: ["Native English Speaker Instructors", "Drama & Theater", "Social Activities"],
        image: "/kuzemdilegitim-website/images/speaking.jpg",
        category: "kids"
    },
    {
        id: "adults",
        title: "Yetişkin İngilizcesi",
        ageRange: "18+ Yaş",
        description: "İş veya seyahat için hızlı ve etkili İngilizce.",
        duration: "Esnek Saatler",
        features: ["Birebir Ders İmkanı", "Business English", "Esnek Program"],
        image: "/kuzemdilegitim-website/images/adults.jpg",
        category: "adults"
    }
];
