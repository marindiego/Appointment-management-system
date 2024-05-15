import dentalLogo from "../assets/icons8-dental-braces-24.png";
import hearthLogo from "../assets/icons8-heart-with-pulse-50.png";
import childrenLogo from "../assets/icons8-children-50.png";
import dermatologyLogo from "../assets/icons8-dermatology-30.png";

const services = [
    {
        id: 1,
        icon: dentalLogo,
        title: 'Orthodontics',
        description: 'Providing diagnosis, treatment, and correction of misaligned teeth and jaws using braces, aligners, and other orthodontic appliances.',
        className: 'card-service-orthodontics'
    },
    {
        id: 2,
        icon: hearthLogo,
        title: 'Cardiology',
        description: 'Diagnosing, treating, and managing diseases of the heart, blood vessels, and circulatory system, including chest pain, heart attacks, angina, etc.',
        className: 'card-service-cardiology'
    },
    {
        id: 3,
        icon: childrenLogo,
        title: "Pediatrics",
        description: "Offering medical care for infants, children, and adolescents, including well-child check-ups, vaccinations, treatment of common childhood illnesses.",
        className: 'card-service-pediatrics'
    },
    {
        id: 4,
        icon: dermatologyLogo,
        title: "Dermatology",
        description: "Providing diagnosis and treatment of skin, hair, and nail conditions, including acne, eczema, psoriasis, skin cancer screenings, and cosmetic procedures like Botox or chemical peels.",
        className: 'card-service-dermatology'
    }
]
export default services;