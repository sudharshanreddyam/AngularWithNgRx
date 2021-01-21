import { createReducer, on } from '@ngrx/store';
import { Course } from './../../interfaces/course';
import * as coursesActions from './courses.actions';

export interface ICoursesState {
  courses: Course[];
  searchParam: string;
  currentCountCourses: number;
}

const initialState: ICoursesState = {
  courses: [],
  searchParam: '',
  currentCountCourses: 0
};

const coursesReducer = createReducer(
  initialState,
  on( coursesActions.SaveCourses,
    ( state: ICoursesState, action ) => ( { ...state, courses: action.courses } ) ),
  on( coursesActions.Search,
    ( state: ICoursesState, action ) => ( { ...state, searchParam: action.search } ) ),
  on( coursesActions.UploadCountCourses,
    ( state: ICoursesState ) => ( { ...state, currentCountCourses: state.currentCountCourses + 10 } ) )
);

export default coursesReducer;
