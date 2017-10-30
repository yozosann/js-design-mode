var Folder =  function(name) {
  this.name = name;
  this.files = [];
};

Folder.prototype.add = function(file) {
  this.files.push(file);
}

Folder.prototype.scan = function() {
  console.log('开始扫描文件夹：' + this.name);
  for(var i = 0, file; file = this.files[i++];) {
    file.scan();
  }
}

var File = function(name){
  this.name = name;
}

File.prototype.add = function() {
  throw new Error('文件下面不能再添加文件');
}

File.prototype.scan = function() {
  console.log('开始扫描文件：' + this.name);
}

var folder = new Folder('学习资料');
var folder1 = new Folder('JS');
var folder2 = new Folder('JQ');

var file = new File('学习资料');
var file1 = new File('学习资料1');
var file2 = new File('学习资料2');
var file3 = new File('学习资料3');

folder.add(file);
folder.add(file1);

folder1.add(file2);
folder2.add(file3);

var rootFolder = new Folder('root');

rootFolder.add(folder);
rootFolder.add(folder1);
rootFolder.add(folder2);

rootFolder.scan();


