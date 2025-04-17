import {pricingPlans} from "@/data/pricePlan";


export default function PricingSection() {
    return (
        <div className="pricing-section section-padding pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="section-title">
                            <h2>Pricing Plan</h2>
                            <span><i className="las la-arrow-down mt-30"></i></span>
                        </div>
                    </div>
                </div>

                <div className="row gx-5">
                    {pricingPlans.map(plan => (
                        <div key={plan.id} className="col-lg-4 col-md-6">
                            <div className={`single-price-item ${plan.isActive ? 'active' : ''}`}>
                                <h5>{plan.name}</h5>
                                <div className="price-box">
                                    {plan.priceRange ? (
                                        <h3>
                                            <span>{plan?.currency}</span>{plan.priceRange[0]} - <span>{plan?.currency}</span>{plan.priceRange[1]}
                                        </h3>
                                    ) : (
                                        <h3>
                                            {plan.percentage} <span>{plan.percentageText}</span>
                                        </h3>
                                    )}
                                </div>
                                <div className="price-list">
                                    <ul>
                                        {plan.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="las la-check"></i>{feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
