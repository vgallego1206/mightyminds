/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import { Typography, Grid } from "@material-ui/core";

export default function HelpList({ items }) {
  return (
    <React.Fragment>
      {items.map((option) => (
        <Grid
          item
          css={css`
            padding-top: 8px;
          `}
        >
          <Typography
            variant="subtitle2"
            css={css`
              padding-right: 64px;
              color: gray;
              width: 100%;
            `}
          >
            <ArrowRightAlt
              css={css`
                vertical-align: top;
                padding-right: 8px;
                color: gray;
              `}
            />
            {option}
          </Typography>
        </Grid>
      ))}
    </React.Fragment>
  );
}

HelpList.propTypes = {
  items: PropTypes.array,
};
