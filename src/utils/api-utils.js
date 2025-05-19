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
        const response = await fetch(ENDPOINTS.CONTACT.SUBMIT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('API error response:', errorData);

            const error = new Error(`API error: ${response.status} - ${response.statusText}`);
            error.status = response.status;
            error.data = errorData;
            throw error;
        }

        const data = await response.json();
        
        return {
            success: true,
            message: "Thank you for your message!",
            data: data
        };
    } catch (error) {
        console.error('Error submitting form:', error);

        return {
            success: false,
            message: error.message || 'Network error occurred',
            status: error.status || 'network_error'
        };
    }
}