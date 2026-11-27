import LinkBubble from "../components/linkBubble";
import "./links.css"

const links = () => {
    return (
        <>
            <h2 className="title">Links</h2>
            <div className="links-container">
                <LinkBubble title="Instagram" link="https://www.instagram.com/bugandbeejammco" />
                <LinkBubble title="Website" link="/" />
            </div>
        </>
    )
}

export default links; 