import { useState, useEffect, useCallback} from 'react'
import Button from '../button'
import getRandomArrayEntry from '../../helpers/getRandomIndex';
import { asyncGetLieDetails } from '../../firebaseActions';

const Lie = () => {

    const blankLie = {
        tone:"_______",
        role:"_______",
        scene:"_____________________" ,
        indefinateArticle: " a"
    }
    const [lieDetails, setLieDetails] = useState();
    const [lie, setLie] = useState(blankLie);

    const getCorrectArticle = (followingWord) => {
        const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        const wordStartsWithAVowel = vowels.includes(followingWord[0]);
        const article = wordStartsWithAVowel ? " an" : " a";
        return  article
    }
    const getFreshLie = useCallback(
        () => {
            const freshLie = {
                tone:getRandomArrayEntry(lieDetails.tones), 
                role:getRandomArrayEntry(lieDetails.roles), 
                scene:getRandomArrayEntry(lieDetails.scenes) 
            }
            
            return {
                ...freshLie,
                indefinateArticle:  getCorrectArticle(freshLie.tone) 
            }
        },[lieDetails]
    )
    
    const setRandomTone = () => {
        const freshTone = getRandomArrayEntry(lieDetails.tones)
        setLie ({
            ...lie,
            tone: freshTone,
            indefinateArticle: getCorrectArticle(freshTone)
        })
    }
    const setRandomRole = () => {
        const freshRole = getRandomArrayEntry(lieDetails.roles)
        setLie ({
            ...lie,
            role: freshRole
        })
    }
    const setRandomScene = () => {
        const freshScene = getRandomArrayEntry(lieDetails.scenes)
        setLie ({
            ...lie,
            scene: freshScene,
        })
    }
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

    const block = 'lie'
    return (
        <div className="lie__wrapper content__wrapper">
            <div className="lie">
            <div className="lie__actions">
                    <Button block={block} modifier={["tone"]} text="tone" action={()=>{setRandomTone()}}/>
                    <Button block={block} modifier={["role"]}  text="role" action={()=>{setRandomRole()}}/>
                    <Button block={block} modifier={["scene"]}  text="scene" action={()=>{setRandomScene()}}/>
                    <Button block={block} text="all" action={()=>{setLie(getFreshLie())}}/>
                </div>
                <span className="lie__copy">
                    You are  
                    {lie.indefinateArticle}
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