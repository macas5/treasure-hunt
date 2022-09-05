
import { maps } from './mapPicturesData.js';
import { mapPictures } from "./mapPictures.js";
import { gridContainer } from "./gridContainer.js";
import { headerElement } from "./header.js";
import { btnElement } from "./btn.js";
import { filter } from "./filter.js";


headerElement();
filter(maps)
gridContainer();
mapPictures(maps);
btnElement(maps);


