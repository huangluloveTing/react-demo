import React, { Component } from 'react';

export default withPage = (Page) => {
    return class extends Component {

        render() {
            <div style={{position:'fixed' , top: '0px' , left: '0px' , right: '0px'}}>
                <Page />
            </div>
        }
    }
}