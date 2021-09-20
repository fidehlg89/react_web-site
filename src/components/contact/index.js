import React from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'
import "./contact.css"

const Contact = () => (
    <div className="contacts container">
        <div className="row">
            <div className="col-md-6">
                <div className="contact-info p-5 mt-4">
                    <h3>Contact</h3>
                    <h5>Tel: +00 0000 0000</h5>
                    <p>Email: site@mail.com</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="get-direction">
                    <strong>
                        <FaMapMarkedAlt size={50} />
                        <h5 className="mt-2 mb-2" color="primary">Address</h5>
                    </strong>
                    <strong className="mt-4">Address description example here
                    </strong>
                    <br />
                    <a className="btn btn-primary rounded-pill mt-4 py-2 px-4" rel="noreferrer"
                        href="/" target="_blank">See Map</a>
                </div>
            </div>
        </div>
    </div>
)

export default Contact