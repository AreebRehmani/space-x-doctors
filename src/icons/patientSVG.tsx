import React from "react";

const PatientSVG = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="743"
            height="136"
            viewBox="138 516 743 136"
            version="1.1"
            style={{ height: '40vh', width: '150vh' }}
        >
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="CLIENT" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(138.000000, 516.000000)">
                {/* First Window - Recent Patient List (Left-Aligned) */}
                <g id="client">
                    <rect id="Rectangle-5" fill="#D8D8D8" x="0" y="0" width="231" height="136" rx="8"></rect>
                    <path
                        d="M0,18 L231,18 L231,128.005271 C231,132.420638 227.417901,136 222.998169,136 L8.00183095,136 C3.58254174,136 0,132.420222 0,128.005271 L0,18 Z"
                        id="Rectangle-6"
                        fill="#F4F4F4"
                    ></path>
                    <g id="dots" transform="translate(6.000000, 6.000000)">
                        <circle id="red" fill="#DF4E47" cx="4" cy="4" r="4"></circle>
                        <circle id="yellow" fill="#D1A839" cx="16" cy="4" r="4"></circle>
                        <circle id="green" fill="#34B18F" cx="28" cy="4" r="4"></circle>
                    </g>
                    <text x="35" y="30" fontSize="8" fill="#333" fontWeight="bold">Recent Patients</text>
                    <text x="55" y="45" fontSize="7" fill="#333">- John Doe</text>
                    <text x="55" y="60" fontSize="7" fill="#333">- Alice Smith</text>
                    <text x="55" y="75" fontSize="7" fill="#333">- Robert Johnson</text>
                    <text x="55" y="90" fontSize="7" fill="#333">- Emily Brown</text>
                    <text x="55" y="105" fontSize="7" fill="#333">...</text>
                </g>

                {/* Second Window - Patient Details & Prescription (Shifted Further Right) */}
                <g id="client-copy-2" transform="translate(512.000000, 0.000000)">
                    <rect id="Rectangle-5" fill="#D8D8D8" x="0" y="0" width="231" height="136" rx="8"></rect>
                    <path
                        d="M0,18 L231,18 L231,128.005271 C231,132.420638 227.417901,136 222.998169,136 L8.00183095,136 C3.58254174,136 0,132.420222 0,128.005271 L0,18 Z"
                        id="Rectangle-6"
                        fill="#F4F4F4"
                    ></path>
                    <g id="dots" transform="translate(6.000000, 6.000000)">
                        <circle id="red" fill="#DF4E47" cx="4" cy="4" r="4"></circle>
                        <circle id="yellow" fill="#D1A839" cx="16" cy="4" r="4"></circle>
                        <circle id="green" fill="#34B18F" cx="28" cy="4" r="4"></circle>
                    </g>
                    <text x="80" y="30" fontSize="8" fill="#333" fontWeight="bold">Patient: Alice</text>
                    <text x="100" y="45" fontSize="7" fill="#333">Age: 25</text>
                    <text x="100" y="60" fontSize="7" fill="#333">Gender: Female</text>
                    <text x="100" y="75" fontSize="7" fill="#333">Date: 28/03/2025</text>
                    <text x="80" y="90" fontSize="7" fill="#333" fontWeight="bold">Prescription:</text>
                    <text x="100" y="105" fontSize="7" fill="#333">- Paracetamol 500mg</text>
                    <text x="100" y="120" fontSize="7" fill="#333">- Amoxicillin 250mg</text>
                    <text x="100" y="130" fontSize="7" fill="#333">...</text>
                </g>
            </g>
        </svg>
    );
};

export default PatientSVG;
