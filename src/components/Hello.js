import React from 'react';
/* function Hello() {
    return (<h1>Hello Somen</h1>);
} */
const Hello = ({ name, hero }) => {
    return (
        <h1>Hi, {name}, your hero is {hero}</h1>
    )
}
export default Hello;