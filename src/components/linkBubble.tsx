import Fab from '@mui/material/Fab';

const linkBubble = ({ title, link }: { title: string; link: string }) => {
    return (
        <Fab variant="extended" href={link} target="_blank">
            {title}
        </Fab>
    )

}

export default linkBubble;