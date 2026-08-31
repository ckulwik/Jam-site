import { SocialSites } from "../consts";

import IconButton from '@mui/material/IconButton';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';

const socialButton = ({site}: {site: SocialSites}) => {

  const getIcon = () => {
    switch (site) {
      case SocialSites.INSTAGRAM:
        return <Instagram fontSize="large"/>;
      case SocialSites.FACEBOOK:
        return <Facebook fontSize="large"/>;
      default:
        return null;
    }
  }

  return (
    <IconButton aria-label={site} size="large">
      {getIcon()}
    </IconButton>
  )
};
    
export default socialButton;