export interface Project {
    title: string;
    description: string;
    image: string;
    github?: string;
    link?: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        title: "sona.ai",
        description: "Interview focused voice transcription and summarization based on WhisperX and Llama.",
        image: "/sona-ai.png",
        github: "https://github.com/wikananda/sona-ai",
        tags: ["Speech", "ASR", "LLM", "Next.js", "Whisper", "Llama"]
    },
    {
        title: "Dynamic Image Classification",
        description: "Image classification code for any datasets.",
        image: "/image-classification.png",
        github: "https://github.com/wikananda/image-classification-for-dynamic-datasets",
        tags: ["Image Classification", "CNN", "Transformer", "PyTorch"]
    },
    {
        title: "Woman's E-commerce Clothing Review Topic Modeling",
        description: "Topic modeling with LDA and BERTopic and clustering using K-Means and HDBSCAN",
        image: "/woman-topic-modeling.png",
        github: "https://github.com/wikananda/Womens-E-Commerce-Clothing-Review-Topic-Modeling",
        tags: ["Topic Modeling", "NLP", "Clustering", "Data Analysis"]
    },
    {
        title: "Store Sales Forecasting - Ensemble Gradient Boosting",
        description: "Kaggle competition for store sales forecasting",
        image: "/store-sales.png",
        github: "https://github.com/wikananda/store-sales-forecasting",
        tags: ["Data Science", "Time Series", "Gradient Boosting", "Kaggle Comp."]
    },
    {
        title: "Partial Makeup Transfer by Template using SSAT++",
        description: "Partial makeup transfer by template implementing SSAT++",
        image: "/makeup-ssat.png",
        github: "https://github.com/wikananda/Partial-makeup-transfer-by-template",
        tags: ["GAN", "FastAPI", "Makeup Transfer", "PyTorch"]
    },
];
