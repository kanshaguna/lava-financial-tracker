class SignUp {
    constructor() {
        this.passW = document.signUpForm.password.value
        this.validate()
    }

    validate() {

        if (this.passW.length > 0 || this.passW.length < 8) {
            console.log("Password must be at least 8 characters")
        }
    }



}



export default SignUp;

