import './footer.css'
import SocialButton from './socialButton';
import { SocialSites } from '../consts';
import Link from '@mui/material/Link';

const footer = () => {
    return (
        <div className="footer-container">
            <div className="left-half">
                <div className="links">
                    <Link href="#">About</Link>
                    <Link href="#">Contact</Link>
                    <Link href="#">Recipes</Link>
                </div>
            </div>
            <div className="right-half">
                <div className="socials">
                    <SocialButton site={SocialSites.INSTAGRAM} />
                    <SocialButton site={SocialSites.FACEBOOK} />
                </div>
            </div>
        </div>
    ) 
}

export default footer;