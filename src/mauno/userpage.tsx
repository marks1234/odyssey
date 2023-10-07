import "./userpage.css";

export const Userpage = () => {
    return (
        <div className="container mt-3">
            {/* <div className="row d-flex justify-content-center"> */}
                <div className="col-md-4">
                    <div className="card p-3 py-4">
                        <div className="text-center">
                            <img src="IMAGE TO ADD" width="100" className="rounded-circle" alt="User"/>
                        </div>
                        <div className="text-center mt-3">
                            <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                            <h5 className="mt-2 mb-0">Samuel Pitko</h5>
                            <span>UI/UX Designer</span>
                            <div className="px-4 mt-1">
                                <p className="fonts">Something Something</p>
                            </div>
                            <ul className="social-list">
                                <li><i className="fa fa-facebook"></i></li>
                                <li><i className="fa fa-dribbble"></i></li>
                                <li><i className="fa fa-instagram"></i></li>
                                <li><i className="fa fa-linkedin"></i></li>
                                <li><i className="fa fa-google"></i></li>
                            </ul>
                            <div className="buttons">
                                <button className="btn btn-outline-primary px-4">Message</button>
                                <button className="btn btn-primary px-4 ms-3">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}
export default Userpage;
