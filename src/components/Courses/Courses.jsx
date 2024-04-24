import React, { useState, useEffect } from "react";
import "./Courses.css";
import { badgeData } from "../../assets/badgeData.json";
import badgeFullStack from "../../assets/badges/DiplomaUtn.png";
import badgeEmpujar from "../../assets/badges/DiplomaEmpujar.png";
import badgeCompañerismo from "../../assets/badges/EmpujarCompañerismo.png";

export const Courses = () => {
    const [loadedBadge, setLoadedBadge] = useState(null);
    const [actualPosition, setActualPosition] = useState(0);
    const [badgeInfo, setBadgeInfo] = useState({ title: "", caption: "" });

    useEffect(() => {
        const currentBadge = badgeData.find(badge => badge.id === actualPosition + 1);
        if (currentBadge) {
            setBadgeInfo({ title: currentBadge.title, caption: currentBadge.caption });
            switch (currentBadge.id) {
                case 1:
                    setLoadedBadge(badgeFullStack);
                    break;
                case 2:
                    setLoadedBadge(badgeEmpujar);
                    break;
                case 3:
                    setLoadedBadge(badgeCompañerismo);
                    break;
                default:
                    setLoadedBadge(null);
            }
        }
    }, [actualPosition]);

    const handleBadgeLoader = (direction) => {
        setActualPosition(prevPosition => {
            return direction === "right" 
                ? prevPosition < badgeData.length - 1 ? prevPosition + 1 : 0 
                : prevPosition > 0 ? prevPosition - 1 : badgeData.length - 1;
        });
    };
    

    return (
        <section className="badgeSection">
            <div className="badgesTitle">
                <span className="titleline"></span>
                <h2 className="title">Estudios certificados</h2>
                <span className="titleline"></span>
            </div>

            <div className="badgeTitleCaption">
                <h2>{badgeInfo.title}</h2>
                <p>{badgeInfo.caption}</p>
            </div>

            <div className="badgeImages">
                <button className="leftArrow" onClick={() => handleBadgeLoader("left")}>{`<`}</button>
                {loadedBadge && <img src={loadedBadge} alt="" />}
                <button className="rightArrow" onClick={() => handleBadgeLoader("right")}>{`>`}</button>
            </div>

            <div className="badgefinalLines">
                <span className="finalline"></span>
                <span className="finalmiddleline"></span>
                <span className="finalline"></span>
            </div>
        </section>
    );
};
