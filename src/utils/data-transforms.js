export function transformCarvingData(apiCarving) {
    if (!apiCarving) return null;

    return {
        id: apiCarving.id,
        title: apiCarving.title,
        category: apiCarving.category_name,
        description: apiCarving.description,
        material: apiCarving.material,
        dimensions: apiCarving.dimensions,
        price: parseFloat(apiCarving.price),
        inStock: apiCarving.in_stock,
        image: apiCarving.main_image,
        gallery: apiCarving.gallery_images?.map(img => img.image) || []
    };
}


export function transformCarvingsArray(apiCarvings) {
    if (!apiCarvings || !Array.isArray(apiCarvings)) return [];

    return apiCarvings.map(transformCarvingData);
}


export function createSlug(str) {
    if (!str) return '';
    return str.toLowerCase().replace(/\s+/g, '-');
}


export function formatPrice(price) {
    if (!price) return '$0';

    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    return `$${numPrice.toLocaleString()}`;
}