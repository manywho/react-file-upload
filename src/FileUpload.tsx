﻿import * as React from 'react';
import Dropzone, { DropzoneProps } from 'react-dropzone';
import { IFileUploadProps, IFileUploadState, IFileStatus } from './interfaces/IFileUploadProps';

class FileUpload extends React.Component<IFileUploadProps, IFileUploadState> {

    static defaultProps = {
        hintValue: 'Drag and drop some files here, or click to select files',
        uploadCaption: 'Upload',
        browseCaption: 'Browse',
        smallInputs: false,
        isUploadVisible: true,
        uploadComplete: null,
        loggingFunction: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            fileStatusList: [],
            isUploadDisabled: false,
            isFileSelected: false,
            isProgressVisible: false,
            isUploadComplete: false,
            fileNames: [],
            error: null,
            files: [],
        };
    }

    onUpload = () => {
        if (this.state.fileNames.length > 0) {
            this.setState({
                isUploadDisabled: true,
                isProgressVisible: true,
                progress: 0,
                error: null,
            });

            const files = [...this.state.files];
            return this.props.upload(
                files,
                ({ lengthComputable, loaded, total }) => {
                    if (lengthComputable) {
                        this.setState({
                            progress: parseInt((loaded / total * 100).toString(), 10),
                        });
                    }
                },
            ).then((response) => {
                const newFileStatuses: IFileStatus[] = this.state.fileNames.map(
                    fileName => ({ fileName, uploadSuccessful: true }),
                );

                const appendedFileStatusList = [...this.state.fileStatusList, ...newFileStatuses];

                this.setState({
                    fileStatusList: appendedFileStatusList,
                    isUploadDisabled: false,
                    isFileSelected: false,
                    isUploadComplete: true,
                    fileNames: [],
                    error: null,
                });

                setTimeout(
                    () => {
                        this.setState({
                            isUploadComplete: false, isProgressVisible: false, progress: 100,
                        });
                    },
                    2000,
                );

                if (this.props.uploadComplete) {
                    this.props.uploadComplete(response);
                }
            }).catch((response) => {
                const newFileStatuses: IFileStatus[] = this.state.fileNames.map(
                    fileName => ({ fileName, uploadSuccessful: false }),
                );

                const appendedFileStatusList = [...this.state.fileStatusList, ...newFileStatuses];

                this.setState({
                    fileStatusList: appendedFileStatusList,
                    isUploadDisabled: false,
                    isProgressVisible: false,
                    progress: 0,
                    error: response.statusText ? response.statusText :
                        response.message ? response.message :
                            response.toString(),
                });
            });
        }
        return null;
    }

    onFileSelected = (files: File[]) => {
        if (!this.props.disabled) {
            this.setState({
                files,
                fileNames: Array.prototype.slice.call(files).map(file => file.name),
                isFileSelected: true,
            });

            if (this.props.isAutoUpload) {
                setTimeout(this.onUpload.bind(this));
            }
        }
    }

    onDrop = (files: File[]) => {
        if (!this.props.disabled) {
            this.onFileSelected(files);
        }
    }

    /**
    * Check if a value is `null` or `undefined`
    */
    isNullOrUndefined = (value: any): boolean => typeof value === 'undefined' || value === null;

    /**
    * Check if a string is `null` or only contains whitespace
    */
    isNullOrWhitespace = (value: string): boolean => {
        if (this.isNullOrUndefined(value)) {
            return true;
        }

        return value.replace(/\s/g, '').length < 1;
    };

    render() {
        const progress = `${this.state.progress || 0}%`;

        let uploadClassName = 'btn btn-primary';
        let inputClassName = 'form-control filenames';
        let progressClassName = 'progress-bar';
        let componentClassName = 'file-upload';

        if (this.props.smallInputs) {
            uploadClassName += ' btn-sm';
            inputClassName += ' input-sm';
        }

        if (!this.props.isUploadVisible) {
            uploadClassName += ' hidden';
        }

        if (this.state.isUploadComplete) {
            progressClassName += ' progress-bar-success';
        }

        const label = (
            <label>
                {this.props.label}
                {
                    this.props.isRequired ?
                        <span className="input-required"> *</span> :
                        null
                }
            </label>
        );

        let validationMessage = (
            <span className="help-block">
                {
                    this.props.validationMessage
                }
            </span>
        );

        const helpInfo = <span className="help-block">{this.props.helpInfo}</span>;

        if (this.props.className) {
            componentClassName += ` ${this.props.className}`;
        }

        if (this.props.isVisible === false) {
            componentClassName += ' hidden';
        }

        if (this.props.isValid === false) {
            componentClassName += ' has-error';
        }

        if (this.state.error) {
            validationMessage = <span className="has-error"><span className="help-block">{this.state.error}</span></span>;
        }

        const dropzoneProps: DropzoneProps = {
            multiple: this.props.multiple,
            className: 'dropzone',
        };

        const buttonProps: any = {
            className: uploadClassName,
            disabled:
                this.state.isUploadDisabled ||
                !this.state.isFileSelected ||
                this.props.disabled,
        };

        if (!this.props.disabled) {
            dropzoneProps.onDrop = this.onDrop;
            buttonProps.onClick = this.onUpload;
        }

        const hintMessage = this.props.hintValue;

        return (
            <div className={componentClassName} id={this.props.id}>
                <div className="clearfix">
                    {label}
                    <Dropzone {...dropzoneProps}>
                        <div>{ hintMessage }</div>
                    </Dropzone>
                    <div className={`input-group ${(this.props.isAutoUpload) ? 'hidden' : ''}`}>
                        <input
                            type="text"
                            className={inputClassName}
                            readOnly
                            value={this.state.fileNames.join(' ')}
                        />
                        <span className="input-group-btn">
                            <button {...buttonProps}>{this.props.uploadCaption}</button>
                        </span>
                    </div>
                </div>
                <div className={`progress files-progress ${((this.state.isProgressVisible) ? '' : 'hidden')}`}>
                    <div className={progressClassName} style={{ width: progress }} />
                </div>
                {validationMessage}
                <ul className="file-statuses">
                    {
                        this.state.fileStatusList.map((fileStatus, index) => (
                            <li key={index} className={fileStatus.uploadSuccessful ? 'has-success' : 'has-error'}>
                                <span className="help-block">
                                    <span className={`glyphicon glyphicon-${fileStatus.uploadSuccessful ? 'ok' : 'remove'}`} />
                                    { fileStatus.fileName }
                                </span>
                            </li>
                        ))
                    }
                </ul>
                {helpInfo}
            </div>
        );
    }

}

export default FileUpload;
