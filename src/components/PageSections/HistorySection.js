import historyImage1 from "@/assets/img/about/history-1.jpg"
import historyImage2 from "@/assets/img/about/history-2.jpg"
import historyImage3 from "@/assets/img/about/history-3.jpg"

export default function HistorySection() {
    return (
        <div className="history-section section-padding pt-60 pb-60">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-history-item">
                            <div className="history-img">
                                <img src={historyImage1.src} alt="Wood carving history"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-history-item">
                            <div className="content-wrap">
                                <h5>MWCarving Founding</h5>
                                <p>1990</p>
                                <p>Michael Wilson establishes MWCarving with a vision to create museum-quality wooden sculptures and preserve traditional woodcarving techniques.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-history-item">
                            <div className="history-img d-none d-lg-block">
                                <img src={historyImage2.src} alt="Wood carving history"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="timeline-wrap">
                    </div>
                </div>

                <div className="row mt-120 align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-6 order-2">
                        <div className="single-history-item">
                            <div className="content-wrap">
                                <h5>First Major Exhibition</h5>
                                <p>1995</p>
                                <p>MWCarving gains international recognition with its first major exhibition at the International Wood Art Gallery in New York.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 order-1 order-xl-2">
                        <div className="single-history-item">
                            <div className="history-img">
                                <img src={historyImage3.src} alt="Wood carving history"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 d-xs-block d-xl-none mt-60 order-3">
                        <div className="single-history-item">
                            <div className="history-img">
                                <img src={historyImage2.src} alt="Wood carving history"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 order-4">
                        <div className="single-history-item">
                            <div className="content-wrap">
                                <h5>Expanding Our Workshop</h5>
                                <p>2005</p>
                                <p>As demand for our work grew, we expanded our workshop and brought in additional master carvers, apprentices, and designers to create a collaborative creative environment.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}