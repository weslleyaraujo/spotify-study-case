import { GQLArtist } from "../../generated";
import uuid from "uuid/v1";

import url from "../../../assets/images/big-thief.jpg";

const artist: GQLArtist = {
  __typename: "Artist",
  id: uuid(),
  monthly_listeners: 2988,
  name: "Big Thief",
  cover: {
    __typename: "Image",
    url
  }
};

export { artist };
