var del = function (obj) {
  var ret;
  if (!obj.isReadOnly) {
    if (obj.isFolder) {
      ret = deleteFolder(obj);
    } else if (obj.isFile) {
      ret = deleteFile(obj);
    }
  }
  return ret;
}

var del = function (obj) {
  if (obj.isReadOnly) {
    return;
  }
  if (obj.isFile) {
    return deleteFile();
  }
  if (obj.isFolder) {
    return deleteFolder();
  }
}