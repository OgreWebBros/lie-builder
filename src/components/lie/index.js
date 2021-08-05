import { useState, useEffect, useCallback} from 'react'
import Button from '../button'
import getRandomArrayEntry from '../../helpers/getRandomIndex';
import { asyncGetLieDetails } from '../../firebaseActions';

const Lie = () => {

    const blankLie = {
        tone:"_______",
        role:"_______",
        scene:"_____________________" 
    }
    const [lieDetails, setLieDetails] = useState();
    const [lie, setLie] = useState(blankLie);

    const getFreshLie = useCallback(
        () => {
            return {
                tone:getRandomArrayEntry(lieDetails.tones), 
                role:getRandomArrayEntry(lieDetails.roles), 
                scene:getRandomArrayEntry(lieDetails.scenes) 
            }
        },[lieDetails]
    )

    useEffect(() => {
        (async () => {
          const incomingLieDetails = await asyncGetLieDetails();
          setLieDetails(...incomingLieDetails);      
        })();
      },[]
    );
    useEffect(()=>{
        if(lieDetails){
        setLie(getFreshLie())} 
    }, [lieDetails, getFreshLie])


      console.log("in lie", lieDetails)
 
    const block = 'lie'
    return (
        <div className="lie__wrapper content__wrapper">
            <div className="lie">
            <div className="lie__actions">
                    <Button block={block} modifier={["tone"]} text="tone" action={()=>{setLie({...lie, tone: getRandomArrayEntry(lieDetails.tones)})}}/>
                    <Button block={block} modifier={["role"]}  text="role" action={()=>{setLie({...lie, role: getRandomArrayEntry(lieDetails.roles)})}}/>
                    <Button block={block} modifier={["scene"]}  text="scene" action={()=>{setLie({...lie, scene:getRandomArrayEntry(lieDetails.scenes)})}}/>
                    <Button block={block} text="all" action={()=>{setLie(getFreshLie())}}/>
                </div>
                <span className="lie__copy">
                    You are a 
                    <span className="lie__tone"> {lie.tone}</span>
                    <span className="lie__role"> {lie.role} </span>
                    who
                    <span className="lie__scene"> {lie.scene}</span>
                    .
                </span>
            </div>
        </div>
    )
}
export default Lie