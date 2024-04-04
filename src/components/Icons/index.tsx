import React from "react";
import {
    IoLogoLinkedin,
    IoLogoInstagram,
    IoMdMail,
    IoLogoGithub,
    IoLogoXing,

} from "react-icons/io"
import {
    AiFillMediumSquare
} from "react-icons/ai"
import "./style.scss"
import {person} from "../../store/person";


export class Icons extends React.Component {
    render(): React.ReactElement {
        return (
            <div>
                {(person.linkedin) ? <a href={person.linkedin}><IoLogoLinkedin size={"1.7rem"}/></a> : null}
                {(person.instagram) ? <a href={person.instagram}><IoLogoInstagram size={"1.7rem"}/></a> : null}
                {(person.email) ? <a href={"mailto:" + person.email}><IoMdMail size={"1.7rem"}/></a> : null}
                {(person.github) ? <a href={person.github}><IoLogoGithub size={"1.7rem"}/></a> : null}
                {(person.xing) ? <a href={person.xing}><IoLogoXing size={"1.7rem"}/></a> : null}
                {(person.medium) ? <a href={person.medium}><AiFillMediumSquare size={"1.7rem"}/></a> : null}
                {/* <a>Medium</a> */}
            </div>
        );
    }
}