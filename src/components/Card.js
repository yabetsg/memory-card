export const Card = ({src,onClick,id}) =>{
    return(
        <div id={id} className="card" onClick={onClick} >
           <img  src={src} alt="" ></img>
        </div>
    );
};