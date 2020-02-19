// The URL interface provides createObjectURL() static method to generate a blob URL (starts with blob: as its schema) that uniquely identify the object in the browser:
const blobUrl = URL.createObjectURL(blob);

// Once you have the blob URL, pass it to revokeObjectURL() static method to remove it from the memory:
URL.revokeObjectURL(blobUrl);
