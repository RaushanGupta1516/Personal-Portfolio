
import "./Services.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import servicesdata from "./data"
export const Services = () => {
    return (
        <div className="servicesbox" id="services">
            <h1>My Services</h1>
            <div className="services">
                {servicesdata.map((service,index) => {
                    return <div key={index} className="service">
                        <h2 >{service.id}</h2>
                        <h2 id="title">{service.title}</h2>
                        <p>{service.description}</p>
                        <div className="readmore">
                            <p>Read More </p>
                            <AnchorLink href="#about" className="anchorlink" offset={50}>
                            <img src="arrow.svg" alt="arrow" />
                             </AnchorLink>
                           
                        </div>
                    </div>
                })}
            </div>

    </div>
  )
}

export default Services