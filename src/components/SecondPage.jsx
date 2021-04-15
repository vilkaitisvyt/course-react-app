import { Grid, Typography, Button } from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import courseData from "../constants";
import Quiz from "./Quiz";
import { useHistory } from "react-router-dom";

const SecondPage = () => {
  const history = useHistory();
  const [selectedCourse] = useContext(AppContext);
  const courseObj = courseData.filter(
    (obj) => obj.id === selectedCourse,
  );

  return (
    <Grid
      container
      direction="column"
      style={{
        color: "white",
        background: "url(nice3.jpg) no-repeat center fixed",
        backgroundSize: "cover",
      }}
    >
      <Grid
        item
        container
        style={{ marginTop: 64, padding: 20 }}
        xs={12}
        justify="center"
        alignItems="center"
      >
        <Typography
          style={{ paddingBottom: 40, paddingTop: 40 }}
          variant="h3"
        >
          {courseObj[0].name}
        </Typography>
      </Grid>
      <Grid item container>
        <Grid item sm={false} md={2} />
        <Grid
          item
          container
          style={{
            marginBottom: 80,
            padding: 80,
            border: "1px solid white",
            borderRadius: "1%",
            background: "rgba(0, 0, 0, .6)",
          }}
          xs={12}
          md={8}
          justify="center"
        >
          <Typography style={{ padding: "0 0 100px 0" }} variant="h4">
            {courseObj[0].description}
          </Typography>
          <Typography variant="h6">{courseObj[0].content}</Typography>
        </Grid>
        <Grid item sm={false} md={2} />
      </Grid>
      <Grid item container>
        <Grid item sm={false} md={2} />
        <Grid
          item
          container
          style={{
            marginBottom: 80,
            padding: 50,
            border: "1px solid white",
            borderRadius: "1%",
            background: "rgba(0, 0, 0, .6)",
          }}
          xs={12}
          md={8}
          justify="center"
        >
          <Typography style={{ padding: "0 0 70px 0" }} variant="h4">
            Are you prepared to test what you've learned?
          </Typography>
          <Quiz quiz={courseObj[0].quiz} />
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "50px 0 50px 0", padding: 20 }}
            onClick={() => history.push("/congratulations")}
          >
            Finished
          </Button>
        </Grid>
        <Grid item sm={false} md={2} />
      </Grid>
    </Grid>
  );
};

export default SecondPage;
