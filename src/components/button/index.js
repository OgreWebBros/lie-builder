
import bemBuilder from '../../helpers/bemBuilder';
const Button = ({action, text, block, modifier=[]}) =>  {
   const classDetails = {
       block: block ? block : 'button',
       element: block ? 'button' : null,
       modifier: modifier
   }
   return (
        <button className={bemBuilder(classDetails)} onClick={action}>
        {text}
    </button>
   )
}
export default Button