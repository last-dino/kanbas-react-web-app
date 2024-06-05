export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card">
                            <img className="wd-course-image" src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold "}}>
                                    CS1234 React JS    
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack Software Developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-secondary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card">
                            <img className="wd-course-image" src="/images/cpp.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "skyblue", fontWeight: "bold "}}>
                                    CS1100 Intro to C++    
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Programming with C++
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-secondary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card">
                            <img className="wd-course-image" src="/images/python.png" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "gold", fontWeight: "bold "}}>
                                    CS5001 Python Programming   
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Introduction to programming with Python
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-secondary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card">
                            <img className="wd-course-image" src="/images/java.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "peru", fontWeight: "bold "}}>
                                    CS5004 OOP with Java   
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Object Oriented Programming with Java
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-secondary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card">
                            <img className="wd-course-image" src="/images/algo.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "teal", fontWeight: "bold "}}>
                                    CS5800 Algorithm   
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Data Structure and Algorithms
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-secondary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card">
                            <img className="wd-course-image" src="/images/discrete.jpeg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "darkolivegreen", fontWeight: "bold "}}>
                                    CS5002 Discrete Structures  
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Introduction to Discrete Mathematics
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-secondary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <img className="wd-course-image" src="/images/rock.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "lightsalmon", fontWeight: "bold "}}>
                                    CS3361 Rock Climbing   
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Bouldering Techniques and Strength Training
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-secondary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card">
                            <img className="wd-course-image" src="/images/canyon.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "goldenrod", fontWeight: "bold "}}>
                                    CS3710 Canyonneering 
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Introduction to Canyonneering
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-secondary"> Go </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}