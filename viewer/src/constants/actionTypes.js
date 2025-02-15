import { constant } from './Constants';

export const ActionTypes = constant({
    LOAD_DOCUMENT_BY_URL: null,
    CONFIGURE: null,
    LOAD_DOCUMENT: null,
    UPDATE_OPTIONS: null,
    SET_IMAGE_PAGE_ERROR: null,
    SET_TEXT_PAGE_ERROR: null,
    START_TO_BUNDLE: null,
    FINISH_TO_BUNDLE: null,
    CLOSE_SAVE_DIALOG: null,
    OPEN_SAVE_DIALOG: null,
    UPDATE_FILE_PROCESSING_PROGRESS: null,
    ERROR: null,
    SAVE_DOCUMENT: null,
    SET_UI_OPTIONS: null,
    TOGGLE_OPTIONS_WINDOW: null,
    CLOSE_ERROR_WINDOW: null,
    DESTROY: null,
    OPEN_PRINT_DIALOG: null,
    CLOSE_PRINT_DIALOG: null,
    PREPARE_PAGES_FOR_PRINTING: null,
    START_PRINTING: null,
    UPDATE_PRINT_PROGRESS: null,
    CLOSE_CONTENTS: null,
    TOGGLE_CONTENTS: null,
    PIN_TOOLBAR: null,
    UNPIN_TOOLBAR: null,
});