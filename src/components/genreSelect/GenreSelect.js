import React from "react";
import styles from "./GenreSelect.module.scss";

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
            React.createElement('ul', {className: styles['genre-container']},
                this.genreList
                    .map((genre, index) => React.createElement(
                        'li',
                        {
                            className: this.state.selected === genre ? styles.active + ' ' + styles.genre : styles.genre,
                            'data-testid': `test-${genre}`,
                            key: `${genre}-${index}`,
                            onClick: () => this.handleSelect(genre),
                        },
                        genre.toUpperCase())
                    )
            )
        )
    }
}
