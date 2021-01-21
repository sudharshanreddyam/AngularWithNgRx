import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { IAuthor } from './../../interfaces/course';

@Component( {
  selector: 'app-authors-control',
  templateUrl: './authors-control.component.html',
  styleUrls: [ '../course-form/course-form.component.css' ],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => AuthorsControlComponent ),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef( () => AuthorsControlComponent ),
    multi: true
  } ]
} )
export class AuthorsControlComponent implements OnInit, ControlValueAccessor, Validator {

  private _value: string = '';
  public authors: IAuthor[] = [];
  onChange = ( value: any ) => { };
  onTouched = () => { };
  discloseValidatorChange = () => { };

  get value() {
    return this._value;
  }

  @Input() set value( val: string ) {
    this._value = val;
    this.onChange( this._value );
    this.discloseValidatorChange();
  }


  constructor ( public coursesService: CourseService ) {
    this.coursesService.getAuthors().subscribe( authors => this.authors = authors );
  }
  validate( control: AbstractControl ): ValidationErrors {
    return Validators.required( control );
  }
  registerOnValidatorChange?( fn: () => void ): void {
    this.discloseValidatorChange = fn;
  }
  writeValue( value ): void {
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
