/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { FlashOnTwoTone, StarTwoTone, Add } from "@material-ui/icons";
import { Typography, Grid, Box, Button } from "@material-ui/core";

export default function ClassesItems({ items }) {
  return (
    <Grid
      container
      alignItems="center"
      css={css`
        padding-top: 24px;
        grid-gap: 24px;
        width: 75% !important;
      `}
    >
      {items.map((option) => (
        <Grid
          item
          css={css`
            width: 270px;
            border-top: 5px solid ${option.color} !important;
            border: 1px solid gray;
          `}
        >
          <Box
            css={css`
              padding: 16px;
            `}
          >
            <Typography variant="h6">
              <FlashOnTwoTone
                css={css`
                  vertical-align: top;
                  border: 2px solid ${option.color};
                  margin-right: 8px;
                  color: ${option.color};
                `}
              />
              {option.label}
            </Typography>
            <Typography variant="subtitle1">
              <StarTwoTone
                css={css`
                  vertical-align: top;
                  color: blue;
                `}
              />
              | {option.year} | {option.subject}
            </Typography>
            <Typography
              variant="subtitle1"
              css={css`
                padding-top: 8px;
              `}
            >
              Activities due this week
              {option.activity > 0 && (
                <label
                  css={css`
                    margin-left: 50px;
                    border: 1px solid lightgray;
                    background: lightgray;
                  `}
                >
                  {option.activity}
                </label>
              )}
            </Typography>
            <Typography
              variant="subtitle1"
              css={css`
                padding-top: 8px;
              `}
            >
              Assign activities
            </Typography>
            <Typography
              variant="subtitle1"
              css={css`
                padding-top: 8px;
              `}
            >
              Class calendar
            </Typography>
            <Button
              //variant="outlined"
              css={css`
                border-radius: 0 !important;
                border-top: 1px solid gray !important;
                color: gray !important;
                justify-content: left !important;
                width: 100%;
                margin-top: 8px !important;
              `}
            >
              <Add
                css={css`
                  padding-right: 8px;
                `}
              />
              Add Student
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

ClassesItems.propTypes = {
  items: PropTypes.object,
};
