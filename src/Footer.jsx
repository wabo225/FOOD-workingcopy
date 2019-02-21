import React from 'react';

var style = {
    backgroundColor: "#30323D",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "15px",
    width: "100%",
    color: "#CDD1C4"
}

var phantom = {
  display: 'block',
  padding: '15px',
  height: '30px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
            </div>
        </div>
    )
}

export default Footer