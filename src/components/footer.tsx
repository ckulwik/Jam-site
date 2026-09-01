import './footer.css'
import SocialButton from './socialButton';
import { SocialSites } from '../consts';

const footer = () => {
    return (
        <div className="footer-container">

            <div className="socials">
                <SocialButton site={SocialSites.INSTAGRAM} />
                <SocialButton site={SocialSites.FACEBOOK} />
            </div>

        </div>
    )
}

export default footer;