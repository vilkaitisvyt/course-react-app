import { Grid } from "@material-ui/core";
import React from "react";
import CourseCard from "./CourseCard";
import courseData from "../constants";

const FirstPageContent = () => {
  const getCourseCard = (courseObj) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={courseObj.id}>
        <CourseCard {...courseObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={3}>
      {courseData.map((courseObj) => getCourseCard(courseObj))}
    </Grid>
  );
};

export default FirstPageContent;
