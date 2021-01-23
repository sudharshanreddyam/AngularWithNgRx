
import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/interfaces/course';

export const LoadCourses = createAction( '[courses] Load Courses' );
export const SaveCourses = createAction( '[courses] Save Courses', props<{ courses: Course[]; }>() );
export const SaveCoursesSuccess = createAction( '[courses] Save Courses Success' );
export const Search = createAction( '[courses] Search Courses', props<{ search: string; }>() );
export const SearchSuccess = createAction( '[courses] Search Courses Success' );
export const DeleteCourse = createAction( '[courses] Delete Course', props<{ id: number; }>() );
export const DeleteCourseSuccess = createAction( '[courses] Delete Course Success' );
export const LoadMore = createAction( '[courses] Load More Course' );
export const UploadCountCourses = createAction( '[courses] Upload Count Courses' );
export const UpdateCourse = createAction( '[courses] Update Course', props<{ course: Course; }>() );
export const AddCourse = createAction( '[courses] Update Course', props<{ course: Course; }>() );
export const UpdateCourseSuccess = createAction( '[courses] Add Course Success' );
export const AddCourseSuccess = createAction( '[courses] Add Course Success' );
