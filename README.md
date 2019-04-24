# react-file-upload
A generic yet configurable react component for a functioning file upload.

Props
### multiple: `boolean`
This file upload component can accept single or multiple file uploads.
If multiple is `true`, then multiple files will be able to be uploaded at a time.
If multiple is `false`, then only one file can be uploaded at a time.

### upload: `Function`
Function that performs the file upload.
#### Parameters
##### flowKey
This is a Boomi Flow identifier that we use this to extract tenantId, authenticationToken and stateId.
##### _
Unused parameter
##### onProgress
Callback to recieve progress event info
##### files
List of files to be uploaded
##### request
Request payload data
#### Returns
An asynchronous HTTP (Ajax) request

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

### getComponentModel: `getComponentModelFunction`
Function that returns the model of the file upload component.
#### Parameters
##### id
The id of this component.
##### flowKey
This is a Boomi Flow identifier that we use this to extract tenantId, authenticationToken and stateId.
#### Returns
The "model" for this component, a set of options for how this component should render.
*NOTE model definition will be written at a later date*

### getComponentState: `getComponentStateFunction`
Function that returns the state of the file upload component.
#### Parameters
##### id
The id of this component.
##### flowKey
This is a Boomi Flow identifier that we use this to extract tenantId, authenticationToken and stateId.
#### Returns
The "state" for this component, a set of options for how this component should render.
*NOTE state definition will be written at a later date*

### setComponentState: `Function`
Function that updates the state of the file upload component.
#### Parameters
##### id
The id of this component.
##### value
The value and objectData that the component is storing.
##### flowKey
This is a Boomi Flow identifier that we use this to extract tenantId, authenticationToken and stateId.
##### push
An option to syncronize this component state to collaboration servers

### getFileUploadMessage (optional, default = model.hintValue): `Function`
Function that returns the file upload message.
#### Parameters
##### flowKey
This is a Boomi Flow identifier that we use this to extract tenantId, authenticationToken and stateId.
#### Returns
A string of text to be shown on the drop zone to prompt users to interact with the drop zone.

### loggingFunction (optional, default = null): `Function`
#### Parameters
A string of text of what to log.

### handleEvent (optional, default = null): `Function`
Function that is ran when a file is uploaded, and syncs with collaboration servers to update all users viewing the file upload component.