import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component( {
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: [ '../course-form/course-form.component.css' ],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => DateControlComponent ),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef( () => DateControlComponent ),
    multi: true
  } ]
} )
export class DateControlComponent implements OnInit, ControlValueAccessor, Validator {

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
    return Validators.required( control ) && Validators.pattern( 'yyyy - MM - dd' )( control );
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
