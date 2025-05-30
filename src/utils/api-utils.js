import {API_BASE_URL, ENDPOINTS} from '../../constants/api';


export async function fetchFromAPI(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching from API:', error);
        return null;
    }
}


export async function fetchCategories() {
    return fetchFromAPI(ENDPOINTS.CATEGORIES.LIST);
}

export async function fetchBanners() {
    return fetchFromAPI(ENDPOINTS.BANNERS.LIST);
}

export async function fetchAllProducts() {
    return fetchFromAPI(ENDPOINTS.PRODUCTS.LIST);
}

export async function fetchProductsByCategory(categorySlug) {
    return fetchFromAPI(ENDPOINTS.PRODUCTS.BY_CATEGORY(categorySlug));
}

export async function fetchProductDetails(id) {
    return fetchFromAPI(ENDPOINTS.PRODUCTS.DETAIL(id));
}

export async function fetchFaqs() {
    return fetchFromAPI(ENDPOINTS.FAQ.LIST);
}


export async function submitContactForm(formData) {
    try {
        // First, get CSRF token
        const csrfResponse = await fetch(`${API_BASE_URL}/api/csrf-token/`, {
            method: 'GET',
            credentials: 'include',
        });

        let csrfToken = '';
        if (csrfResponse.ok) {
            const csrfData = await csrfResponse.json();
            csrfToken = csrfData.csrfToken;
        }

        // If we don't get a token from API, try to get from cookie
        if (!csrfToken) {
            const getCookie = (name) => {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) return parts.pop().split(';').shift();
            };
            csrfToken = getCookie('csrftoken');
        }

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };

        if (csrfToken) {
            headers['X-CSRFToken'] = csrfToken;
        }

        const response = await fetch(ENDPOINTS.CONTACT.SUBMIT, {
            method: 'POST',
            headers: headers,
            credentials: 'include',
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API error response:', errorText);
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        return {
            success: true,
            message: data.message || "Thank you for your message!",
            data: data
        };
    } catch (error) {
        console.error('Error submitting form:', error);
        return {
            success: false,
            message: error.message || 'Network error occurred',
        };
    }
}