
import { maps } from './mapPicturesData.js';
import { mapPictures } from "./mapPictures.js";
import { gridContainer } from "./gridContainer.js";
import { headerElement } from "./header.js";
import { btnElement } from "./btn.js";


headerElement();
gridContainer();
mapPictures(maps);
btnElement(maps);

