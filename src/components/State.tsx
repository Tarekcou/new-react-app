import { useState } from "react";
interface props {
  children: string;
  onClick: () => void;
}
const State = ({ children, onClick }: props) => {
  const [game, setGame] = useState({
    match: "cricket",
    player: [
      {
        id: 1,
        title: "tarek",
        quantity: 1,
      },
      {
        id: 2,
        title: "tarek",
        quantity: 1,
      },
    ],
  });
  const handleClick = () => {
    onClick();
    //setGame({ ...game, player:game.player.map(plr=>{plr.id===1?{...plr,quntity:2}:plr.quantity})} );
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default State;
