import React from 'react';
import styles from './style.sass';
import { connect } from 'react-redux';
import { change_message_screen} from '../../redux/actions/screenMessageAction';

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
    };
    
    componentDidMount() {

        const soundPlay = () => {
        let sound = new Audio(this.props.obj.url);
        sound.volume = this.props.volume / 100;
        sound.play();
        };

        const checkKeyCode = (e) => {
            if (
                e.keyCode === this.props.obj.keyCode.min ||
                e.keyCode === this.props.obj.keyCode.max
            ) {
                soundPlay();
                messageScreen(this.props.obj.id);
            }
        };

        const animation = () => {
            document.getElementById(this.props.obj.id).style.animationName = 'move';
        };

        const messageScreen = id => {
            this.props.change_message_screen(id);
        }

        document.getElementById(this.props.obj.id).addEventListener('animationend', function(){
            this.style.animationName = ''}, false);

        const getId = () => {
            return this.props.obj.id
        }

        document.getElementById(this.props.obj.id).addEventListener('click', function() {
            soundPlay();
            animation();
            messageScreen(getId());
        });

        document.getElementById('body').addEventListener('keypress', function(e) {
            checkKeyCode(e);
        });
    };
    
    render() {
	    return (
		    <button className="sounds-button" id={this.props.obj.id}>{ this.props.obj.keyTrigger }</button>
        );
    }
};
const mapStateToProps = state => {
    return {
        volume: state.change_volume_reducer
    };
};

const mapDispatchToProps = {
  change_message_screen 
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
