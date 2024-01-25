import React, { useEffect, useState } from "react";
import { Text, Spinner, Heading } from "@chakra-ui/react";
// import CourseCarousel from "./CourseCarousel";
import CourseCompletionCard from "./CourseCompletionCard";
import CircularProgressTemplate from "./CircularProgressTemplate";
import TopRatedCourses from "./TopRatedCourses";
import NavBar from "./navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Courses.css";
import { useLocation } from "react-router-dom";
const Course = () => {
  const [showCard, setShowCard] = useState(false);
  const location = useLocation();
  const score = 90;
  useEffect(() => {
    AOS.init();
    const delay = setTimeout(() => {
      setShowCard(true);
    }, 1500);
    return () => clearTimeout(delay);
  }, []);

  const courses = [
    { title: "Course 1", description: "Description 1" },
    { title: "Course 2", description: "Description 2" },
  ];

  return (
    <>
      <NavBar />
      {showCard ? (
        <div className="dashboard-container">
            <div className=" bg-gray-100 m-5 mt-[8px] rounded-lg border border-borders">
          <div className="dashboard-container-upper">
            <div
              className="left-half"
              data-aos="zoom-in-right"
              data-aos-duration="3000"
            >
              <Heading fontSize="30px" m="20px" color="black">
                My Learning
              </Heading>
              <CourseCompletionCard />
            </div>
            <div
              className="right-half"
              data-aos="zoom-in-left"
              data-aos-duration="3000"
            >
              <div>
                <CircularProgressTemplate value="85" color="green.400" />
                <Text m="20px" fontSize="20px" as="b">
                  Course Progression
                </Text>
              </div>
              <div>
                <CircularProgressTemplate value={score} color="green.400" />
                <Text m="20px" fontSize="20px" as="b">
                  Assesment Progression
                </Text>
              </div>
            </div>
            </div>
          </div>
          <div>
          <div className=" bg-gray-100 m-5 h-full mt-[8px] rounded-lg border border-borders">
            <Heading fontSize="30px" m="20px" color="black" marginBottom={50}>
              Recommended Courses
            </Heading>
            <TopRatedCourses />
          </div>
          <div>
            {/* <Heading fontSize="30px" m="20px" color="black">
                Top rated Courses
              </Heading> */}
            {/* <CourseCarousel courses={courses} /> */}
          </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.500"
            size="xl"
          />
          <p> &nbsp; Loading</p>
        </div>
      )}
    </>
  );
};

export default Course;
