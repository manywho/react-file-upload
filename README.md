# react-file-upload
A generic yet configurable react component for a functioning file upload

Props
### multiple: `boolean`
This file upload component can accept single or multiple file uploads.
If multiple is `true`, then multiple files will be able to be uploaded at a time.
If multiple is `false`, then only one file can be uploaded at a time.

### upload: `Function`
Function that performs the file upload

### uploadCaption (optional, default = "Upload"): `string`
Caption on the upload button

### uploadComplete (optional, default = null): `Function`
Function to be called when an upload is completed
#### Parameters
It is passed the response from the successful upload

### smallInputs (optional, default = false): `boolean`
If this is set to true, then the upload button will be set to small

### isUploadVisible (optional, default = true): `boolean`
If this is true, the upload button will be visible.
If this is false, the upload button will be hidden.

### completedUpload: `Function`
Function to be called when an upload completes

### loggingFunction (optional, default = null): `Function`
#### Parameters
A string of text of what to log

### handleEvent (optional, default = null): `Function`
Function that is ran when a file is uploaded, and syncs with collaboration servers to update all users viewing the file upload component

### isAutoUpload: boolean
If the file/s should be instantly uploaded after they are selected.
If set to false, then an "Upload" button is needed to be pressed to confirm upload.

### label: string
The text for the label on the upload component

### isRequired: boolean
If set to true, a red required star wil appear on the component

### validationMessage: string
A message to help users input correct information, only shown when there are no errors

### isVisible: boolean
Whether the enitre component is visible or not

### isValid: boolean
If the the objectData this component is holding is valid or not

### hintValue (optional, default = "Drag 'n' drop some files here, or click to select files"): string
A basic string of text to be shown on the drop zone to prompt users to interact with the drop zone

### helpInfo: string
A permanent help message shown at the bottom of the component

### disabled: boolean
If the component is set to being disabled, then dropping files onto the drop zone and clicking the upload button will not function