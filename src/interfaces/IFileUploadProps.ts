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
    files?: File[];
}

export interface IFileUploadProps {
    id: string;
    className: string;
    multiple: boolean;
    upload: (files: File[], onProgress: ({ lengthComputable, loaded, total }) => void) => Promise<any>;
    uploadCaption?: string;
    uploadComplete?: (response: any) => void;
    smallInputs?: boolean;
    isUploadVisible?: boolean;
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
