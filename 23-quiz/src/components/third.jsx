import axios from 'axios';
import React, { Component } from 'react';

class Third extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:[]
         }
    }
    componentDidMount(){
        this.getData()
    }
    
    getData = () => {
        let data = new Promise((resolve,reject) => {
            let url = "https://jsonplaceholder.typicode.com/posts"
           axios.get(url).then((response) => {
               resolve(response.data)
           }).catch((error) => {
               reject(error)
           }) 
        })
        
        data.then((response) => {
            this.setState({
                users: response
            })
        }).catch((error) => {
            console.log(error);
        })


    }
    render() { 
        const{users} = this.state;

        return ( <div>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (users.length > 0)
                        ?users.map((item) => {
                            return <tr>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>                                                        
                        })
                        :null
                    }
                </tbody>
            </table>
        </div> );
    }
}
 
export default Third;