import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            All rights reserved to Moshe Ilan 
            {' '}{ new Date().getFullYear()}
            {'.'}<br></br>
            <Link color="inherit" href="https://github.com/mosheilan942">
                Go to my github
            </Link>{' '}
        </Typography>
    );
}