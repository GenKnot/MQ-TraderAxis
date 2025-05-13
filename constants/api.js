// Development URL
export const API_BASE_URL = 'http://127.0.0.1:8000';

// Production URL
// export const API_BASE_URL = 'https://api.mwcarving.com';

export const ENDPOINTS = {
    CATEGORIES: {
        LIST: `${API_BASE_URL}/api/categories/`,
    },

    BANNERS: {
        LIST: `${API_BASE_URL}/api/banners/`,
    },

    CARVINGS: {
        LIST: `${API_BASE_URL}/api/carvings/`,
        DETAIL: (id) => `${API_BASE_URL}/api/carvings/${id}/`,
        BY_CATEGORY: (categorySlug) => `${API_BASE_URL}/api/carvings/?category=${categorySlug}`,
    },

    FEATURED: {
        LIST: `${API_BASE_URL}/api/featured-projects/`,
    },

    CONTACT: {
        SUBMIT: `${API_BASE_URL}/api/contact/`,
    },

    FAQ: {
        LIST: `${API_BASE_URL}/api/faqs/`,
    }
};