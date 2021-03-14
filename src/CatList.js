// write your CatList component here
import React, { Component } from 'react'

class CatList extends Component {
    render () {
        const pics = this.props.catPics.map(pic => <img key={pic.id} src={pic.url} alt={pic.id} />)
        return (
            <div>
                {pics}
            </div>
        )
    }
}

export default CatList