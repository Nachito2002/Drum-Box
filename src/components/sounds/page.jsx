import React from 'react';
import styles from './style.sass';

class Page extends React.Component {
    constructor(props) {
        super();

        this.componentDidMount = this.componentDidMount.bind(this);
    };
    
    componentDidMount() {

        const soundPlay = () => {
        let sound = new Audio(this.props.obj.url);
        sound.play();
        };

        const checkKeyCode = (e) => {
            if (
                e.keyCode === this.props.obj.keyCode.min ||
                e.keyCode === this.props.obj.keyCode.max
            ) {
                soundPlay();
            }
        }

        document.getElementById(this.props.obj.id).addEventListener('animationend', function(){
            this.style.animationName = ''}, false);

        document.getElementById(this.props.obj.id).addEventListener('click', function() {
            this.style.animationName = 'move';
            soundPlay();
        });

        document.getElementById('body').addEventListener('keyup', function(e) {
            checkKeyCode(e);
        });
    };
    
    render() {
	    return (
            <div>
		        <button className="sounds-button" id={this.props.obj.id}>{ this.props.obj.keyTrigger }</button>
            </div>
        );
    }
};

export default Page;
