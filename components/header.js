import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  appBar: {
    border: 0
  },
  invisible: {
    backgroundColor: "red",
    borderColor: "red"
  }
}));

function Header({ user, loading, className }) {
  const classes = useStyles();

  const renderAuthButtons = () => {
    if (loading) {
      return;
    }

    if (user) {
      return (
        <>
          <Link href="/profile">
            <Button color="inherit">Profile</Button>
          </Link>

          {/* <Link href="/advanced/ssr-profile">
            <Button color="inherit">Server rendered profile (advanced)</Button>
          </Link> */}

          <Link href="/api/logout">
            <Button color="inherit">Logout</Button>
          </Link>
        </>
      );
    }

    return (
      <>
        <Link href="/api/login">
          <Button color="inherit">Login</Button>
        </Link>
      </>
    );
  };

  return (
    <AppBar position="fixed" className={classNames(classes.appBar, className)}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          Mattribution
        </Typography>
        {renderAuthButtons()}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
