import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.style.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl:
            "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "Jackets",
          imageUrl:
            "https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "Sneakers",
          imageUrl:
            "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "Womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "Mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
