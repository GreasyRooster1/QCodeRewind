/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/exec/index.js":
/*!***************************!*\
  !*** ./src/exec/index.js ***!
  \***************************/
/***/ (() => {

eval("\nlet parent = null;\n\nconst acceptedFunctions = [\n    \"mousePressed\",\n    \"mouseReleased\",\n    \"mouseClicked\",\n    \"mouseMoved\",\n    \"mouseDragged\",\n    \"doubleClicked\",\n    \"mouseWheel\",\n\n    \"keyPressed\",\n    \"keyReleased\",\n    \"keyTyped\",\n\n    \"touchStarted\",\n    \"touchEnded\",\n]\n\nconst oldLog = console.log;\nconst oldWarn = console.warn;\nconst oldErr = console.error;\n\nconsole.log = function (...args) {\n    logMessage(\"log\",args);\n}\n\nconsole.warn = function (...args) {\n    logMessage(\"warn\",args);\n}\n\nconsole.error = function (...args) {\n    logMessage(\"error\",args);\n}\n\n//log errors\nwindow.onerror = function(error) {\n    logMessage(\"error\",error);\n}\n\nfunction logMessage(type,...args){\n    if (parent === null) {\n        return;\n    }\n    let log = {type:type,message:args.join(\" \")};\n    parent.postMessage(JSON.stringify(log));\n}\n\n\nwindow.addEventListener(\"message\", ({ data, source }) => {\n    if (parent === null) {\n        parent = source;\n    }\n\n    runJs(data);\n});\n\ndocument.addEventListener('contextmenu', event => {\n    event.preventDefault();\n});\n\n\n\nfunction runJs(js){\n    //clear dangerous objects and run code\n    eval(js);\n\n    let eventFunctions = [];\n\n    for (let acceptedFunc of acceptedFunctions){\n        let funcDef;\n        try {\n            funcDef = eval(acceptedFunc);\n        }catch(e){\n            funcDef = undefined;\n        }\n\n        if (funcDef !== undefined) {\n            eventFunctions.push(funcDef);\n        }\n    }\n\n    if(draw===undefined||setup===undefined){\n        return;\n    }\n\n    startP5(draw,setup,eventFunctions);\n}\n\n\n//helpers\n\n\nfunction startP5(drawArg,setupArg,otherFunctions) {\n    window.setup = function(){\n        createCanvas(500,500);\n        createCanvas = function (){\n            console.error(\"createCanvas is disabled\");\n        }\n        document.getElementById(\"defaultCanvas0\").style.width = \"100vmin\";\n        document.getElementById(\"defaultCanvas0\").style.height = \"100vmin\";\n        setupArg()\n    };\n\n    for(let func of otherFunctions){\n        if(acceptedFunctions.includes(func.name)) {\n            window[func.name] = func;\n        }\n    }\n\n    window.draw = drawArg;\n\n    new p5();\n}\n\nfunction __canvasTest(){\n    background(0);\n    stroke(255);\n\n    for (let i = 0; i < 500; i+=10) {\n        let timeRatio = (frameCount % 500-i) / 490;\n        let bRat = i/500;\n\n        fill(timeRatio * 255, 0, bRat*255);\n        rect(timeRatio * 490, 0, 10, 10);\n\n        fill(0, timeRatio * 255, bRat*255);\n        rect(0, timeRatio * 490, 10, 10);\n    }\n\n    fill(255);\n\n    ellipse(mouseX,mouseY,10,10);\n\n    textAlign(CENTER);\n    text(\"Welcome back\",250,250);\n}\n\n\n//# sourceURL=webpack:///./src/exec/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/exec/index.js"]();
/******/ 	
/******/ })()
;