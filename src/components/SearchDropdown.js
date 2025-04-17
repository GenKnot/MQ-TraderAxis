export default function SearchDropdown() {
    return (
        <div className="search-popup">
            <span className="search-back-drop"></span>

            <div className="search-inner">
                <div className="container">
                    <button className="close-search"><span className="la la-times"></span></button>
                    <form method="post" action="/">
                        <div className="form-group">
                            <input type="search" name="search-field" placeholder="Type your keyword"
                                   required=""/>
                            <button type="submit"><i className="fal fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}