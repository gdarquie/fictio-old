import React from 'react';
import $ from "jquery";

export class Writer extends React.Component {

    okAction() {
        alert('Top!');
    }

    cancelAction() {
        alert('Oh non');
    }

    componentDidMount() {
        $(document.body).on('keydown', this.handleKeyDown);

        let input = document.getElementById('writerTextarea');
        input.style.height = window.innerHeight+'px';
        input.style.width = window.innerWidth+'px';
        console.log(input.offsetHeight);
        console.log(window.innerHeight);
    }

    saveAction() {
        alert('Save text');
    }

    handleKeyDown(event) {
        if (event.keyCode == 13 /*enter*/) {
            alert('Top!');
        }
        if (event.keyCode == 27 /*esc*/) {
            alert('Oh non');
        }
    }

    render() {
        return (
            <div className="App">
                <form action="#">
                    <textarea id= 'writerTextarea' className="WriterTextarea" defaultValue="Non mais c'est pas vrai?!"/>
                    <button onClick={this.saveAction} className='saver'>Enregistrer</button>
                </form>
            </div>
        );
    }
}