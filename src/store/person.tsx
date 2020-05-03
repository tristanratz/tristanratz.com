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
}

export const person:Person = {
    firstName: "Tristan",
    lastName: "Ratz",
    image: image,
    email: "contact@tristanratz.com",
    website: "https://tristanratz.com",
    phone: "+49 (0) 6150/1833114",
    phoneHours: "mo-fr 8AM-8PM CET",
    instagram: "https://www.instagram.com/tristan.ratz/",
    github: "https://www.github.com/tristanratz",
    linkedin: "https://www.linkedin.com/in/tristan-ratz-a45680120",
    city: "Darmstadt",
    locationHint: "near Frankfurt",
    state: "Hesse",
    country: "Germany",
    preferredIdes: ["IntelliJ", "PyCharm", "WebStorm"],
    favTec: ["Python", "git", "Tensorflow", "PyTorch", "Java", "HTML", "CSS", "JavaScript", "React", "Redux",
        "Amazon Web Services", "Google Cloud"],
    operatingSystems: ["macOS", "Ubuntu", "Windows"],
    programs: ["MS Office", "Photoshop", "Affinity Suite"],
    interests: ["Machine Learning", "Natural Language Processing", "Artificial Intelligence"],
    about: [
        "Currently studying business informatics at the Technical University of Darmstadt.",

        "Besides my great commitment to informatics I am very interested in Cloud Computing and the current " +
        "developments in Artificial Intelligence and natural language processing.",

        "At the moment employed as a working student at Finanz Informatik Solutions Plus GmbH, which is a " +
        "direct subsidiary of the information systems service provider of one of Germany's leading " +
        "financial institutes.",

        "I am ambitious, curious, a fast learner and a team player, which makes me, besides my experience a perfect " +
        "fit for almost all kinds of projects. Do not hesitate to contact me."
    ]
}