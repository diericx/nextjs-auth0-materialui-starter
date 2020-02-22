import React, { useState } from "react";
import Link from "next/link";
import Divider from "@material-ui/core/Divider";
import RefreshIcon from "@material-ui/icons/Refresh";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  IconButton,
  Fab,
  Grid,
  Typography,
  CircularProgress
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  inlineIconButton: {
    marginRight: theme.spacing.unit
  },
  refreshButton: {
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
}));

const CustomDrawer = ({ campaigns }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const renderCampaignsList = () => {
    // If the data hasn't come yet
    if (!campaigns) {
      return <CircularProgress />;
    }

    // If it is empty
    if (campaigns.length == 0) {
      return (
        <Typography className={classes.nested} color="secondary">
          We couldn't find any campaigns!
          <br />
          <br />
          We try to infer your campaigns by looking at your tracks. You either
          don't have any tracks yet, or haven't set the properties correctly.
        </Typography>
      );
    }

    console.log(campaigns);

    // If there are elements, render them!
    return (
      <List component="div" disablePadding>
        {campaigns.map(campaign => (
          <Link href="/campaigns/[id]" as={`/campaigns/${campaign.id}`}>
            <ListItem button className={classes.nested} key={campaign.id}>
              <ListItemText primary={campaign.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    );
  };

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />

      <List>
        <Link href="/campaigns" as={`/campaigns`}>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Campaigns" />
          </ListItem>
        </Link>
        <Link href="/kpis" as={`/kpis`}>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="KPIs" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default CustomDrawer;
