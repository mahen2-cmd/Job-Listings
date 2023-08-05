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

            const skillProps5 = {
                skill1: "Fullstack",
                skill2: "Midweight",
                skill3: "JavaScript",
                skill4: "Sass",
                skill5: "Ruby",
            };
            const skillProps6 = {
                skill1: "Backend",
                skill2: "Junior",
                skill3: "Ruby",
                skill4: "RoR",
            };
            const skillProps7 = {
                skill1: "Frontend",
                skill2: "Junior",
                skill3: "HTML",
                skill4: "Sass",
                skill5: "JavaScript",
            };
            const skillProps8 = {
                skill1: "Frontend",
                skill2: "Junior",
                skill3: "Vue",
                skill4: "JavaScript",
                skill5: "Sass",
            };
            const skillProps9 = {
                skill1: "Fullstack",
                skill2: "Midweight",
                skill3: "JavaScript",
                skill4: "Django",
                skill5: "Python",
            };
            const skillProps10 = {
                skill1: "Frontend",
                skill2: "Junior",
                skill3: "React",
                skill4: "Sass",
                skill5: "JavaScript",
            };

            const firstSection1 = {
                cname: "Photosnap",
                title: "Senior Frontend Developer",
                postingTime: "1d ago",
                workTime: "Full Time",
                location: "USA only",
                new: true,
                featured: true,
                logoName: "photosnap",
            };
            const firstSection2 = {
                cname: "Manage",
                title: "Fullstack Developer",
                postingTime: "1d ago",
                workTime: "Part Time",
                location: "USA only",
                new: true,
                featured: true,
                logoName: "manage",
            };
            const firstSection3 = {
                cname: "Account",
                title: "Junior Frontend Developer",
                postingTime: "2d ago",
                workTime: "Part Time",
                location: "USA only",
                new: true,
                featured: false,
                logoName: "account",
            };
            const firstSection4 = {
                cname: "MyHome",
                title: "Junior Frontend Developer",
                postingTime: "5d ago",
                workTime: "Contract",
                location: "USA only",
                new: false,
                featured: false,
                logoName: "myhome",
            };
            const firstSection5 = {
                cname: "Loop Studios",
                title: "Software Engineer",
                postingTime: "1w ago",
                workTime: "Full Time",
                location: "Worldwide",
                new: false,
                featured: false,
                logoName: "loop-studios",
            };


            const firstSection6 = {
                cname: "Faceit",
                title: "Junior Backend Developer",
                postingTime: "2w ago",
                workTime: "Full Time",
                location: "UK only",
                new: false,
                featured: false,
                logoName: "faceit",
            };
            const firstSection7 = {
                cname: "Shortly",
                title: "Junior Developer",
                postingTime: "2w ago",
                workTime: "Full Time",
                location: "Worldwide",
                new: false,
                featured: false,
                logoName: "shortly",
            };
            const firstSection8 = {
                cname: "Insure",
                title: "Junior Frontend Developer",
                postingTime: "2w ago",
                workTime: "Full Time",
                location: "USA only",
                new: false,
                featured: false,
                logoName: "insure",
            };
            const firstSection9 = {
                cname: "Eyecam Co.",
                title: "Full Stack Engineer",
                postingTime: "3w ago",
                workTime: "Full Time",
                location: "Worldwide",
                new: false,
                featured: false,
                logoName: "eyecam-co",
            };
            const firstSection10 = {
                cname: "The Air Filter Company",
                title: "Front-end Dev",
                postingTime: "1mo ago",
                workTime: "Part Time",
                location: "Worldwide",
                new: false,
                featured: false,
                logoName: "the-air-filter-company",
            };





            return (
                <div
                    style={{
                        // overflow: "scroll",
                        overflowY: "scroll",
                        overflowX: "hidden",
                    }}
                >
                    <Header />

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "50vh",
                            flexDirection: "column",
                            marginTop: "500px",
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
                        <Job
                            skillProps={skillProps5}
                            firstSectionProps={firstSection5}
                        />
                        <Job
                            skillProps={skillProps6}
                            firstSectionProps={firstSection6}
                        />
                        <Job
                            skillProps={skillProps7}
                            firstSectionProps={firstSection7}
                        />
                        <Job
                            skillProps={skillProps8}
                            firstSectionProps={firstSection8}
                        />
                        <Job
                            skillProps={skillProps9}
                            firstSectionProps={firstSection9}
                        />
                        <Job
                            skillProps={skillProps10}
                            firstSectionProps={firstSection10}
                        />
                    </div>
                </div>
            );
}

export default App;
