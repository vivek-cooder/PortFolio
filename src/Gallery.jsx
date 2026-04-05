import Masonry from './Masonry';
import './Masonery.css'


const items = [
    {
        id: "1",
        img: "/BMW.jpg",
        url: "https://www.behance.net/gallery/241463811/BMW-Fan-Page",
        height: 800,
    },
    {
        id: "2",
        img: "/DashBoard.png",
        url: "https://www.behance.net/gallery/245323213/DashBorad",
        height: 350,
    },
    {
        id: "3",
        img: "/Freelancer.png",
        url: "https://www.figma.com/proto/GliMQRp4cL5ynrUPZKzO1y/Freelance-App?node-id=139-6&t=it1rrq80fFvXhcRE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=26%3A27",
        height: 1200,
    },
    {
        id: "4",
        img: "/Matt.png",
        url: "https://in.pinterest.com/pin/909656824762495605/",
        height: 360,
    },
    {
        id: "5",
        img: "/Neon-Highway.png",
        url: "https://in.pinterest.com/pin/909656824762495631/",
        height: 350,
    },
    {
        id: "6",
        img: "/Ola.png",
        url: "https://www.figma.com/proto/bIr3J341Emgz9sFqrav0X5/Ola-2.0-app?node-id=39-350&t=XtECWw6Moeg4QSlh-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
        height: 1200,
    },
    {
        id: "7",
        img: "/Photo-recovery.png",
        url: "https://in.pinterest.com/pin/909656824762495650/",
        height: 1200,
    },
    {
        id: "8",
        img: "/Saguna.png",
        url: "https://saguna-replica.netlify.app/",
        height: 350,
    },
    {
        id: "9",
        img: "/Wordpress.png",
        url: "https://drive.google.com/drive/folders/1LGYV0djwOBnajmCuv5AY1dImrc-_cGbO?usp=sharing",
        height: 300,
    },
    {
        id: "10",
        img: "/1.png",
        url: "https://www.behance.net/gallery/245321997/Nike-DashBoard",
        height: 300,
    },

];


export default function Gallery() {
    return (
        <div className='gallery'>
            <Masonry
                items={items}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover
                hoverScale={0.95}
                blurToFocus
                colorShiftOnHover={false}
            />
        </div>

    )
}