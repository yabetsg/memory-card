import uniqid from 'uniqid'

interface CardProps {
    src: string;
    onClick: (e:any) => void;
    data_id: number;
    character: string;
  }

export const Card: React.FC<CardProps> = ({src,onClick,data_id,character}) =>{
    
    return(
        <div   data-id={data_id} className="drop-shadow-2xl border-solid border-2 border-red-800 w-290 h-290 bg-custom rounded-lg hover:bg-lime-100 hover:transition" onClick={onClick} >
            <img className="w-250 h-250 m-4" data-character={character} src={src} alt="" />
        </div>
    );
};