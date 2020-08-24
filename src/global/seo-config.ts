const titleSuffix = " - David López Castellote 💻 👨‍🏫";
const twitterUser = "@_dlopezcast";

let seoConfig = {
    twitterUser,
    titleSuffix,
    root: {
        title: "David López Castellote 💻 👨‍🏫",
        description: "Página web personal de David López Castellote: programador y proyecto de futuro profesor 💻 👨‍🏫",
        image:  "/assets/profile.jpeg"
    },
    blog: {
        title: "📖 Blog" + titleSuffix,
        description: "Blog enfocado a la programación, el desarrollo web y móvil y la educación.",
        image: "/assets/blog.png"
    },
    contact: {
        title: "📧 Contacto" + titleSuffix,
        description: "¡Contacta conmigo!",
        image:  "/assets/contact.png"
    },
    about: {
        title: "🧐 Sobre mí" + titleSuffix,
        description: "Descubre un poco acerca de mí.",
        image:  "/assets/about.png"
    }
};

export default seoConfig;