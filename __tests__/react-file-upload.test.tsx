import * as React from 'react';
import { shallow } from 'enzyme';
import FileUpload from '../src/FileUpload';

const props = {
    className: '',
    id: '0',
    multiple: false,
    upload: jest.fn(() => Promise.resolve()),
    uploadCaption: 'uploadCaption',
    uploadComplete: jest.fn(),
    smallInputs: false,
    isUploadVisible: true,
    setComponentState: jest.fn(),
    getFileUploadMessage: jest.fn(),
    loggingFunction: jest.fn(),
    handleEvent: jest.fn(),

    completedUpload: jest.fn(),
    fileDataRequest: 'fileDataRequest',
    isAutoUpload: false,
    label: 'label',
    isRequired: true,
    validationMessage: 'validationMessage',
    isVisible: true,
    isValid: true,
    hintValue: 'hintValue',
    helpInfo: 'helpInfo',
    disabled: false,
};

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

const testfile = [{ name: 'testfile' }];
const testfiles = [{ name: 'testfile1' }, { name: 'testfile2' }];

describe('File upload component behaviour', () => {
    test('Component renders without crashing', () => {
        const wrapper = shallow(<FileUpload {...props} />);
        expect(wrapper.length).toEqual(1);
    });

    test('Test that onDrop and onFileSelected set state correctly with single file', () => {
        const wrapper = shallow(<FileUpload {...props} />);

        (wrapper as any).instance().onDrop(testfile);

        expect(wrapper.state('files')).toEqual(testfile);
        expect(wrapper.state('fileNames')).toEqual([testfile[0].name]);
        expect(wrapper.state('isFileSelected')).toBeTruthy();
    });

    test('Test that onDrop and onFileSelected set state correctly with multiple files', () => {
        const wrapper = shallow(<FileUpload {...props} />);

        (wrapper as any).instance().onDrop(testfiles);

        expect(wrapper.state('files')).toEqual(testfiles);
        expect(wrapper.state('fileNames')).toEqual(testfiles.map(file => file.name));
        expect(wrapper.state('isFileSelected')).toBeTruthy();
    });

    test('Test that upload triggers when files are stored in state', () => {
        const mockUpload = jest.fn(() => Promise.resolve());
        props.upload = mockUpload;
        const wrapper = shallow(<FileUpload {...props} />);

        wrapper.setState({ fileNames: testfiles.map(file => file.name), files: testfiles });
        expect.assertions(6);
        return (wrapper as any).instance().onUpload().then(
            () => {
                expect(wrapper.state('fileStatusList')).toEqual([
                    { fileName: 'testfile1', uploadSuccessful: true },
                    { fileName: 'testfile2', uploadSuccessful: true },
                ]);
                expect(wrapper.state('fileNames')).toEqual([]);
                expect(wrapper.state('isUploadDisabled')).toBeFalsy();
                expect(wrapper.state('isFileSelected')).toBeFalsy();
                expect(wrapper.state('isUploadComplete')).toBeTruthy();
                expect(wrapper.state('error')).toBeFalsy();
            },
        );
    });

    test('Test that upload doesn\'t trigger when no files are stored in state', () => {
        const mockUpload = jest.fn(() => Promise.resolve());
        props.upload = mockUpload;
        const wrapper = shallow(<FileUpload {...props} />);

        wrapper.setState({ fileNames: [], files: [] });
        (wrapper as any).instance().onUpload();

        expect(mockUpload).not.toHaveBeenCalled();
    });

    test('Test that upload deals with a failure correctly', () => {
        const mockUpload = jest.fn(() => Promise.reject(Error('testError')));
        props.upload = mockUpload;
        const wrapper = shallow(<FileUpload {...props} />);

        wrapper.setState({ fileNames: testfiles.map(file => file.name), files: testfiles });
        expect.assertions(6);
        return (wrapper as any).instance().onUpload().then(
            () => {
                expect(wrapper.state('fileStatusList')).toEqual([
                    { fileName: 'testfile1', uploadSuccessful: false },
                    { fileName: 'testfile2', uploadSuccessful: false },
                ]);
                expect(wrapper.state('fileNames')).toEqual(['testfile1', 'testfile2']);
                expect(wrapper.state('isUploadDisabled')).toBeFalsy();
                expect(wrapper.state('isFileSelected')).toBeFalsy();
                expect(wrapper.state('isUploadComplete')).toBeFalsy();
                expect(wrapper.state('error')).toEqual('testError');
            },
        );
    });

});
