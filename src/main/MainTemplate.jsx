import { Box, Chip, IconButton, Paper, Stack, TextField, Tooltip, Typography } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import './main.css';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ShieldIcon from '@mui/icons-material/Shield';
import GavelIcon from '@mui/icons-material/Gavel';
import StarsIcon from '@mui/icons-material/Stars';
import TroopsTable from "./TroopsTable";

const MainTemplate = ({ onSubmit, data }) => {
    return (
        <Box>
            <form onSubmit={onSubmit} className="mainForm">
                <TextField
                    label="Player"
                    id="playerId"
                    className="textForm"
                    InputProps={{
                        endAdornment: (
                            <IconButton type="submit">
                                <SearchIcon />
                            </IconButton>
                        )
                    }}
                />
            </form>
            {data && (
                <Paper className="dataContainer" elevation={1}>
                    <Typography variant="h5" textTransform="capitalize">
                        {data.name} {data.tag}
                    </Typography>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Stack direction="row" spacing={1}>
                            <Tooltip title="Town Hall Level">
                                <Chip label={data.townHallLevel} avatar={<LocationCityIcon />} />
                            </Tooltip>
                            <Tooltip title="EXP Level">
                                <Chip label={data.expLevel} avatar={<StarIcon />} />
                            </Tooltip>
                            <Tooltip title="Trophies">
                                <Chip label={data.trophies} avatar={<EmojiEventsIcon />} />
                            </Tooltip>
                            <Tooltip title="Defense Wins">
                                <Chip label={data.defenseWins} avatar={<ShieldIcon />} />
                            </Tooltip>
                            <Tooltip title="Attack Wins">
                                <Chip label={data.attackWins} avatar={<GavelIcon />} />
                            </Tooltip>
                            <Tooltip title="War Stars">
                                <Chip label={data.expLevel} avatar={<StarsIcon />} />
                            </Tooltip>
                            <Tooltip title="achievements">
                                <Chip label={data.achievements?.length ?? 0} avatar={<EmojiEventsIcon />} />
                            </Tooltip>
                        </Stack>
                    </Paper>
                    <TroopsTable troops={data.troops} />
                </Paper>
            )}
        </Box>
    )
};

export default MainTemplate;
