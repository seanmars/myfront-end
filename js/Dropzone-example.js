Dropzone.options.uploadZone = {
  acceptedFiles: 'image/*',
  previewsContainer: '#dz-preview',
  previewTemplate: $('#dz-preview').html(),
  autoProcessQueue: true,

  maxImageWidth: 50,
  maxImageHeight: 50,
  maxFileSize: 102400,

  init: function () {
      this.on('complete', function (file) {
          this.removeFile(file);
      });

      this.on('success', function (file, response) {
        // file informaiton
        // response from server
      });

      this.on('thumbnail', function (file) {
          if (file.width > this.options.maxImageWidth ||
              file.height > this.options.maxImageHeight) {
              file.rejectDimensions();
          }
          else if (file.size > this.options.maxFileSize) {
              file.rejectSize();
          }
          else {
              file.acceptDimensions();
          }
      });
  },
  accept: function (file, done) {
      file.acceptDimensions = done;
      file.rejectDimensions = function () {
          // do something
      };
      file.rejectSize = function () {
        // do something
      };
  }
};

$("button#uploadZone").dropzone({
    url: '/url/to/upload'
});
