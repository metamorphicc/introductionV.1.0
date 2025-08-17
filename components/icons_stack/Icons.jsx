import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import './icons.css'

const Icons = () => {
    const icon = [
        {name: 'github', url: 'https://github.com/metamorphicc', icon: <FaGithub/>},
        {name: 'twitter', url: 'https://x.com/morph_lowbanker', icon: <FaTwitter/>},
        {name: 'telegram', url: 'https://t.me/rawzw', icon: <FaTelegram/>}
  ];

  return (
    <div className="iconsSection">
        <ul>
            {icon.map((item, index) => (
                <li className="icon" key={index}>
                    <div className="iconDiv">
                        <a href={item.url} aria-label={item.name}>{item.icon}</a>
                    </div>                 
                </li>
            ))}
        </ul>
    </div>

  )

}

export default Icons