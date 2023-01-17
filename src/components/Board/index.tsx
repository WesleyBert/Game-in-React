import Hero from "../Hero";
import { GAME_SIZE } from "../../settings/constants";
import MiniDemon from "..";
import Demon from "../Demon";
import Chest from "../Chest";
import Trap from "../Trap";


const Board = () => {
    return (
    <div>
        <Hero/>
        <Demon/>
        <MiniDemon/>
        <Trap/>
        <Chest/>
        <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/>
    </div>

    );
}

export default Board;