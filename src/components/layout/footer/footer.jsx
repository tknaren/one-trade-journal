import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer id="footer" className="footer">
            <div className="copyright">
              &copy; Copyright <strong><span>TradeGenie</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </footer>            
        );
    }
}
 
export default Footer;