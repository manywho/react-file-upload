export interface IFileStatus {
    fileName: string;
    uploadSuccessful: boolean;
}

export interface IFileUploadState {
    fileStatusList?: IFileStatus[];
    isUploadDisabled?: boolean;
    isFileSelected?: boolean;
    isProgressVisible?: boolean;
    isUploadComplete?: boolean;
    fileNames?: string[];
    progress?: number;
    error?: any;
    files?: any;
    validationMessage?: string;
    isValid?: boolean;
}

export interface IFileUploadProps {
    id: string;
    multiple: boolean;
    upload: Function;
    uploadCaption?: string;
    uploadComplete?: Function;
    smallInputs?: boolean;
    isUploadVisible?: boolean;
    completedUpload: Function;
    loggingFunction?: Function;
    handleEvent?: Function;
    isAutoUpload: boolean;
    label: string;
    isRequired: boolean;
    validationMessage?: string;
    isVisible: boolean;
    isValid?: boolean;
    hintValue?: string;
    helpInfo: string;
    disabled: boolean;
}

export default IFileUploadProps;
