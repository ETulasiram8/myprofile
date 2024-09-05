import './Portfolio.css';

function MyPortfolio() {
    return (
        <div>
            <header className="custom-bg-color">
                <nav className="navbar navbar-expand-md navbar-light p-2 custom-bg-color">
                    <a href="#" className="navbar-brand ms-5 fw-bold fs-2">Web<span className="text-success">Dev</span></a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-5">
                            <a href="#" className="nav-item nav-link active fs-5 fw-medium">Home</a>
                            <a href="#skills" className="nav-item nav-link active fs-5 fw-medium">Skills</a>
                            <a href="#" className="nav-item nav-link active fs-5 fw-medium">About</a>
                            <a href="#projects" className="nav-item nav-link active fs-5 fw-medium">Projects</a>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-around">
                            <div className="card border-0 custom-bg-color" style={{ width: '25rem' }}>
                                <div className="card-body">
                                    <h1 className="card-title custom-font fw-bold">I'm Tulasi Ram</h1>
                                    <h5 className="card-subtitle mb-2 fs-4">Front-End Developer</h5>
                                    <p className="card-text fs-5">Turning ideas into interactive reality.</p>
                                    <ul className="list-inline list-unstyled">
                                        <li className="list-inline-item">
                                            <a href="https://github.com/ETulasiram8" target="_blank">
                                                <i className="bi bi-github text-secondary"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://www.linkedin.com/in/e-tulasi-ram-a70a9a264/" target="_blank">
                                                <i className="bi bi-linkedin text-secondary"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="element-2">
                                <img className="profileimage" src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/hero-01dff752.svg" alt="demoProfile" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className="container-fluid custom-main-bg pb-5">
                    <div className="row">
                        <div className="col">
                            <div className="card border-0 pt-5 custom-main-bg">
                                <div className="card-body">
                                    <h1 className="fs-2" id="skills">Tech Stack</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col d-flex justify-content-between p-4">
                            <div className="card me-4 border-0 custom-main-bg" style={{ width: '24rem' }}>
                                <i className="fa-brands fa-html5"></i>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold fs-6">HTML & CSS</h5>
                                    <p className="card-text custom-color-para">
                                        Proficient in HTML and CSS, creating user-friendly and responsive websites to enhance user experience.
                                    </p>
                                </div>
                            </div>
                            <div className="card me-4 border-0 custom-main-bg" style={{ width: '24rem' }}>
                                <i className="fa-brands fa-js"></i>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">JavaScript</h5>
                                    <p className="card-text custom-color-para">
                                        Skilled in JavaScript, developing interactive and dynamic web applications to ensure smooth user interactions and functionality.
                                    </p>
                                </div>
                            </div>
                            <div className="card me-4 border-0 custom-main-bg" style={{ width: '26rem' }}>
                                <i className="fa-brands fa-react"></i>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">React</h5>
                                    <p className="card-text custom-color-para">
                                        Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="container-fluid pt-5">
                    <div className="row">
                        <div className="col d-flex justify-content-around align-items-center p-5">
                            <div className="card border-0" style={{ width: '27rem' }}>
                                <img
                                    className="codeImage"
                                    src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/about-03f57d6e.svg"
                                    alt="codedemo"
                                />
                            </div>
                            <div className="card border-0" style={{ width: '36rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title fs-2">Code And Coffee</h5>
                                    <hr className="mt-4" />
                                    <p className="card-text lh-lg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maiores itaque doloribus asperiores dolorum quas voluptates distinctio, porro beatae quam provident libero animi totam, praesentium voluptatem corrupti dignissimos ipsum accusantium.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-fluid p-5 custom-main-bg">
                    <div className="row">
                        <div className="col">
                            <div className="card border-0 pt-5 custom-main-bg">
                                <div className="card-body">
                                    <h1 className="fs-2" id="projects">Web creations</h1>
                                </div>
                            </div>
                            <hr className="mb-5" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card custom-border border-0" style={{ width: '23rem' }}>
                                <img className="custom-image"
                                    src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="computer"
                                />
                                <div className="card-body rounded-bottom">
                                    <h5 className="card-title fw-bold">First project</h5>
                                    <p className="card-text lh-lg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.
                                    </p>
                                    <a href="#" className="text-secondary">
                                        <i className="bi bi-globe2"></i>
                                    </a>
                                    <a href="https://github.com/ETulasiram8" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-github text-secondary"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card custom-border border-0" style={{ width: '23rem' }}>
                                <img className="custom-image"
                                    src="https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="computer"
                                />
                                <div className="card-body rounded-bottom">
                                    <h5 className="card-title fw-bold">Second project</h5>
                                    <p className="card-text lh-lg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.
                                    </p>
                                    <a href="#" className="text-secondary">
                                        <i className="bi bi-globe2"></i>
                                    </a>
                                    <a href="https://github.com/ETulasiram8" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-github text-secondary"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card custom-border border-0" style={{ width: '23rem' }}>
                                <img className="custom-image"
                                    src="https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="computer"
                                />
                                <div className="card-body  ">
                                    <h5 className="card-title fw-bold">Third project</h5>
                                    <p className="card-text lh-lg">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.
                                    </p>
                                    <a href="#" className="text-secondary">
                                        <i className="bi bi-globe2"></i>
                                    </a>
                                    <a href="https://github.com/ETulasiram8" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-github text-secondary"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default MyPortfolio;
