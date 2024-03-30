import React from 'react';
import{NavLink,Link} from 'react-router-dom'
function Footer() {
    return (
        <div className='container-fluid bg-primary bg-gradient' style={{ minHeight: '12rem' }}>
            <div className='row pt-2 text-center'>
                {/** Create  3 sections each of 4 colomns for large and medium device but from small device create 12 sections of 4 cols */}
                <div className='col-lg-4 col-md-4 col-sm-12 '>
                    <h5>Quick Links</h5>
                    <div className='d-flex flex-column mb-2'>
                        <NavLink to="/about" className='text-white p-1'>About us</NavLink>
                        <NavLink to="/posts" className='text-white p-1'>Our Posts</NavLink>
                        <NavLink to="#" className='text-white p-1'>Our Team</NavLink>
                        <NavLink to="/contact" className='text-white p-1'>Contact us</NavLink>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 '>
                    <h5>News Letter</h5>
                    <div style={{ minHeight: "8rem" }} className='d-flex flex-column justify-content-around'>
                        <input type="text" className="form-control" placeholder='Subscribe to the newsletter' />
                        <button className='btn btn-warning'>Subscribe</button>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 '>
                    <h5>Contact Adress</h5>
                    <div className='d-flex flex-column'>
                        <p><i className="px-1 fa-solid fa-location-arrow"></i> 26 Huston Street</p>
                        <p>Newton City</p>
                        <p>Random State - 756767</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;