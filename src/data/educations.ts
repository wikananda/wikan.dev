export interface Education {
    period: string;
    institution: string;
    degree: string;
    location: string;
    points: string[];
}

export const educations = [
    {
        period: "Feb 2025 - Dec 2025",
        institution: "Apple Developer Academy @ Binus - Bali",
        degree: "Junior iOS Developer",
        location: "Bali, Indonesia",
        points: [
            "Integrated LLM model in Supabase Edge Functions.",
            "Turned Apple Watch s CoreMotion data into a fun exercise game where player can jump right, left, up and down.",
            "Built GAN pipeline to help user virtually try make-up product by photo image.",
        ]
    },
    {
        period: "Aug 2020 - Aug 2024",
        institution: "Institut Teknologi Sepuluh Nopember",
        degree: "Bachelor of Mathematics, GPA: 3.64/4.00",
        location: "Surabaya, Indonesia",
        points: [
            "Machine Learning Cohort at Bangkit Academy 2023 by Google, Tokopedia, Gojek & Traveloka",
            "Data Science Short Program participant at Shibaura Institute of Technology - Tokyo, Japan.",
            "Led a team of 5 in Publication Design and Documentation staff for Ini Lho ITS! Bali 2022",
        ]
    }
]