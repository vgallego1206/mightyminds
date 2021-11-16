/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import CircleIcon from "@material-ui/icons/LensRounded";
import { Typography, Grid } from "@material-ui/core";

export default function IconItems({ items }) {
  return (
    <Grid
      container
      alignItems="center"
      css={css`
        padding-top: 8px;
      `}
    >
      {items.map((option) => (
        <Grid
          item
          css={css`
            display: contents;
          `}
        >
          <CircleIcon
            css={css`
              padding-right: 8px;
              color: ${option.color};
            `}
          />
          <Typography
            variant="subtitle2"
            css={css`
              padding-right: 64px;
            `}
          >
            {option.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

IconItems.propTypes = {
  items: PropTypes.object,
};
