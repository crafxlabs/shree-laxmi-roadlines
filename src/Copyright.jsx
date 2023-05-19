import React from 'react'

const Copyright = () => {
    return (
        <div className="copyright">
            <p> <span>Shree Laxmi Roadlines</span> © {new Date().getFullYear()}. All rights reserved.</p>
            <p><span>Developed By</span> - <a target={'_blank'} href="https://www.linkedin.com/in/monishsoni27/">Monish Soni</a> </p>
        </div>
    )
}

export default Copyright