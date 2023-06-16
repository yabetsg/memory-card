
interface CardProps {
    src: string;
    onClick: (e:any) => void;
    data_id: number;
    character: string;
  }

export const Card: React.FC<CardProps> = ({src,onClick,data_id,character}) =>{
    
    return(
        <div  style={{width:150}} data-id={data_id} className="card" onClick={onClick} >
           <img data-character={character} src={src} alt="" ></img>
        </div>
    );
};