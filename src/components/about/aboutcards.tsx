import classNames from "classnames";
import {
    IoIosBriefcase,
    IoIosChatbubbles,
    IoMdDesktop,
    IoMdHeart,
    IoMdPin,
    IoMdStar
} from "react-icons/io";
import {person} from "../../store/person";
import React from "react";
import {Card} from "./card";

interface Props {}

export const Aboutcards = (props: Props) => (
    <div className={classNames({"contentWrapper":true, "aboutCards":true})}>
        <Card>
            <IoMdPin />
            <label>Currently based in</label>
            <p>
                <strong>{person.city}</strong>{(person.locationHint) ? " " + person.locationHint : null},<br/>
                {person.state}, {person.country}
            </p>
        </Card>
        <Card>
            <IoIosBriefcase />
            <label>Currently Working at</label>
            <p>
                <b>{person.employer}</b> as<br/>
                {person.job}<br/>
            </p>
        </Card>
        <Card>
            <IoIosChatbubbles />
            <label>Languages</label>
            <p>
                {person.languages.map((language,i) => {
                    const last = i+1 ===  person.languages.length;
                    return (<span key={"languages_" + i}>{language.name} ({language.level}){(!last) ? (<span>, <br/></span>) : null}</span>)
                })}
            </p>
        </Card>
        <Card>
            <IoMdStar />
            <label>Qualities</label>
            <p>
                {person.qualities.map((os,i) => {
                    const last = i+1 ===  person.qualities.length;
                    const first = i ===  0;
                    return (
                    <span key={"qualities_" + i}>
                        {first ? <b>{os}</b> : os}
                    
                    {(!last) ? (<span>,<br /></span>
                    ) : null}</span>)
                })}
            </p>
        </Card>
        <Card>
            <IoMdDesktop />
            <label>Technologies</label>
            <p>
                {person.favTec.map((tec,i) => {
                    const last = i+1 ===  person.favTec.length;
                    return (<span key={"favTec" + i}>{tec}{(!last) ? (<span>, </span>) : null}</span>)
                })}
            </p>
        </Card>
        <Card>
            <IoMdHeart />
            <label>Interests</label>
            <p>
                {person.interests.map((interest,i) => {
                    const last = i+1 ===  person.interests.length;
                    return (<span key={i}>{interest}{(!last) ? (<span>, <br /></span>) : null}</span>)
                })}
            </p>
        </Card>
    </div>
);

export default Aboutcards;