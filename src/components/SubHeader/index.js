/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Button,
  Box,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Add, ArrowDownwardOutlined } from "@material-ui/icons";
import book from "../../logo/book.PNG";
import IconItems from "./IconItems";

const iconItems = [
  {
    color: "blue",
    label: "Due this week: 330",
  },
  {
    color: "green",
    label: "Completed: 240",
  },
  {
    color: "red",
    label: "Overdue: 33",
  },
];

export default function SubHeader() {
  return (
    <CardMedia
      component="image"
      css={css`
        display: flex;
        background-image: url("${book}");
        height: 120px;
        padding: 30px 60px 30px 60px;
      `}
      color="primary"
    >
      <Box
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        <CardContent
          css={css`
            flex: 1 0 auto;
            color: white;
            padding-left: 300px !important;
          `}
        >
          <Typography component="div" variant="h5">
            Welcome back, Jasmine
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            css={css`
              padding-top: 30px;
              color: gray;
            `}
          >
            WEEK 4 ACTIVITY SUMMARY
          </Typography>
          <IconItems items={iconItems} />
        </CardContent>
        <Box
          css={css`
            display: flex;
            justify-content: space-evenly;
            width: 35%;
          `}
        >
          <Button
            variant="outlined"
            css={css`
              border: 1px solid white !important;
              color: white !important;
            `}
          >
            My Calendar
          </Button>
          <Button
            variant="outlined"
            css={css`
              border: 1px solid white !important;
              color: white !important;
            `}
          >
            Weekly Report
          </Button>
          <Button variant="contained" color="primary">
            <Add
              css={css`
                padding-right: 8px;
              `}
            />
            Assign Activity
          </Button>
          <Button variant="contained" color="primary">
            <ArrowDownwardOutlined />
          </Button>
        </Box>
      </Box>
    </CardMedia>
  );
}
