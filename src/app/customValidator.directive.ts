import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms'
import {Directive} from '@angular/core'

@Directive({
    selector: '[isDateLessThanTomorrow]',
    providers:[ {provide: NG_VALIDATORS, useExisting: isDateLessThanTomorrowValidatorDirective, multi:true}]
})
export class isDateLessThanTomorrowValidatorDirective implements Validator
{
    validate(control: AbstractControl):{[key:string]:any} | null
    {
        if(control.value  ){
            // let dateEntered = new Date(control.value.year+'-'+control.value.month+'-'+control.value.day || new Date(control.value))
            let dateEntered = new Date(control.value)
            let today = new Date()
            if( !dateEntered || dateEntered > today )
            return {'inTheFuture': true, 'firstTouched':false}
            else
            return  null
        } else return {'firstTouched':true}
    }
}