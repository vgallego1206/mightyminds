/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Help from "@material-ui/icons/Help";
import {
  Typography,
  Grid,
  Box,
  Button,
  CardMedia,
  Link,
} from "@material-ui/core";
import sidebar from "../../logo/sidebar.png";
import HelpList from "./HelpList";

const item1 = [
  "Visit help centre",
  "Send us your feedback",
  "Make a request or suggestion",
  "Report an issue",
];
const item2 = ["Teacher support group", "Schedule a consultation"];

export default function SideBar() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      css={css`
        padding-top: 24px;
        grid-gap: 24px;
        width: 30% !important;
      `}
    >
      <CardMedia
        component="image"
        css={css`
          background-image: url("${sidebar}");
          height: 420px;
          width: 320px;
        `}
        color="primary"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          css={css`
            padding-top: 310px;
          `}
        >
          <Button variant="contained" color="primary">
            See how it works
          </Button>
          <Link
            href="#"
            underline="always"
            color="primary"
            css={css`
              padding-top: 18px;
            `}
          >
            Getting started guide
          </Link>
        </Box>
      </CardMedia>
      <Grid
        item
        css={css`
          width: 300px;
          border: 1px solid gray;
        `}
      >
        <Box
          css={css`
            padding: 16px;
          `}
        >
          <Typography
            variant="h6"
            css={css`
              border-bottom: 1px solid gray;
              padding-bottom: 10px;
            `}
          >
            <Help
              css={css`
                vertical-align: text-bottom;
                padding-right: 8px;
                color: gray;
              `}
            />
            Help and Support
          </Typography>
          <HelpList items={item1} />
          <Typography
            variant="h6"
            css={css`
              border-bottom: 1px solid gray;
              padding-bottom: 10px;
            `}
          ></Typography>
          <HelpList items={item2} />
        </Box>
      </Grid>
    </Grid>
  );
}
