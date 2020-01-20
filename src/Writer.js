import React from 'react';

export class Writer extends React.Component {

    componentDidMount() {
        let input = document.getElementById('writerTextarea');
        input.style.height = window.innerHeight+'px';
        input.style.width = window.innerWidth+'px';
        console.log(input.offsetHeight);
        console.log(window.innerHeight);
    }

    render() {
        return (
            <div className="App">
                <form action="#">
                    <textarea id= 'writerTextarea' className="WriterTextarea" defaultValue="Non mais c'est pas vrai?!"/>
                </form>
            </div>
        );
    }
}