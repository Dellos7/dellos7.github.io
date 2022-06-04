const titleSuffix = " - David López Castellote 💻 👨‍🏫";
const twitterUser = "@_dlopezcast";

let seoConfig = {
    twitterUser,
    titleSuffix,
    root: {
        title: "David López Castellote - Informática y Educación 💻 👨‍🏫",
        description: "Página web personal de David López Castellote: programador y profesor de informática 💻 👨‍🏫",
        image:  window.location.origin + "/assets/profile.jpeg"
    },
    blog: {
        title: "📖 Blog",
        description: "Blog enfocado a la programación, el desarrollo web y móvil y la educación.",
        image: window.location.origin + "/assets/blog.png"
    },
    contact: {
        title: "📧 Contacto",
        description: "¡Contacta conmigo!",
        image:  window.location.origin + "/assets/contact.png"
    },
    about: {
        title: "🧐 Sobre mí",
        description: "Descubre un poco acerca de mí.",
        image:  window.location.origin + "/assets/about.png"
    },
    servicios: {
        title: "💼 Servicios",
        description: "¿Qué puedo hacer por ti?",
        image:  window.location.origin + "/assets/servicios.png"
    }
};

export default seoConfig;