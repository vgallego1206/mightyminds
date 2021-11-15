/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HelpIcon from "@material-ui/icons/Help";
import TabItems from "./TabItems";
import logo from "../../logo/owl-logo.png";

export default function Header() {
  return (
    <React.Fragment>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Button variant="contained" color="primary">
              <img
                src={logo}
                alt="owl-logo"
                width="50"
                css={css`
                  margin-right: 10px;
                `}
              />
              Mighty Minds
            </Button>
          </Grid>
          <Grid
            item
            css={css`
              width: 67%;
            `}
          >
            <TabItems />
          </Grid>
          <Grid
            item
            css={css`
              margin-right: 20px;
            `}
          >
            <Button variant="contained" color="primary">
              <HelpIcon
                css={css`
                  margin-right: 10px;
                `}
              />
              Help Centre
            </Button>
          </Grid>
          <Grid item>
            <Typography css={css`
                  text-align: right;
                `}>
              Jasmine Finn <br />
              Teacher Account
            </Typography>
          </Grid>
          <Grid item>
            <IconButton color="inherit" sx={{ p: 0.5 }}>
              <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
}
