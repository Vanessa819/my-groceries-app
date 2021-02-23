/* eslint-disable no-unused-vars */
import { render } from '@testing-library/react';
import React from 'react'
import ListItem from './ListItem'

class List extends React.Component {
    render() {
        // console.log(this.props)
        const listItems = this.props.list
            .map(item =>
                <ListItem
                    key={item.id}
                    item={item}
                    click={this.props.click}
                />)
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}


export default List