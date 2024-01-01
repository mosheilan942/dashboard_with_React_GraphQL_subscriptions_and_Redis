import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


function Stages() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const names = ["panel1", "panel2", "panel3"]

    const rows = [];
    for (let i = 0; i < 3; i++) {
        rows.push(
            <Paper key={i}
                sx={{
                    p: 2,
                    margin: 'auto',
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <div>
                    <Accordion expanded={expanded === names[i]} onChange={handleChange(names[i])}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <Img alt="complex" src="http://tinyurl.com/42y5mcwk" />
                                </ButtonBase>
                            </Grid>
                        </Grid>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Paper>
        );
    }

    return (
        <>
            {rows}
        </>
    )
    // <Paper
    //     sx={{
    //         p: 2,
    //         margin: 'auto',
    //         flexGrow: 1,
    //         backgroundColor: (theme) =>
    //             theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     }}
    // >
    //     {/* <Grid item xs={12} sm container>
    // <Grid item xs container direction="column" spacing={2}>
    //   <Grid item xs>
    //     <Typography gutterBottom variant="subtitle1" component="div">
    //       Standard license
    //     </Typography>
    //     <Typography variant="body2" gutterBottom>
    //       Full resolution 1920x1080 • JPEG
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       ID: 1030114
    //     </Typography>
    //   </Grid>
    //   <Grid item>
    //     <Typography sx={{ cursor: 'pointer' }} variant="body2">
    //       Remove
    //     </Typography>
    //   </Grid>
    // </Grid>
    // <Grid item>
    //   <Typography variant="subtitle1" component="div">
    //     $19.00
    //   </Typography>
    // </Grid> */}
    //     <div>
    //         <Accordion>
    //             <AccordionSummary
    //                 expandIcon={<ExpandMoreIcon />}
    //                 aria-controls="panel1a-content"
    //                 id="panel1a-header"
    //             >
    //                 <Typography>Accordion 1</Typography>
    //             </AccordionSummary>
    //             <Grid container spacing={2}>
    //                 <Grid item>
    //                     <ButtonBase sx={{ width: 128, height: 128 }}>
    //                         <Img alt="complex" src="http://tinyurl.com/42y5mcwk" />
    //                     </ButtonBase>
    //                 </Grid>
    //             </Grid>
    //             <AccordionDetails>
    //                 <Typography>
    //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //                     malesuada lacus ex, sit amet blandit leo lobortis eget.
    //                 </Typography>
    //             </AccordionDetails>
    //         </Accordion>
    //     </div>

    // </Paper>


}


export default Stages