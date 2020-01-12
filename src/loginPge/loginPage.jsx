import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/action';
import mockData from './loginData.json';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        // setting default state value for the login

        this.state = {
            username: '',
            password: '',
            submitted: false,
            showError: false,
            validateEmail: false,
            validatePassword: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Validate = this.handleValidate.bind(this);
    }

    handleValidate(input, e){
        // Regex for email
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // Regex fro password: password length must be 8 charecters and it must have on especial harecter
        const passRegex = /^(?=[\w!@#$%^&*()+]{8,})(?:.*[!@#$%^&*()+]+.*)$/;

        const testData = (input === 'validateEmail') ? emailRegex : passRegex; 
        if(testData.test(e.target.value)){
            this.setState({
                [input]:false
            });
        }else{
            this.setState({
                [input]: true
            });
        }

    }
    // change the state for input fields
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }


    // submit buttton for logged 
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            if (username === mockData.username && password === mockData.password) {
                this.props.dispatch(login(username, password));
                this.props.history.push('/details')
            } else {
                this.setState({
                    showError: true
                })
            }
        }
    }

    render() {
        const { username, password, submitted, showError, validateEmail, validatePassword } = this.state;
        return (
            <div className="container pt-3">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-6 col-md-5">
                        <div className="card border-info text-center">
                            <div className="card-header">
                                Login to continue
                        </div>
                            <div className="card-body">
                                <form className="form-signin" name="form" onSubmit={this.handleSubmit}>
                                {submitted && showError && username && password &&
                                        <div className="help-block">Username or Password incorrect</div>
                                    }
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        name="username"
                                        value={username}
                                        placeholder="Enter Username"
                                        onChange={this.handleChange}
                                        onBlur={(e) => this.handleValidate('validateEmail', e)} />
                                    {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                    }
                                    {validateEmail &&
                                        <div className="help-block">Username is invalid</div>
                                    }
                                    <input
                                        type="password"
                                        className="form-control mb-2"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={this.handleChange}
                                        onBlur={(e) => this.handleValidate('validatePassword', e)}
                                        />
                                    {submitted && !password &&
                                        <div className="help-block mt">Password is required</div>
                                    }
                                    {validatePassword &&
                                        <div className="help-block">PassWord is invalid</div>
                                    }

                                <button className="btn btn-lg btn-primary btn-block mt-5" type="submit">Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(LoginPage);