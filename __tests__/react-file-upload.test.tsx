import * as React from 'react';
import { shallow } from 'enzyme';
import FileUpload from '../src/FileUpload';

const props = {
    multiple: false,
    upload: jest.fn(),
    uploadCaption: "uploadCaption",
    uploadComplete: jest.fn(),
    smallInputs: false,
    isUploadVisible: true,
    setComponentState: jest.fn(),
    getFileUploadMessage: jest.fn(),
    loggingFunction: jest.fn(),
    handleEvent: jest.fn(),
    
    completedUpload: jest.fn(),
    fileDataRequest: "fileDataRequest",
    isAutoUpload: false,
    label: "label",
    isRequired: true,
    validationMessage: "validationMessage",
    isVisible: true,
    isValid: true,
    isMultiSelect: false,
    hintValue: "hintValue",
    helpInfo: "helpInfo",
}

describe('File upload component behaviour', () => {
    test('Component renders without crashing', () => {
        const wrapper = shallow(<FileUpload {...props} />);
        expect(wrapper.length).toEqual(1);
    });
});