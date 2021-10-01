import React from 'react';
import "./Footer.css";

function Footer() {
    var time = new Date();
    var year = time.getFullYear();

    return (
        <div className="footer">
            <p>© {year} JoJoba. No Rights Reserved - It's a Project.</p>
        </div>
    )
}

export default Footer
