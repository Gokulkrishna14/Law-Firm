import React from "react";

export default function CustomButton({ customStyle, placeholder }) {
    return (
        <div style={customStyle}>
            <div>{placeholder}</div>
        </div>
    );
}
