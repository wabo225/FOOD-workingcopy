import React, {Component} from 'react';
import './App.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: {
                backgroundColor: "#30323D",
                padding: "10vmin 1rem",
                textAlign: "center",
                fontSize: "38px",
                fontStretch: "expanded",
                color: "#5C80BC",
                height: 100
            }
        }
    }

    handleScroll(e) {
        
    }

    render() {
        return(
            <div>
                <div style={this.state.styles} onScroll={(e) => this.handleScroll(e)}>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Header;