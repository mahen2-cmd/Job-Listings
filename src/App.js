// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Job from "./Job";
import Header from "./Header";
import Searchbar from './Searchbar';





function App() {



            const [showSearchbar, setShowSearchbar] = useState(0);
            const [tags, setTags] = useState([]);

            const removeTag = (tag) => {
                console.log("Remove tag called");
                setTags((prevTags) => prevTags.filter((t) => t !== tag));
            };



            const addTag = (tag) => {
                console.log("Add tag called");
                setTags((prevTags) => [...prevTags, tag]);
            };

            const toggleSearchbar = () => {
                if(showSearchbar)
                    setTags([]);

                setShowSearchbar(!showSearchbar);
            };

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


            const [jobs, updateJobs] = useState([
                [skillProps1, firstSection1],
                [skillProps2, firstSection2],
                [skillProps3, firstSection3],
                [skillProps4, firstSection4],
                [skillProps5, firstSection5],
                [skillProps6, firstSection6],
                [skillProps7, firstSection7],
                [skillProps8, firstSection8],
                [skillProps9, firstSection9],
                [skillProps10, firstSection10]
            ]);

            const [showJob, toggleShowJob] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);


            const showAllJobs = (jobIndex) => {

                let tempShowJobs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
                // tempShowJobs[jobIndex] = 0;

                toggleShowJob(tempShowJobs);

            };

            // const defaultJobIndexes = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

            const filterJobs = (tag) => {
                let tempShowJobs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                // jobs.forEach((job)=>
                if(showSearchbar)
                {
                    tempShowJobs = showJob;
                }

                for(let i=0; i<jobs.length; i++)
                {
                        let skills = jobs[i][0];
                        let checkshowJobs = 0;
                        // console.log(skills);
                        // console.log(tags);
                        for (const key in skills) {
                            // console.log(`${key}: ${skills[key]}`);

                            if(tag === skills[key])
                            {
                                if(showSearchbar)
                                {

                                    if(tempShowJobs[i] === 1){

                                        checkshowJobs = 1;
                                        tempShowJobs[i] = 1;
                                        break;
                                    }
                                }
                                if(!showSearchbar)
                                {
                                    checkshowJobs = 1;
                                    tempShowJobs[i] = 1;
                                    break;
                                }
                            }
                        }
                        if(!checkshowJobs)
                            tempShowJobs[i] = 0;

                    };

                console.log(tempShowJobs)
                toggleShowJob(tempShowJobs);

                };



            // const addJobs = (tag) => {


            // }





            const filteredJobs = jobs.filter((job, i) => showJob[i] === 1);


            return (
                <div
                    style={{
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
                        {showSearchbar ? (
                            <Searchbar
                                tags={tags}
                                removeTag={removeTag}
                                toggleSearchbar={toggleSearchbar}
                                showAllJobs={showAllJobs}
                            />
                        ) : null}


                        {filteredJobs.map((job) => (
                            <Job
                                skillProps={job[0]}
                                firstSectionProps={job[1]}
                                tags={tags}
                                addTag={addTag}
                                toggleSearchbar={toggleSearchbar}
                                showSearchbar={showSearchbar}
                                filterJobs={filterJobs}
                            />
                        ))}
                    </div>
                </div>
            );
}

export default App;
