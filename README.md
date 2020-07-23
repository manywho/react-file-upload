# @boomi/react-file-upload

[![npm (scoped)](https://img.shields.io/npm/v/@boomi/react-file-upload.svg?style=flat-square)](https://www.npmjs.com/package/@boomi/react-file-upload)

> A generic yet configurable react component for a functioning file upload.

## Getting Started
### Installation

```sh
npm install --save @boomi/react-file-upload
```

### Usage

```js
import FileUpload from '@boomi/react-file-upload';
```

#### Minimum required setup

```js
<FileUpload />
```

## Contributing

To contribute to this project you can submit a pull request.

### Local development setup

* Clone this repository
* `npm install`
* `npm link`
* `npm start`

Then inside your own local project:
* `npm link @boomi/react-file-upload`
* And follow usage instructions described above

#### Running Jest tests

```sh
npm run test
```

## Component props
### id: `string`
This is a unique identifier for this component.

### className: `string`
Classes that will be applied to the upper-most div on the component.

### multiple: `boolean`
This file upload component can accept single or multiple file uploads.
If multiple is `true`, then multiple files will be able to be uploaded at a time.
If multiple is `false`, then only one file can be uploaded at a time.

### upload: `Function`
Function that performs the file upload.

### uploadCaption (optional, default = "Upload"): `string`
Caption on the upload button.

### uploadComplete (optional, default = null): `Function`
Function to be called when an upload is completed.
This function is given the response from a successful upload made using the provided upload function.

### smallInputs (optional, default = false): `boolean`
If this is set to `true`, then the upload button will be given a css class to render as a bootstrap small button.
(NOTE: this component doesn't come with bootstrap, you will have to set it up manually)

### isUploadVisible (optional, default = true): `boolean`
If this is `true`, the upload button will be visible.
If this is `false`, the upload button will be hidden.

### isAutoUpload: `boolean`
If the file/s should be instantly uploaded after they are selected.
If set to `false`, then an "Upload" button is needed to be pressed to confirm upload.

### label: `string`
The text for the label on the upload component.

### isRequired: `boolean`
If set to `true`, a red required star will appear on the component.

### validationMessage: `string`
A message to help users input correct information, only shown when there are no errors.

### isVisible: `boolean`
Whether the entire component is visible or not.

### isValid: `boolean`
If this component should highlight red to represent a validation error.

### hintValue (optional, default = "Drag 'n' drop some files here, or click to select files"): `string`
A basic string of text to be shown on the drop zone to prompt users to interact with the drop zone.

### helpInfo: `string`
A permanent help message shown at the bottom of the component.

### disabled: `boolean`
If the component is set to being disabled, then dropping files onto the drop zone and clicking the upload button will not function.