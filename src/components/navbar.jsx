import image from '../assets/images/logo.png'
export default function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <img src={image}></img>
                <h4 className="nav-item">Legendary Pirates - Navy</h4>
            </nav>
            
        </div>
    )
}