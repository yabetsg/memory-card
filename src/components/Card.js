export const Card = ({src,onClick,id,character}) =>{
    
    return(
        <div  style={{width:150}} id={id} className="card" onClick={onClick} >
           <img character={character} src={src} alt="" ></img>
        </div>
    );
};