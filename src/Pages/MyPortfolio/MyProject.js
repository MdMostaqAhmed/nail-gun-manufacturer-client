import React from 'react';

const MyProject = () => {
    return (
        <div className="grid grid-cols-1 my-3 lg:grid-cols-3 gap-5">

            <div
                className="card w-96 bg-base-100 shadow-lg mx-auto image-full"
            >
                <figure>
                    <img src="https://i.ibb.co/chCcTcW/nailgunzone.png" alt="Shop" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Nail Gun Zone</h2>
                    <p>
                        It is a personal website for giving services for clients who want to get immigration service. The app contains Login and registration functions. First you need register with your google account or github account. When you first register with your email, you need to verify with your email. You can not use one email more than one time. Then you can login to this website. When you try to know any service details you need to login first. If you forget your password you can resat it.
                    </p>
                    <div className="card-actions justify-end">
                        <a
                            href="https://nail-gun-zone.web.app/"
                            className="btn btn-primary"
                        >
                            Explore Site
                        </a>
                    </div>
                </div>
            </div>

            <div
                className="card w-96 bg-base-100 shadow-lg mx-auto image-full"
            >
                <figure>
                    <img src="https://i.ibb.co/58ksS3W/bookshop.png" alt="Shop" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Bookshop Management</h2>
                    <p>
                        It is a personal website for giving services for clients who want to get immigration service. The app contains Login and registration functions. First you need register with your google account or github account. When you first register with your email, you need to verify with your email. You can not use one email more than one time. Then you can login to this website. When you try to know any service details you need to login first. If you forget your password you can resat it.
                    </p>
                    <div className="card-actions justify-end">
                        <a
                            href="https://book-shop-fbf65.web.app/"
                            className="btn btn-primary"
                        >
                            Explore Site
                        </a>
                    </div>
                </div>
            </div>


            <div
                className="card w-96 bg-base-100 shadow-xl mx-auto  image-full"
            >
                <figure>
                    <img src="https://i.ibb.co/fQSnmGD/immegration.png" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Immegration Service</h2>
                    <p>
                        It is a personal website for giving services for clients who want to get immigration service. The app contains Login and registration functions. First you need register with your google account or github account. When you first register with your email, you need to verify with your email. You can not use one email more than one time. Then you can login to this website. When you try to know any service details you need to login first. If you forget your password you can resat it.
                    </p>
                    <div className="card-actions justify-end">
                        <a href="https://immigration-service-auth.web.app/" className="btn btn-primary">
                            Explore Site
                        </a>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default MyProject;