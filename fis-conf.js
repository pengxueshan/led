// default settings. fis3 release

// Global start
fis.match('*.{js,css}', {
    useHash: true
  });
  
  fis.match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css',
    preprocessor: fis.plugin('autoprefixer', {
      "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
      "cascade": true
    })
  })
  
  fis.match('::image', {
    useHash: true
  });
  
  fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
  });
  
  fis.match('*.css', {
    optimizer: fis.plugin('clean-css')
  });
  
  fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
  });
  
  // Global end
  
  // default media is `dev`
  fis.media('dev')
    .match('*', {
      useHash: false,
      optimizer: null
    });
  
  // extends GLOBAL config
  fis.media('production');