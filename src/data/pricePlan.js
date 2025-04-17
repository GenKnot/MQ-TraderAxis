export const pricingPlans = [
    {
        id: 1,
        name: "Basic Plan",
        currency: '$',
        priceRange: [2500, 5000],
        features: [
            "Interior Design",
            "Custom design concept",
            "3D Rendering of proposed design",
            "Detailed shopping list of decor items",
            "Floor plan and elevations",
            "Ideal for refreshing a single room or space"
        ],
        isActive: false
    },
    {
        id: 2,
        name: "Premium Plan",
        currency: '$',
        priceRange: [10000, 20000],
        features: [
            "Architectural Design",
            "Consultation with principal architect",
            "Detailed site analysis and feasibility study",
            "Custom design concept",
            "Full set of construction documentation",
            "Assistance with permit applications",
            "Ideal for building new or major renovation"
        ],
        isActive: true  // Highlighted plan
    },
    {
        id: 3,
        name: "Deluxe Plan",
        percentage: '10%',
        percentageText: 'of Project Cost',
        features: [
            "Project Management",
            "Full project management services",
            "Co-ordination with contractors",
            "Project Scheduling",
            "Budget Management",
            "Quality Control",
            "Regular Process Report",
            "Ideal for ensuring project highest standard"
        ],
        isActive: false
    }
];