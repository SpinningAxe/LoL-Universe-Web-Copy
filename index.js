/**
 *
 * @param {Function} callback
 */
function createPassword(callback, validate) {
  let password = prompt("Vui lòng nhập pass");
  //processing khác xác thực hệ thống, kiểm tra passs có đsung format không
  if (validate(password)) {
    return callback(password);
  } else {
    throw Error("Không đúng format password");
  }
}
/**
 * @param {string} pass
 */
function validate(pass) {
  let result = false;
  //regex check pass
  let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (pass.match(regex)) {
    result = true;
  }
  return result;
}

let password = createPassword(function (pw) {
  return pw;
}, validate);
console.log(`Password nhập là ${password}`);
