import React from "react";
import "./GenreSelect.scss";

export default class GenreSelect extends React.Component {
    constructor({genreList, onSelect, selected}) {
        super();
        this.genreList = genreList;
        this.onSelect = onSelect;
        this.state = {
            selected: selected,
        }
    }

    handleSelect(genre) {
        this.onSelect(genre);
        this.setState({
            selected: genre
        })
    }

    render() {
        return(
            React.createElement('ul', {className: 'genre-container'},
                this.genreList
                    .map((genre, index) => React.createElement(
                        'li',
                        {
                            className: this.state.selected === genre ? "genre active" : "genre",
                            key: `${genre}-${index}`,
                            onClick: () => this.handleSelect(genre),
                        },
                        genre.toUpperCase())
                    )
            )
        )
    }
}
