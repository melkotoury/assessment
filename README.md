Digital Natives Job Excercises

# Codebase
* Vanilla Ecmascript 6
* Vanilla Ecmascript 5

#Compatibility

* Internet Explorer : <span style="color:red">Fail</span> , use **[babel](https://babeljs.io/)** or **[traceur](https://github.com/google/traceur-compiler)** transpilers to compile _ES 6_ into _ES 5_ code as will be shown down in the documentation
* Microsoft Edge    : <span style="color:green">Pass</span> 
* Google Chrome     : <span style="color:green">Pass</span>
* Mozilla Firefox   : <span style="color:green">Pass</span>

#Testing Tools
* Mocha and Chai
* If you choose to use the source js/app.js file , then do the following:
* Don't use the normal ~~mocha~~ as it's not compatible with _ES 6_ 
* Instead use **mocha-traceur** , work fine with _ES 6_
* If You choose to use the generated/compiled _ES5_ version , then you can use **mocha**
 
#Setup
* To Run the app:
Make Sure You're on the same directory as package.json , type the following
```shell
npm install
```

You may do either of these steps (A,B)

_**A:**_ Go to your index.html , change the include script from 

```javascript
<script src="app/app.js"></script>
```

to
```javascript
<script src="js/app.js"></script>
```

the code will work fine on most of the browsers, but since this is the ES6/ES2015 version , here is the browser compatibility

* Internet Explorer : <span style="color:red">Fail</span> , use **[babel](https://babeljs.io/)** or **[traceur](https://github.com/google/traceur-compiler)** transpilers to compile _ES 6_ into _ES 5_ code
* Microsoft Edge    : <span style="color:green">Pass</span> 
* Google Chrome     : <span style="color:green">Pass</span>
* Mozilla Firefox   : <span style="color:green">Pass</span>

_**B:**_ If you need to get it working on all browsers you may need to use babel
Since the package.json already include the build command which will run babel compiler then we are ready to use _npm_ build command

```shell
npm run build
```

now a new folder **"app"** will be generated in the project root folder 
the new **app.js** inside the app directory would be the generated _ES5_ version

and make sure it's included in the html together with the polyfill as follows

```javascript
<script src="node_modules/babel-cli/node_modules/babel-polyfill/dist/polyfill.js"> </script>
<script src="app/app.js"></script>
```

In this scenario since you'd be using the es5 compiled version , here is the browser compatibility
                                                              
                                                              
* Internet Explorer : <span style="color:green">Pass</span>  
* Microsoft Edge    : <span style="color:green">Pass</span> 
* Google Chrome     : <span style="color:green">Pass</span>
* Mozilla Firefox   : <span style="color:green">Pass</span>

#Testing

Assuming that the test file you created is inside the test directory , use _**mocha**_ as follows

```shell
mocha test/indexspec.js  --compilers js:mocha-traceur
```

If you choosed to include the compiled _ES5_ version which will be generated in the app/app.js

You can use the normal mocha command
```shell
mocha test/indexspec.js  
```

#Testing Results

[!['Result Image Appears here](js-numerals/test_snapshot.PNG)]