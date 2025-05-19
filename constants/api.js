// Production URL
export const API_BASE_URL = 'https://api.trade-axis.com';

// Development URL
// export const API_BASE_URL = 'http://127.0.0.1:8000';

export const ENDPOINTS = {
    CATEGORIES: {
        LIST: `${API_BASE_URL}/api/categories/`,
    },
    BANNERS: {
        LIST: `${API_BASE_URL}/api/banners/`,
    },
    PRODUCTS: {
        LIST: `${API_BASE_URL}/api/products/`,
        BY_CATEGORY: (slug) => `${API_BASE_URL}/api/products/?category=${slug}`,
        DETAIL: (id) => `${API_BASE_URL}/api/products/${id}/`,
    },
    SHOWCASE: {
        LIST: `${API_BASE_URL}/api/showcase/`,
    },
    FAQ: {
        LIST: `${API_BASE_URL}/api/faqs/`,
    },
    CONTACT: {
        SUBMIT: `${API_BASE_URL}/api/contacts/`,
    },
    NEWSLETTER: {
        SUBSCRIBE: `${API_BASE_URL}/api/newsletter/subscribe/`,
    },
    TESTIMONIALS: {
        LIST: `${API_BASE_URL}/api/testimonials/`,
    },
};