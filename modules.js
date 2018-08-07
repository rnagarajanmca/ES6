function modules_demo(){
    console.log("Hello from module")
}
function module2_demo(){
    console.log("Hello from module2")
}
export {modules_demo,module2_demo}
// export default modules_demo //Use this if you are exporting single module 