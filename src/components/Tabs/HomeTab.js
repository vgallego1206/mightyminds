/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, Container, Link, Box } from "@material-ui/core";
import ClassesItems from "./ClassesItems";
import SideBar from "./SideBar";

const classItems = [
  {
    color: "blue",
    label: "12ENGA",
    year: "Year 12",
    subject: "English",
    activity: 1,
  },
  {
    color: "green",
    label: "12ENGB",
    year: "Year 13",
    subject: "English",
    activity: 0,
  },
  {
    color: "red",
    label: "08MATHS",
    year: "Year 12",
    subject: "Maths",
    activity: 2,
  },
  {
    color: "red",
    label: "09SCI",
    year: "Year 10",
    subject: "Science",
    activity: 2,
  },
];

export default function HomeTab() {
  return (
    <Container
      css={css`
        padding-top: 32px;
      `}
    >
      <Typography variant="h5">Here are your classes</Typography>
      <Typography variant="subtitle2">
        Select a class to view this week's assigned activities and begin your
        lesson.{" "}
        <Link
          href="#"
          underline="always"
          color="inherit"
          css={css`
            padding-left: 300px;
          `}
        >
          View all classes
        </Link>
      </Typography>
      <Box display="flex" alignItems="flex-start">
        <ClassesItems items={classItems} />
        <SideBar />
      </Box>
    </Container>
  );
}
