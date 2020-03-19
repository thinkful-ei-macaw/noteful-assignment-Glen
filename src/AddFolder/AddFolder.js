import React from 'react';
import ApiContext from '../ApiContext';
import createBrowswerHistory from '../history';


class AddFolder extends React.Component {

    history = createBrowswerHistory;
    static contextType = ApiContext;


    // addFolderFunc = (e) => {
    //     e.preventDefault();
    //     fetch('http://localhost:9090/folders', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ name: this.state.value }),
    //     })
    //     this.history.goBack();
    // }

    state = {

        value: '',

    }

    handleSubmit = e => {
        e.preventDefault(e);
        this.context.addFolder(this.state.value);

    }






    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.context.addFolder(this.state.value);
    //     this.setState({
    //         value: ''
    //     })


    // }

    render() {

        console.log(this.context)
        // if (this.state.value === '') {
        //     console.log('Good to go')
        // } else if (this.state.value === 'Justin') {
        //     throw new Error('NO GOOD!')
        // }

        return (
            <form onSubmit={e => { this.handleSubmit(e) }} >
                <label htmlFor="newFolder">Name of New Folder</label>
                <input required minLength="1" maxLength="15" id="newFolder" type="text" value={this.state.value} onChange={e => this.setState({ value: e.target.value })} />
                <button type="submit">Submit New Folder</button>
            </form>
        )
    }

}



export default AddFolder;