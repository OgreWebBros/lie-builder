import { useState, useEffect, useCallback } from 'react'
import Button from '../button'
import { addDetail, asyncGetLieDetails } from '../../firebaseActions';
import bemBuilder from '../../helpers/bemBuilder';

const Liebrary = () => {

    const blankLieDetails = {
        roles: ["_____"],
        tones: ["_____"],
        scenes: ["_____"],
    }

    const [lieDetails, setLieDetails] = useState(blankLieDetails);

    useEffect(() => {
        (async () => {
            const incomingLieDetails = await asyncGetLieDetails();
            setLieDetails(...incomingLieDetails);
        })();
    }, []
    );

    const getDetails = (type) => {
        const bemDetails = {
            block: block,
            modifier: [type]
        }
        return (
            <div className={bemBuilder({ ...bemDetails, element: "wrapper" })}>
                <div className={bemBuilder({ ...bemDetails, element: "title-bar" })}>
                    <h2 className={bemBuilder({ ...bemDetails, element: "title" })}>{type}</h2>
                    <Button {...bemDetails} action={()=>{addDetail(type, "test")}} text="add" />
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
        <div className="lie__wrapper content__wrapper">
            <div className={block}>
                {getDetails("tones")}
                {getDetails("roles")}
                {getDetails("scenes")}
            </div>
        </div>
    )
}
export default Liebrary