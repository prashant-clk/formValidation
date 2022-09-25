import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';
export class UserFormControl extends FormControl {
    label: string;
    modelProperty: string;
    constructor(label: string, property: string, value: any, validators: any) {
        super(value, validators);
        this.label = label;
        this.modelProperty = property;
    }
    getValidationMessages(){
        let messages:string[]  = [];
        if(this.errors){
            for(let errorName in this.errors){
                switch(errorName){
                    case "required":
                        messages.push(`you are entered a ${this.label}`);
                        break;
                    case "minlength":
                        messages.push(
                            `A ${this.label} must be atleast ${this.errors["minlength"].requiredLength} characters`
                        );
                        break;
                    case "maxlength":
                        messages.push(
                            `A ${this.label} must be atleast ${this.errors["maxlength"].requiredLength} characters`
                        );
                        break;
                    case "pattern":
                        messages.push(
                            `A ${this.label} contains illigal characters`
                        );
                            break;
                }
            }
        }
        return messages;
    }
}

export class UserFromGroup extends FormGroup {
    constructor() {
        super({
            name: new UserFormControl("Name", "name", "", Validators.required),
            phone: new UserFormControl("Phone", "phone", "",
                Validators.compose([
                    Validators.required,
                    Validators.pattern("^[0-9\.]+$"),
                    Validators.minLength(10),
                    Validators.maxLength(10)
                ])),
                email: new UserFormControl("Email","email","",Validators.required),
                tags:new UserFormControl("Tags","tags","",Validators.compose([
                    Validators.required,
                    Validators.pattern("^[A-Za-z ]+$")
                ]))
        });
    }

    get UserControls(): UserFormControl[]{
        return Object.keys(this.controls).map(k => this.controls[k]  as UserFormControl);
    }
    getValidationMessages(name: string): string[]{
        return (this.controls[name] as UserFormControl).getValidationMessages();
    }
    getFormValidationMessages():string[]{
        let messages:string[] = [];
        Object.values(this.controls).forEach( c => messages.push(...(c as UserFormControl).getValidationMessages()));
        return messages;
    }
}