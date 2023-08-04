// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Job from "./Job";
import Header from "./Header";





function App() {

            const skillProps1 = {
                skill1: "Frontend",
                skill2: "Senior",
                skill3: "HTML",
                skill4: "CSS",
                skill5: "JavaScript",
            };

            const skillProps2 = {
                skill1: "Fullstack",
                skill2: "Midweight",
                skill3: "Python",
                skill4: "React",
            };

            const skillProps3 = {
                skill1: "Frontend",
                skill2: "Junior",
                skill3: "React",
                skill4: "Sass",
                skill5: "JavaScript",
            };

            const skillProps4 = {
                skill1: "Frontend",
                skill2: "Junior",
                skill3: "CSS",
                skill4: "JavaScript",
            };

            const firstSection1 = {
                cname: "Photosnap",
                title: "Senior Frontend Developer",
                postingTime: "1d ago",
                workTime: "Full Time",
                location: "USA only",
                new: true,
                featured: true,
            };
            const firstSection2 = {
                cname: "Manage",
                title: "Fullstack Developer",
                postingTime: "1d ago",
                workTime: "Part Time",
                location: "USA only",
                new: true,
                featured: true,
            };
            const firstSection3 = {
                cname: "Account",
                title: "Junior Frontend Developer",
                postingTime: "2d ago",
                workTime: "Part Time",
                location: "USA only",
                new: true,
                featured: false,
            };
            const firstSection4 = {
                cname: "MyHome",
                title: "Junior Frontend Developer",
                postingTime: "5d ago",
                workTime: "Contract",
                location: "USA only",
                new: false,
                featured: false,
            };



            return (
                <div>
                    <Header />

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "50vh",
                            flexDirection: "column",
                        }}
                    >
                        <Job
                            skillProps={skillProps1}
                            firstSectionProps={firstSection1}
                        />
                        <Job
                            skillProps={skillProps2}
                            firstSectionProps={firstSection2}
                        />
                        <Job
                            skillProps={skillProps3}
                            firstSectionProps={firstSection3}
                        />
                        <Job
                            skillProps={skillProps4}
                            firstSectionProps={firstSection4}
                        />
                    </div>
                </div>
            );
}

export default App;
