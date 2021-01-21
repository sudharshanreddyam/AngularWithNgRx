import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component( {
  selector: 'app-duration-control',
  templateUrl: './duration-control.component.html',
  styleUrls: [ '../course-form/course-form.component.css' ],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => DurationControlComponent ),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef( () => DurationControlComponent ),
    multi: true
  } ]
} )
export class DurationControlComponent implements OnInit, ControlValueAccessor, Validator {

  private _value: number;
  onChange = ( value: any ) => { };
  onTouched = () => { };
  discloseValidatorChange = () => { };

  get value() {
    return this._value;
  }

  @Input() set value( val ) {
    this._value = val;
    this.onChange( this._value );
    this.discloseValidatorChange();
  }

  constructor () { }
  validate( control: AbstractControl ): ValidationErrors {
    return Validators.min( 0 )( control ) && Validators.max( 1000 )( control );
  }
  registerOnValidatorChange?( fn: () => void ): void {
    this.discloseValidatorChange = fn;
  }
  writeValue( value: number ): void {
    this._value = value;
  }
  registerOnChange( fn ) {
    this.onChange = fn;
  }
  registerOnTouched( fn ) {
    this.onTouched = fn;
  }

  setDisabledState?( isDisabled: boolean ): void { }

  ngOnInit(): void { }
}
