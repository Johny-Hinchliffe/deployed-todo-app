import Typography from '@mui/material/Typography';
import {Link as MuiLink} from '@mui/material';


const websiteName = 'Google'
const websiteLink = 'www.google.com'


export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <MuiLink color="inherit" href={websiteLink}>
        {websiteName}
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

