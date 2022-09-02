import { maps } from './mapPicturesData.js';
import { testing } from "./mapPictures.js";
import { gridContainer } from "./gridContainer.js";
import { headerElement } from "./header.js";
import { btnElement } from "./btn.js";
import { hoverGame } from "./hoverGame.js";

headerElement();
gridContainer();
testing(maps);
btnElement();

