import * as React from "react";


const styles: any = require('../styles/styles.css');

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <div className={styles.example}><h1>Hello from {this.props.compiler} and {this.props.framework}!</h1></div>;
    }
}