export const CONTACT_INFO = {
    phone: "0555 123 45 67",
    whatsapp: "905551234567", // Format for wa.me link
    address: "Example District, Science Street No:123, Kadıköy/Istanbul",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.88850567!2d28.87175402096417!3d41.00546324294877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa702809ea9e5%3A0xe820464d571dd6d6!2sIstanbul!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str",
    instagram: "@exampleenglishcourse",
    workingHours: "Mon - Sat: 09:00 - 18:00",
};

export const SOCIAL_LINKS = {
    whatsapp: `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%2C%20I%20want%20to%20get%20information%20about%20your%20courses.`,
    instagram: "https://instagram.com/exampleenglishcourse",
    call: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`
};

export const ROUTES = {
    HOME: "/",
    COURSES: "/courses",
    ABOUT: "/about",
    GALLERY: "/gallery",
    FAQ: "/faq",
    CONTACT: "/contact",
};
