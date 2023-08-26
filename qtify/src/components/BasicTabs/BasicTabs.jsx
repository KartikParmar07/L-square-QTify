import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  value,
  onChange,
  genres,
  songsData,
  selectedGenre,
}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={onChange}
          aria-label="basic tabs example"
          textColor="white"
          indicatorColor="secondary"
        >
          {genres.map((genre, index) => (
            <Tab label={genre} {...a11yProps(index)} key={index} />
          ))}
        </Tabs>
      </Box>
      {genres.map((genre, index) => (
        <CustomTabPanel value={value} index={index} key={index}>
          {/* Render songs for the selected genre */}
          {songsData
            .filter((song) =>
              index === 0 ? true : song.genre.key === genre.toLowerCase()
            )
            .map((song) => (
              <></>
            ))}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
