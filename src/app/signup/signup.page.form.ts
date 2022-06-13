import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm {
    createForm(): FormGroup {
        throw new Error("Method not implemented.");
    }

    private formBuilder : FormBuilder;

    constructor ( formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }
    
    crateForm() : FormGroup {
        return this.formBuilder.group({
            email : ['', [Validators.required, Validators.email]],
            password : ['', [Validators.required]]
        });
    }
}