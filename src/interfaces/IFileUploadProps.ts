import IComponentProps from './IComponentProps';

interface ModelDescription {
    fileDataRequest: string;
    attributes: string;
    isAutoUpload: {
        isAutoUpload: boolean;
    };
    label: string;
    isRequired: boolean;
    validationMessage?: string;
    isVisible: boolean;
    isValid?: boolean;
    // backup in case multiple isn't defined
    isMultiSelect: boolean;
    hintValue: string;
}

interface getComponentModelFunction {
    (id: string, flowKey: string): ModelDescription;
}

interface IFileStatus {
    fileName: string;
    uploadSuccessful: boolean;
}

interface IFileUploadState {
    fileStatusList?: IFileStatus[];
    isUploadDisabled?: boolean;
    isFileSelected?: boolean;
    isProgressVisible?: boolean;
    isUploadComplete?: boolean;
    fileNames?: string[];
    progress?: number;
    error?: any;
    files?: any;
}

interface getComponentStateFunction {
    (id: string, flowKey: string): IFileUploadState;
}

interface IFileUploadProps extends IComponentProps {
    multiple: boolean;
    upload: Function;
    uploadCaption?: string;
    uploadComplete?: Function;
    smallInputs?: boolean;
    isUploadVisible?: boolean;
    getComponentModel: getComponentModelFunction;
    getComponentState: getComponentStateFunction;
    setComponentState: Function;
    getFileUploadMessage: Function;
    loggingFunction?: Function;
    handleEvent?: Function;
}

export default IFileUploadProps;
