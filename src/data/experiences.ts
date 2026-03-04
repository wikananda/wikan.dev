export interface Experience {
    period: string;
    company: string;
    role: string;
    location: string;
    points: string[];
}

export const experiences: Experience[] = [
    {
        period: "Sep 2025 - Present",
        company: "PT Summon Cipta Inovasi",
        role: "Machine Learning Engineer",
        location: "Remote, Indonesia",
        points: [
            "Built semantic scoring and reasoning LLM pipeline for credit analysis.",
            "Trained XGB models and achieved credit scoring accuracy by 83,73% and R2 by 0.9015.",
            "Collaborate and communicate with client to align technical integration with credit analyst"
        ]
    },
    {
        period: "Feb 2024 - Jul 2024",
        company: "National Taiwan University of Science and Technology",
        role: "Student Laboratory Internship",
        location: "Taipei, Taiwan",
        points: [
            "Built ML Algorithm for Sentiment Analysis with 89.33% accuracy.",
            "Built topic modeling algorithm for product reviews with 0.744 coherence score and gained 6 valuable insights.",
            "Implemented 5 text mining algorithms: TF-IDF; LDA; RNN; LSTM; and BERT"
        ]
    },
    {
        period: "Aug 2023 - May 2025",
        company: "Institut Teknologi Sepuluh Nopember",
        role: "Deep Learning Research Assistant",
        location: "Surabaya, Indonesia",
        points: [
            "Analyzed and processed trajectory 5 types of trajectory dataset from plane, vessel, cars and elephant trajectory.",
            "Developed Trajectory Tracking System (TTS) model with metric MSE 1.3899, outperforming other 4 baseline models.",
            "Conducted algorithm class tutor for 1 semester."
        ]
    }
];