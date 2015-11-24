// third party imports
import React, {Component, PropTypes} from 'react'


export default class UnityLogo extends Component {
    static propTypes = {
        color: PropTypes.string,
    }


    static defaultProps = {
        color: '#1b2530',
    }


    render() {
        const {
            color,
            ...unusedProps,
        } = this.props

        return (
            <svg {...unusedProps} viewBox='0 0 900.69336 328'>
                <g transform='matrix(1.3333333,0,0,-1.3333333,0,328)'>
                    <g transform='scale(0.1)'>
                        <path
                            fill={color}
                            d='m 3772.52,1715.48 h -235.85 v -545.52 c 0,-140.43 -57.61,-252.062 -226.85,-252.062 -167.44,-1.796 -216.05,113.432 -216.05,259.262 v 538.32 h -235.85 v -597.73 c 0,-172.84 61.21,-419.488 385.28,-421.289 178.24,-1.801 266.46,84.609 307.87,162.027 V 727.059 h 221.45 v 988.421'
                        />
                        <path
                            fill={color}
                            d='m 3866.3,727.059 h 235.85 v 545.521 c 0,138.63 57.61,250.26 225.05,252.06 165.63,0 214.24,-113.43 214.24,-261.06 V 727.059 h 235.85 v 595.931 c 0,174.64 -61.21,421.29 -383.48,423.1 -176.44,1.79 -264.66,-84.63 -307.87,-162.04 1.8,46.81 1.8,88.22 1.8,131.43 H 3866.3 V 727.059'
                        />
                        <path
                            fill={color}
                            d='m 4867.47,727.059 h 235.85 v 988.421 h -235.85 z m 0,1121.651 h 235.85 v 210.64 h -235.85 v -210.64'
                        />
                        <path
                            fill={color}
                            d='m 5350.27,727.059 h 235.86 v 806.581 h 169.23 l -70,181.84 h -99.23 v 343.87 h -235.86 v -343.87 h -163.83 v -181.84 h 163.83 V 727.059'
                        />
                        <path
                            fill={color}
                            d='m 5982.86,381.391 h 252.06 l 520.31,1334.089 h -252.05 l -237.65,-657.15 -241.26,657.15 H 5772.22 L 6144.9,764.871 5982.86,381.391'
                        />
                        <path
                            fill={color}
                            d='m 1564.81,1229.94 430.5,743.38 208.03,-743.38 -208.03,-743.21 z m -209.83,-120.72 430.57,-743.271 -749.87,192.11 -541.735,551.161 z m 430.47,984.92 -430.47,-743.38 H 493.945 l 541.735,551.19 z m 614.58,-611.22 -262.64,977.1 -980.3,-261.86 -145.11,-255.13 -294.464,2.11 L 0,1229.87 717.516,514.77 h 0.035 L 1011.88,516.949 1157.2,261.82 2137.39,0 l 262.64,976.922 -149.15,253.018 149.15,252.98'
                        />
                    </g>
                </g>
            </svg>
        )
    }
}