import React, { RefObject} from 'react';
import "./style.scss";
import {Navigation} from "./Navigation";
import {
    IoMdArrowDown
} from "react-icons/io"
import {person} from "../../store/person";
import Titelfilm from "../../rsc/Titelfilm.m4v";

interface State {
    positionX: number;
    positionY: number;
    width: number;
    height: number;
}

interface Props {}

export class Intro extends React.Component<Props, State> {

    wrappingElement: RefObject<HTMLDivElement>;
    effectElement: RefObject<HTMLDivElement>;
    fName: RefObject<HTMLDivElement>;
    lName: RefObject<HTMLDivElement>;
    nextSection: HTMLElement | null;

    constructor(props: Props) {
        super(props);
        this.wrappingElement = React.createRef();
        this.effectElement = React.createRef();
        this.fName = React.createRef();
        this.lName = React.createRef();
        this.nextSection = null;

        this.state = {
            positionX: window.innerWidth/2,
            positionY: window.innerHeight/2,
            width: 0,
            height: 0,
        };
    }

    componentDidMount(): void {
        this.setState({
            width: this.wrappingElement.current!.offsetWidth,
            height: this.wrappingElement.current!.offsetHeight
        })
        this.nextSection = document.getElementById("about");
        this.effectElement.current!.addEventListener('touchend', event => {
            event.stopPropagation();
        });
    }

    mouseMoved(e: React.MouseEvent): void {
        this.setState({
            positionX: e.clientX,
            positionY: e.clientY,
            width: this.wrappingElement.current!.offsetWidth,
            height: this.wrappingElement.current!.offsetHeight
        })
    }

    render(): React.ReactElement | null | undefined {

        const fNameHeight = (this.fName.current) ? this.fName.current!.offsetHeight : 0;
        const fNameWidth = (this.fName.current) ? this.fName.current!.offsetWidth : 0;

        const fnameStyle = {
            transform: "translate3d(" + ((-this.state.positionX + this.state.width/2)/16 - fNameWidth/2) + "px, " +
                ((-this.state.positionY - this.state.height)/16 - fNameHeight*0.75) + "px, 0)"+
                "rotate3d(" + (-1*(this.state.positionY - this.state.height/2)/10)/(this.state.height/2) + ", "
                + ((this.state.positionX - this.state.width/2)/10)/(this.state.width/2) +", 0,10deg)",
            zIndex: 2,
        };

        const lNameWidth = (this.lName.current) ? this.lName.current!.offsetWidth : 0;

        const lnameStyle = {
            transform: "translate3d(" + ((-this.state.positionX + this.state.width/2)/8 - lNameWidth/2) + "px, " +
                (((-this.state.positionY - this.state.height)/8))+ "px, 0) "+
                 "rotate3d(" + (-1*(this.state.positionY - this.state.height/2)/100)/(this.state.height/2) + ", "
                 + ((this.state.positionX - this.state.width/2)/100)/(this.state.width/2) +", 0,10deg)",
            zIndex: 3,
        };

        return (
            <div ref={this.wrappingElement}
                 className="intro" id="intro"
                 onMouseMove={this.mouseMoved.bind(this)}>
                     <div className={"titleElement"}>

                     
                        <div className="effectWrapper"
                            ref={this.effectElement}>
                            <div ref={this.fName} className="effect" style={fnameStyle}>{person.firstName.toUpperCase()}</div>
                            <div ref={this.lName} className="effect" style={lnameStyle}>{person.lastName.toUpperCase()}</div>
                        </div>
                        <Navigation/>
                    </div>
                    <div className="downArrow"
                    onClick={() => {
                        this.nextSection!.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    ><IoMdArrowDown /></div>
                    <video id="background-video" loop playsInline autoPlay muted>
                        <source src={Titelfilm} type="video/mp4" />
                        <source src={Titelfilm} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
            </div>);
    }
}