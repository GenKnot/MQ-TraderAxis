import Link from "next/link";

export default function Breadcrumb({ menus }) {
    return (
        <div className="breadcrumb-area pt-50">
            <div className="container">
                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            {/* Home Link */}
                            <li className="breadcrumb-item">
                                <Link href="/">Home</Link>
                            </li>

                            {/* Dynamic Breadcrumb Items */}
                            {menus.map((menu, index) => {
                                const isLast = index === menus.length - 1;

                                return (
                                    <li
                                        key={index}
                                        className={`breadcrumb-item ${isLast ? 'active' : ''}`}
                                        aria-current={isLast ? 'page' : undefined}
                                    >
                                        {isLast ? (
                                            menu.label
                                        ) : (
                                            <Link href={menu.to}>{menu.label}</Link>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
}
