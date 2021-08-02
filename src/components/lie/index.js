import { useState } from 'react'
import Button from '../button'

import roles from '../../constants/roles';
import scenes from '../../constants/scenes';
import tones from '../../constants/tones'
import getRandomArrayEntry from '../../helpers/getRandomIndex';

const Lie = () => {
    const randomLie = {
        tone:getRandomArrayEntry(tones), 
        role:getRandomArrayEntry(roles), 
        scene:getRandomArrayEntry(scenes)
    }
    const [lie, setLie] = useState(randomLie);
    const block = 'lie'
    return (
        <div className="lie__wrapper">
            <div className="lie">
                <span className="lie__copy">
                    You are a<nbsp />
                    <span className="lie__tone"> {lie.tone}</span>
                    <span className="lie__role"> {lie.role} </span>
                    who
                    <span className="lie__scene"> {lie.scene}</span>
                    .
                </span>
                <div className="lie__actions">
                    <Button block={block} modifier={["tone"]} text="tone" action={()=>{setLie({...lie, tone: getRandomArrayEntry(tones)})}}/>
                    <Button block={block} modifier={["role"]}  text="role" action={()=>{setLie({...lie, role: getRandomArrayEntry(roles)})}}/>
                    <Button block={block} modifier={["scene"]}  text="scene" action={()=>{setLie({...lie, scene: getRandomArrayEntry(scenes)})}}/>
                    <Button block={block} text="all" action={()=>{setLie(randomLie)}}/>
                </div>
            </div>
        </div>
    )
}
export default Lie