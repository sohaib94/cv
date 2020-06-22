import React from "react";
import "./BashWindow.css";

const BashWindow = (props) => {
    return (
        <div
            className='bash'
            style={{
                backgroundColor: props.backgroundColour,
            }}>
            <div className='taskbar'>
                <div className='close-button button' />
                <div className='minimise-button button' />
                <div className='maximise-button button' />
            </div>
            <div className='main-window'>
                <div
                    className='details'
                    style={{ color: props.textColour, fontSize: "120%" }}>
                    <div className='logo'>
                        <img
                            id={props.logo}
                            src={require(`../assets/${props.logo}`)}
                            alt='Logo'
                            className='logo'
                        />
                    </div>
                    <div className='main-info bash-text'>
                        <ul>
                            {props.main_info.map((list_item, index) => {
                                return <li key={index}>{list_item}</li>;
                            })}
                        </ul>
                    </div>
                    <div className='sub-info bash-text'>
                        <ul>
                            {props.sub_info.map((list_item, index) => {
                                return <li key={index}>{list_item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BashWindow;
