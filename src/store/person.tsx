import image from "../rsc/tristan.jpg";

interface Person {
    firstName: string;
    lastName: string;
    image: string;
    email: string;
    website: string;
    phone?: string;
    phoneHours?: string;
    instagram?: string;
    github?: string;
    linkedin?: string;
    xing?: string;
    medium?: string;
    city: string;
    locationHint?: string;
    state: string;
    country: string;
    preferredIdes: string[];
    favTec: string[];
    operatingSystems: string[];
    programs: string[];
    interests: string[];
    about: string[];
    job: string;
    employer: string;
    qualities: string[];
    languages: {name: string, level: string}[];
}

export const person:Person = {
    firstName: "Tristan",
    lastName: "Ratz",
    job: "Generative AI Consultant",
    employer: "Genow AI",
    image: image,
    qualities: ["team player", "analytical", "curious", "fast learner"],
    languages: [
        {name: "German", level: "native"},
        {name: "English", level: "C1"},
        {name: "French", level: "B1-B2"},
    ],
    email: "contact@tristanratz.com",
    website: "https://tristanratz.com",
    phone: "+49 (0) 6150/1833114",
    phoneHours: "mo-fr 8AM-8PM CET",
    instagram: "https://www.instagram.com/tristan.ratz/",
    github: "https://www.github.com/tristanratz",
    linkedin: "https://www.linkedin.com/in/ratz",
    medium: "https://medium.com/@tristanratz",
    city: "Darmstadt",
    locationHint: "near Frankfurt",
    state: "Hesse",
    country: "Germany",
    preferredIdes: ["IntelliJ", "PyCharm", "VS Code"],
    favTec: ["Transformers", "Python", "PyTorch", "JavaScript", "React", "Vue",
        "Amazon Web Services (AWS)", "Google Cloud (GCP)"],
    operatingSystems: ["macOS", "Ubuntu", "Windows"],
    programs: ["MS Office", "Photoshop", "Affinity Suite"],
    interests: ["Large Language Models (LLM)", "Natural Language Processing (NLP)", "Artificial Intelligence (AI)", "Retrieval Augmented Generation (RAG)"],
    about: [
        "Currently working as a Generative AI Consultant at Genow AI.",

        "After recently finishing my Master's degree in Information Systems at the Technical University of Darmstadt, I wanted to pursue what I had researched during my studies: ",
        "Natural Language Processing (NLP).",

        "I have already gained experience in the field and project management through " +
        "various internships and working experiences. Just recently I co-authored an exciting role on " +
        "our work in summary evaluation.",
        
        "I am ambitious, curious, a fast learner and a team player, which makes me, besides my experience a perfect " +
        "fit for almost all kinds of projects. Do not hesitate to contact me.",
        
        "Besides my great commitment to NLP and the recent developments with LLMs I am eagerly following the recent earth shattering changes in this field " +
        "and want to be at the forefront of this economy and society changing breakthrough."
    ]
}
