import { useState, useEffect} from 'react'

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
        if (updateType === "add") {
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
        } else if (!detail && detail === "") {
            alert("You got to enter something at least")
        } else {
            alert("already got it");
        }
    }

    const removeLieDetail = (type, detail) => {
        setClientLies(type, detail, 'remove');
        deleteDetail(type, detail);
    }


    const closeModalandCleanUp = () =>{
        setModalState({ open: false });
       // setNewDetail();
    }

    const AddDetailAndCloseModal = (type, detail) => {
        addLieDetail(type, detail);
        setModalState({ open: false });
        closeModalandCleanUp();
    }



    const removeDetailAndCloseModal = (type, detail) => {
        removeLieDetail(type, detail, 'remove');
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
                            cueAddModal(type)
                        }}
                        text="add" />
                </div>

                <ul className={bemBuilder({ ...bemDetails, element: "list" })}>
                    {lieDetails[type].map((detail, index) => (
                        <li className={bemBuilder({ ...bemDetails, element: "detail" })} key={`${type}-${index}`}>
                            <span className={bemBuilder({ ...bemDetails, element: "detail-text" })}>{detail}</span>
                            <Button   {...bemDetails} text="&#10006;" modifier={["small", type]} action={()=>{cueDeleteModal(type, detail)}}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }


    const cueDeleteModal = (type, detail) => {
        setModalState({
            open: true,
            contents: <RemoveModal type={type} detail={detail}/>,
            type: type,
            targetDetail: detail
        })
    }
  

    const cueAddModal = (type) => {
        setModalState({
            open: true,
            contents: <AddModal type={type}/>,
            type: type
        })
   
    }

    const AddModal = ({type}) => (
        <>
        <p className="modal__text"> Add to <span className={`modal__text--${type}`}>{type}</span></p>
        <input className="modal__input" id={`${type}-input}`} type="text" />
      {/*    Need to refactor this getElementById but am lazy */}
         <Button block="modal"  text="add it" action={() => { AddDetailAndCloseModal(type, document.getElementById(`${type}-input}`).value)}} />
     </>
    )

    const RemoveModal = ({type, detail}) => (
        <>
      
            <p className="modal__text"> You sure you want to remove <span className={`modal__text--${type}`}>{detail}</span> from <span className={`modal__text--${type}`}>{type}</span>? </p>
            <Button block="modal" text="remove it" action={() => { removeDetailAndCloseModal(type, detail); }} />
    
         </>
    ) 

    const block = 'liebrary'
    return (
        <>
            <div className="lie__wrapper content__wrapper">
                <div className={block}>
                    {getDetails("tones")}
                    {getDetails("roles")}
                    {getDetails("scenes")}
                </div>
            </div>
            {modalState.open &&
                <Modal open={modalState.open} toggle={() => {closeModalandCleanUp()}}>
                    { modalState.contents}
                </Modal>}
        </>
    )
}
export default Liebrary