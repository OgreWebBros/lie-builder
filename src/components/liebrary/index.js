import { useState, useEffect, useCallback } from 'react'

import { addDetail, deleteDetail, asyncGetLieDetails } from '../../firebaseActions';
import bemBuilder from '../../helpers/bemBuilder';

import Button from '../button'
import Modal from '../modal'

const Liebrary = () => {

    const blankLieDetails = {
        roles: ["_____"],
        tones: ["_____"],
        scenes: ["_____"],
    }

    const [lieDetails, setLieDetails] = useState(blankLieDetails);
    const [modalState, setModalState] = useState({ open: false });

    const refreshLies = () => {
        (async () => {
            const incomingLieDetails = await asyncGetLieDetails();
            setLieDetails(...incomingLieDetails);
        })();
    }

    useEffect(() => {
        refreshLies();
    }, []
    );

    const setClientLies = (type, detail, updateType) => {
        let newLies = lieDetails
        if(updateType==="add") {
            newLies[type].push(detail)
        } else {
            newLies[type] = newLies[type].filter(word => word !== detail);
        }
        setLieDetails(
            newLies
        )
    }

    const addLieDetail = (type, detail,) => {
        if (!lieDetails[type].includes(detail)) {
            setClientLies(type, detail, 'add');
            addDetail(type, detail)
        } else {
            alert("already got it");
        }
    }

    const removeLieDetail = (type, detail) => {
        setClientLies(type, detail, 'remove');
        deleteDetail(type, detail);
    }

    const AddDetailAndCloseModal = (type, detail) => {
        addLieDetail(type, detail);
        setModalState({ open: false });
    }



    const getDetails = (type) => {
        const bemDetails = {
            block: block,
            modifier: [type]
        }
        return (
            <div className={bemBuilder({ ...bemDetails, element: "wrapper" })}>
                <div className={bemBuilder({ ...bemDetails, element: "title-bar" })}>
                    <h2 className={bemBuilder({ ...bemDetails, element: "title" })}>{type}</h2>
                    <Button
                        {...bemDetails}
                        action={() => {
                            setModalState({ type: type, open: "true" })
                        }}
                        text="add" />
                </div>

                <ul className={bemBuilder({ ...bemDetails, element: "list" })}>
                    {lieDetails[type].map((detail, index) => (
                        <li className={bemBuilder({ ...bemDetails, element: "detail" })} key={`${type}-${index}`}>
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    const block = 'liebrary'
    return (
        <>
            <div className="lie__wrapper content__wrapper">
                <button className="button material material-black" onClick={() => { removeLieDetail("tones", "test") }}>delete test from tones</button>
                <div className={block}>
                    {getDetails("tones")}
                    {getDetails("roles")}
                    {getDetails("scenes")}
                </div>
            </div>
            {modalState.open &&
                <Modal open={modalState} toggle={() => { setModalState({ open: false }) }}>
                    <p> I am a {modalState.type} modal babbbeeee</p>
                    <Button text="add" action={() => { AddDetailAndCloseModal(modalState.type, "test"); }} />
                </Modal>}
        </>
    )
}
export default Liebrary