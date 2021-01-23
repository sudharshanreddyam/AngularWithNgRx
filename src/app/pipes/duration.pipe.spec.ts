import { DurationPipe } from './duration.pipe';


describe( 'DurationPipe', () => {

  let duration: DurationPipe;

  beforeEach( () => {
    duration = new DurationPipe();
  } );

  it( 'should return string type: "${number} min"', () => {
    const less1Hours: number = 55;
    const resultString: string = duration.transform( less1Hours );

    expect( resultString.includes( 'h' ) ).toBeFalsy();
    expect( resultString.includes( 'min' ) ).toBeTruthy();
  } );

  it( 'should return string type: "${number} h ${number} min"', () => {
    const more1Hours: number = 125;
    const resultString: string = duration.transform( more1Hours );

    expect( resultString.includes( 'h' ) && resultString.includes( 'min' ) ).toBeTruthy();
  } );
} );
